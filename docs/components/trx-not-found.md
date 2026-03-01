# TrxNotFound

Página de erro 404 (ou qualquer código) com código destacado e botão de retorno.

## Uso

```vue
<script setup lang="ts">
import { TrxNotFound } from '@trx/ui-common'
</script>

<template>
  <!-- Padrão (404) -->
  <TrxNotFound />

  <!-- Personalizado -->
  <TrxNotFound
    code="403"
    title="Acesso Negado"
    message="Você não tem permissão para acessar esta página."
    button-label="Voltar ao Dashboard"
    redirect-to="/dashboard"
  />

  <!-- Erro de servidor -->
  <TrxNotFound
    code="500"
    title="Erro Interno"
    message="Ocorreu um erro inesperado. Tente novamente mais tarde."
    button-label="Tentar Novamente"
    redirect-to="/"
  />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `code` | `string \| number` | `'404'` | Código do erro exibido em destaque |
| `title` | `string` | `'Pagina nao encontrada'` | Título da mensagem de erro |
| `message` | `string` | `'A pagina que voce esta...'` | Descrição do erro |
| `buttonLabel` | `string` | `'Voltar ao Inicio'` | Texto do botão de ação |
| `redirectTo` | `string` | `'/'` | Rota de destino ao clicar no botão |

## Configuração de rota

```typescript
// router/index.ts
const routes = [
  // ...outras rotas
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  }
]
```

```vue
<!-- views/NotFoundView.vue -->
<script setup lang="ts">
import { TrxNotFound } from '@trx/ui-common'
</script>

<template>
  <TrxNotFound />
</template>
```

## Visual

- Código do erro em fonte 8rem com cor `--trx-accent-color`
- No dark mode: gradiente roxo/rosa via `background-clip: text`
- Botão usa `router-link` internamente — requer `vue-router`
