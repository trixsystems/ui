# TrxErrorPage

Página de erro completa para os principais códigos HTTP (404, 403, 500, 503).

## Uso

```vue
<script setup lang="ts">
import { TrxErrorPage } from '@trx/ui-common'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <!-- 404 — Página não encontrada -->
  <TrxErrorPage
    :code="404"
    @back="router.back()"
  />

  <!-- 403 — Sem permissão -->
  <TrxErrorPage
    :code="403"
    @back="router.push('/dashboard')"
  />

  <!-- 500 — Erro interno -->
  <TrxErrorPage
    :code="500"
    @retry="window.location.reload()"
    @back="router.push('/')"
  />

  <!-- 503 — Serviço indisponível -->
  <TrxErrorPage :code="503" />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `code` | `404 \| 403 \| 500 \| 503` | **required** | Código de erro HTTP |

## Eventos

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `back` | — | Botão "Voltar" clicado |
| `retry` | — | Botão "Tentar novamente" clicado (500/503) |

## Conteúdo por código

| Código | Título | Descrição |
|:-------|:-------|:----------|
| `404` | Página não encontrada | A página que você procura não existe |
| `403` | Acesso negado | Você não tem permissão para acessar este recurso |
| `500` | Erro interno | Algo deu errado no servidor |
| `503` | Serviço indisponível | O sistema está em manutenção |

## Uso no Vue Router

```typescript
// router/index.ts
import { TrxErrorPage } from '@trx/ui-common'

const routes = [
  // ...suas rotas
  {
    path: '/403',
    component: () => h(TrxErrorPage, { code: 403 }),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => h(TrxErrorPage, { code: 404 }),
  },
]
```
