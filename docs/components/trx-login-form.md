# TrxLoginForm

Formulário de autenticação completo com email, senha e suporte a slots customizáveis.

## Uso

```vue
<script setup lang="ts">
import { TrxLoginForm } from '@trx/ui-common'
import { useAuth } from '@trx/ui-common'

const auth = useAuth({ appName: 'call', authUrl: '/api/v1' })

async function handleLogin(credentials: { email: string; password: string }) {
  await auth.login(credentials)
}
</script>

<template>
  <TrxLoginForm
    app-name="Call"
    app-title="Entrar no TRX Call"
    :loading="auth.loading.value"
    :error="auth.error.value"
    @submit="handleLogin"
  />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `appName` | `string` | — | Nome do app exibido ao lado do logo (ex: `"Call"`) |
| `appTitle` | `string` | `'Entrar'` | Título do formulário |
| `loading` | `boolean` | `false` | Estado de carregamento — desabilita o botão |
| `error` | `string \| null` | — | Mensagem de erro exibida no topo do form |

## Eventos

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `submit` | `{ email: string; password: string }` | Disparado ao submeter o formulário com campos válidos |

## Slots

| Slot | Descrição |
|:-----|:----------|
| `subtitle` | Texto abaixo do título (padrão: "Entre com suas credenciais...") |
| `forgot-password` | Link de recuperação de senha |
| `actions` | Ações extras abaixo do botão de login |
| `footer` | Rodapé do card (padrão: copyright TRX Systems) |

## Customizando slots

```vue
<TrxLoginForm
  app-name="Switch"
  :loading="loading"
  :error="error"
  @submit="handleLogin"
>
  <template #subtitle>
    Acesse o painel de telefonia corporativa
  </template>

  <template #forgot-password>
    <router-link to="/recuperar-senha">Esqueceu a senha?</router-link>
  </template>

  <template #actions>
    <p class="text-sm text-muted">
      Problemas para entrar? <a href="mailto:suporte@trx.com">Contate o suporte</a>
    </p>
  </template>
</TrxLoginForm>
```

## Com useAuth

```vue
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { TrxLoginForm, useAuth } from '@trx/ui-common'

const router = useRouter()
const auth = useAuth({
  appName: 'call',
  authUrl: '/api/v1',
  onLogout: () => router.push('/login')
})

async function handleLogin(credentials: { email: string; password: string }) {
  const ok = await auth.login(credentials)
  if (ok) router.push('/')
}
</script>

<template>
  <TrxLoginForm
    app-name="Call"
    :loading="auth.loading.value"
    :error="auth.error.value"
    @submit="handleLogin"
  />
</template>
```

::: tip
`TrxLoginForm` não faz chamadas de API — apenas gerencia estado local e emite o evento `submit`. A integração com autenticação fica na responsabilidade do app consumidor.
:::
