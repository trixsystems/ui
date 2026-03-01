---
title: TrxOfflineIndicator
description: Banner automático de sem conexão usando eventos online/offline do browser.
category: Sistema
---

# TrxOfflineIndicator

Detecta `window.offline/online` e exibe um banner no topo ou base da tela. Mostra "Reconectando..." ao voltar.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| position | `'top' \| 'bottom'` | `'top'` | Posição do banner |
| reconnectLabel | `string` | `'Reconectando...'` | Texto ao reconectar |

## Uso

```vue
<!-- Em App.vue -->
<TrxOfflineIndicator position="top" />
```
