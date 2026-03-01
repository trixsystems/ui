---
title: TrxWaterfallChart
description: Gráfico cascata/waterfall para variações incrementais.
category: Gráficos
---

# TrxWaterfallChart

Exibe contribuições positivas e negativas para um total acumulado, com linhas conectoras.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| bars | `TrxWaterfallBar[]` | — | Barras (label, value, total?) |
| title | `string` | — | Título |
| height | `number` | `240` | Altura SVG |

## Uso

```vue
<TrxWaterfallChart :bars="waterfallData" title="Variação Mensal" />
```
