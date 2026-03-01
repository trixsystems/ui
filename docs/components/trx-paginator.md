# TrxPaginator

Wrapper do `Paginator` do PrimeVue com opções de linhas por página pré-configuradas para uso em tabelas e listas.

## Defaults TRX

| Prop | Default TRX | Descrição |
|:-----|:------------|:----------|
| `rowsPerPageOptions` | `[10, 25, 50]` | Opções de quantidade de itens por página |

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxPaginator } from '@trx/ui-common'

const pagina = ref(0)
const linhas = ref(10)
const totalRegistros = ref(234)

function aoMudarPagina(event: { page: number; rows: number; first: number }) {
  pagina.value = event.page
  linhas.value = event.rows
  // buscar dados da nova página
}
</script>

<template>
  <!-- Paginador standalone (rowsPerPageOptions automático) -->
  <TrxPaginator
    :rows="linhas"
    :total-records="totalRegistros"
    :first="pagina * linhas"
    @page="aoMudarPagina"
  />

  <!-- Paginador com opções personalizadas -->
  <TrxPaginator
    :rows="linhas"
    :total-records="totalRegistros"
    :first="pagina * linhas"
    :rows-per-page-options="[5, 10, 20, 100]"
    template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
    current-page-report-template="Exibindo {first} a {last} de {totalRecords} registros"
    @page="aoMudarPagina"
  />
</template>
```

> Para tabelas, prefira usar o `TrxDataTable` com `paginator` habilitado — ele integra o paginador automaticamente. O `TrxPaginator` standalone é útil para listas customizadas e DataViews.

## Props principais

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `rows` | `number` | Quantidade de linhas por página atual |
| `totalRecords` | `number` | Total de registros (determina número de páginas) |
| `first` | `number` | Índice do primeiro registro exibido |
| `rowsPerPageOptions` | `number[]` | Opções de linhas por página (padrão TRX: `[10, 25, 50]`) |
| `template` | `string \| object` | Template de layout dos controles |
| `currentPageReportTemplate` | `string` | Template do relatório de página atual |

## Eventos principais

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `page` | `{ page, rows, first, pageCount }` | Disparado ao mudar de página ou quantidade de linhas |

## Ver também

- [PrimeVue Paginator](https://primevue.org/paginator/) — documentação completa da API
