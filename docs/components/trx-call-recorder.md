---
title: TrxCallRecorder
description: Controles de gravação de chamada (iniciar, pausar, retomar, parar).
category: Telecom
---

# TrxCallRecorder

Máquina de estado: idle → recording → paused → stopped. Exibe temporizador e indicador pulsante.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| state | `TrxRecordingState` | `'idle'` | Estado atual |
| duration | `number` | `0` | Segundos gravados |

## Eventos

`start` · `pause` · `resume` · `stop`

## Uso

```vue
<TrxCallRecorder :state="recState" :duration="recSeconds" @start="startRec" @stop="stopRec" />
```
