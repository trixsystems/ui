<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  side?: 'left' | 'right'
  initialWidth?: number
  minWidth?: number
  maxWidth?: number
  collapsible?: boolean
}>(), {
  side: 'left',
  initialWidth: 280,
  minWidth: 160,
  maxWidth: 600,
  collapsible: true,
})

const emit = defineEmits<{
  collapse: []
  expand: []
  resize: [width: number]
}>()

const width = ref(props.initialWidth)
const collapsed = ref(false)
const isDragging = ref(false)
const prevWidth = ref(props.initialWidth)

function startDrag(e: MouseEvent) {
  isDragging.value = true
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
  e.preventDefault()
}

function onDrag(e: MouseEvent) {
  if (!isDragging.value) return
  const delta = props.side === 'left' ? e.movementX : -e.movementX
  const next = Math.max(props.minWidth, Math.min(props.maxWidth, width.value + delta))
  width.value = next
  emit('resize', next)
}

function stopDrag() {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

function toggle() {
  if (collapsed.value) {
    collapsed.value = false
    width.value = prevWidth.value
    emit('expand')
  } else {
    prevWidth.value = width.value
    collapsed.value = true
    emit('collapse')
  }
}

onBeforeUnmount(stopDrag)
</script>

<template>
  <div
    class="trx-rsidebar"
    :class="[`trx-rsidebar--${side}`, { 'trx-rsidebar--collapsed': collapsed, 'trx-rsidebar--dragging': isDragging }]"
    :style="{ width: collapsed ? '0px' : width + 'px' }"
  >
    <!-- Resize handle -->
    <div
      class="trx-rsidebar__handle"
      :class="`trx-rsidebar__handle--${side}`"
      @mousedown="startDrag"
    >
      <button
        v-if="collapsible"
        class="trx-rsidebar__toggle"
        :title="collapsed ? 'Expandir' : 'Recolher'"
        @mousedown.stop
        @click="toggle"
      >
        <i :class="side === 'left'
          ? (collapsed ? 'pi pi-chevron-right' : 'pi pi-chevron-left')
          : (collapsed ? 'pi pi-chevron-left' : 'pi pi-chevron-right')"></i>
      </button>
    </div>
    <!-- Content -->
    <div class="trx-rsidebar__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.trx-rsidebar {
  position: relative;
  display: flex;
  height: 100%;
  transition: width 0.2s ease;
  flex-shrink: 0;
  overflow: hidden;
  background: var(--trx-bg-card);
  border-color: var(--trx-border-color);
}
.trx-rsidebar--left { border-right: 1px solid var(--trx-border-color); flex-direction: row; }
.trx-rsidebar--right { border-left: 1px solid var(--trx-border-color); flex-direction: row-reverse; }
.trx-rsidebar--dragging { transition: none; }
.trx-rsidebar__content { flex: 1; overflow: auto; min-width: 0; }
.trx-rsidebar__handle {
  position: absolute; top: 0; bottom: 0;
  width: 4px; display: flex; align-items: center; justify-content: center;
  background: transparent; cursor: col-resize; z-index: 10;
  transition: background 0.15s;
}
.trx-rsidebar__handle--left { right: 0; }
.trx-rsidebar__handle--right { left: 0; }
.trx-rsidebar__handle:hover { background: color-mix(in srgb, var(--trx-accent-color) 30%, transparent); }
.trx-rsidebar--dragging .trx-rsidebar__handle { background: var(--trx-accent-color); }
.trx-rsidebar__toggle {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 20px; height: 32px; border-radius: 4px;
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  color: var(--trx-text-secondary); cursor: pointer; font-size: 0.65rem;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.12); transition: background 0.15s, color 0.15s;
}
.trx-rsidebar__handle--left .trx-rsidebar__toggle { right: -10px; }
.trx-rsidebar__handle--right .trx-rsidebar__toggle { left: -10px; }
.trx-rsidebar__toggle:hover { background: var(--trx-accent-color); color: white; border-color: var(--trx-accent-color); }
</style>
