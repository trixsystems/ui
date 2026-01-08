---
layout: default
title: useAuth
nav_order: 1
parent: Composables
---

# useAuth
{: .no_toc }

Composable para autenticacao unificada entre todos os apps TRX.
{: .fs-6 .fw-300 }

## Indice
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Uso Basico

```typescript
import { useAuth } from '@trx/ui-common/composables'
import { useRouter } from 'vue-router'

const router = useRouter()

const auth = useAuth({
  appName: 'call',           // Nome do app
  authUrl: '/api/v1',        // URL base da API
  tokenKey: 'access_token',  // Key no localStorage (opcional)
  onLogout: () => router.push('/login')
})

// Login
const result = await auth.login({
  email: 'usuario@email.com',
  password: 'senha123'
})

if (result.success) {
  router.push('/dashboard')
} else {
  console.error(result.error)
}
```

---

## Opcoes

| Opcao | Tipo | Default | Descricao |
|:------|:-----|:--------|:----------|
| `appName` | `string` | - | Nome do app (obrigatorio) |
| `authUrl` | `string` | `'/api/v1'` | URL base da API de autenticacao |
| `tokenKey` | `string` | `'access_token'` | Key para salvar token no localStorage |
| `refreshKey` | `string` | `'refresh_token'` | Key para refresh token |
| `userKey` | `string` | `'user'` | Key para dados do usuario |
| `onLogout` | `() => void` | - | Callback executado apos logout |

---

## Retorno

O composable retorna:

```typescript
{
  // Estado reativo
  user: Ref<User | null>          // Usuario logado
  token: Ref<string | null>       // Access token
  isAuthenticated: Ref<boolean>   // Se esta autenticado
  isLoading: Ref<boolean>         // Estado de loading
  isAdmin: Ref<boolean>           // Se e admin
  isSupervisor: Ref<boolean>      // Se e admin ou supervisor

  // Metodos
  initialize: () => Promise<void>
  login: (credentials) => Promise<AuthResult>
  logout: () => Promise<void>
  refreshAccessToken: () => Promise<boolean>
  changePassword: (current, newPassword) => Promise<AuthResult>
}
```

---

## Exemplos

### Inicializacao (verificar token existente)

```typescript
// No App.vue ou main.ts
onMounted(async () => {
  await auth.initialize()

  if (!auth.isAuthenticated.value && route.meta.requiresAuth) {
    router.push('/login')
  }
})
```

### Login com Tratamento de Erro

```typescript
const loading = ref(false)
const error = ref<string | null>(null)

const handleLogin = async (email: string, password: string) => {
  loading.value = true
  error.value = null

  const result = await auth.login({ email, password })

  if (result.success) {
    router.push('/dashboard')
  } else {
    error.value = result.error || 'Credenciais invalidas'
  }

  loading.value = false
}
```

### Verificar Permissoes

```typescript
// No template
<template>
  <div v-if="auth.isAdmin.value">
    <Button label="Configuracoes Avancadas" />
  </div>

  <div v-if="auth.isSupervisor.value">
    <Button label="Relatorios" />
  </div>
</template>
```

### Logout

```typescript
const handleLogout = async () => {
  await auth.logout()
  // O callback onLogout sera executado automaticamente
}
```

### Alterar Senha

```typescript
const changePassword = async () => {
  const result = await auth.changePassword(
    currentPassword.value,
    newPassword.value
  )

  if (result.success) {
    toast.success('Senha alterada com sucesso!')
  } else {
    toast.error(result.error || 'Erro ao alterar senha')
  }
}
```

### Refresh Token

```typescript
// O refresh e feito automaticamente quando o token expira
// Mas voce pode chamar manualmente:

const refreshed = await auth.refreshAccessToken()
if (!refreshed) {
  // Token expirou e nao foi possivel renovar
  router.push('/login')
}
```

---

## Autenticacao Unificada

O `useAuth` trabalha com o endpoint de autenticacao unificada:

```
POST /api/v1/unified-auth/login
{
  "email": "usuario@email.com",
  "password": "senha123",
  "app_name": "call"  // Nome do app
}
```

O backend verifica:
1. Credenciais do usuario
2. Se o usuario tem acesso ao app especificado
3. Role e permissoes do usuario no app

---

## Tipos

```typescript
interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'supervisor' | 'agent' | 'user'
  permissions?: string[]
}

interface LoginCredentials {
  email: string
  password: string
}

interface AuthResult {
  success: boolean
  error?: string
  user?: User
}

interface UseAuthOptions {
  appName: string
  authUrl?: string
  tokenKey?: string
  refreshKey?: string
  userKey?: string
  onLogout?: () => void
}
```

---

## Integracao com Router Guard

```typescript
// router/index.ts
import { useAuth } from '@trx/ui-common/composables'

const router = createRouter({ ... })

router.beforeEach(async (to, from, next) => {
  const auth = useAuth({ appName: 'meu-app' })

  // Inicializar se ainda nao foi
  if (!auth.user.value) {
    await auth.initialize()
  }

  if (to.meta.requiresAuth && !auth.isAuthenticated.value) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else if (to.meta.requiresAdmin && !auth.isAdmin.value) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})
```
