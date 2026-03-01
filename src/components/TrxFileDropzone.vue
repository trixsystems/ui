<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  accept?: string
  multiple?: boolean
  maxSize?: number
  disabled?: boolean
  label?: string
  hint?: string
}>(), {
  label: 'Arraste arquivos aqui ou clique para selecionar',
  hint: 'Todos os arquivos são aceitos',
})

const emit = defineEmits<{
  files: [files: File[]]
  error: [message: string]
}>()

const dragging = ref(false)
const fileInput = ref<HTMLInputElement>()

function onDragOver(e: DragEvent) {
  e.preventDefault()
  if (!props.disabled) dragging.value = true
}

function onDragLeave() {
  dragging.value = false
}

function onDrop(e: DragEvent) {
  e.preventDefault()
  dragging.value = false
  if (props.disabled) return
  const files = Array.from(e.dataTransfer?.files ?? [])
  processFiles(files)
}

function onFileChange(e: Event) {
  const files = Array.from((e.target as HTMLInputElement).files ?? [])
  processFiles(files)
  if (fileInput.value) fileInput.value.value = ''
}

function processFiles(files: File[]) {
  if (props.maxSize) {
    const oversized = files.filter(f => f.size > props.maxSize! * 1024 * 1024)
    if (oversized.length) {
      emit('error', `Arquivo(s) excedem ${props.maxSize}MB: ${oversized.map(f => f.name).join(', ')}`)
      return
    }
  }
  if (!props.multiple && files.length > 1) files = [files[0]]
  emit('files', files)
}

function openPicker() {
  if (!props.disabled) fileInput.value?.click()
}
</script>

<template>
  <div
    class="trx-dropzone"
    :class="{
      'trx-dropzone--dragging': dragging,
      'trx-dropzone--disabled': disabled,
    }"
    @click="openPicker"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
  >
    <input
      ref="fileInput"
      type="file"
      class="trx-dropzone__input"
      :accept="accept"
      :multiple="multiple"
      @change="onFileChange"
    />
    <i class="pi pi-upload trx-dropzone__icon"></i>
    <p class="trx-dropzone__label">{{ label }}</p>
    <p v-if="hint" class="trx-dropzone__hint">{{ hint }}</p>
    <p v-if="maxSize" class="trx-dropzone__hint">Máx. {{ maxSize }}MB por arquivo</p>
  </div>
</template>

<style scoped>
.trx-dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
  border: 2px dashed var(--trx-border-color);
  border-radius: 12px;
  background: var(--trx-bg-secondary);
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}

.trx-dropzone:hover:not(.trx-dropzone--disabled) {
  border-color: var(--trx-accent-color);
  background: color-mix(in srgb, var(--trx-accent-color) 5%, transparent);
}

.trx-dropzone--dragging {
  border-color: var(--trx-accent-color);
  background: color-mix(in srgb, var(--trx-accent-color) 10%, transparent);
  transform: scale(1.01);
}

.trx-dropzone--disabled { opacity: 0.5; cursor: not-allowed; }

.trx-dropzone__input { display: none; }

.trx-dropzone__icon { font-size: 2rem; color: var(--trx-accent-color); }

.trx-dropzone__label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--trx-text-primary);
  margin: 0;
}

.trx-dropzone__hint {
  font-size: 0.8rem;
  color: var(--trx-text-secondary);
  margin: 0;
}
</style>
