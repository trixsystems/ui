---
layout: default
title: TrxLoginPage
nav_order: 2
parent: Componentes
---

# TrxLoginPage
{: .no_toc }

Pagina de login completa com background animado e controles de acessibilidade.
{: .fs-6 .fw-300 }

## Indice
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Uso Basico

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { TrxLoginPage } from '@trx/ui-common/components'
import { useAuth } from '@trx/ui-common/composables'

const router = useRouter()
const loading = ref(false)
const error = ref<string | null>(null)

const auth = useAuth({
  appName: 'meu-app',
  authUrl: '/api/v1'
})

const handleLogin = async (credentials: {
  email: string
  password: string
  rememberMe: boolean
}) => {
  loading.value = true
  error.value = null

  const result = await auth.login(credentials)

  if (result.success) {
    router.push('/')
  } else {
    error.value = result.error || 'Falha no login'
  }

  loading.value = false
}
</script>

<template>
  <TrxLoginPage
    app-name="MeuApp"
    app-tagline="Sistema de Gestao"
    :loading="loading"
    :error="error"
    @submit="handleLogin"
  />
</template>
```

---

## Props

| Prop | Tipo | Default | Descricao |
|:-----|:-----|:--------|:----------|
| `appName` | `string` | - | Nome do app (obrigatorio) |
| `appTagline` | `string` | `''` | Subtitulo/tagline |
| `loading` | `boolean` | `false` | Estado de loading |
| `error` | `string \| null` | `null` | Mensagem de erro |
| `showRememberMe` | `boolean` | `true` | Exibir "Lembrar de mim" |
| `showForgotPassword` | `boolean` | `true` | Exibir "Esqueceu senha" |
| `showFontControls` | `boolean` | `true` | Controles de fonte |
| `showLanguageToggle` | `boolean` | `true` | Toggle de idioma |

---

## Eventos

| Evento | Payload | Descricao |
|:-------|:--------|:----------|
| `submit` | `{ email, password, rememberMe }` | Submissao do form |
| `forgotPassword` | - | Click em "Esqueceu senha" |

---

## Slots

| Slot | Descricao |
|:-----|:----------|
| `icon` | Icone/SVG customizado do app |
| `footer` | Conteudo do rodape |

---

## Exemplos

### Com Icone Customizado

```vue
<template>
  <TrxLoginPage
    app-name="Phone"
    app-tagline="Softphone WebRTC"
    :loading="loading"
    :error="error"
    @submit="handleLogin"
  >
    <template #icon>
      <svg viewBox="0 0 100 100" style="width: 50px; height: 50px;">
        <!-- Headset icon -->
        <path
          d="M20 50 Q20 22 50 22 Q80 22 80 50"
          fill="none"
          stroke="white"
          stroke-width="6"
        />
        <rect x="10" y="45" width="18" height="30" rx="5" fill="white" />
        <rect x="72" y="45" width="18" height="30" rx="5" fill="white" />
      </svg>
    </template>
  </TrxLoginPage>
</template>
```

### Sem Controles de Acessibilidade

```vue
<template>
  <TrxLoginPage
    app-name="Admin"
    :show-font-controls="false"
    :show-language-toggle="false"
    :show-remember-me="false"
    :loading="loading"
    :error="error"
    @submit="handleLogin"
  />
</template>
```

### Com Footer Customizado

```vue
<template>
  <TrxLoginPage
    app-name="Sistema"
    :loading="loading"
    :error="error"
    @submit="handleLogin"
  >
    <template #footer>
      <p>Suporte: (11) 1234-5678</p>
      <p>suporte@empresa.com</p>
    </template>
  </TrxLoginPage>
</template>
```

### Tratando Esqueceu Senha

```vue
<script setup lang="ts">
const handleForgotPassword = () => {
  router.push('/forgot-password')
}
</script>

<template>
  <TrxLoginPage
    app-name="Sistema"
    :loading="loading"
    :error="error"
    @submit="handleLogin"
    @forgot-password="handleForgotPassword"
  />
</template>
```

---

## Recursos Visuais

### Background Animado

O componente possui um background com "gradient orbs" animados que mudam de cor baseado no tema:

- **Light**: Tons de verde e azul
- **Dark**: Tons de roxo (Dracula theme)

### Controles de Acessibilidade

No canto superior direito:

1. **Tamanho de fonte** (A- / A+): Ajusta de 12px a 20px
2. **Tema**: Toggle entre Light e Dark
3. **Idioma**: Toggle PT/EN (quando habilitado)

As preferencias sao salvas no localStorage.

---

## Integracao com useAuth

O componente funciona perfeitamente com o composable `useAuth`:

```typescript
import { useAuth } from '@trx/ui-common/composables'

const auth = useAuth({
  appName: 'call',          // Nome do app para autenticacao unificada
  authUrl: '/api/v1',       // URL base da API
  tokenKey: 'access_token', // Key no localStorage
  onLogout: () => router.push('/login')
})

// No handleLogin
const result = await auth.login({
  email: credentials.email,
  password: credentials.password
})
```
