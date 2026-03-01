# TrxDateRangePicker

Input de intervalo de datas com campos de início e fim.

## Uso Básico

```vue
<TrxDateRangePicker v-model="dateRange" />
```

## Interface `TrxDateRange`

```ts
interface TrxDateRange {
  start: string | null   // formato YYYY-MM-DD
  end: string | null
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `TrxDateRange` | `{start: null, end: null}` | Intervalo selecionado |
| `disabled` | `boolean` | `false` | Desabilitar inputs |
| `startPlaceholder` | `string` | `'Data inicial'` | Placeholder do início |
| `endPlaceholder` | `string` | `'Data final'` | Placeholder do fim |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `TrxDateRange` | Intervalo atualizado |

## Exemplos

```vue
<script setup>
const range = ref({ start: null, end: null })

watch(range, ({ start, end }) => {
  if (start && end) loadData(start, end)
})
</script>

<TrxDateRangePicker
  v-model="range"
  start-placeholder="De"
  end-placeholder="Até"
/>
```
