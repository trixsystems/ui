# TrxDataTable

DataTable com filtro de busca global integrado, estado vazio customizado e skeleton de loading.

## Uso

```vue
<script setup lang="ts">
import { TrxDataTable, TrxColumn, TrxStatusBadge } from '@trx/ui-common'

const users = [
  { id: 1, name: 'João Silva', email: 'joao@example.com', status: 'Ativo' },
  { id: 2, name: 'Maria Santos', email: 'maria@example.com', status: 'Inativo' },
]
</script>

<template>
  <TrxDataTable
    :value="users"
    :loading="false"
    search-placeholder="Buscar usuários..."
  >
    <TrxColumn field="name" header="Nome" sortable />
    <TrxColumn field="email" header="E-mail" />
    <TrxColumn header="Status">
      <template #body="{ data }">
        <TrxStatusBadge
          :status="data.status"
          :type="data.status === 'Ativo' ? 'success' : 'danger'"
        />
      </template>
    </TrxColumn>
  </TrxDataTable>
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `value` | `any[]` | `[]` | Array de dados |
| `loading` | `boolean` | `false` | Exibe skeleton rows |
| `searchPlaceholder` | `string` | `'Buscar...'` | Placeholder do input de busca |
| `emptyMessage` | `string` | `'Nenhum registro encontrado'` | Mensagem quando sem dados |
| `rows` | `number` | `10` | Linhas por página |
| `paginator` | `boolean` | `true` | Exibe paginação |

::: tip
O filtro global está integrado — ao digitar no campo de busca, a tabela filtra automaticamente em todas as colunas.
:::

## Diferença de PvDataTable

O `TrxDataTable` é um componente customizado com filtro global embutido. Para acesso direto ao DataTable original do PrimeVue use `PvDataTable`:

```typescript
import { PvDataTable } from '@trx/ui-common'
```
