<script setup lang="ts">
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import { ref, computed } from 'vue'

const props = defineProps<{
  value: any[]
  loading?: boolean
  paginator?: boolean
  rows?: number
  totalRecords?: number
  lazy?: boolean
  globalFilter?: boolean
  emptyMessage?: string
  stripedRows?: boolean
  rowHover?: boolean
}>()

const emit = defineEmits<{
  page: [event: any]
  sort: [event: any]
  filter: [event: any]
}>()

const filters = ref({
  global: { value: null, matchMode: 'contains' }
})

const computedRows = computed(() => props.rows || 10)
</script>

<template>
  <div class="trx-datatable">
    <div v-if="globalFilter" class="table-header">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          v-model="filters.global.value"
          placeholder="Buscar..."
          class="search-input"
        />
      </span>
      <slot name="header-actions" />
    </div>

    <DataTable
      :value="value"
      :loading="loading"
      :paginator="paginator"
      :rows="computedRows"
      :totalRecords="totalRecords"
      :lazy="lazy"
      :filters="globalFilter ? filters : undefined"
      :globalFilterFields="globalFilter ? ['*'] : undefined"
      :stripedRows="stripedRows !== false"
      :rowHover="rowHover !== false"
      responsiveLayout="scroll"
      @page="emit('page', $event)"
      @sort="emit('sort', $event)"
      @filter="emit('filter', $event)"
      class="trx-table"
    >
      <template #empty>
        <div class="empty-state">
          <i class="pi pi-inbox"></i>
          <p>{{ emptyMessage || 'Nenhum registro encontrado' }}</p>
        </div>
      </template>

      <template #loading>
        <div class="loading-state">
          <i class="pi pi-spin pi-spinner"></i>
          <p>Carregando...</p>
        </div>
      </template>

      <slot />
    </DataTable>
  </div>
</template>

<style scoped>
.trx-datatable {
  background: var(--trx-bg-card, var(--bg-card));
  border: 1px solid var(--trx-border-color, var(--border-color));
  border-radius: 16px;
  overflow: hidden;
}

.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--trx-border-color, var(--border-color));
  background: var(--trx-bg-secondary, var(--bg-secondary));
}

.search-input {
  width: 300px;
}

.empty-state,
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: var(--trx-text-secondary, var(--text-secondary));
}

.empty-state i,
.loading-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state p,
.loading-state p {
  margin: 0;
  font-size: 1rem;
}

:deep(.trx-table) {
  border: none !important;
}

:deep(.trx-table .p-datatable-thead > tr > th) {
  background: var(--trx-bg-secondary, var(--bg-secondary));
  border-color: var(--trx-border-color, var(--border-color));
  color: var(--trx-text-primary, var(--text-primary));
  font-weight: 600;
  padding: 1rem 1.25rem;
}

:deep(.trx-table .p-datatable-tbody > tr) {
  background: var(--trx-bg-card, var(--bg-card));
  transition: background 0.2s;
}

:deep(.trx-table .p-datatable-tbody > tr > td) {
  border-color: var(--trx-border-color, var(--border-color));
  padding: 0.875rem 1.25rem;
  color: var(--trx-text-primary, var(--text-primary));
}

:deep(.trx-table .p-datatable-tbody > tr:hover) {
  background: var(--trx-bg-tertiary, var(--bg-tertiary)) !important;
}

.dark :deep(.trx-table .p-datatable-tbody > tr:hover) {
  background: var(--dracula-selection) !important;
}

:deep(.trx-table .p-paginator) {
  border: none;
  border-top: 1px solid var(--trx-border-color, var(--border-color));
  background: var(--trx-bg-secondary, var(--bg-secondary));
  padding: 1rem;
}
</style>
