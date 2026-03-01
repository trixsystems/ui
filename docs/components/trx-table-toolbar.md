# TrxTableToolbar

Toolbar completa para tabelas com busca, refresh, filtros e ações em bulk.

## Uso Básico

```vue
<TrxTableToolbar
  v-model:search-value="search"
  :loading="loading"
  :total="totalRecords"
  @refresh="loadData"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `searchValue` | `string` | — | Valor da busca (v-model) |
| `searchPlaceholder` | `string` | `'Pesquisar...'` | Placeholder do campo |
| `loading` | `boolean` | `false` | Estado de carregamento |
| `total` | `number` | — | Total de registros |
| `selectedCount` | `number` | — | Quantidade selecionada |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:searchValue` | `string` | Atualizar busca |
| `refresh` | — | Atualizar dados |
| `filter` | — | Toggle do painel de filtros |

## Slots

| Slot | Descrição |
|------|-----------|
| `actions` | Botões customizados na direita |
| `filters` | Substitui o botão de filtros padrão |
| `filter-panel` | Painel de filtros expandível |
| `bulk-actions` | Ações para itens selecionados |

## Exemplo Completo

```vue
<TrxTableToolbar
  v-model:search-value="search"
  :loading="loading"
  :total="calls.length"
  :selected-count="selected.length"
  @refresh="loadCalls"
>
  <template #filter-panel>
    <div class="flex gap-3">
      <TrxSelect v-model="statusFilter" :options="statusOptions" />
      <TrxDateRangePicker v-model="dateRange" />
    </div>
  </template>

  <template #bulk-actions>
    <TrxButton label="Exportar selecionados" icon="pi pi-download" size="small" />
  </template>

  <template #actions>
    <TrxExportButton @export="handleExport" />
    <TrxColumnConfig :columns="columns" v-model="visibleColumns" />
  </template>
</TrxTableToolbar>
```
