# Primeiros Passos

## Pré-requisitos

- **Node.js** 18+
- **Vue 3.5+**
- **PrimeVue 4.5+**

## Instalação

### Via GitHub (recomendado para produção)

Fixe sempre uma tag de versão para evitar quebras:

```json
{
  "dependencies": {
    "@trx/ui-common": "github:trixsystems/ui#v1.0.0"
  }
}
```

### Desenvolvimento local (npm link)

```bash
# 1. Clone e build do pacote
git clone git@github.com:trixsystems/ui.git
cd ui
npm install && npm run build
npm link

# 2. Em cada app
cd meu-app/frontend
npm link @trx/ui-common
```

## Configuração

### main.ts

```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { configurePrimeVue } from '@trx/ui-common'
import 'primeicons/primeicons.css'
import '@trx/ui-common/styles'  // utilities + themes

const app = createApp(App)
app.use(createPinia())
configurePrimeVue(app)
app.mount('#app')
```

::: warning
Não importe `primeflex/primeflex.css`. O `@trx/ui-common/styles` já inclui ~700 classes utilitárias que substituem o PrimeFlex completamente.
:::

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ['vue', 'primevue']  // obrigatório com npm link
  }
})
```

### Tema por aplicação (opcional)

```typescript
// main.ts — depois do configurePrimeVue
import { useAppTheme } from '@trx/ui-common'

useAppTheme({
  appName: 'call',
  primaryColor: '#0ea5e9',
  primaryColorDark: '#38bdf8',
})
```

## Uso Básico

```vue
<script setup lang="ts">
import {
  TrxAppLayout,
  TrxPageHeader,
  TrxCard,
  TrxButton,
  TrxAlert
} from '@trx/ui-common'
import { useAuth, useTrxToast } from '@trx/ui-common'

const auth = useAuth({ appName: 'call', authUrl: '/api/v1' })
const toast = useTrxToast()
</script>

<template>
  <TrxAppLayout app-name="MeuApp">
    <TrxPageHeader title="Dashboard" />
    <TrxAlert type="info" title="Bem-vindo!" />
    <TrxButton label="Ação" @click="toast.success('Pronto!')" />
  </TrxAppLayout>
</template>
```

## Próximos Passos

- [Configuração do Projeto](/guide/project-setup) — tsconfig, aliases, estrutura de pastas
- [Componentes](/components/) — catálogo completo
- [Design Tokens](/tokens/) — variáveis CSS e TypeScript
- [Contribuindo](/guide/contributing) — como contribuir
