export { default as TrxPaginator } from './TrxPaginator.vue'
// Column, ColumnGroup e Row sao estruturais: a DataTable percorre os VNodes do
// proprio slot e identifica cada filho pelo tipo do componente. Envolvidos num
// wrapper .vue eles deixam de ser reconhecidos e a tabela renderiza as <tr> sem
// nenhuma <td>/<th>. Por isso precisam ser re-exportados direto do PrimeVue,
// como ja e feito com PvDataTable abaixo.
export { default as TrxColumn } from 'primevue/column'
export { default as TrxColumnGroup } from 'primevue/columngroup'
export { default as TrxDataView } from './TrxDataView.vue'
export { default as TrxOrderList } from './TrxOrderList.vue'
export { default as TrxOrganizationChart } from './TrxOrganizationChart.vue'
export { default as TrxPickList } from './TrxPickList.vue'
export { default as TrxRow } from 'primevue/row'
export { default as TrxTimeline } from './TrxTimeline.vue'
export { default as TrxTree } from './TrxTree.vue'
export { default as TrxTreeTable } from './TrxTreeTable.vue'
export { default as TrxVirtualScroller } from './TrxVirtualScroller.vue'

// Re-export PrimeVue DataTable directly (TrxDataTable is a custom enhanced component)
export { default as PvDataTable } from 'primevue/datatable'
