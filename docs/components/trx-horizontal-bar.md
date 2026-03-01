---
title: TrxHorizontalBar
description: Gráfico de barras horizontais com linhas de meta opcionais.
category: Gráficos
---

# TrxHorizontalBar

Exibe barras horizontais por item, com cor customizável e linha de meta vertical.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| items | `TrxHBarItem[]` | — | Itens (label, value, color?, target?) |
| max | `number` | — | Valor máximo da escala |
| title | `string` | — | Título |
| barHeight | `number` | `28` | Altura de cada barra |

## Uso

```vue
<TrxHorizontalBar :items="rankItems" :max="100" title="Desempenho por Agente" />
```
