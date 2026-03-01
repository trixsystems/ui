<script setup lang="ts">
/**
 * TrxAgentStatus — Seletor/exibidor de status do agente de call center.
 *
 * @example
 * <TrxAgentStatus v-model="status" />
 * <TrxAgentStatus :model-value="status" readonly />
 */

export type TrxAgentStatusValue = 'online' | 'busy' | 'paused' | 'offline'

export interface TrxAgentStatusOption {
  value: TrxAgentStatusValue
  label: string
  color: string
  icon: string
}

const STATUS_OPTIONS: TrxAgentStatusOption[] = [
  { value: 'online',  label: 'Online',   color: '#10b981', icon: 'pi pi-circle-fill' },
  { value: 'busy',    label: 'Ocupado',  color: '#ef4444', icon: 'pi pi-phone' },
  { value: 'paused',  label: 'Pausa',    color: '#f59e0b', icon: 'pi pi-pause-circle' },
  { value: 'offline', label: 'Offline',  color: '#94a3b8', icon: 'pi pi-circle' },
]

import { ref, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: TrxAgentStatusValue
    readonly?: boolean
    /** Exibe apenas o badge sem dropdown */
    compact?: boolean
    options?: TrxAgentStatusOption[]
  }>(),
  { modelValue: 'offline', readonly: false, compact: false },
)

const emit = defineEmits<{
  'update:modelValue': [value: TrxAgentStatusValue]
  change: [value: TrxAgentStatusValue]
}>()

const open = ref(false)
const resolvedOptions = computed(() => props.options ?? STATUS_OPTIONS)
const current = computed(() => resolvedOptions.value.find(o => o.value === props.modelValue) ?? STATUS_OPTIONS[3])

function select(option: TrxAgentStatusOption) {
  open.value = false
  emit('update:modelValue', option.value)
  emit('change', option.value)
}
</script>

<template>
  <!-- Badge somente leitura / compact -->
  <div v-if="readonly || compact" class="trx-agent-badge">
    <span class="trx-agent-dot" :style="{ background: current.color }" />
    <span class="trx-agent-label">{{ current.label }}</span>
  </div>

  <!-- Seletor com dropdown -->
  <div v-else class="trx-agent-wrap" @keydown.escape="open = false">
    <button
      type="button"
      class="trx-agent-trigger"
      :aria-expanded="open"
      aria-haspopup="listbox"
      :aria-label="`Status atual: ${current.label}. Clique para alterar.`"
      @click="open = !open"
    >
      <span class="trx-agent-dot" :style="{ background: current.color }" />
      <span class="trx-agent-label">{{ current.label }}</span>
      <i class="pi pi-chevron-down trx-agent-chevron" :class="{ 'trx-agent-chevron--open': open }" aria-hidden="true" />
    </button>

    <Transition name="trx-agent">
      <ul v-if="open" class="trx-agent-menu" role="listbox" :aria-label="`Selecionar status`">
        <li
          v-for="option in resolvedOptions"
          :key="option.value"
          role="option"
          :aria-selected="option.value === modelValue"
          :class="['trx-agent-option', { 'trx-agent-option--active': option.value === modelValue }]"
          @click="select(option)"
        >
          <span class="trx-agent-dot" :style="{ background: option.color }" />
          <i :class="option.icon" :style="{ color: option.color }" aria-hidden="true" />
          <span>{{ option.label }}</span>
        </li>
      </ul>
    </Transition>

    <!-- backdrop para fechar ao clicar fora -->
    <div v-if="open" class="trx-agent-backdrop" @click="open = false" />
  </div>
</template>

<style scoped>
.trx-agent-badge,
.trx-agent-wrap { display: inline-block; position: relative; }

.trx-agent-badge { display: inline-flex; align-items: center; gap: 0.375rem; }

.trx-agent-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
}

.trx-agent-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--trx-text-primary);
}

/* Trigger */
.trx-agent-trigger {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: var(--trx-bg-tertiary);
  border: 1px solid var(--trx-border);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--trx-text-primary);
  transition: all 0.15s;
}
.trx-agent-trigger:hover {
  background: var(--trx-bg-hover);
  border-color: var(--trx-border-strong);
}

.trx-agent-chevron {
  font-size: 0.625rem;
  color: var(--trx-text-muted);
  transition: transform 0.2s;
}
.trx-agent-chevron--open { transform: rotate(180deg); }

/* Menu */
.trx-agent-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1001;
  min-width: 160px;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border);
  border-radius: 10px;
  box-shadow: var(--trx-shadow-lg);
  list-style: none;
  padding: 0.25rem;
  margin: 0;
  overflow: hidden;
}

.trx-agent-option {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-radius: 7px;
  font-size: 0.875rem;
  color: var(--trx-text-primary);
  transition: background 0.12s;
}
.trx-agent-option:hover { background: var(--trx-bg-hover); }
.trx-agent-option--active { background: var(--trx-primary-soft); font-weight: 500; }

/* Backdrop */
.trx-agent-backdrop {
  position: fixed; inset: 0; z-index: 1000;
}

/* Transition */
.trx-agent-enter-active, .trx-agent-leave-active { transition: opacity 0.15s, transform 0.15s; }
.trx-agent-enter-from, .trx-agent-leave-to { opacity: 0; transform: translateY(-4px) scale(0.97); }
</style>
