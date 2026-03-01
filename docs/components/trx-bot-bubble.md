---
title: TrxBotBubble
description: Balão de mensagem de bot com opções interativas.
category: Omnichannel
---

# TrxBotBubble

Avatar animado do bot, suporte a typing state e botões de opção abaixo da mensagem.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| message | `string` | — | Texto da mensagem |
| options | `TrxBotOption[]` | `[]` | Botões de ação |
| loading | `boolean` | `false` | Exibe typing indicator |
| botName | `string` | `'Bot'` | Nome do bot |

## Eventos

`option(opt)` — opção selecionada

## Uso

```vue
<TrxBotBubble message="Posso ajudá-lo?" :options="botOpts" @option="handleBot" />
```
