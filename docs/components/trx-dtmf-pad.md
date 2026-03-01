---
title: TrxDTMFPad
description: Teclado numérico DTMF para discagem telefônica.
category: Telecom
---

# TrxDTMFPad

Teclado 3×4 com dígitos DTMF (0–9, *, #) e sublegendas alfabéticas.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho do teclado |
| disabled | `boolean` | `false` | Desabilita interação |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| digit | `string` | Dígito pressionado |

## Uso

```vue
<TrxDTMFPad @digit="d => number += d" />
```
