<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  direction?: 'horizontal' | 'vertical'
  initialSize?: number // percentage of first pane
  minSize?: number
  maxSize?: number
}>(), {
  direction: 'horizontal',
  initialSize: 50,
  minSize: 15,
  maxSize: 85,
})

const size = ref(props.initialSize)
const isDragging = ref(false)
const container = ref<HTMLElement>()

function startDrag(e: MouseEvent | TouchEvent) {
  isDragging.value = true
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('touchmove', onDrag)
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchend', stopDrag)
  e.preventDefault()
}

function onDrag(e: MouseEvent | TouchEvent) {
  if (!isDragging.value || !container.value) return
  const rect = container.value.getBoundingClientRect()
  const clientPos = e instanceof MouseEvent ? (props.direction === 'horizontal' ? e.clientX : e.clientY) : (props.direction === 'horizontal' ? e.touches[0].clientX : e.touches[0].clientY)
  const total = props.direction === 'horizontal' ? rect.width : rect.height
  const offset = clientPos - (props.direction === 'horizontal' ? rect.left : rect.top)
  const pct = Math.round((offset / total) * 100)
  size.value = Math.max(props.minSize, Math.min(props.maxSize, pct))
}

function stopDrag() {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchend', stopDrag)
}

onBeforeUnmount(stopDrag)
</script>

<template>
  <div
    ref="container"
    class="trx-split"
    :class="[`trx-split--${direction}`, { 'trx-split--dragging': isDragging }]"
  >
    <div
      class="trx-split__pane trx-split__pane--first"
      :style="direction === 'horizontal' ? { width: size + '%' } : { height: size + '%' }"
    >
      <slot name="first" />
    </div>
    <div
      class="trx-split__handle"
      @mousedown="startDrag"
      @touchstart="startDrag"
    >
      <div class="trx-split__handle-bar"></div>
    </div>
    <div class="trx-split__pane trx-split__pane--second">
      <slot name="second" />
    </div>
  </div>
</template>

<style scoped>
.trx-split { display: flex; width: 100%; height: 100%; overflow: hidden; }
.trx-split--vertical { flex-direction: column; }
.trx-split--dragging { user-select: none; }
.trx-split__pane { overflow: auto; }
.trx-split--horizontal .trx-split__pane--second { flex: 1; }
.trx-split--vertical .trx-split__pane--second { flex: 1; }
.trx-split__handle {
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  background: var(--trx-border-color); transition: background 0.15s;
  cursor: col-resize;
}
.trx-split--vertical .trx-split__handle { cursor: row-resize; height: 4px; width: 100%; }
.trx-split--horizontal .trx-split__handle { width: 4px; height: 100%; }
.trx-split__handle:hover, .trx-split--dragging .trx-split__handle { background: var(--trx-accent-color); }
.trx-split__handle-bar {
  border-radius: 2px; background: var(--trx-bg-card);
}
.trx-split--horizontal .trx-split__handle-bar { width: 2px; height: 24px; }
.trx-split--vertical .trx-split__handle-bar { height: 2px; width: 24px; }
</style>
