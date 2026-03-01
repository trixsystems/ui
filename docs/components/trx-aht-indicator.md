---
title: TrxAHTIndicator
description: Indicador de Tempo Médio de Atendimento (TMA/AHT) vs. meta.
category: Telecom
---

# TrxAHTIndicator

Barra colorida (verde/amarelo/vermelho) comparando TMA atual com meta, com breakdown opcional (fala/espera/ACW).

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| value | `number` | — | TMA atual em segundos |
| target | `number` | — | Meta em segundos |
| breakdown | `{ talk, hold, acw }` | — | Breakdown opcional |
| title | `string` | `'TMA'` | Título |

## Uso

```vue
<TrxAHTIndicator :value="currentAHT" :target="270" />
```
