---
layout: default
title: Composables
nav_order: 4
has_children: true
permalink: /composables/
---

# Composables
{: .no_toc }

Funcoes reativas reutilizaveis para Vue 3.
{: .fs-6 .fw-300 }

---

## Visao Geral

O @trx/ui-common fornece composables para funcionalidades comuns entre os apps TRX.

## Lista de Composables

| Composable | Descricao |
|:-----------|:----------|
| [useAuth](./use-auth) | Autenticacao unificada |
| [useTheme](./use-theme) | Gerenciamento de tema |
| [useToast](./use-toast) | Notificacoes toast |
| [useApi](./use-api) | Cliente HTTP |

---

## Importacao

```typescript
import {
  useAuth,
  useTheme,
  useToast,
  useApi,
  createApiClient
} from '@trx/ui-common/composables'
```
