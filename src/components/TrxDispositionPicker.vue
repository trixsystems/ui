<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

export interface TrxDisposition {
  id: string
  label: string
  color?: string
  icon?: string
  requireNote?: boolean
}

const props = withDefaults(defineProps<{
  dispositions?: TrxDisposition[]
  modelValue?: string
  note?: string
  disabled?: boolean
  placeholder?: string
}>(), {
  dispositions: () => [],
  placeholder: 'Selecione a tabulação...',
})

const emit = defineEmits<{
  'update:modelValue': [id: string]
  'update:note': [note: string]
  confirm: [id: string, note: string]
}>()

const open = ref(false)
const noteText = ref(props.note ?? '')
const selected = ref<TrxDisposition | null>(props.dispositions.find(d => d.id === props.modelValue) ?? null)

function select(d: TrxDisposition) {
  selected.value = d
  open.value = false
  emit('update:modelValue', d.id)
  if (!d.requireNote) emit('confirm', d.id, noteText.value)
}

function confirm() {
  if (!selected.value) return
  emit('confirm', selected.value.id, noteText.value)
}

function onDocClick(e: MouseEvent) {
  const el = document.querySelector('.trx-disposition')
  if (el && !el.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onDocClick, true))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick, true))
</script>

<template>
  <div class="trx-disposition" :class="{ 'trx-disposition--disabled': disabled }">
    <button class="trx-disposition__trigger" :disabled="disabled" @click="open = !open">
      <span v-if="selected" class="trx-disposition__selected">
        <i v-if="selected.icon" :class="selected.icon" :style="{ color: selected.color }"></i>
        <span :style="{ color: selected.color }">{{ selected.label }}</span>
      </span>
      <span v-else class="trx-disposition__placeholder">{{ placeholder }}</span>
      <i class="pi pi-chevron-down trx-disposition__arrow" :class="{ 'trx-disposition__arrow--open': open }"></i>
    </button>

    <Transition name="trx-dropdown">
      <div v-if="open" class="trx-disposition__panel">
        <button
          v-for="d in dispositions"
          :key="d.id"
          class="trx-disposition__option"
          :class="{ 'trx-disposition__option--active': modelValue === d.id }"
          @click="select(d)"
        >
          <i v-if="d.icon" :class="d.icon" :style="{ color: d.color }"></i>
          <span :style="{ color: d.color }">{{ d.label }}</span>
          <i v-if="d.requireNote" class="pi pi-pencil trx-disposition__note-icon" title="Requer observação"></i>
        </button>
      </div>
    </Transition>

    <div v-if="selected?.requireNote" class="trx-disposition__note-wrap">
      <textarea
        class="trx-disposition__note"
        placeholder="Adicione uma observação..."
        :value="noteText"
        rows="3"
        @input="noteText = ($event.target as HTMLTextAreaElement).value; emit('update:note', noteText)"
      ></textarea>
      <button class="trx-disposition__confirm" @click="confirm">
        <i class="pi pi-check"></i> Confirmar
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-disposition { position: relative; display: flex; flex-direction: column; gap: 0.5rem; }
.trx-disposition--disabled { opacity: 0.5; pointer-events: none; }
.trx-disposition__trigger {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--trx-border-color); border-radius: 8px;
  background: var(--trx-bg-card); cursor: pointer;
  font-size: 0.875rem; transition: border-color 0.2s;
}
.trx-disposition__trigger:focus { outline: none; border-color: var(--trx-accent-color); }
.trx-disposition__selected { display: flex; align-items: center; gap: 0.4rem; font-weight: 500; }
.trx-disposition__placeholder { color: var(--trx-text-secondary); }
.trx-disposition__arrow { font-size: 0.65rem; color: var(--trx-text-secondary); transition: transform 0.2s; }
.trx-disposition__arrow--open { transform: rotate(180deg); }
.trx-disposition__panel {
  position: absolute; top: calc(100% + 4px); left: 0; right: 0;
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 10px; box-shadow: var(--trx-shadow-md); overflow: hidden; z-index: 100;
}
.trx-disposition__option {
  display: flex; align-items: center; gap: 0.5rem;
  width: 100%; padding: 0.55rem 0.875rem;
  border: none; background: transparent;
  font-size: 0.875rem; text-align: left; cursor: pointer; transition: background 0.15s;
}
.trx-disposition__option:hover { background: var(--trx-bg-secondary); }
.trx-disposition__option--active { background: color-mix(in srgb, var(--trx-accent-color) 8%, transparent); }
.trx-disposition__note-icon { margin-left: auto; font-size: 0.7rem; color: var(--trx-text-secondary); }
.trx-disposition__note-wrap { display: flex; flex-direction: column; gap: 0.4rem; }
.trx-disposition__note {
  padding: 0.5rem 0.75rem; border: 1px solid var(--trx-border-color); border-radius: 8px;
  background: var(--trx-bg-card); color: var(--trx-text-primary);
  font-size: 0.875rem; font-family: inherit; resize: vertical; outline: none;
}
.trx-disposition__note:focus { border-color: var(--trx-accent-color); }
.trx-disposition__confirm {
  display: inline-flex; align-items: center; gap: 0.35rem; align-self: flex-end;
  padding: 0.4rem 0.875rem; background: var(--trx-accent-color); color: white;
  border: none; border-radius: 8px; font-size: 0.875rem; cursor: pointer; transition: opacity 0.15s;
}
.trx-disposition__confirm:hover { opacity: 0.9; }
.trx-dropdown-enter-active, .trx-dropdown-leave-active { transition: all 0.15s ease; }
.trx-dropdown-enter-from, .trx-dropdown-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
