---
title: TrxTypingIndicator
description: Indicador de digitação para interfaces de chat.
category: Omnichannel
---

# TrxTypingIndicator

Duas variantes: `bubble` (três pontos animados em balão) e `text` (texto inline).

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| variant | `'bubble' \| 'text'` | `'bubble'` | Estilo do indicador |
| name | `string` | — | Nome de quem está digitando |

## Uso

```vue
<TrxTypingIndicator variant="bubble" name="Maria" />
```
