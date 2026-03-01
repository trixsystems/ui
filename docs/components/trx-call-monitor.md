---
title: TrxCallMonitor
description: Painel de monitoramento de chamadas ativas (listen/whisper/barge).
category: Telecom
---

# TrxCallMonitor

Lista chamadas em andamento e permite ao supervisor escutar, susurrar ou entrar na chamada.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| calls | `TrxMonitorCall[]` | — | Chamadas ativas |
| activeId | `string \| null` | `null` | ID da chamada monitorada |
| activeMode | `TrxMonitorMode \| null` | `null` | Modo ativo |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| monitor | `(call, mode)` | Inicia monitoramento |
| stop | — | Para monitoramento |

## Uso

```vue
<TrxCallMonitor :calls="activeCalls" @monitor="startMonitor" @stop="stopMonitor" />
```
