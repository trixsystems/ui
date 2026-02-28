# @trx/ui-common

Pacote compartilhado de componentes, estilos e utilitarios para os produtos TRX Systems.

## Visao Geral

O `@trx/ui-common` centraliza toda a infraestrutura de frontend compartilhada entre os dois produtos TRX:

**TRX Call** (produto standalone - PABX IP):
- `call/frontend` - PABX IP (Asterisk)

**TRX Stack** (plataforma unificada):
- `trx-stack/switch/frontend` - Telefonia de Alto Volume (FreeSWITCH)
- `trx-stack/phone/frontend` - Softphone WebRTC
- `trx-stack/dailer/frontend` - Motor de discagem
- `trx-stack/omnichannel/frontend` - Atendimento multicanal

> **Nota:** Call e Stack sao produtos independentes. Call tem auth standalone; Stack usa trx-auth centralizado.

## Stack Unificada

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Vue | 3.5 | Framework |
| TypeScript | 5.5 | Linguagem |
| Vite | 5.4 | Build tool |
| PrimeVue | 4.5 | Componentes UI |
| Pinia | 2.2 | State management |
| Vue Router | 4.5 | Routing |
| Axios | 1.7 | HTTP client |
| dayjs | 1.11 | Datas |

> **Nota:** Este pacote e **independente** - nao requer PrimeFlex ou Tailwind. Todas as classes utilitarias estao incluidas.

## Instalacao

### Desenvolvimento Local (npm link)

```bash
# 1. Build do pacote
cd /path/to/ui
npm install
npm run build
npm link

# 2. Link em cada app
cd /path/to/call/frontend
npm link @trx/ui-common
```

### Via package.json

```json
{
  "dependencies": {
    "@trx/ui-common": "file:../../ui"
  }
}
```

### Via GitHub (recomendado para producao)

Fixe sempre uma tag de versao — assim o app nao quebra com mudancas no `main`:

```json
{
  "dependencies": {
    "@trx/ui-common": "github:trixsystems/ui#v1.0.0"
  }
}
```

## Estrutura do Pacote

```
ui/
├── src/
│   ├── index.ts                    # Entry point principal
│   ├── primevue/
│   │   └── index.ts                # Configuracao PrimeVue
│   ├── composables/
│   │   ├── index.ts
│   │   ├── useTheme.ts             # Gerenciamento de tema
│   │   ├── useToast.ts             # Notificacoes toast (+ re-export useToast do PrimeVue)
│   │   ├── useApi.ts               # Cliente HTTP
│   │   ├── useAuth.ts              # Autenticacao unificada
│   │   ├── useConfirm.ts           # Confirm dialog (PT-BR defaults)
│   │   └── useDialog.ts            # Dynamic dialog (re-export PrimeVue)
│   ├── utils/
│   │   └── index.ts                # Funcoes utilitarias
│   ├── components/
│   │   ├── index.ts                # Barrel (base + todos os wrappers PrimeVue)
│   │   ├── Trx*.vue                # 14 componentes base (custom TRX)
│   │   ├── form/index.ts           # 32 componentes + 4 aliases legacy
│   │   ├── button/index.ts         # 4 componentes
│   │   ├── data/index.ts           # 12 componentes + re-export PvDataTable
│   │   ├── panel/index.ts          # 23 componentes + 1 alias + re-exports PvCard, PvTabView
│   │   ├── overlay/index.ts        # 6 componentes + 2 aliases legacy
│   │   ├── menu/index.ts           # 10 componentes
│   │   ├── message/index.ts        # 3 componentes
│   │   ├── media/index.ts          # 4 componentes
│   │   ├── file/index.ts           # 1 componente (enhanced PT-BR)
│   │   ├── chart/index.ts          # 1 componente
│   │   └── misc/index.ts           # 14 componentes
│   └── styles/
│       ├── utilities.css           # Classes utilitarias (substitui PrimeFlex)
│       ├── themes.css              # Sistema de temas Light/Dark
│       └── index.css               # Entry point CSS
├── dist/                           # Build output
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Uso

### 1. Configuracao Basica (main.ts)

```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { configurePrimeVue } from '@trx/ui-common'
import App from './App.vue'

// Estilos TRX (inclui utilities + themes)
import 'primeicons/primeicons.css'
import '@trx/ui-common/styles'

const app = createApp(App)

// Pinia
app.use(createPinia())

// Router
app.use(router)

// PrimeVue com configuracao TRX
configurePrimeVue(app)

app.mount('#app')
```

### 2. Tema (Light/Dark)

```typescript
import { useTheme } from '@trx/ui-common'

const {
  theme,           // 'light' | 'dark'
  isDark,          // boolean
  fontSize,        // number (12-20)
  toggleTheme,     // () => void
  setTheme,        // (theme: TrxTheme) => void
  increaseFontSize,// () => void
  decreaseFontSize // () => void
} = useTheme()

// Toggle
toggleTheme()

// Set especifico
setTheme('dark')
```

### 3. Componentes

```vue
<script setup lang="ts">
import {
  TrxPageHeader,
  TrxCard,
  TrxStatCard,
  TrxDataTable,
  TrxStatus,
  TrxEmptyState,
  TrxNotFound,
  TrxButton
} from '@trx/ui-common'
</script>

<template>
  <!-- Cabecalho de pagina -->
  <TrxPageHeader
    title="Dashboard"
    subtitle="Visao geral do sistema"
    icon="pi pi-home"
  >
    <template #actions>
      <TrxButton label="Atualizar" icon="pi pi-refresh" />
    </template>
  </TrxPageHeader>

  <!-- Cards de estatisticas -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <TrxStatCard
      title="Usuarios"
      :value="150"
      icon="pi pi-users"
      color="primary"
    />
    <TrxStatCard
      title="Chamadas"
      :value="1250"
      icon="pi pi-phone"
      color="success"
    />
  </div>

  <!-- Status -->
  <TrxStatus status="online" label="Conectado" />

  <!-- Estado vazio -->
  <TrxEmptyState
    v-if="items.length === 0"
    title="Nenhum registro"
    description="Nao ha dados para exibir"
    icon="pi pi-inbox"
  />
</template>
```

---

## PrimeVue Wrappers (~110 componentes)

Todos os componentes PrimeVue 4.5 possuem wrappers `Trx*` organizados por categoria. Os wrappers fazem pass-through completo de attrs e slots, garantindo compatibilidade total com a API do PrimeVue.

### Categorias

| Categoria | Quantidade | Exemplos |
|-----------|-----------|----------|
| Form | 32 + 4 aliases | `TrxInputText`, `TrxSelect`, `TrxDatePicker`, `TrxPassword` |
| Button | 4 | `TrxButton`, `TrxSplitButton`, `TrxSpeedDial` |
| Data | 12 | `TrxPaginator`, `TrxColumn`, `TrxTree`, `TrxTimeline` |
| Panel | 23 + 1 alias | `TrxAccordion`, `TrxTabs`, `TrxPanel`, `TrxToolbar` |
| Overlay | 6 + 2 aliases | `TrxDialog`, `TrxDrawer`, `TrxConfirmDialog`, `TrxPopover` |
| Menu | 10 | `TrxMenu`, `TrxMenubar`, `TrxContextMenu`, `TrxBreadcrumb` |
| Message | 3 | `TrxToast`, `TrxMessage`, `TrxInlineMessage` |
| Media | 4 | `TrxImage`, `TrxCarousel`, `TrxGalleria` |
| File | 1 | `TrxFileUpload` |
| Chart | 1 | `TrxChart` |
| Misc | 14 | `TrxAvatar`, `TrxBadge`, `TrxChip`, `TrxTag`, `TrxSkeleton` |

### Componentes Enhanced (com defaults PT-BR)

Alguns wrappers adicionam valores padrao em portugues:

| Componente | Defaults |
|---|---|
| `TrxDatePicker` | `dateFormat="dd/mm/yy"`, `showIcon=true` |
| `TrxInputNumber` | `locale="pt-BR"`, `minFractionDigits=2` |
| `TrxPassword` | `weakLabel="Fraco"`, `mediumLabel="Medio"`, `strongLabel="Forte"` |
| `TrxSelect` | `placeholder="Selecione..."`, `emptyMessage="Nenhum resultado"` |
| `TrxMultiSelect` | `placeholder="Selecione..."`, `emptyMessage="Nenhum resultado"` |
| `TrxAutoComplete` | `placeholder="Buscar..."` |
| `TrxDialog` | `modal=true`, `closable=true`, `draggable=false` |
| `TrxConfirmDialog` | `acceptLabel="Sim"`, `rejectLabel="Nao"` |
| `TrxFileUpload` | `chooseLabel="Escolher"`, `uploadLabel="Enviar"`, `cancelLabel="Cancelar"` |
| `TrxToast` | `position="top-right"` |
| `TrxPaginator` | `rowsPerPageOptions=[10,25,50]` |

### Aliases Legacy

Para compatibilidade com versoes anteriores do PrimeVue:

| Alias | Aponta para |
|-------|-------------|
| `TrxDropdown` | `TrxSelect` |
| `TrxCalendar` | `TrxDatePicker` |
| `TrxChips` | `TrxInputChips` |
| `TrxInputSwitch` | `TrxToggleSwitch` |
| `TrxSidebar` | `TrxDrawer` |
| `TrxOverlayPanel` | `TrxPopover` |
| `TrxTabView` | `TrxTabs` |

### Re-exports PrimeVue (componentes raw)

Para casos onde o componente base TRX (custom) tem API diferente do PrimeVue original:

| Re-export | Origem | Motivo |
|-----------|--------|--------|
| `PvCard` | `primevue/card` | `TrxCard` e um componente custom com API diferente |
| `PvDataTable` | `primevue/datatable` | `TrxDataTable` e um componente custom com filtro global |
| `PvTabView` | `primevue/tabview` | API legada diferente de `TrxTabs` (nova API PrimeVue 4) |

---

## Classes CSS Utilitarias

O `@trx/ui-common` inclui um conjunto completo de classes utilitarias, eliminando a necessidade de PrimeFlex ou Tailwind.

### Display

```css
.hidden          /* display: none */
.block           /* display: block */
.inline          /* display: inline */
.inline-block    /* display: inline-block */
.flex            /* display: flex */
.inline-flex     /* display: inline-flex */
.grid            /* display: grid */
```

### Flexbox

```css
/* Direcao */
.flex-row, .flex-row-reverse
.flex-column, .flex-column-reverse
.flex-wrap, .flex-nowrap

/* Justify Content */
.justify-content-start, .justify-content-end
.justify-content-center, .justify-content-between
.justify-content-around, .justify-content-evenly

/* Align Items */
.align-items-start, .align-items-end
.align-items-center, .align-items-baseline
.align-items-stretch

/* Align Self */
.align-self-start, .align-self-end
.align-self-center, .align-self-stretch

/* Flex Grow/Shrink */
.flex-grow-0, .flex-grow-1
.flex-shrink-0, .flex-shrink-1
.flex-1, .flex-auto, .flex-none
```

### Grid

```css
/* Colunas (12-column grid) */
.col, .col-1 ate .col-12

/* Grid Template */
.grid-cols-1, .grid-cols-2, .grid-cols-3
.grid-cols-4, .grid-cols-5, .grid-cols-6
.grid-cols-12
```

### Gap

```css
.gap-0    /* 0 */
.gap-1    /* 0.25rem */
.gap-2    /* 0.5rem */
.gap-3    /* 1rem */
.gap-4    /* 1.5rem */
.gap-5    /* 2rem */
.gap-6    /* 3rem */
.gap-7    /* 4rem */
.gap-8    /* 5rem */

.row-gap-0 ate .row-gap-6
.column-gap-0 ate .column-gap-6
```

### Spacing (Padding)

```css
/* Padding all sides */
.p-0 ate .p-8

/* Padding horizontal/vertical */
.px-0 ate .px-6
.py-0 ate .py-6

/* Padding individual */
.pt-0 ate .pt-6  /* top */
.pr-0 ate .pr-6  /* right */
.pb-0 ate .pb-6  /* bottom */
.pl-0 ate .pl-6  /* left */
```

### Spacing (Margin)

```css
/* Margin all sides */
.m-0 ate .m-8
.m-auto

/* Margin horizontal/vertical */
.mx-0 ate .mx-6, .mx-auto
.my-0 ate .my-6, .my-auto

/* Margin individual */
.mt-0 ate .mt-6, .mt-auto
.mr-0 ate .mr-6, .mr-auto
.mb-0 ate .mb-6, .mb-auto
.ml-0 ate .ml-6, .ml-auto

/* Margin negativo */
.-mt-1 ate .-mt-6
.-mr-1 ate .-mr-4
.-mb-1 ate .-mb-4
.-ml-1 ate .-ml-4
```

### Space Between

```css
.space-x-1 ate .space-x-6  /* margin-left entre filhos */
.space-y-1 ate .space-y-6  /* margin-top entre filhos */
```

### Width

```css
.w-full, .w-screen, .w-auto
.w-min, .w-max, .w-fit

/* Width em rem */
.w-1rem ate .w-30rem

.min-w-0, .min-w-full
.max-w-full, .max-w-screen
```

### Height

```css
.h-full, .h-screen, .h-auto
.h-min, .h-max, .h-fit

/* Height em rem */
.h-1rem ate .h-20rem

.min-h-0, .min-h-full, .min-h-screen
.max-h-full, .max-h-screen
```

### Typography

```css
/* Alinhamento */
.text-left, .text-center, .text-right, .text-justify

/* Peso da fonte */
.font-light      /* 300 */
.font-normal     /* 400 */
.font-medium     /* 500 */
.font-semibold   /* 600 */
.font-bold       /* 700 */

/* Tamanho da fonte */
.text-xs    /* 0.75rem */
.text-sm    /* 0.875rem */
.text-base  /* 1rem */
.text-lg    /* 1.125rem */
.text-xl    /* 1.25rem */
.text-2xl   /* 1.5rem */
.text-3xl   /* 1.875rem */
.text-4xl   /* 2.25rem */
.text-5xl   /* 3rem */
.text-6xl   /* 3.75rem */

/* Line Height */
.line-height-1  /* 1 */
.line-height-2  /* 1.25 */
.line-height-3  /* 1.5 */
.line-height-4  /* 2 */

/* Transform */
.uppercase, .lowercase, .capitalize, .normal-case

/* Decoration */
.underline, .line-through, .no-underline

/* White Space */
.white-space-normal, .white-space-nowrap
.white-space-pre, .white-space-pre-line, .white-space-pre-wrap

/* Overflow */
.text-overflow-ellipsis, .text-overflow-clip
```

### Border

```css
/* Border Width */
.border-none
.border-1, .border-2, .border-3

/* Border Sides */
.border-top-none, .border-top-1, .border-top-2
.border-right-none, .border-right-1, .border-right-2
.border-bottom-none, .border-bottom-1, .border-bottom-2
.border-left-none, .border-left-1, .border-left-2
.border-x-none, .border-x-1
.border-y-none, .border-y-1

/* Border Radius */
.border-noround   /* 0 */
.border-round-sm  /* 4px */
.border-round     /* 6px */
.border-round-md  /* 8px */
.border-round-lg  /* 12px */
.border-round-xl  /* 16px */
.border-round-2xl /* 24px */
.border-round-3xl /* 32px */
.border-circle    /* 50% */

.border-round-top, .border-round-bottom
.border-round-left, .border-round-right
```

### Position

```css
.static, .relative, .absolute, .fixed, .sticky

.top-0, .top-50, .top-100
.right-0, .right-50, .right-100
.bottom-0, .bottom-50, .bottom-100
.left-0, .left-50, .left-100
.inset-0
```

### Overflow

```css
.overflow-auto, .overflow-hidden
.overflow-visible, .overflow-scroll

.overflow-x-auto, .overflow-x-hidden
.overflow-x-visible, .overflow-x-scroll

.overflow-y-auto, .overflow-y-hidden
.overflow-y-visible, .overflow-y-scroll
```

### Z-Index

```css
.z-0, .z-1, .z-2, .z-3, .z-4, .z-5
.z-10, .z-20, .z-50, .z-100
.z-auto
```

### Shadow

```css
.shadow-none
.shadow-1  /* leve */
.shadow-2
.shadow-3
.shadow-4
.shadow-5
.shadow-6
.shadow-7
.shadow-8  /* forte */
```

### Opacity

```css
.opacity-0, .opacity-10, .opacity-20
.opacity-30, .opacity-40, .opacity-50
.opacity-60, .opacity-70, .opacity-80
.opacity-90, .opacity-100
```

### Cursor

```css
.cursor-auto, .cursor-default, .cursor-pointer
.cursor-wait, .cursor-text, .cursor-move
.cursor-not-allowed, .cursor-grab, .cursor-grabbing
```

### User Select

```css
.select-none, .select-text, .select-all, .select-auto
```

### Visibility

```css
.visible, .invisible
.pointer-events-none, .pointer-events-auto
```

### Transition

```css
.transition-none
.transition-all
.transition-colors
.transition-transform
.transition-opacity
.transition-shadow

.transition-duration-100
.transition-duration-200
.transition-duration-300
.transition-duration-500
```

### Transform

```css
/* Rotate */
.rotate-45, .rotate-90, .rotate-180
.-rotate-45, .-rotate-90

/* Scale */
.scale-50, .scale-75, .scale-100
.scale-125, .scale-150

/* Translate */
.translate-x-0, .translate-y-0
.-translate-x-50, .-translate-y-50
```

### Colors (usando variaveis TRX)

```css
/* Text */
.text-primary, .text-secondary, .text-muted
.text-success, .text-warning, .text-danger
.text-info, .text-purple
.text-white, .text-black

/* Background */
.bg-primary, .bg-secondary, .bg-tertiary
.bg-card, .bg-elevated
.bg-success, .bg-warning, .bg-danger
.bg-info, .bg-purple
.bg-white, .bg-black, .bg-transparent

/* Soft Backgrounds */
.bg-success-soft, .bg-warning-soft
.bg-danger-soft, .bg-info-soft, .bg-purple-soft

/* Border Colors */
.border-primary, .border-subtle
.border-success, .border-warning
.border-danger, .border-info, .border-purple
.border-white, .border-transparent
```

### Animation

```css
.fadein      /* Fade in */
.fadeout     /* Fade out */
.scalein     /* Scale in */
.slidedown   /* Slide down */
.slideup     /* Slide up */
.animate-spin /* Spin infinito */
```

### Responsivo

Prefixos disponiveis: `sm:` (640px+), `md:` (768px+), `lg:` (1024px+), `xl:` (1280px+)

```css
/* Exemplos */
.md:hidden        /* Oculto em 768px+ */
.lg:flex          /* Flex em 1024px+ */
.md:grid-cols-2   /* 2 colunas em 768px+ */
.lg:grid-cols-4   /* 4 colunas em 1024px+ */
.sm:text-center   /* Centralizado em 640px+ */
```

---

## Sistema de Temas

### Variaveis CSS Disponiveis

```css
/* Backgrounds */
--trx-bg-primary      /* Fundo principal */
--trx-bg-secondary    /* Fundo secundario */
--trx-bg-tertiary     /* Fundo terciario */
--trx-bg-card         /* Fundo de cards */
--trx-bg-elevated     /* Fundo elevado */

/* Texto */
--trx-text-primary    /* Texto principal */
--trx-text-secondary  /* Texto secundario */
--trx-text-muted      /* Texto esmaecido */

/* Bordas */
--trx-border-color    /* Cor de borda padrao */
--trx-border-subtle   /* Cor de borda sutil */

/* Cores de destaque */
--trx-accent-color    /* Cor de destaque principal */
--trx-accent-hover    /* Cor de destaque hover */
--trx-accent-glow     /* Glow do destaque */

/* Status */
--trx-success-color   /* Verde - sucesso */
--trx-warning-color   /* Amarelo - aviso */
--trx-danger-color    /* Vermelho - erro */
--trx-info-color      /* Azul - informacao */
--trx-purple-color    /* Roxo */

/* Sombras */
--trx-shadow-sm, --trx-shadow-md
--trx-shadow-lg, --trx-shadow-xl

/* Gradientes */
--trx-gradient-primary, --trx-gradient-success
--trx-gradient-warning, --trx-gradient-danger
--trx-gradient-info, --trx-gradient-purple

/* Card */
--trx-card-border, --trx-card-radius, --trx-card-shadow
```

### Cores por Tema

| Variavel | Light | Dark (Dracula) |
|----------|-------|----------------|
| `--trx-bg-primary` | #ffffff | #282a36 |
| `--trx-bg-secondary` | #f8fafc | #1e1f29 |
| `--trx-text-primary` | #1e293b | #f8f8f2 |
| `--trx-accent-color` | #6ee7b7 (verde) | #bd93f9 (roxo) |
| `--trx-success-color` | #10b981 | #50fa7b |
| `--trx-warning-color` | #f59e0b | #ffb86c |
| `--trx-danger-color` | #ef4444 | #ff5555 |
| `--trx-info-color` | #06b6d4 | #8be9fd |

---

## Componentes Disponiveis

### Componentes Base (custom TRX)

| Componente | Descricao |
|------------|-----------|
| `TrxPageHeader` | Cabecalho de pagina com titulo, subtitulo e acoes |
| `TrxCard` | Card com titulo e icone |
| `TrxStatCard` | Card de estatistica com valor e icone |
| `TrxDataTable` | Tabela de dados com filtro global |
| `TrxStatus` | Badge de status (online/offline) |
| `TrxStatusBadge` | Badge generico de status |
| `TrxEmptyState` | Estado vazio com icone e mensagem |
| `TrxLoadingOverlay` | Overlay de carregamento |
| `TrxAppLayout` | Layout principal com sidebar |
| `TrxLoginPage` | Pagina de login completa |
| `TrxLoginForm` | Formulario de login |
| `TrxNotFound` | Pagina 404 |
| `TrxLogo` | Logo TRX |
| `TrxThemeToggle` | Toggle de tema |

### PrimeVue Wrappers (~110 componentes)

Veja a secao [PrimeVue Wrappers](#primevue-wrappers-110-componentes) para detalhes completos.

---

## Composables Disponiveis

| Composable | Descricao |
|------------|-----------|
| `useTheme` | Gerenciamento de tema (dark/light, font size) |
| `useApi` | Cliente HTTP com loading state |
| `useAuth` | Autenticacao unificada |
| `useTrxToast` | Notificacoes toast com metodos de conveniencia (success, error, warn, info) |
| `useToast` | Re-export do useToast do PrimeVue (acesso direto) |
| `useConfirm` | Confirm dialog com defaults PT-BR (Sim/Nao) |
| `useDialog` | Dynamic dialog (re-export do PrimeVue) |

---

## Desenvolvimento

### Scripts

```bash
npm install           # Instalar dependencias
npm run build         # Build para producao
npm run dev           # Watch mode
npm run typecheck     # Type check
npm run release       # Release patch (ex: 1.0.0 → 1.0.1)
npm run release:minor # Release minor (ex: 1.0.0 → 1.1.0)
npm run release:major # Release major (ex: 1.0.0 → 2.0.0)
```

### Release e Versionamento

O projeto usa [release-it](https://github.com/release-it/release-it) com [Conventional Commits](https://www.conventionalcommits.org/pt-br/).

**Fluxo de release:**

```bash
# 1. Certifique-se de estar na main com working tree limpa
git checkout main && git pull

# 2. Execute o release (escolha o incremento)
npm run release         # patch — bug fixes
npm run release:minor   # minor — novas features
npm run release:major   # major — breaking changes

# O release-it vai:
# - Determinar a nova versao
# - Atualizar CHANGELOG.md automaticamente
# - Criar commit "chore: release vX.X.X"
# - Criar tag Git "vX.X.X"
# - Fazer push da tag para o GitHub
# - Criar GitHub Release
```

**Nos apps consumidores**, fixe a versao pela tag:

```json
{
  "dependencies": {
    "@trx/ui-common": "github:trixsystems/ui#v1.0.1"
  }
}
```

**Convencao de commits:**

```bash
feat: adiciona novo componente TrxAlert        # minor bump
fix: corrige comportamento do TrxDatePicker    # patch bump
feat!: muda API do TrxAppLayout               # major bump (breaking)
docs: atualiza documentacao
refactor: reorganiza estrutura de tokens
test: adiciona testes do useTheme
```

### Adicionar novo componente

**Componente base (custom TRX):**

1. Criar arquivo em `src/components/TrxNomeComponente.vue`
2. Exportar em `src/components/index.ts`
3. Rebuild: `npm run build`

**Wrapper PrimeVue:**

1. Criar arquivo em `src/components/<categoria>/TrxNomeComponente.vue`
   - Categorias: `form/`, `button/`, `data/`, `panel/`, `overlay/`, `menu/`, `message/`, `media/`, `file/`, `chart/`, `misc/`
2. Exportar em `src/components/<categoria>/index.ts`
3. O barrel `src/components/index.ts` ja faz `export *` de todas as categorias
4. Rebuild: `npm run build`

---

## Apps que Usam

### TRX Call (produto standalone)

| App | Diretorio | Descricao |
|-----|-----------|-----------|
| Call | `call/frontend` | PABX IP (Asterisk) |

### TRX Stack (plataforma unificada)

| App | Diretorio | Descricao |
|-----|-----------|-----------|
| Switch | `trx-stack/switch/frontend` | Telefonia Alto Volume (FreeSWITCH) |
| Phone | `trx-stack/phone/frontend` | Softphone WebRTC |
| Dialer | `trx-stack/dailer/frontend` | Motor de discagem |
| Omnichannel | `trx-stack/omnichannel/frontend` | Atendimento multicanal |

---

## Licenca

Proprietario - TRX Systems
