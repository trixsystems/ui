# TrxSLAIndicator

Indicador de prazo SLA com progresso colorido. Verde → amarelo → vermelho → violado.

## Uso

```vue
<TrxSLAIndicator
  deadline="2026-03-01T18:00:00"
  created-at="2026-03-01T08:00:00"
  :warning-threshold="0.25"
  label="SLA de Resolução"
  :show-progress="true"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `deadline` | `string` | — | Data/hora limite (ISO) |
| `createdAt` | `string` | — | Data/hora de criação (ISO) |
| `warningThreshold` | `number` | `0.25` | % restante para alerta |
| `label` | `string` | `'SLA'` | Rótulo |
| `showProgress` | `boolean` | `true` | Mostrar barra de progresso |

## Estados de Cor

| Percentual Restante | Cor |
|---------------------|-----|
| > 25% | Verde (success) |
| 0–25% | Amarelo (warning) |
| Violado | Vermelho (danger) |
