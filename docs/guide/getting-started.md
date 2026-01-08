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

### Opcao 3: npm (quando publicado)

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
import { configurePrimeVue } from '@trx/ui-common/primevue'
import App from './App.vue'
import routes from './router'

// Importar estilos
import '@trx/ui-common/themes'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

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

### 2. Estrutura de Pastas Recomendada

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
  TrxEmptyState
} from '@trx/ui-common/components'
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
import { useAuth, useToast, useTheme } from '@trx/ui-common/composables'

// Autenticacao
const auth = useAuth({
  appName: 'call',
  authUrl: '/api/v1'
})

// Toast
const toast = useToast()
toast.success('Operacao realizada!')

// Tema
const { isDark, toggleTheme } = useTheme()
</script>
```

### Usando Utilitarios

```typescript
import {
  formatDate,
  formatCurrency,
  formatPhone,
  debounce
} from '@trx/ui-common/utils'

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
