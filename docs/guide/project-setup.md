# Configuração do Projeto

## package.json

Dependências recomendadas para apps que usam `@trx/ui-common`:

```json
{
  "dependencies": {
    "@trx/ui-common": "github:trixsystems/ui#v1.0.0",
    "vue": "^3.5.13",
    "vue-router": "^4.5.0",
    "pinia": "^2.2.8",
    "primevue": "^4.5.0",
    "@primevue/themes": "^4.5.0",
    "primeicons": "^7.0.0",
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

## vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
    dedupe: ['vue', 'primevue'],  // obrigatório com npm link
  },
  server: {
    port: 3000,
    proxy: {
      '/api': { target: 'http://localhost:8080', changeOrigin: true }
    }
  }
})
```

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
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

## Estrutura de Pastas

```
meu-app/frontend/
├── src/
│   ├── main.ts           # Entry point
│   ├── App.vue
│   ├── router/index.ts   # Rotas
│   ├── stores/
│   │   ├── auth.ts
│   │   └── app.ts
│   ├── views/
│   ├── components/       # Componentes locais
│   └── services/api.ts
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Configuração de Rotas

```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { TrxErrorPage } from '@trx/ui-common'
import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue'),
      meta: { public: true }
    },
    {
      path: '/',
      component: () => import('@/views/DashboardView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => h(TrxErrorPage, { code: 404 }),
    },
  ]
})

router.beforeEach((to, _from, next) => {
  const token = localStorage.getItem('access_token')
  if (to.meta.requiresAuth && !token) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
```
