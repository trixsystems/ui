---
layout: default
title: Primeiros Passos
nav_order: 2
parent: Guia
---

# Primeiros Passos
{: .no_toc }

## Indice
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Pre-requisitos

Antes de comecar, certifique-se de ter instalado:

- **Node.js** 18+
- **npm** 9+ ou **pnpm** 8+
- **Git**

## Instalacao

### Opcao 1: npm link (Desenvolvimento Local)

Ideal para desenvolvimento quando o pacote ainda nao esta publicado no npm.

```bash
# 1. Clone o repositorio
git clone https://github.com/trxcommunications/trx-ui-common.git
cd trx-ui-common

# 2. Instale as dependencias
npm install

# 3. Build do pacote
npm run build

# 4. Crie o link global
npm link
```

Agora, em cada aplicativo que vai usar o pacote:

```bash
cd meu-app/frontend
npm link @trx/ui-common
```

### Opcao 2: Dependencia local (package.json)

```json
{
  "dependencies": {
    "@trx/ui-common": "file:../trx-ui-common"
  }
}
```

### Opcao 3: Via GitHub

```json
{
  "dependencies": {
    "@trx/ui-common": "github:trxcommunications/trx-ui-common"
  }
}
```

### Opcao 4: npm (quando publicado)

```bash
npm install @trx/ui-common
```

---

## Configuracao Basica

### 1. Configurar main.ts

```typescript
// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { configurePrimeVue } from '@trx/ui-common'
import App from './App.vue'
import routes from './router'

// Importar estilos (inclui utilities + themes - substitui PrimeFlex)
import 'primeicons/primeicons.css'
import '@trx/ui-common/styles'

const app = createApp(App)

// Pinia (state management)
app.use(createPinia())

// Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes
})
app.use(router)

// PrimeVue com configuracao TRX
configurePrimeVue(app)

app.mount('#app')
```

{: .warning }
Nao importe `primeflex/primeflex.css`. O `@trx/ui-common` ja inclui todas as classes utilitarias necessarias em `utilities.css`, substituindo completamente o PrimeFlex.

### 2. Configurar vite.config.ts

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

{: .note }
O `resolve.dedupe` e necessario para evitar multiplas instancias do Vue e PrimeVue quando usando npm link ou dependencias locais. Sem isso, podem ocorrer erros de inject/provide.

### 3. Estrutura de Pastas Recomendada

```
seu-app/frontend/
├── src/
│   ├── main.ts           # Entry point
│   ├── App.vue           # Root component
│   ├── router/           # Rotas
│   ├── stores/           # Pinia stores
│   ├── views/            # Paginas
│   ├── components/       # Componentes locais
│   └── services/         # APIs locais
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Uso Basico

### Importando Componentes

```vue
<script setup lang="ts">
import {
  TrxAppLayout,
  TrxPageHeader,
  TrxStatusBadge,
  TrxEmptyState,
  TrxButton,
  TrxInputText,
  TrxDialog
} from '@trx/ui-common'
</script>

<template>
  <TrxAppLayout app-name="MeuApp" app-icon="pi pi-home">
    <TrxPageHeader
      title="Dashboard"
      subtitle="Visao geral do sistema"
    />

    <TrxStatusBadge status="Ativo" type="success" />
  </TrxAppLayout>
</template>
```

### Usando Composables

```vue
<script setup lang="ts">
import { useAuth, useTrxToast, useTheme, useConfirm } from '@trx/ui-common'

// Autenticacao
const auth = useAuth({
  appName: 'call',
  authUrl: '/api/v1'
})

// Toast
const toast = useTrxToast()
toast.success('Operacao realizada!')

// Tema
const { isDark, toggleTheme } = useTheme()

// Confirm dialog
const confirm = useConfirm()
confirm.require({
  message: 'Deseja continuar?',
  header: 'Confirmacao',
  accept: () => { /* ... */ }
})
</script>
```

### Usando Utilitarios

```typescript
import {
  formatDate,
  formatCurrency,
  formatPhone,
  debounce
} from '@trx/ui-common'

// Formatar data
formatDate('2026-01-08')           // "08/01/2026"

// Formatar moeda
formatCurrency(1234.56)            // "R$ 1.234,56"

// Formatar telefone
formatPhone('11999998888')         // "(11) 99999-8888"

// Debounce
const searchDebounced = debounce((q) => search(q), 300)
```

---

## Proximos Passos

- [Componentes](/trx-ui-common/components/) - Lista completa de componentes
- [Composables](/trx-ui-common/composables/) - Funcoes reativas
- [Utilitarios](/trx-ui-common/utils/) - Funcoes helper
- [Sistema de Temas](/trx-ui-common/theme/) - Customizacao visual
