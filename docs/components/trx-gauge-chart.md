# TrxGaugeChart

Gráfico de gauge (velocímetro) semi-circular em canvas. Cor automática baseada no valor.

## Uso Básico

```vue
<TrxGaugeChart :value="75" label="CPU" unit="%" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `number` | `0` | Valor atual |
| `min` | `number` | `0` | Valor mínimo |
| `max` | `number` | `100` | Valor máximo |
| `label` | `string` | — | Rótulo abaixo do valor |
| `unit` | `string` | — | Unidade (%, ms, etc.) |
| `size` | `number` | `160` | Tamanho em pixels |
| `color` | `string` | `'auto'` | Cor da barra (`auto` = por threshold) |
| `thickness` | `number` | `12` | Espessura do arco |

### Cor automática

- **Verde** (`success`): < 60%
- **Amarelo** (`warning`): 60–80%
- **Vermelho** (`danger`): > 80%

## Exemplo

```vue
<TrxGaugeChart
  :value="agentOccupancy"
  :max="100"
  label="Ocupação"
  unit="%"
  :size="140"
/>
```
