# TrxProgressRing

Anel de progresso circular em SVG com label central e animação.

## Uso

```vue
<TrxProgressRing
  :value="72"
  :max="100"
  label="TMA"
  unit="%"
  :animate="true"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `number` | `0` | Valor atual |
| `max` | `number` | `100` | Valor máximo |
| `size` | `number` | `120` | Tamanho em px |
| `thickness` | `number` | `10` | Espessura do anel |
| `color` | `string` | accent | Cor do progresso |
| `trackColor` | `string` | bg | Cor da trilha |
| `label` | `string` | — | Label central |
| `showValue` | `boolean` | `true` | Mostrar valor |
| `unit` | `string` | `''` | Unidade |
| `animate` | `boolean` | `true` | Animação |
