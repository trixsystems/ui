---
title: TrxPivotTable
description: Tabela pivot com heatmap de células e totais automáticos.
category: Dados
---

# TrxPivotTable

Agrupa dados por linha e coluna, calcula agregação (sum/count/avg/min/max) e aplica heatmap proporcional.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| data | `TrxPivotRow[]` | — | Dataset flat |
| rowField | `string` | — | Campo para linhas |
| colField | `string` | — | Campo para colunas |
| valueField | `string` | — | Campo de valor |
| aggregation | `'sum' \| 'count' \| 'avg' \| 'min' \| 'max'` | `'sum'` | Tipo de agregação |
| showTotals | `boolean` | `true` | Exibe linha/coluna de totais |

## Uso

```vue
<TrxPivotTable
  :data="calls"
  row-field="agent"
  col-field="month"
  value-field="duration"
  aggregation="sum"
/>
```
