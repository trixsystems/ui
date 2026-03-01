---
title: TrxAgentRanking
description: Ranking de agentes com medalhas e barras de progresso.
category: Telecom
---

# TrxAgentRanking

Exibe um ranking com medalhas (ouro/prata/bronze) e indicadores de variação.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| agents | `TrxAgentRank[]` | `[]` | Lista de agentes |
| highlight | `string` | — | ID do agente a destacar |
| maxValue | `number` | — | Valor máximo para barra proporcional |
| title | `string` | `'Ranking de Agentes'` | Título |

## Uso

```vue
<TrxAgentRanking :agents="ranking" highlight="me" />
```
