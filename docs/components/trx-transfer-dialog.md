---
title: TrxTransferDialog
description: Diálogo para transferência de chamada (blind, attended, conference).
category: Telecom
---

# TrxTransferDialog

Oferece busca de ramais/agentes e três modos de transferência.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| modelValue | `boolean` | `false` | Visibilidade |
| targets | `TrxTransferTarget[]` | `[]` | Destinos disponíveis |
| loading | `boolean` | `false` | Indica transferência em andamento |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| transfer | `(target, type)` | Transferência solicitada |
| update:modelValue | `boolean` | Fecha o diálogo |

## Uso

```vue
<TrxTransferDialog v-model="showTransfer" :targets="agents" @transfer="doTransfer" />
```
