# TrxFunnelChart

Gráfico de funil com barras proporcionais e taxa de conversão.

## Uso

```vue
<TrxFunnelChart
  :steps="funnelSteps"
  :show-values="true"
  :show-percent="true"
  :animated="true"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `steps` | `TrxFunnelStep[]` | `[]` | Etapas do funil |
| `showValues` | `boolean` | `true` | Mostrar valores absolutos |
| `showPercent` | `boolean` | `true` | Mostrar percentual |
| `animated` | `boolean` | `true` | Animação de entrada |

## Tipos

```ts
interface TrxFunnelStep {
  label: string
  value: number
  color?: string
}
```
