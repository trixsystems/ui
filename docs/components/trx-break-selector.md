---
title: TrxBreakSelector
description: Seletor de pausa/break com motivos configuráveis.
category: Telecom
---

# TrxBreakSelector

Permite ao agente iniciar ou encerrar uma pausa com motivo selecionado.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| reasons | `TrxBreakReason[]` | `[]` | Motivos disponíveis |
| modelValue | `TrxBreakReason \| null` | `null` | Pausa ativa |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| start | `TrxBreakReason` | Inicia pausa |
| end | — | Encerra pausa |

## Uso

```vue
<TrxBreakSelector :reasons="breakReasons" v-model="activeBreak" @start="onBreak" @end="onResume" />
```
