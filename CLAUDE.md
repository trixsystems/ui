# @trx/ui-common

Pacote compartilhado de UI para o ecossistema TRX.

## Estrutura

```
trx-ui-common/
├── src/
│   ├── index.ts              # Main entry
│   ├── primevue/             # PrimeVue configuration
│   │   └── index.ts
│   ├── composables/          # Vue composables
│   │   ├── index.ts
│   │   ├── useTheme.ts       # Theme management
│   │   ├── useToast.ts       # Toast notifications
│   │   ├── useApi.ts         # API client
│   │   └── useAuth.ts        # Unified auth
│   ├── utils/                # Utility functions
│   │   └── index.ts
│   ├── components/           # Vue components
│   │   ├── index.ts
│   │   ├── TrxLogo.vue
│   │   ├── TrxThemeToggle.vue
│   │   ├── TrxPageHeader.vue
│   │   ├── TrxStatusBadge.vue
│   │   ├── TrxLoadingOverlay.vue
│   │   └── TrxEmptyState.vue
│   └── styles/               # CSS
│       ├── themes.css        # Unified theme (Light + Dracula Dark)
│       └── index.css
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Stack

- **Build**: Vite 5.4 (library mode)
- **Types**: TypeScript 5.5, vite-plugin-dts
- **Framework**: Vue 3.5
- **UI**: PrimeVue 4.5 (tema Aura)
- **HTTP**: Axios
- **Dates**: dayjs

## Tema

- **Light**: Verde Palmeiras (#6ee7b7, #10b981)
- **Dark**: Dracula Theme (#bd93f9, #50fa7b, #ff79c6)
- **Dark Mode**: class-based (`.dark` no html)
- **Font**: Inter, system-ui

## Uso nos Apps

```typescript
// main.ts
import { configurePrimeVue } from '@trx/ui-common/primevue'
import '@trx/ui-common/themes'

configurePrimeVue(app)
```

```typescript
// Composables
import { useTheme, useAuth, useToast, useApi } from '@trx/ui-common/composables'

// Utils
import { formatDate, formatCurrency, debounce } from '@trx/ui-common/utils'

// Components
import { TrxPageHeader, TrxStatusBadge } from '@trx/ui-common/components'
```

## Autenticacao Unificada

```typescript
const auth = useAuth({
  appName: 'call',  // call, phone, dialer, predictive, omnichannel
  authUrl: '/api/v1',
  onLogout: () => router.push('/login')
})

// Login
const result = await auth.login({ email, password })

// Check auth
if (auth.isAuthenticated.value) { ... }

// Logout
await auth.logout()
```

## Comandos

```bash
npm install    # Instalar deps
npm run build  # Build para dist/
npm run dev    # Watch mode
npm link       # Link para uso local
```

## Apps que usam

- TRX Call (`call/frontend`)
- TRX Phone (`phone/frontend`)
- TRX Omnichannel (`omnichannel/frontend`)
- TRX Predictive (`predictive/web/frontend`)
- TRX Dailer (`dailer/web/frontend`)
