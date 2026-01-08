---
layout: default
title: Componentes
nav_order: 3
has_children: true
permalink: /components/
---

# Componentes
{: .no_toc }

Biblioteca de componentes Vue 3 reutilizaveis.
{: .fs-6 .fw-300 }

---

## Visao Geral

O @trx/ui-common fornece componentes prontos para uso que seguem o design system TRX.

## Categorias

### Layout
Componentes para estrutura de paginas.

| Componente | Descricao |
|:-----------|:----------|
| [TrxAppLayout](./trx-app-layout) | Layout principal com sidebar e topbar |
| [TrxPageHeader](./trx-page-header) | Cabecalho de pagina |

### Autenticacao
Componentes para fluxos de login.

| Componente | Descricao |
|:-----------|:----------|
| [TrxLoginPage](./trx-login-page) | Pagina de login completa |
| [TrxLoginForm](./trx-login-form) | Formulario de login |

### Feedback
Componentes para feedback visual.

| Componente | Descricao |
|:-----------|:----------|
| [TrxStatusBadge](./trx-status-badge) | Badge de status |
| [TrxLoadingOverlay](./trx-loading-overlay) | Overlay de carregamento |
| [TrxEmptyState](./trx-empty-state) | Estado vazio |
| [TrxNotFound](./trx-not-found) | Pagina 404 |

### UI Base
Componentes basicos de interface.

| Componente | Descricao |
|:-----------|:----------|
| [TrxLogo](./trx-logo) | Logo TRX |
| [TrxThemeToggle](./trx-theme-toggle) | Toggle de tema |

---

## Importacao

```typescript
import {
  // Layout
  TrxAppLayout,
  TrxPageHeader,

  // Auth
  TrxLoginPage,
  TrxLoginForm,

  // Feedback
  TrxStatusBadge,
  TrxLoadingOverlay,
  TrxEmptyState,
  TrxNotFound,

  // Base
  TrxLogo,
  TrxThemeToggle,

  // Types
  type MenuItem,
  type MenuSection
} from '@trx/ui-common/components'
```
