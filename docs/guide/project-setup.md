---
layout: default
title: Configuracao do Projeto
nav_order: 3
parent: Guia
---

# Configuracao do Projeto
{: .no_toc }

## Indice
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## package.json

Dependencias recomendadas para apps que usam @trx/ui-common:

```json
{
  "name": "meu-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@trx/ui-common": "file:../ui",
    "vue": "^3.5.13",
    "vue-router": "^4.5.0",
    "pinia": "^2.2.8",
    "primevue": "^4.5.0",
    "primeicons": "^7.0.0",
    "primeflex": "^4.0.0",
    "axios": "^1.7.9",
    "dayjs": "^1.11.13"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.1",
    "typescript": "^5.5.4",
    "vite": "^5.4.11",
    "vue-tsc": "^2.2.0"
  }
}
```

---

## vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
```

---

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## Estrutura de Pastas

```
meu-app/
├── frontend/
│   ├── src/
│   │   ├── main.ts                 # Entry point
│   │   ├── App.vue                 # Root component
│   │   ├── router/
│   │   │   └── index.ts            # Definicao de rotas
│   │   ├── stores/
│   │   │   ├── auth.ts             # Store de autenticacao
│   │   │   └── app.ts              # Store do app
│   │   ├── views/
│   │   │   ├── LoginView.vue
│   │   │   ├── DashboardView.vue
│   │   │   └── ...
│   │   ├── components/             # Componentes locais
│   │   └── services/
│   │       └── api.ts              # Configuracao de APIs locais
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
└── backend/
    └── ...
```

---

## Configuracao de Rotas

```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { public: true }
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard de autenticacao
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (to.meta.requiresAuth && !token) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else if (to.name === 'login' && token) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export default router
```

---

## Store de Autenticacao

```typescript
// src/stores/auth.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuth } from '@trx/ui-common/composables'

export const useAuthStore = defineStore('auth', () => {
  const auth = useAuth({
    appName: 'meu-app',
    authUrl: '/api/v1'
  })

  return {
    ...auth
  }
})
```

---

## Proximo Passo

Veja como [migrar apps existentes](./migration) para usar o @trx/ui-common.
