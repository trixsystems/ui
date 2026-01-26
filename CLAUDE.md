# @trx/ui-common

Pacote compartilhado de UI para o ecossistema TRX. **Independente** - nao requer PrimeFlex ou Tailwind.

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
│   │   ├── TrxCard.vue
│   │   ├── TrxStatCard.vue
│   │   ├── TrxDataTable.vue
│   │   ├── TrxStatus.vue
│   │   ├── TrxStatusBadge.vue
│   │   ├── TrxLoadingOverlay.vue
│   │   ├── TrxEmptyState.vue
│   │   ├── TrxLoginForm.vue
│   │   ├── TrxLoginPage.vue
│   │   ├── TrxAppLayout.vue
│   │   └── TrxNotFound.vue
│   └── styles/               # CSS
│       ├── utilities.css     # Classes utilitarias (substitui PrimeFlex)
│       ├── themes.css        # Unified theme (Light + Dracula Dark)
│       └── index.css         # Entry point (imports utilities + themes)
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
- **CSS**: Classes proprias (sem dependencias externas)

## Tema

- **Light**: Verde Palmeiras (#6ee7b7, #10b981)
- **Dark**: Dracula Theme (#bd93f9, #50fa7b, #ff79c6)
- **Dark Mode**: class-based (`.dark` no html)
- **Font**: Inter, system-ui

## CSS Utilities

O pacote inclui ~700 classes CSS utilitarias em `utilities.css`:

- Display: `.flex`, `.grid`, `.hidden`, `.block`
- Flexbox: `.flex-row`, `.justify-content-*`, `.align-items-*`
- Grid: `.col-1` a `.col-12`, `.grid-cols-*`
- Gap: `.gap-0` a `.gap-8`
- Spacing: `.p-*`, `.m-*`, `.px-*`, `.py-*`, `.pt-*`, `.mt-*`, etc.
- Width/Height: `.w-full`, `.h-screen`, `.w-*rem`
- Typography: `.text-*`, `.font-*`, `.line-height-*`
- Border: `.border-*`, `.border-round-*`
- Position: `.relative`, `.absolute`, `.fixed`
- Overflow, Z-Index, Shadow, Opacity, Cursor
- Colors: `.text-primary`, `.bg-card`, `.border-success`
- Animation: `.fadein`, `.scalein`, `.animate-spin`
- Responsivo: `.sm:*`, `.md:*`, `.lg:*`, `.xl:*`

## Uso nos Apps

```typescript
// main.ts
import { configurePrimeVue } from '@trx/ui-common'
import 'primeicons/primeicons.css'
import '@trx/ui-common/styles'  // Inclui utilities + themes

configurePrimeVue(app)
```

```typescript
// Composables
import { useTheme, useAuth, useToast, useApi } from '@trx/ui-common'

// Utils
import { formatDate, formatCurrency, debounce } from '@trx/ui-common'

// Components
import {
  TrxPageHeader, TrxCard, TrxStatCard,
  TrxDataTable, TrxStatus, TrxEmptyState
} from '@trx/ui-common'
```

## Autenticacao Unificada

```typescript
const auth = useAuth({
  appName: 'call',  // call, switch, phone, dialer, predictive, omnichannel
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

- TRX Call (`call/frontend`) - PABX IP
- TRX Switch (`switch/frontend`) - Telefonia Alto Volume
- TRX Phone (`phone/frontend`) - Softphone WebRTC
- TRX Omnichannel (`omnichannel/frontend`) - Atendimento Multicanal
- TRX Predictive (`predictive/web/frontend`) - Discagem Preditiva
- TRX Dialer (`dialer/web/frontend`) - Motor de Discagem
