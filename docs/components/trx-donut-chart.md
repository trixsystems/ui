# TrxDonutChart

Gráfico de rosca (donut) SVG com legenda e label central.

## Uso

```vue
<TrxDonutChart
  :slices="pieData"
  :size="160"
  label="Total"
  sublabel="ligações"
  :show-legend="true"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `slices` | `TrxDonutSlice[]` | `[]` | Fatias do gráfico |
| `size` | `number` | `160` | Tamanho do SVG em px |
| `thickness` | `number` | `30` | Espessura do anel |
| `label` | `string` | total | Label central principal |
| `sublabel` | `string` | — | Sublabel central |
| `showLegend` | `boolean` | `true` | Mostrar legenda |
| `animated` | `boolean` | `true` | Animação |

## Tipos

```ts
interface TrxDonutSlice {
  label: string
  value: number
  color?: string
}
```
