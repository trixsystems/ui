# TrxHeatmap

Grid de calor 7×24 (dias × horas) para visualizar padrões de atividade.

## Uso Básico

```vue
<TrxHeatmap :data="activityData" />
```

## Interface `TrxHeatmapCell`

```ts
interface TrxHeatmapCell {
  day: number    // 0 = Dom, 6 = Sáb
  hour: number   // 0–23
  value: number  // Quantidade de atividade
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `data` | `TrxHeatmapCell[]` | `[]` | Dados do heatmap |
| `maxValue` | `number` | — | Valor máximo (auto se omitido) |
| `cellSize` | `number` | `20` | Tamanho de cada célula em pixels |
| `showLabels` | `boolean` | `true` | Exibir labels de dia/hora |
| `days` | `string[]` | Dias PT-BR | Labels dos dias da semana |

## Exemplo

```vue
<script setup>
const heatmapData = calls.reduce((acc, call) => {
  const d = new Date(call.startedAt)
  const key = `${d.getDay()}-${d.getHours()}`
  acc[key] = (acc[key] || 0) + 1
  return acc
}, {})

const data = Object.entries(heatmapData).map(([key, value]) => {
  const [day, hour] = key.split('-').map(Number)
  return { day, hour, value }
})
</script>

<TrxHeatmap :data="data" :cell-size="24" />
```
