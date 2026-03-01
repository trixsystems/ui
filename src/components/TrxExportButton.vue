<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type ExportFormat = 'csv' | 'excel' | 'pdf'

withDefaults(defineProps<{
  formats?: ExportFormat[]
  loading?: boolean
  disabled?: boolean
  label?: string
}>(), {
  formats: () => ['csv', 'excel'],
  label: 'Exportar',
})

const emit = defineEmits<{ export: [format: ExportFormat] }>()

const open = ref(false)

const formatConfig: Record<ExportFormat, { label: string; icon: string }> = {
  csv:   { label: 'CSV',   icon: 'pi pi-file' },
  excel: { label: 'Excel', icon: 'pi pi-file-excel' },
  pdf:   { label: 'PDF',   icon: 'pi pi-file-pdf' },
}

function select(fmt: ExportFormat) {
  open.value = false
  emit('export', fmt)
}

function onDocClick(e: MouseEvent) {
  const el = document.querySelector('.trx-export-btn')
  if (el && !el.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onDocClick, true))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick, true))
</script>

<template>
  <div class="trx-export-btn">
    <button
      class="trx-export-btn__trigger"
      :disabled="disabled || loading"
      @click="open = !open"
    >
      <i :class="loading ? 'pi pi-spin pi-spinner' : 'pi pi-download'"></i>
      <span>{{ label }}</span>
      <i class="pi pi-chevron-down trx-export-btn__arrow" :class="{ 'trx-export-btn__arrow--open': open }"></i>
    </button>

    <Transition name="trx-dropdown">
      <div v-if="open" class="trx-export-btn__menu">
        <button
          v-for="fmt in formats"
          :key="fmt"
          class="trx-export-btn__item"
          @click="select(fmt)"
        >
          <i :class="formatConfig[fmt].icon"></i>
          <span>{{ formatConfig[fmt].label }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trx-export-btn { position: relative; display: inline-flex; }

.trx-export-btn__trigger {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.75rem;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  cursor: pointer;
  color: var(--trx-text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.15s;
}

.trx-export-btn__trigger:hover:not(:disabled) { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
.trx-export-btn__trigger:disabled { opacity: 0.5; cursor: not-allowed; }

.trx-export-btn__arrow { font-size: 0.65rem; transition: transform 0.2s; }
.trx-export-btn__arrow--open { transform: rotate(180deg); }

.trx-export-btn__menu {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 10px;
  box-shadow: var(--trx-shadow-md);
  overflow: hidden;
  min-width: 130px;
  z-index: 100;
}

.trx-export-btn__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.6rem 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--trx-text-primary);
  font-size: 0.875rem;
  text-align: left;
  transition: background 0.15s;
}

.trx-export-btn__item:hover { background: var(--trx-bg-secondary); }
.trx-export-btn__item i { font-size: 0.9rem; color: var(--trx-accent-color); }

.trx-dropdown-enter-active, .trx-dropdown-leave-active { transition: all 0.15s ease; }
.trx-dropdown-enter-from, .trx-dropdown-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
