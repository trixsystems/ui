# @trx/ui-common

Pacote compartilhado de UI para o ecossistema TRX. **Independente** - nao requer PrimeFlex ou Tailwind.

## Estrutura

```
ui/
├── src/
│   ├── index.ts              # Main entry
│   ├── primevue/             # PrimeVue configuration
│   │   └── index.ts
│   ├── composables/          # Vue composables
│   │   ├── index.ts
│   │   ├── useTheme.ts       # Theme management
│   │   ├── useToast.ts       # Toast (useTrxToast + re-export useToast)
│   │   ├── useApi.ts         # API client
│   │   ├── useAuth.ts        # Unified auth
│   │   ├── useConfirm.ts     # Confirm dialog (PT-BR defaults)
│   │   └── useDialog.ts      # Dynamic dialog
│   ├── utils/                # Utility functions
│   │   └── index.ts
│   ├── components/           # Vue components
│   │   ├── index.ts          # Barrel (base + all PrimeVue wrappers)
│   │   ├── Trx*.vue          # 14 base components (custom TRX)
│   │   ├── form/index.ts     # 32 components + 4 aliases
│   │   ├── button/index.ts   # 4 components
│   │   ├── data/index.ts     # 12 components
│   │   ├── panel/index.ts    # 23 components + 1 alias (TrxTabView)
│   │   ├── overlay/index.ts  # 6 components + 2 aliases (TrxSidebar, TrxOverlayPanel)
│   │   ├── menu/index.ts     # 10 components
│   │   ├── message/index.ts  # 3 components
│   │   ├── media/index.ts    # 4 components
│   │   ├── file/index.ts     # 1 component
│   │   ├── chart/index.ts    # 1 component
│   │   └── misc/index.ts     # 14 components
│   └── styles/               # CSS
│       ├── utilities.css     # ~1.096 classes utilitarias (substitui PrimeFlex)
│       ├── themes.css        # Unified theme (Light + Dracula Dark)
│       └── index.css         # Entry point (imports utilities + themes)
├── docs/                     # Documentacao Jekyll (ui.trixsystems.io)
│   ├── _config.yml           # Jekyll config (url, baseurl, nav)
│   ├── index.md              # Home
│   ├── roadmap.md            # Roadmap do design system
│   ├── jira-tasks.md         # Tasks para Jira (35 tasks, 8 epics)
│   ├── guide/                # Guias de uso
│   ├── components/           # Docs de componentes
│   ├── composables/          # Docs de composables
│   ├── theme/                # Docs do tema
│   └── utils/                # Docs de utilitarios
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

O pacote inclui ~1.096 classes CSS utilitarias em `utilities.css`:

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
import { useTheme, useAuth, useToast, useApi, useConfirm, useDialog } from '@trx/ui-common'

// Utils
import { formatDate, formatCurrency, debounce } from '@trx/ui-common'

// Base Components
import {
  TrxPageHeader, TrxCard, TrxStatCard,
  TrxDataTable, TrxStatus, TrxEmptyState
} from '@trx/ui-common'

// PrimeVue Wrappers (110 components + 7 aliases)
import {
  TrxButton, TrxInputText, TrxSelect, TrxDialog,
  TrxMenu, TrxToast, TrxAccordion, TrxTabs,
  TrxDatePicker, TrxPassword, TrxFileUpload
} from '@trx/ui-common'
```

## PrimeVue Wrappers

Todos os ~110 componentes PrimeVue 4.5 possuem wrappers `Trx*` com:
- Pass-through de attrs e slots
- Defaults PT-BR nos componentes Enhanced (DatePicker, Select, Password, Dialog, etc.)
- Aliases legacy: `TrxDropdown`=Select, `TrxCalendar`=DatePicker, `TrxSidebar`=Drawer, `TrxTabView`=Tabs

### Componentes Enhanced (com defaults PT-BR)
| Componente | Defaults |
|---|---|
| TrxDatePicker | `dateFormat="dd/mm/yy"`, `showIcon=true` |
| TrxInputNumber | `locale="pt-BR"`, `minFractionDigits=2` |
| TrxPassword | `weakLabel="Fraco"`, `mediumLabel="Medio"`, `strongLabel="Forte"` |
| TrxSelect | `placeholder="Selecione..."`, `emptyMessage="Nenhum resultado"` |
| TrxMultiSelect | `placeholder="Selecione..."`, `emptyMessage="Nenhum resultado"` |
| TrxAutoComplete | `placeholder="Buscar..."` |
| TrxDialog | `modal=true`, `closable=true`, `draggable=false` |
| TrxConfirmDialog | `acceptLabel="Sim"`, `rejectLabel="Nao"` |
| TrxFileUpload | `chooseLabel="Escolher"`, `uploadLabel="Enviar"`, `cancelLabel="Cancelar"` |
| TrxToast | `position="top-right"` |
| TrxPaginator | `rowsPerPageOptions=[10,25,50]` |

## Re-exports PrimeVue

Para casos onde os componentes base TRX tem API diferente do PrimeVue original:
- `PvCard` - Card original do PrimeVue (TrxCard e custom)
- `PvDataTable` - DataTable original do PrimeVue (TrxDataTable e custom com filtro global)
- `PvTabView` - TabView legado do PrimeVue (TrxTabs usa a nova API PrimeVue 4)
- `useToast` - Re-export do `primevue/usetoast` para acesso direto (alem do `useTrxToast` com conveniencia)

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
npm install           # Instalar deps
npm run build         # Build para dist/
npm run dev           # Watch mode
npm run typecheck     # Type check sem build
npm link              # Link para uso local
npm run release       # Release patch (1.0.0 → 1.0.1) + tag Git + GitHub Release
npm run release:minor # Release minor (1.0.0 → 1.1.0)
npm run release:major # Release major (1.0.0 → 2.0.0)
```

## Versionamento

- Conventional Commits enforçado via commitlint + husky (hook em `.husky/commit-msg`)
- release-it configurado em `.release-it.json` — gera CHANGELOG, tag Git e GitHub Release
- Apps devem fixar versao via tag: `"github:trixsystems/ui#v1.0.0"`
- Licenca: Apache-2.0 (arquivo `LICENSE` na raiz)

## Apps que usam

### TRX Call (produto standalone)
- TRX Call (`call/frontend`) - PABX IP

### TRX Stack (plataforma unificada)
- TRX Switch (`trx-stack/switch/frontend`) - Telefonia Alto Volume
- TRX Phone (`trx-stack/phone/frontend`) - Softphone WebRTC
- TRX Omnichannel (`trx-stack/omnichannel/frontend`) - Atendimento Multicanal
- TRX Dialer (`trx-stack/dailer/frontend`) - Motor de Discagem

> **Nota:** Call e Stack sao produtos independentes. Call tem autenticacao standalone; Stack usa trx-auth centralizado.

## Roadmap / Gaps Conhecidos

Analise de maturidade como design system realizada em 2026-02-28.
Ver detalhes em `memory/design-system-gaps.md` e `docs/roadmap.md`.

### Epics planejados (ver docs/jira-tasks.md para tasks completas)

| Epic | Titulo | Prioridade |
|------|--------|------------|
| DS | Design Tokens estruturados (Style Dictionary) | CRITICA |
| PL | Playground interativo (Histoire + VitePress) | CRITICA |
| TS | Testes com Vitest (composables + componentes) | CRITICA |
| FV | Formularios com validacao (Vee-Validate + Zod) | ALTA |
| NC | Novos componentes base (TrxAlert, TrxKPICard, TrxUserAvatar...) | ALTA |
| VR | Versionamento semantico e CHANGELOG | ALTA |
| A11Y | Acessibilidade (ARIA, useFocusTrap, skip-to-content) | MEDIA |
| TI | Sistema tipografico formal | MEDIA |
| IC | Icones customizados de telefonia | BAIXA |
| TH | Temas por app com CSS @layer | BAIXA |

### Convencoes a adotar

- Commits: Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`)
- Versionamento: semver — incrementar ao fazer release para apps
- Breaking changes: sempre com nota de migracao em CHANGELOG.md
