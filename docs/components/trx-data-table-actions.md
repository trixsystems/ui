# TrxDataTableActions

Renderiza ações para uma linha de DataTable, no modo inline (botões) ou menu dropdown.

## Uso

```vue
<script setup lang="ts">
import { TrxDataTableActions, type TrxAction } from '@trx/ui-common'

interface User { id: number; name: string }

const actions: TrxAction<User>[] = [
  {
    label: 'Editar',
    icon: 'pi pi-pencil',
    action: (row) => editUser(row),
  },
  {
    label: 'Excluir',
    icon: 'pi pi-trash',
    severity: 'danger',
    action: (row) => deleteUser(row),
  },
]
</script>

<template>
  <!-- Dentro de uma coluna do DataTable -->
  <TrxDataTableActions :row="slotProps.data" :actions="actions" />

  <!-- Forçar modo menu dropdown -->
  <TrxDataTableActions :row="slotProps.data" :actions="actions" variant="menu" />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `row` | `T` | **required** | Dados da linha da tabela |
| `actions` | `TrxAction<T>[]` | **required** | Lista de ações disponíveis |
| `variant` | `'inline' \| 'menu' \| 'auto'` | `'auto'` | Modo de renderização |

::: tip Auto mode
No modo `auto`, o componente usa `inline` quando há ≤2 ações visíveis, e `menu` quando há mais.
:::

## Interface TrxAction

```typescript
interface TrxAction<T = unknown> {
  label: string
  icon?: string
  action: (row: T) => void | Promise<void>
  visible?: boolean | ((row: T) => boolean)
  disabled?: boolean | ((row: T) => boolean)
  severity?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  separator?: boolean  // Adiciona divisor acima desta ação (modo menu)
}
```

## Exemplo completo

```vue
<TrxDataTable :value="users">
  <TrxColumn header="Ações" style="width: 120px">
    <template #body="{ data }">
      <TrxDataTableActions
        :row="data"
        :actions="[
          {
            label: 'Ver detalhes',
            icon: 'pi pi-eye',
            action: (u) => router.push(`/users/${u.id}`),
          },
          {
            label: 'Editar',
            icon: 'pi pi-pencil',
            action: (u) => openEdit(u),
            visible: (u) => u.editable,
          },
          { separator: true, label: '', icon: '', action: () => {} },
          {
            label: 'Excluir',
            icon: 'pi pi-trash',
            severity: 'danger',
            action: (u) => confirmDelete(u),
          },
        ]"
      />
    </template>
  </TrxColumn>
</TrxDataTable>
```
