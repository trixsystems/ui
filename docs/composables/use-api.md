---
layout: default
title: useApi
nav_order: 4
parent: Composables
---

# useApi
{: .no_toc }

Composable para requisicoes HTTP com estado de loading e erro.
{: .fs-6 .fw-300 }

---

## Uso Basico

```typescript
import { useApi } from '@trx/ui-common/composables'

const { loading, error, data, get, post, put, del } = useApi()

// GET
const users = await get('/users')

// POST
const newUser = await post('/users', { name: 'Joao' })

// PUT
await put('/users/123', { name: 'Joao Silva' })

// DELETE
await del('/users/123')
```

---

## Retorno

| Propriedade | Tipo | Descricao |
|:------------|:-----|:----------|
| `loading` | `Ref<boolean>` | Estado de loading |
| `error` | `Ref<string \| null>` | Mensagem de erro |
| `data` | `Ref<any>` | Dados da resposta |
| `get` | `(url) => Promise` | Requisicao GET |
| `post` | `(url, data) => Promise` | Requisicao POST |
| `put` | `(url, data) => Promise` | Requisicao PUT |
| `del` | `(url) => Promise` | Requisicao DELETE |

---

## Exemplos

### Com Loading State

```vue
<template>
  <div v-if="loading">Carregando...</div>
  <div v-else-if="error">{{ error }}</div>
  <DataTable v-else :value="users" />
</template>

<script setup lang="ts">
import { useApi } from '@trx/ui-common/composables'
import { onMounted, ref } from 'vue'

const { loading, error, get } = useApi()
const users = ref([])

onMounted(async () => {
  users.value = await get('/users')
})
</script>
```

### POST com Tratamento

```typescript
const handleSubmit = async () => {
  try {
    const result = await post('/users', formData)
    toast.success('Usuario criado!')
    router.push('/users')
  } catch (e) {
    // Erro ja esta em error.value
    toast.error(error.value || 'Erro ao criar')
  }
}
```

---

## Cliente Customizado

Para configuracoes avancadas:

```typescript
import { createApiClient } from '@trx/ui-common/composables'

const api = createApiClient({
  baseURL: '/api/v2',
  tokenKey: 'my_token',
  onUnauthorized: () => router.push('/login')
})

// Usar o cliente
const users = await api.get('/users')
```

---

## Opcoes do Cliente

| Opcao | Tipo | Default | Descricao |
|:------|:-----|:--------|:----------|
| `baseURL` | `string` | `'/api/v1'` | URL base |
| `tokenKey` | `string` | `'access_token'` | Key do token |
| `onUnauthorized` | `() => void` | - | Callback 401 |
| `onError` | `(error) => void` | - | Callback de erro |
