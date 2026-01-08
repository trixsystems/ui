---
layout: default
title: TrxNotFound
nav_order: 5
parent: Componentes
---

# TrxNotFound
{: .no_toc }

Pagina de erro 404 padronizada.
{: .fs-6 .fw-300 }

---

## Uso Basico

```vue
<script setup lang="ts">
import { TrxNotFound } from '@trx/ui-common/components'
</script>

<template>
  <TrxNotFound />
</template>
```

---

## Props

| Prop | Tipo | Default | Descricao |
|:-----|:-----|:--------|:----------|
| `code` | `string \| number` | `'404'` | Codigo do erro |
| `title` | `string` | `'Pagina nao encontrada'` | Titulo |
| `message` | `string` | `'A pagina que voce esta procurando...'` | Mensagem |
| `buttonLabel` | `string` | `'Voltar ao Inicio'` | Texto do botao |
| `redirectTo` | `string` | `'/'` | Rota de redirecionamento |

---

## Exemplos

### Padrao

```vue
<TrxNotFound />
```

### Customizado

```vue
<TrxNotFound
  code="403"
  title="Acesso Negado"
  message="Voce nao tem permissao para acessar esta pagina."
  button-label="Voltar ao Dashboard"
  redirect-to="/dashboard"
/>
```

### Erro 500

```vue
<TrxNotFound
  code="500"
  title="Erro Interno"
  message="Ocorreu um erro inesperado. Tente novamente mais tarde."
  button-label="Tentar Novamente"
  redirect-to="/"
/>
```

---

## Configuracao de Rota

```typescript
// router/index.ts
const routes = [
  // ... outras rotas
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  }
]
```

```vue
<!-- views/NotFoundView.vue -->
<template>
  <TrxNotFound />
</template>

<script setup lang="ts">
import { TrxNotFound } from '@trx/ui-common/components'
</script>
```
