# TrxLoginPage

Página de login completa com background animado, controles de acessibilidade e suporte a tema claro/escuro.

## Uso

```vue
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { TrxLoginPage, useAuth } from '@trx/ui-common'

const router = useRouter()
const auth = useAuth({ appName: 'call', authUrl: '/api/v1' })

async function handleLogin(credentials: { email: string; password: string; rememberMe: boolean }) {
  const result = await auth.login(credentials)
  if (result.success) router.push('/')
}
</script>

<template>
  <TrxLoginPage
    app-name="Call"
    app-tagline="PABX IP"
    :loading="auth.loading.value"
    :error="auth.error.value"
    @submit="handleLogin"
    @forgot-password="router.push('/recuperar-senha')"
  />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `appName` | `string` | **required** | Nome do app exibido no header |
| `appTagline` | `string` | `''` | Subtítulo/tagline abaixo do nome |
| `loading` | `boolean` | `false` | Estado de carregamento — desabilita o botão |
| `error` | `string \| null` | — | Mensagem de erro exibida no formulário |
| `showRememberMe` | `boolean` | `true` | Exibe checkbox "Lembrar de mim" |
| `showForgotPassword` | `boolean` | `true` | Exibe link "Esqueceu sua senha?" |
| `showFontControls` | `boolean` | `true` | Exibe botões A-/A+ de tamanho de fonte |
| `showLanguageToggle` | `boolean` | `true` | Exibe toggle PT/EN de idioma |

## Eventos

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `submit` | `{ email: string; password: string; rememberMe: boolean }` | Submissão do formulário válido |
| `forgotPassword` | — | Clique em "Esqueceu sua senha?" |

## Slots

| Slot | Descrição |
|:-----|:----------|
| `icon` | Ícone/SVG customizado exibido no header (padrão: `pi-box`) |
| `footer` | Rodapé do card (padrão: "Powered by TRIX Systems") |

## Com ícone customizado

```vue
<TrxLoginPage app-name="Phone" app-tagline="Softphone WebRTC" @submit="handleLogin">
  <template #icon>
    <svg viewBox="0 0 100 100" style="width: 50px; height: 50px;">
      <path d="M20 50 Q20 22 50 22 Q80 22 80 50" fill="none" stroke="white" stroke-width="6" />
      <rect x="10" y="45" width="18" height="30" rx="5" fill="white" />
      <rect x="72" y="45" width="18" height="30" rx="5" fill="white" />
    </svg>
  </template>
</TrxLoginPage>
```

## Sem controles de acessibilidade

```vue
<TrxLoginPage
  app-name="Admin"
  :show-font-controls="false"
  :show-language-toggle="false"
  :show-remember-me="false"
  :loading="loading"
  :error="error"
  @submit="handleLogin"
/>
```

## Recursos visuais

- **Background animado** — gradient orbs flutuantes adaptados ao tema (verde no light, roxo no dark)
- **Controles no canto superior direito** — font size, tema e idioma
- **Validação em tempo real** — email e senha com feedback visual
- **Tema** — herda `.dark` do `html` via `localStorage`

::: tip
`TrxLoginPage` é a versão completa com background animado. Para um formulário embutido em layouts existentes, use [`TrxLoginForm`](/components/trx-login-form).
:::
