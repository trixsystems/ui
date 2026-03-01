---
title: TrxContactTimezone
description: Exibe o horário local do contato com indicador de horário comercial.
category: Omnichannel
---

# TrxContactTimezone

Relógio ao vivo usando `Intl.DateTimeFormat`, detecta horário comercial (8–18h) e noturno.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| timezone | `string` | — | Ex: `'America/Sao_Paulo'` |
| name | `string` | — | Nome do fuso para exibição |
| showDiff | `boolean` | `true` | Mostra diferença do horário local |

## Uso

```vue
<TrxContactTimezone timezone="America/New_York" name="New York" />
```
