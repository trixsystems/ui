---
title: TrxConferencePanel
description: Painel de conferência multi-participante com mute/kick por participante.
category: Telecom
---

# TrxConferencePanel

Exibe participantes com animação de "falando", controles individuais de mute/kick, e botões globais de hold e encerramento.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| participants | `TrxConferenceParticipant[]` | `[]` | Participantes |
| myId | `string` | — | ID do usuário local (host) |

## Eventos

`mute(id)` · `unmute(id)` · `kick(id)` · `hold` · `end`

## Uso

```vue
<TrxConferencePanel :participants="conf" :my-id="myExtension" @end="endConf" />
```
