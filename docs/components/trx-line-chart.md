# TrxLineChart

Gráfico de linhas SVG puro com suporte a múltiplos datasets, área preenchida e curvas suaves.

## Uso

```vue
<TrxLineChart
  :labels="['Jan', 'Fev', 'Mar']"
  :datasets="datasets"
  :height="220"
  :filled="true"
  :smooth="true"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `labels` | `string[]` | `[]` | Labels do eixo X |
| `datasets` | `TrxLineDataset[]` | `[]` | Conjuntos de dados |
| `height` | `number` | `200` | Altura em px |
| `showDots` | `boolean` | `true` | Mostrar pontos |
| `showGrid` | `boolean` | `true` | Mostrar grade |
| `filled` | `boolean` | `false` | Área preenchida |
| `smooth` | `boolean` | `true` | Curvas suaves (cubic bezier) |

## Tipos

```ts
interface TrxLineDataset {
  label: string
  data: number[]
  color?: string
}
```
