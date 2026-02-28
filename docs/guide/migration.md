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
4. Substituir imports PrimeVue por wrappers Trx*
5. Substituir componentes locais pelos do pacote
6. Usar composables unificados

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
    "@trx/ui-common": "file:../ui"
  }
}
```

Ou via GitHub:

```json
{
  "dependencies": {
    "@trx/ui-common": "github:trixsystems/ui"
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
import { configurePrimeVue } from '@trx/ui-common'
import 'primeicons/primeicons.css'
import '@trx/ui-common/styles'

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
- `import 'primeflex/primeflex.css'` (o @trx/ui-common substitui completamente o PrimeFlex)

### Manter

- `src/assets/main.css` (se tiver estilos especificos do app)
- Estilos de componentes locais

### Importar

```typescript
// Tema unificado + classes utilitarias (substitui PrimeFlex)
import '@trx/ui-common/styles'

// PrimeIcons
import 'primeicons/primeicons.css'
```

{: .warning }
Nao importe `primeflex/primeflex.css`. O pacote ja inclui ~700 classes utilitarias em `utilities.css` que substituem o PrimeFlex.

---

## Passo 3.5: Substituir imports PrimeVue por wrappers TRX

### Antes

```typescript
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
```

### Depois

```typescript
import {
  TrxButton,
  TrxInputText,
  TrxDialog,
  TrxSelect,
  TrxDatePicker,
  PvDataTable,    // ou TrxDataTable se quiser o custom com filtro global
  TrxColumn
} from '@trx/ui-common'
```

{: .note }
Os wrappers `Trx*` fazem pass-through completo de attrs e slots, entao a migracao e direta: basta trocar o nome do componente no template. Os wrappers enhanced (como `TrxSelect`, `TrxDatePicker`) adicionam defaults PT-BR que podem ser sobrescritos via props.

### No template

```vue
<!-- ANTES -->
<Button label="Salvar" />
<InputText v-model="nome" />
<Dialog v-model:visible="show" header="Titulo">...</Dialog>

<!-- DEPOIS -->
<TrxButton label="Salvar" />
<TrxInputText v-model="nome" />
<TrxDialog v-model:visible="show" header="Titulo">...</TrxDialog>
```

### Aliases legacy

Se o app usava nomes antigos do PrimeVue (v3), os aliases facilitam a migracao:

```typescript
// Nomes antigos continuam funcionando via aliases
import {
  TrxDropdown,    // = TrxSelect
  TrxCalendar,    // = TrxDatePicker
  TrxSidebar,     // = TrxDrawer
  TrxInputSwitch, // = TrxToggleSwitch
  TrxChips,       // = TrxInputChips
  TrxOverlayPanel,// = TrxPopover
  TrxTabView      // = TrxTabs
} from '@trx/ui-common'
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
import { TrxAppLayout } from '@trx/ui-common'
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
import { TrxLoginPage } from '@trx/ui-common'
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
import { TrxNotFound } from '@trx/ui-common'
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
import { useAuth } from '@trx/ui-common'

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
import { useTheme } from '@trx/ui-common'

const { isDark, toggleTheme } = useTheme()
```

### Toast

```typescript
// ANTES
import { useToast } from 'primevue/usetoast'

const toast = useToast()
toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Ok!', life: 3000 })

// DEPOIS
import { useTrxToast } from '@trx/ui-common'

const toast = useTrxToast()
toast.success('Ok!', 'Sucesso')
```

### Confirm

```typescript
// ANTES
import { useConfirm } from 'primevue/useconfirm'

const confirm = useConfirm()
confirm.require({
  message: 'Deseja excluir?',
  header: 'Confirmacao',
  acceptLabel: 'Sim',
  rejectLabel: 'Nao',
  accept: () => { /* ... */ }
})

// DEPOIS
import { useConfirm } from '@trx/ui-common'

const confirm = useConfirm()
confirm.require({
  message: 'Deseja excluir?',
  header: 'Confirmacao',
  accept: () => { /* ... */ }
})
// acceptLabel e rejectLabel ja tem defaults PT-BR (Sim/Nao)
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
import { formatDate, formatPhone } from '@trx/ui-common'

formatDate('2026-01-08')      // "08/01/2026"
formatPhone('11999998888')    // "(11) 99999-8888"
```

---

## Passo 7: Configurar vite.config.ts

Adicione `resolve.dedupe` para evitar multiplas instancias do Vue e PrimeVue:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ['vue', 'primevue']
  }
})
```

{: .warning }
Sem `resolve.dedupe`, ao usar npm link ou dependencias locais, o Vite pode resolver multiplas copias do Vue/PrimeVue, causando erros de inject/provide nos composables e componentes PrimeVue.

---

## Checklist de Migracao

- [ ] Adicionar @trx/ui-common como dependencia
- [ ] Atualizar main.ts com `configurePrimeVue`
- [ ] Substituir import de CSS por `@trx/ui-common/styles`
- [ ] Remover `primeflex/primeflex.css`
- [ ] Remover arquivos de tema duplicados
- [ ] Adicionar `resolve.dedupe: ['vue', 'primevue']` no vite.config.ts
- [ ] Substituir imports PrimeVue por wrappers Trx* (Button -> TrxButton, etc.)
- [ ] Substituir AppLayout por TrxAppLayout
- [ ] Substituir LoginView por TrxLoginPage
- [ ] Substituir NotFound por TrxNotFound
- [ ] Atualizar uso de useAuth
- [ ] Atualizar uso de useTheme
- [ ] Atualizar uso de useToast para useTrxToast
- [ ] Atualizar uso de useConfirm para @trx/ui-common
- [ ] Substituir funcoes de formatacao por utils
- [ ] Testar tema Light e Dark
- [ ] Testar autenticacao
- [ ] Testar responsividade

---

## Problemas Comuns

### Erro: Module not found

```
Error: Cannot find module '@trx/ui-common'
```

**Solucao**: Certifique-se de que o `npm link` foi executado ou a dependencia esta correta no package.json.

### Estilos nao aplicados

**Solucao**: Verifique a ordem de imports no main.ts. O tema deve vir antes de estilos locais.

### Erro: inject() can only be used inside setup()

**Solucao**: Adicione `resolve.dedupe: ['vue', 'primevue']` no `vite.config.ts`. Isso garante que apenas uma instancia do Vue e PrimeVue seja usada.

### TypeScript errors

**Solucao**: Adicione o path no tsconfig.json:

```json
{
  "compilerOptions": {
    "paths": {
      "@trx/ui-common/*": ["../ui/dist/*"]
    }
  }
}
```
