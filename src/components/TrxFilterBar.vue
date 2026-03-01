<script setup lang="ts">
import { computed } from 'vue'

export interface TrxFilter {
  key: string
  label: string
  value: unknown
  /** Texto exibido no chip (padrão: String(value)) */
  displayValue?: string
}

const props = defineProps<{
  filters?: TrxFilter[]
  /** Texto do botão de limpar todos */
  clearLabel?: string
}>()

const emit = defineEmits<{
  /** Emitido ao remover um filtro */
  remove: [key: string]
  /** Emitido ao limpar todos os filtros */
  clear: []
}>()

const hasFilters = computed(() => (props.filters ?? []).length > 0)

const displayLabel = (f: TrxFilter) => f.displayValue ?? String(f.value)
</script>

<template>
  <div v-if="hasFilters || $slots.default" class="trx-filter-bar">
    <!-- Slot para inputs/selects de filtro -->
    <div v-if="$slots.default" class="trx-filter-bar__inputs">
      <slot />
    </div>

    <!-- Chips de filtros ativos -->
    <div v-if="hasFilters" class="trx-filter-bar__chips" role="list" aria-label="Filtros ativos">
      <span class="trx-filter-bar__label">Filtros:</span>

      <span
        v-for="f in filters"
        :key="f.key"
        class="trx-filter-bar__chip"
        role="listitem"
      >
        <span class="trx-filter-bar__chip-label">{{ f.label }}:</span>
        <span class="trx-filter-bar__chip-value">{{ displayLabel(f) }}</span>
        <button
          type="button"
          class="trx-filter-bar__chip-remove"
          :aria-label="`Remover filtro ${f.label}`"
          @click="emit('remove', f.key)"
        >
          <i class="pi pi-times" aria-hidden="true" />
        </button>
      </span>

      <button
        type="button"
        class="trx-filter-bar__clear"
        @click="emit('clear')"
      >
        <i class="pi pi-filter-slash" aria-hidden="true" />
        {{ clearLabel ?? 'Limpar filtros' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-filter-bar {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.trx-filter-bar__inputs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: flex-end;
}

.trx-filter-bar__chips {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.trx-filter-bar__label {
  font-size: 0.8125rem;
  color: var(--trx-text-muted);
  font-weight: 500;
}

.trx-filter-bar__chip {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--trx-primary-soft);
  border: 1px solid var(--trx-accent-color);
  border-radius: 20px;
  padding: 0.25rem 0.5rem 0.25rem 0.625rem;
  font-size: 0.8125rem;
}

.trx-filter-bar__chip-label {
  color: var(--trx-text-secondary);
  font-weight: 500;
}

.trx-filter-bar__chip-value {
  color: var(--trx-accent-color);
  font-weight: 600;
}

.trx-filter-bar__chip-remove {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.125rem;
  color: var(--trx-text-muted);
  display: flex;
  align-items: center;
  border-radius: 50%;
  transition: all 0.15s;
  font-size: 0.625rem;
}
.trx-filter-bar__chip-remove:hover {
  background: var(--trx-danger-soft);
  color: var(--trx-danger-color);
}

.trx-filter-bar__clear {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: none;
  border: 1px solid var(--trx-border-color);
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  font-size: 0.8125rem;
  color: var(--trx-text-secondary);
  cursor: pointer;
  transition: all 0.15s;
}
.trx-filter-bar__clear:hover {
  background: var(--trx-danger-soft);
  border-color: var(--trx-danger-color);
  color: var(--trx-danger-color);
}
</style>
