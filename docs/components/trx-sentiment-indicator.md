---
title: TrxSentimentIndicator
description: Badge de sentimento da conversa (positivo/neutro/negativo).
category: Omnichannel
---

# TrxSentimentIndicator

Exibe emoji + cor semântica e barra de score opcional.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| sentiment | `TrxSentiment` | `'neutral'` | Sentimento detectado |
| score | `number` | — | Score 0–100 para barra |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho |

## Uso

```vue
<TrxSentimentIndicator sentiment="positive" :score="85" />
```
