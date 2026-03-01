---
title: TrxPieChart
description: Gráfico de pizza SVG com legenda e percentual por fatia.
category: Gráficos
---

# TrxPieChart

Exibe distribuição em fatias com legenda colorida e percentuais nas fatias > 8%.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| slices | `TrxPieSlice[]` | — | Fatias (label, value, color?) |
| size | `number` | `200` | Tamanho SVG |
| title | `string` | — | Título |

## Uso

```vue
<TrxPieChart :slices="channels" title="Canais de Atendimento" />
```
