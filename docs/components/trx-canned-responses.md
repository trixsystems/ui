---
title: TrxCannedResponses
description: Seletor de respostas prontas com atalho de teclado e busca.
category: Omnichannel
---

# TrxCannedResponses

Abre com trigger configurável (ex: `/`), navega com ↑↓ e seleciona com Enter.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| responses | `TrxCannedResponse[]` | `[]` | Respostas prontas |
| modelValue | `boolean` | `false` | Visibilidade |
| trigger | `string` | `'/'` | Caractere de ativação |

## Eventos

`select(response)` · `update:modelValue`

## Uso

```vue
<TrxCannedResponses v-model="show" :responses="canned" @select="insertText" />
```
