# TrxColumnConfig

Botão dropdown para configurar visibilidade de colunas de uma tabela.

## Uso Básico

```vue
<TrxColumnConfig :columns="columns" v-model="visibleColumns" />
```

## Interface `TrxColumnDef`

```ts
interface TrxColumnDef {
  key: string
  label: string
  required?: boolean   // colunas obrigatórias não podem ser ocultadas
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `columns` | `TrxColumnDef[]` | — | Todas as colunas disponíveis |
| `modelValue` | `string[]` | — | Chaves das colunas visíveis |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `string[]` | Colunas visíveis atualizadas |

## Exemplo Completo

```vue
<script setup>
const columns = [
  { key: 'id',     label: 'ID',        required: true },
  { key: 'name',   label: 'Nome',      required: true },
  { key: 'phone',  label: 'Telefone' },
  { key: 'status', label: 'Status' },
  { key: 'date',   label: 'Data' },
  { key: 'agent',  label: 'Agente' },
]

const visibleColumns = ref(['id', 'name', 'phone', 'status'])

const tableColumns = computed(() =>
  columns.filter(c => visibleColumns.value.includes(c.key))
)
</script>

<template>
  <TrxTableToolbar>
    <template #actions>
      <TrxColumnConfig :columns="columns" v-model="visibleColumns" />
    </template>
  </TrxTableToolbar>

  <TrxDataTable :columns="tableColumns" :data="data" />
</template>
```
