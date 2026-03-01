<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
  searchValue?: string
  searchPlaceholder?: string
  loading?: boolean
  total?: number
  selectedCount?: number
}>(), {
  searchPlaceholder: 'Pesquisar...',
})

const emit = defineEmits<{
  'update:searchValue': [value: string]
  refresh: []
  filter: []
}>()

const filtersOpen = ref(false)
</script>

<template>
  <div class="trx-table-toolbar">
    <Transition name="trx-bulk-slide">
      <div v-if="selectedCount && selectedCount > 0" class="trx-table-toolbar__bulk">
        <span class="trx-table-toolbar__bulk-count">{{ selectedCount }} selecionado(s)</span>
        <slot name="bulk-actions" />
      </div>
    </Transition>

    <div class="trx-table-toolbar__main">
      <div class="trx-table-toolbar__search">
        <i class="pi pi-search trx-table-toolbar__search-icon"></i>
        <input
          class="trx-table-toolbar__search-input"
          type="text"
          :value="searchValue"
          :placeholder="searchPlaceholder"
          @input="emit('update:searchValue', ($event.target as HTMLInputElement).value)"
        />
        <button
          v-if="searchValue"
          class="trx-table-toolbar__search-clear"
          @click="emit('update:searchValue', '')"
        ><i class="pi pi-times"></i></button>
      </div>

      <div class="trx-table-toolbar__center">
        <span v-if="total !== undefined" class="trx-table-toolbar__total">
          {{ total }} registro(s)
        </span>
      </div>

      <div class="trx-table-toolbar__actions">
        <slot name="filters">
          <button
            v-if="$slots['filter-panel']"
            class="trx-table-toolbar__btn"
            :class="{ 'trx-table-toolbar__btn--active': filtersOpen }"
            @click="filtersOpen = !filtersOpen; emit('filter')"
            title="Filtros"
          >
            <i class="pi pi-filter"></i>
          </button>
        </slot>

        <button
          class="trx-table-toolbar__btn"
          :class="{ 'trx-table-toolbar__btn--loading': loading }"
          @click="emit('refresh')"
          title="Atualizar"
          :disabled="loading"
        >
          <i :class="loading ? 'pi pi-spin pi-spinner' : 'pi pi-refresh'"></i>
        </button>

        <slot name="actions" />
      </div>
    </div>

    <Transition name="trx-slide-down">
      <div v-if="filtersOpen && $slots['filter-panel']" class="trx-table-toolbar__filter-panel">
        <slot name="filter-panel" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trx-table-toolbar { display: flex; flex-direction: column; gap: 0.5rem; }

.trx-table-toolbar__bulk {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: rgba(16,185,129,0.08);
  border: 1px solid rgba(16,185,129,0.2);
  border-radius: 8px;
}

.trx-table-toolbar__bulk-count { font-size: 0.875rem; font-weight: 600; color: var(--trx-success-color); }

.trx-table-toolbar__main {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.trx-table-toolbar__search {
  position: relative;
  flex: 1;
  max-width: 300px;
  display: flex;
  align-items: center;
}

.trx-table-toolbar__search-icon {
  position: absolute;
  left: 0.6rem;
  color: var(--trx-text-secondary);
  font-size: 0.8rem;
  pointer-events: none;
}

.trx-table-toolbar__search-input {
  width: 100%;
  padding: 0.45rem 2rem 0.45rem 2rem;
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  background: var(--trx-bg-card);
  color: var(--trx-text-primary);
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s;
}

.trx-table-toolbar__search-input:focus { border-color: var(--trx-accent-color); }

.trx-table-toolbar__search-clear {
  position: absolute;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--trx-text-secondary);
  font-size: 0.75rem;
  padding: 0.2rem;
}

.trx-table-toolbar__center { flex: 1; }
.trx-table-toolbar__total { font-size: 0.8rem; color: var(--trx-text-secondary); }

.trx-table-toolbar__actions { display: flex; gap: 0.5rem; align-items: center; }

.trx-table-toolbar__btn {
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

.trx-table-toolbar__btn:hover:not(:disabled) { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
.trx-table-toolbar__btn--active { background: var(--trx-accent-color); color: white; border-color: var(--trx-accent-color); }
.trx-table-toolbar__btn:disabled { opacity: 0.5; cursor: not-allowed; }

.trx-table-toolbar__filter-panel { padding: 0.75rem; background: var(--trx-bg-secondary); border-radius: 8px; border: 1px solid var(--trx-border-color); }

.trx-bulk-slide-enter-active, .trx-bulk-slide-leave-active { transition: all 0.2s ease; }
.trx-bulk-slide-enter-from, .trx-bulk-slide-leave-to { opacity: 0; transform: translateY(-8px); }
.trx-slide-down-enter-active, .trx-slide-down-leave-active { transition: all 0.2s ease; }
.trx-slide-down-enter-from, .trx-slide-down-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
