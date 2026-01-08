---
layout: default
title: Migracao
nav_order: 4
parent: Guia
---

# Migracao
{: .no_toc }

Como migrar apps existentes para usar o @trx/ui-common.
{: .fs-6 .fw-300 }

## Indice
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Visao Geral

A migracao envolve:

1. Adicionar @trx/ui-common como dependencia
2. Atualizar configuracao do PrimeVue
3. Substituir CSS local pelo tema unificado
4. Substituir componentes locais pelos do pacote
5. Usar composables unificados

---

## Passo 1: Adicionar Dependencia

```bash
# Link local (desenvolvimento)
npm link @trx/ui-common

# Ou via package.json
```

```json
{
  "dependencies": {
    "@trx/ui-common": "file:../trx-ui-common"
  }
}
```

---

## Passo 2: Atualizar main.ts

### Antes

```typescript
// main.ts (ANTES)
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import './assets/themes.css'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: { darkModeSelector: '.dark' }
  }
})
app.use(ToastService)
```

### Depois

```typescript
// main.ts (DEPOIS)
import { createApp } from 'vue'
import { configurePrimeVue } from '@trx/ui-common/primevue'
import '@trx/ui-common/themes'

const app = createApp(App)
configurePrimeVue(app)
```

{: .note }
A funcao `configurePrimeVue` configura PrimeVue, ToastService, ConfirmationService, DialogService e diretiva Tooltip automaticamente.

---

## Passo 3: Substituir Estilos

### Remover

- `src/assets/themes.css`
- `src/assets/variables.css`
- Configuracoes duplicadas de tema

### Manter

- `src/assets/main.css` (se tiver estilos especificos do app)
- Estilos de componentes locais

### Importar

```typescript
// Tema unificado
import '@trx/ui-common/themes'

// PrimeIcons e PrimeFlex (se nao estiver no pacote)
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
```

---

## Passo 4: Substituir Componentes

### Layout Principal

```vue
<!-- ANTES -->
<template>
  <div class="app-layout">
    <aside class="sidebar">...</aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<!-- DEPOIS -->
<template>
  <TrxAppLayout
    app-name="MeuApp"
    app-icon="pi pi-home"
    :menu-items="menuItems"
    :user-name="user?.name"
    @logout="handleLogout"
  >
    <router-view />
  </TrxAppLayout>
</template>

<script setup lang="ts">
import { TrxAppLayout } from '@trx/ui-common/components'
</script>
```

### Pagina de Login

```vue
<!-- ANTES: LoginView.vue com 500+ linhas -->

<!-- DEPOIS -->
<template>
  <TrxLoginPage
    app-name="MeuApp"
    app-tagline="Sistema XYZ"
    :loading="loading"
    :error="error"
    @submit="handleLogin"
  />
</template>

<script setup lang="ts">
import { TrxLoginPage } from '@trx/ui-common/components'
</script>
```

### Pagina 404

```vue
<!-- ANTES -->
<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Pagina nao encontrada</p>
  </div>
</template>

<!-- DEPOIS -->
<template>
  <TrxNotFound />
</template>

<script setup lang="ts">
import { TrxNotFound } from '@trx/ui-common/components'
</script>
```

---

## Passo 5: Usar Composables Unificados

### Autenticacao

```typescript
// ANTES
const login = async (email: string, password: string) => {
  const response = await axios.post('/api/auth/login', { email, password })
  localStorage.setItem('token', response.data.token)
}

// DEPOIS
import { useAuth } from '@trx/ui-common/composables'

const auth = useAuth({
  appName: 'meu-app',
  authUrl: '/api/v1'
})

const result = await auth.login({ email, password })
```

### Tema

```typescript
// ANTES
const isDark = ref(localStorage.getItem('theme') === 'dark')

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// DEPOIS
import { useTheme } from '@trx/ui-common/composables'

const { isDark, toggleTheme } = useTheme()
```

### Toast

```typescript
// ANTES
import { useToast } from 'primevue/usetoast'

const toast = useToast()
toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Ok!', life: 3000 })

// DEPOIS
import { useToast } from '@trx/ui-common/composables'

const toast = useToast()
toast.success('Ok!', 'Sucesso')
```

---

## Passo 6: Usar Utilitarios

```typescript
// ANTES
const formatarData = (date: string) => {
  return new Date(date).toLocaleDateString('pt-BR')
}

const formatarTelefone = (phone: string) => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

// DEPOIS
import { formatDate, formatPhone } from '@trx/ui-common/utils'

formatDate('2026-01-08')      // "08/01/2026"
formatPhone('11999998888')    // "(11) 99999-8888"
```

---

## Checklist de Migracao

- [ ] Adicionar @trx/ui-common como dependencia
- [ ] Atualizar main.ts com `configurePrimeVue`
- [ ] Substituir import de CSS por `@trx/ui-common/themes`
- [ ] Remover arquivos de tema duplicados
- [ ] Substituir AppLayout por TrxAppLayout
- [ ] Substituir LoginView por TrxLoginPage
- [ ] Substituir NotFound por TrxNotFound
- [ ] Atualizar uso de useAuth
- [ ] Atualizar uso de useTheme
- [ ] Atualizar uso de useToast
- [ ] Substituir funcoes de formatacao por utils
- [ ] Testar tema Light e Dark
- [ ] Testar autenticacao
- [ ] Testar responsividade

---

## Problemas Comuns

### Erro: Module not found

```
Error: Cannot find module '@trx/ui-common/primevue'
```

**Solucao**: Certifique-se de que o `npm link` foi executado ou a dependencia esta correta no package.json.

### Estilos nao aplicados

**Solucao**: Verifique a ordem de imports no main.ts. O tema deve vir antes de estilos locais.

### TypeScript errors

**Solucao**: Adicione o path no tsconfig.json:

```json
{
  "compilerOptions": {
    "paths": {
      "@trx/ui-common/*": ["../trx-ui-common/dist/*"]
    }
  }
}
```
