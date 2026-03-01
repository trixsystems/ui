---
title: TrxRadarChart
description: Gráfico radar/aranha SVG com múltiplos datasets.
category: Gráficos
---

# TrxRadarChart

Visualização multidimensional com área preenchida e anéis de nível configuráveis.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| axes | `string[]` | — | Nomes dos eixos |
| datasets | `TrxRadarDataset[]` | — | Datasets |
| max | `number` | `100` | Valor máximo |
| levels | `number` | `4` | Quantidade de anéis |
| size | `number` | `300` | Tamanho SVG (px) |

## Uso

```vue
<TrxRadarChart :axes="['TMA','FCR','CSAT','Abandono']" :datasets="radarData" />
```
