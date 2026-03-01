# TrxBarChart

Gráfico de barras SVG puro com suporte a múltiplos datasets, modo empilhado e labels.

## Uso

```vue
<TrxBarChart
  :labels="['Jan', 'Fev', 'Mar']"
  :datasets="datasets"
  :height="220"
  :stacked="false"
  :show-values="true"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `labels` | `string[]` | `[]` | Labels do eixo X |
| `datasets` | `TrxBarDataset[]` | `[]` | Conjuntos de dados |
| `height` | `number` | `220` | Altura em px |
| `showGrid` | `boolean` | `true` | Mostrar grade |
| `showValues` | `boolean` | `false` | Mostrar valores sobre barras |
| `stacked` | `boolean` | `false` | Barras empilhadas |

## Tipos

```ts
interface TrxBarDataset {
  label: string
  data: number[]
  color?: string
}
```
