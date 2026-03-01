<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

export interface TrxColumnDef {
  key: string
  label: string
  required?: boolean
}

const props = defineProps<{
  columns: TrxColumnDef[]
  modelValue: string[]
}>()

const emit = defineEmits<{ 'update:modelValue': [keys: string[]] }>()

const open = ref(false)

function toggle(key: string) {
  const col = props.columns.find(c => c.key === key)
  if (col?.required) return
  const current = [...props.modelValue]
  const idx = current.indexOf(key)
  if (idx === -1) current.push(key)
  else current.splice(idx, 1)
  emit('update:modelValue', current)
}

function isVisible(key: string) {
  return props.modelValue.includes(key)
}

function onDocClick(e: MouseEvent) {
  const el = document.querySelector('.trx-col-config')
  if (el && !el.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onDocClick, true))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick, true))
</script>

<template>
  <div class="trx-col-config">
    <button class="trx-col-config__trigger" @click="open = !open" title="Configurar colunas">
      <i class="pi pi-table"></i>
    </button>

    <Transition name="trx-dropdown">
      <div v-if="open" class="trx-col-config__panel">
        <p class="trx-col-config__title">Colunas visíveis</p>
        <label
          v-for="col in columns"
          :key="col.key"
          class="trx-col-config__item"
          :class="{ 'trx-col-config__item--required': col.required }"
        >
          <input
            type="checkbox"
            :checked="isVisible(col.key)"
            :disabled="col.required"
            @change="toggle(col.key)"
          />
          <span>{{ col.label }}</span>
          <span v-if="col.required" class="trx-col-config__lock"><i class="pi pi-lock"></i></span>
        </label>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trx-col-config { position: relative; display: inline-flex; }

.trx-col-config__trigger {
  width: 32px;
  height: 32px;
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  background: var(--trx-bg-card);
  color: var(--trx-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  transition: all 0.15s;
}

.trx-col-config__trigger:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }

.trx-col-config__panel {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 10px;
  box-shadow: var(--trx-shadow-md);
  padding: 0.5rem;
  min-width: 180px;
  z-index: 100;
}

.trx-col-config__title {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--trx-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.5rem 0.5rem;
  margin: 0;
}

.trx-col-config__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--trx-text-primary);
  transition: background 0.15s;
}

.trx-col-config__item:hover:not(.trx-col-config__item--required) { background: var(--trx-bg-secondary); }
.trx-col-config__item--required { opacity: 0.6; cursor: default; }
.trx-col-config__lock { margin-left: auto; font-size: 0.7rem; color: var(--trx-text-secondary); }

input[type="checkbox"] { accent-color: var(--trx-accent-color); }

.trx-dropdown-enter-active, .trx-dropdown-leave-active { transition: all 0.15s ease; }
.trx-dropdown-enter-from, .trx-dropdown-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
