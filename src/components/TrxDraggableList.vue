<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  items: { id: string; [key: string]: unknown }[]
  handle?: boolean
}>()

const emit = defineEmits<{
  'update:items': [items: typeof props.items]
  reorder: [from: number, to: number]
}>()

const draggingIdx = ref<number | null>(null)
const overIdx = ref<number | null>(null)

function onDragStart(i: number) { draggingIdx.value = i }
function onDragOver(e: DragEvent, i: number) { e.preventDefault(); overIdx.value = i }

function onDrop(targetIdx: number) {
  if (draggingIdx.value === null || draggingIdx.value === targetIdx) { reset(); return }
  const updated = [...props.items]
  const [moved] = updated.splice(draggingIdx.value, 1)
  updated.splice(targetIdx, 0, moved)
  emit('update:items', updated)
  emit('reorder', draggingIdx.value, targetIdx)
  reset()
}

function reset() { draggingIdx.value = null; overIdx.value = null }
</script>

<template>
  <div class="trx-drag-list">
    <div
      v-for="(item, i) in items"
      :key="item.id"
      class="trx-drag-list__item"
      :class="{
        'trx-drag-list__item--dragging': draggingIdx === i,
        'trx-drag-list__item--over': overIdx === i && draggingIdx !== i,
      }"
      :draggable="!handle"
      @dragstart="onDragStart(i)"
      @dragover="onDragOver($event, i)"
      @drop="onDrop(i)"
      @dragend="reset"
    >
      <div
        v-if="handle"
        class="trx-drag-list__handle"
        draggable="true"
        @dragstart="onDragStart(i)"
      >
        <i class="pi pi-bars"></i>
      </div>
      <div class="trx-drag-list__content">
        <slot :item="item" :index="i" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-drag-list { display: flex; flex-direction: column; }
.trx-drag-list__item {
  display: flex; align-items: center; gap: 0.5rem;
  border-bottom: 1px solid var(--trx-border-color); background: var(--trx-bg-card);
  transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
}
.trx-drag-list__item:last-child { border-bottom: none; }
.trx-drag-list__item--dragging { opacity: 0.4; }
.trx-drag-list__item--over { background: color-mix(in srgb, var(--trx-accent-color) 6%, transparent); border-color: var(--trx-accent-color); }
.trx-drag-list__handle { padding: 0.75rem 0.5rem; cursor: grab; color: var(--trx-text-secondary); font-size: 0.85rem; flex-shrink: 0; }
.trx-drag-list__handle:active { cursor: grabbing; }
.trx-drag-list__content { flex: 1; }
</style>
