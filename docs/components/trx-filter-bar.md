# TrxFilterBar

Exibe filtros ativos como chips removíveis. Ideal para dashboards e listagens filtradas.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxFilterBar, type TrxFilter } from '@trx/ui-common'

const filters = ref<TrxFilter[]>([
  { key: 'status', label: 'Status', value: 'Ativo' },
  { key: 'type', label: 'Tipo', value: 'Entrada' },
  { key: 'date', label: 'Período', value: 'Hoje' },
])

function removeFilter(key: string) {
  filters.value = filters.value.filter(f => f.key !== key)
}

function clearAll() {
  filters.value = []
}
</script>

<template>
  <TrxFilterBar
    :filters="filters"
    @remove="removeFilter"
    @clear="clearAll"
  />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `filters` | `TrxFilter[]` | **required** | Lista de filtros ativos |
| `clearLabel` | `string` | `'Limpar filtros'` | Label do botão de limpar todos |

## Eventos

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `remove` | `string` (key) | Emitido ao remover um filtro |
| `clear` | — | Emitido ao limpar todos os filtros |

## Interface TrxFilter

```typescript
interface TrxFilter {
  key: string      // Identificador único
  label: string    // Nome do campo (ex: "Status")
  value: string    // Valor ativo (ex: "Ativo")
}
```
