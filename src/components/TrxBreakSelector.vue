<script setup lang="ts">
import { ref } from 'vue'

export interface TrxBreakReason {
  id: string
  label: string
  icon?: string
  maxMinutes?: number
}

withDefaults(defineProps<{
  reasons?: TrxBreakReason[]
  modelValue?: string | null
  disabled?: boolean
}>(), {
  reasons: () => [],
  modelValue: null,
})

const emit = defineEmits<{
  'update:modelValue': [id: string | null]
  start: [reason: TrxBreakReason]
  end: []
}>()

const open = ref(false)
</script>

<template>
  <div class="trx-break" :class="{ 'trx-break--active': modelValue }">
    <button
      class="trx-break__trigger"
      :disabled="disabled"
      @click="modelValue ? (emit('update:modelValue', null), emit('end')) : (open = !open)"
    >
      <i :class="modelValue ? 'pi pi-play' : 'pi pi-pause'"></i>
      <span>{{ modelValue ? 'Retornar' : 'Iniciar Pausa' }}</span>
      <i v-if="!modelValue" class="pi pi-chevron-down trx-break__arrow" :class="{ 'rotated': open }"></i>
    </button>

    <Transition name="trx-break-drop">
      <div v-if="open && !modelValue" class="trx-break__panel">
        <div class="trx-break__panel-title">Motivo da pausa</div>
        <button
          v-for="r in reasons"
          :key="r.id"
          class="trx-break__reason"
          @click="emit('update:modelValue', r.id); emit('start', r); open = false"
        >
          <i :class="r.icon ?? 'pi pi-circle'" class="trx-break__reason-icon"></i>
          <span class="trx-break__reason-label">{{ r.label }}</span>
          <span v-if="r.maxMinutes" class="trx-break__reason-max">{{ r.maxMinutes }}min</span>
        </button>
        <div v-if="!reasons.length" class="trx-break__empty">Nenhum motivo configurado</div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trx-break { position: relative; display: inline-block; }
.trx-break__trigger {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--trx-border-color);
  background: var(--trx-bg-card); color: var(--trx-text-secondary);
  font-size: 0.875rem; font-weight: 600; cursor: pointer; transition: all 0.15s;
}
.trx-break__trigger:hover { border-color: var(--trx-warning-color); color: var(--trx-warning-color); }
.trx-break--active .trx-break__trigger { background: color-mix(in srgb, var(--trx-warning-color) 12%, transparent); color: var(--trx-warning-color); border-color: var(--trx-warning-color); }
.trx-break--active .trx-break__trigger:hover { background: color-mix(in srgb, var(--trx-success-color) 12%, transparent); color: var(--trx-success-color); border-color: var(--trx-success-color); }
.trx-break__arrow { font-size: 0.7rem; transition: transform 0.2s; }
.trx-break__arrow.rotated { transform: rotate(180deg); }
.trx-break__panel {
  position: absolute; top: calc(100% + 4px); left: 0; z-index: 100; min-width: 200px;
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); padding: 0.5rem;
}
.trx-break__panel-title { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--trx-text-secondary); padding: 0.25rem 0.5rem 0.5rem; }
.trx-break__reason { display: flex; align-items: center; gap: 0.5rem; width: 100%; padding: 0.5rem 0.6rem; border: none; background: transparent; cursor: pointer; border-radius: 6px; transition: background 0.15s; }
.trx-break__reason:hover { background: var(--trx-bg-secondary); }
.trx-break__reason-icon { font-size: 0.85rem; color: var(--trx-warning-color); }
.trx-break__reason-label { flex: 1; font-size: 0.875rem; color: var(--trx-text-primary); text-align: left; }
.trx-break__reason-max { font-size: 0.7rem; color: var(--trx-text-secondary); }
.trx-break__empty { padding: 0.5rem; font-size: 0.8rem; color: var(--trx-text-secondary); text-align: center; }
.trx-break-drop-enter-active, .trx-break-drop-leave-active { transition: all 0.15s ease; }
.trx-break-drop-enter-from, .trx-break-drop-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
