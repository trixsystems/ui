---
title: TrxScatterChart
description: Gráfico de dispersão SVG com múltiplos datasets.
category: Gráficos
---

# TrxScatterChart

Plota pontos (x, y) em um plano cartesiano com grade e labels de eixo.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| datasets | `TrxScatterDataset[]` | — | Datasets |
| xLabel | `string` | `'X'` | Rótulo eixo X |
| yLabel | `string` | `'Y'` | Rótulo eixo Y |
| pointSize | `number` | `5` | Raio dos pontos |
| width | `number` | `400` | Largura SVG |
| height | `number` | `260` | Altura SVG |

## Uso

```vue
<TrxScatterChart :datasets="scatterData" x-label="TMA (s)" y-label="CSAT" />
```
