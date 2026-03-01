---
title: TrxQuickReplies
description: Botões de resposta rápida em formato chip para chat.
category: Omnichannel
---

# TrxQuickReplies

Exibe opções de resposta pré-definidas como chips clicáveis.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| replies | `TrxQuickReply[]` | `[]` | Opções disponíveis |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| select | `TrxQuickReply` | Resposta selecionada |

## Uso

```vue
<TrxQuickReplies :replies="options" @select="sendReply" />
```
