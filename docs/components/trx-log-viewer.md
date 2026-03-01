---
title: TrxLogViewer
description: Visualizador de logs em tempo real com filtros por nível e busca.
category: Sistema
---

# TrxLogViewer

Filtros por level (debug/info/warn/error/success), busca full-text, auto-scroll e suporte a metadata expansível.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| logs | `TrxLogEntry[]` | — | Entradas de log |
| maxHeight | `string` | `'400px'` | Altura máxima |
| autoScroll | `boolean` | `true` | Rola para o fim ao receber novos logs |
| showTimestamp | `boolean` | `true` | Exibe timestamp |
| showSource | `boolean` | `true` | Exibe source/módulo |

## Uso

```vue
<TrxLogViewer :logs="appLogs" max-height="600px" />
```
