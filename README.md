# @trx/ui-common

Pacote compartilhado de componentes, estilos e utilitarios para o ecossistema TRX Systems.

## Visao Geral

O `@trx/ui-common` centraliza toda a infraestrutura de frontend compartilhada entre os apps TRX:

- **TRX Call** - PABX IP
- **TRX Phone** - Softphone WebRTC
- **TRX Dialer** - Motor de discagem
- **TRX Predictive** - Discagem preditiva
- **TRX Omnichannel** - Atendimento multicanal

## Stack Unificada

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Vue | 3.5 | Framework |
| TypeScript | 5.5 | Linguagem |
| Vite | 5.4 | Build tool |
| PrimeVue | 4.5 | Componentes UI |
| Tailwind CSS | 3.4 | Utility CSS |
| Pinia | 2.2 | State management |
| Vue Router | 4.5 | Routing |
| Axios | 1.7 | HTTP client |
| dayjs | 1.11 | Datas |
| Chart.js | 4.5 | Graficos |

## Instalacao

### Desenvolvimento Local (npm link)

```bash
# 1. Build do pacote
cd /path/to/trx-ui-common
npm install
npm run build
npm link

# 2. Link em cada app
cd /path/to/call/frontend
npm link @trx/ui-common

cd /path/to/phone/frontend
npm link @trx/ui-common

# ... repetir para outros apps
```

### Via package.json (futuro)

```json
{
  "dependencies": {
    "@trx/ui-common": "file:../trx-ui-common"
  }
}
```

## Estrutura do Pacote

```
trx-ui-common/
├── src/
│   ├── index.ts                    # Entry point principal
│   ├── primevue/
│   │   └── index.ts                # Configuracao PrimeVue
│   ├── composables/
│   │   ├── index.ts
│   │   ├── useTheme.ts             # Gerenciamento de tema
│   │   ├── useToast.ts             # Notificacoes toast
│   │   ├── useApi.ts               # Cliente HTTP
│   │   └── useAuth.ts              # Autenticacao unificada
│   ├── utils/
│   │   └── index.ts                # Funcoes utilitarias
│   ├── components/
│   │   ├── index.ts
│   │   ├── TrxLogo.vue
│   │   ├── TrxThemeToggle.vue
│   │   ├── TrxPageHeader.vue
│   │   ├── TrxStatusBadge.vue
│   │   ├── TrxLoadingOverlay.vue
│   │   ├── TrxEmptyState.vue
│   │   ├── TrxLoginForm.vue
│   │   ├── TrxAppLayout.vue       # Layout principal com sidebar
│   │   ├── TrxNotFound.vue        # Pagina 404
│   │   └── TrxLoginPage.vue       # Pagina de login completa
│   └── styles/
│       ├── themes.css              # Sistema de temas
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
import { configurePrimeVue } from '@trx/ui-common/primevue'
import App from './App.vue'

// Estilos
import '@trx/ui-common/themes'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

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
import { useTheme } from '@trx/ui-common/composables'

const {
  theme,           // 'light' | 'dark'
  isDark,          // boolean
  fontSize,        // 'font-small' | 'font-normal' | 'font-large' | 'font-xlarge'
  toggleTheme,     // () => void
  setTheme,        // (theme: TrxTheme) => void
  setFontSize      // (size: TrxFontSize) => void
} = useTheme()

// Toggle
toggleTheme()

// Set especifico
setTheme('dark')
setFontSize('font-large')
```

### 3. Autenticacao Unificada

```typescript
import { useAuth } from '@trx/ui-common/composables'
import { useRouter } from 'vue-router'

const router = useRouter()

const auth = useAuth({
  appName: 'call',           // 'call' | 'phone' | 'dialer' | 'predictive' | 'omnichannel'
  authUrl: '/api/v1',        // URL do backend TRX Call
  tokenKey: 'access_token',  // Key no localStorage
  onLogout: () => router.push('/login')
})

// Inicializar (verificar token existente)
await auth.initialize()

// Login
const result = await auth.login({
  email: 'usuario@empresa.com',
  password: 'senha123'
})

if (result.success) {
  router.push('/dashboard')
} else {
  console.error(result.error)
}

// Verificar autenticacao
if (auth.isAuthenticated.value) {
  console.log('Usuario:', auth.user.value)
}

// Verificar permissoes
if (auth.isAdmin.value) { /* admin */ }
if (auth.isSupervisor.value) { /* admin ou supervisor */ }

// Logout
await auth.logout()

// Refresh token
await auth.refreshAccessToken()

// Alterar senha
const pwdResult = await auth.changePassword('senhaAtual', 'novaSenha')
```

### 4. Toast Notifications

```typescript
import { useToast } from '@trx/ui-common/composables'

const toast = useToast()

// Tipos de notificacao
toast.success('Registro salvo com sucesso!')
toast.error('Erro ao processar requisicao')
toast.warn('Atencao: dados incompletos')
toast.info('Nova versao disponivel')

// Com titulo customizado
toast.success('Operacao realizada', 'Sucesso!')

// Com opcoes
toast.error('Falha na conexao', 'Erro', {
  life: 10000,      // Duracao em ms
  closable: true    // Permitir fechar
})

// Limpar
toast.clear()
toast.clearAll()
```

### 5. API Client

```typescript
import { useApi, createApiClient } from '@trx/ui-common/composables'

// Uso basico com loading state
const { loading, error, data, get, post, put, del } = useApi()

// GET
const users = await get('/users')

// POST
const newUser = await post('/users', { name: 'Joao', email: 'joao@email.com' })

// PUT
await put('/users/123', { name: 'Joao Silva' })

// DELETE
await del('/users/123')

// Verificar loading
if (loading.value) {
  // Mostrar spinner
}

// Verificar erro
if (error.value) {
  console.error(error.value)
}

// Cliente customizado
const api = createApiClient({
  baseURL: '/api/v2',
  tokenKey: 'my_token',
  onUnauthorized: () => router.push('/login')
})
```

### 6. Utilitarios

```typescript
import {
  // Datas
  formatDate,
  formatDateTime,
  formatTime,
  formatRelative,
  dayjs,

  // Numeros
  formatCurrency,
  formatNumber,
  formatPercent,

  // Strings
  formatPhone,
  formatCPF,
  formatCNPJ,
  formatDuration,
  truncate,

  // Funcoes
  debounce,
  throttle,
  deepClone,
  isEmpty,
  uuid,
  sleep
} from '@trx/ui-common/utils'

// Datas
formatDate('2026-01-08')              // "08/01/2026"
formatDateTime('2026-01-08T14:30:00') // "08/01/2026 14:30"
formatTime('2026-01-08T14:30:45')     // "14:30:45"

// Numeros
formatCurrency(1234.56)               // "R$ 1.234,56"
formatNumber(1234567, 2)              // "1.234.567,00"
formatPercent(75.5)                   // "75,5%"

// Strings brasileiras
formatPhone('11999998888')            // "(11) 99999-8888"
formatCPF('12345678901')              // "123.456.789-01"
formatCNPJ('12345678000199')          // "12.345.678/0001-99"

// Duracao
formatDuration(3661)                  // "01:01:01"
formatDuration(125)                   // "02:05"

// Texto
truncate('Texto muito longo...', 10)  // "Texto muit..."

// Funcoes utilitarias
const debouncedSearch = debounce((q) => search(q), 300)
const throttledScroll = throttle(() => handleScroll(), 100)
const copy = deepClone(objeto)
isEmpty(null)                         // true
isEmpty('')                           // true
isEmpty([])                           // true
uuid()                                // "a1b2c3d4-..."
await sleep(1000)                     // Aguarda 1 segundo
```

### 7. Componentes

```vue
<script setup lang="ts">
import {
  // Base
  TrxLogo,
  TrxThemeToggle,
  TrxPageHeader,
  TrxStatusBadge,
  TrxLoadingOverlay,
  TrxEmptyState,
  TrxLoginForm,

  // Layout
  TrxAppLayout,
  TrxNotFound,
  TrxLoginPage,

  // Types
  type MenuItem,
  type MenuSection
} from '@trx/ui-common/components'

const loading = ref(false)
const items = ref([])
</script>

<template>
  <!-- Logo -->
  <TrxLogo size="md" />
  <TrxLogo size="lg" variant="icon" />

  <!-- Toggle de tema -->
  <TrxThemeToggle />

  <!-- Cabecalho de pagina -->
  <TrxPageHeader
    title="Usuarios"
    subtitle="Gerenciamento de usuarios do sistema"
    icon="pi pi-users"
  >
    <template #actions>
      <Button label="Novo" icon="pi pi-plus" />
    </template>
  </TrxPageHeader>

  <!-- Badge de status -->
  <TrxStatusBadge status="Ativo" />
  <TrxStatusBadge status="Pendente" />
  <TrxStatusBadge status="Erro" type="danger" />

  <!-- Estado vazio -->
  <TrxEmptyState
    v-if="items.length === 0"
    title="Nenhum usuario encontrado"
    description="Cadastre seu primeiro usuario para comecar"
    icon="pi pi-users"
  >
    <template #actions>
      <Button label="Cadastrar Usuario" icon="pi pi-plus" />
    </template>
  </TrxEmptyState>

  <!-- Loading overlay -->
  <TrxLoadingOverlay
    :visible="loading"
    message="Carregando dados..."
  />
</template>
```

### 8. Tela de Login

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { TrxLoginForm } from '@trx/ui-common/components'
import { useAuth } from '@trx/ui-common/composables'

const router = useRouter()
const loading = ref(false)
const error = ref<string | null>(null)

const auth = useAuth({
  appName: 'call',
  authUrl: '/api/v1',
  onLogout: () => router.push('/login')
})

const handleLogin = async (credentials: { email: string; password: string }) => {
  loading.value = true
  error.value = null

  const result = await auth.login(credentials)

  if (result.success) {
    router.push('/dashboard')
  } else {
    error.value = result.error || 'Falha no login'
  }

  loading.value = false
}
</script>

<template>
  <TrxLoginForm
    app-name="Call"
    app-title="Entrar no Sistema"
    :loading="loading"
    :error="error"
    @submit="handleLogin"
  >
    <template #subtitle>
      Sistema de PABX IP institucional
    </template>

    <template #forgot-password>
      <router-link to="/forgot-password">Esqueceu a senha?</router-link>
    </template>

    <template #footer>
      <p>Suporte: suporte@trixsystems.com</p>
    </template>
  </TrxLoginForm>
</template>
```

#### Props do TrxLoginForm

| Prop | Tipo | Descricao |
|------|------|-----------|
| `appName` | string | Nome do app (exibido ao lado do logo) |
| `appTitle` | string | Titulo da pagina de login |
| `loading` | boolean | Estado de carregamento |
| `error` | string | Mensagem de erro |

#### Eventos

| Evento | Payload | Descricao |
|--------|---------|-----------|
| `submit` | `{ email: string, password: string }` | Emitido ao submeter o form |

#### Slots

| Slot | Descricao |
|------|-----------|
| `subtitle` | Texto abaixo do titulo |
| `forgot-password` | Link "Esqueceu a senha?" |
| `actions` | Acoes extras abaixo do botao |
| `footer` | Rodape do card |

### 9. Layout Principal (TrxAppLayout)

Componente de layout completo com sidebar, topbar e area de conteudo.

```vue
<script setup lang="ts">
import { TrxAppLayout, type MenuItem } from '@trx/ui-common/components'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: 'pi pi-home', path: '/' },
  { label: 'Usuarios', icon: 'pi pi-users', path: '/users' },
  { label: 'Relatorios', icon: 'pi pi-chart-bar', path: '/reports' },
  { label: 'Configuracoes', icon: 'pi pi-cog', path: '/settings' }
]

const handleLogout = async () => {
  await authStore.logout()
}
</script>

<template>
  <TrxAppLayout
    app-name="Call"
    app-icon="pi pi-phone"
    :menu-items="menuItems"
    :user-name="authStore.user?.name"
    :user-role="authStore.user?.role"
    show-status
    status-label="Online"
    status-type="online"
    :on-logout="handleLogout"
  >
    <router-view />
  </TrxAppLayout>
</template>
```

#### Props do TrxAppLayout

| Prop | Tipo | Descricao |
|------|------|-----------|
| `appName` | string | Nome do app (obrigatorio) |
| `appIcon` | string | Classe do icone (default: pi pi-box) |
| `menuItems` | MenuItem[] | Lista simples de itens do menu |
| `menuSections` | MenuSection[] | Menu com secoes agrupadas |
| `userName` | string | Nome do usuario logado |
| `userRole` | string | Role do usuario |
| `showStatus` | boolean | Exibir badge de status |
| `statusLabel` | string | Label do status |
| `statusType` | 'online' \| 'offline' \| 'busy' \| 'paused' | Tipo do status |
| `onLogout` | () => void | Callback de logout |

#### Menu com Secoes

```typescript
const menuSections: MenuSection[] = [
  {
    key: 'main',
    label: 'Principal',
    items: [
      { label: 'Dashboard', icon: 'pi pi-home', path: '/' },
      { label: 'Conversas', icon: 'pi pi-comments', path: '/conversations' }
    ]
  },
  {
    key: 'management',
    label: 'Gestao',
    items: [
      { label: 'Agentes', icon: 'pi pi-users', path: '/agents' },
      { label: 'Relatorios', icon: 'pi pi-chart-bar', path: '/reports' }
    ]
  }
]
```

### 10. Pagina 404 (TrxNotFound)

```vue
<template>
  <TrxNotFound
    code="404"
    title="Pagina nao encontrada"
    message="A pagina que voce esta procurando nao existe."
    button-label="Voltar ao Inicio"
    redirect-to="/"
  />
</template>
```

#### Props do TrxNotFound

| Prop | Tipo | Default | Descricao |
|------|------|---------|-----------|
| `code` | string \| number | '404' | Codigo do erro |
| `title` | string | 'Pagina nao encontrada' | Titulo |
| `message` | string | 'A pagina que voce esta procurando...' | Mensagem |
| `buttonLabel` | string | 'Voltar ao Inicio' | Texto do botao |
| `redirectTo` | string | '/' | Rota de redirecionamento |

### 11. Pagina de Login Completa (TrxLoginPage)

Pagina de login com background animado, controles de acessibilidade e tema.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { TrxLoginPage } from '@trx/ui-common/components'
import { useAuth } from '@trx/ui-common/composables'

const router = useRouter()
const loading = ref(false)
const error = ref<string | null>(null)

const auth = useAuth({
  appName: 'phone',
  authUrl: '/api/v1',
  onLogout: () => router.push('/login')
})

interface LoginCredentials {
  email: string
  password: string
  rememberMe: boolean
}

const handleLogin = async (credentials: LoginCredentials) => {
  loading.value = true
  error.value = null

  const result = await auth.login(credentials)

  if (result.success) {
    router.push('/')
  } else {
    error.value = result.error || 'Falha no login'
  }

  loading.value = false
}
</script>

<template>
  <TrxLoginPage
    app-name="Phone"
    app-tagline="Softphone WebRTC"
    :loading="loading"
    :error="error"
    @submit="handleLogin"
  >
    <template #icon>
      <!-- SVG customizado do app -->
      <svg viewBox="0 0 100 100" style="width: 50px; height: 50px;">
        <circle cx="50" cy="50" r="40" fill="white" />
      </svg>
    </template>
  </TrxLoginPage>
</template>
```

#### Props do TrxLoginPage

| Prop | Tipo | Default | Descricao |
|------|------|---------|-----------|
| `appName` | string | - | Nome do app (obrigatorio) |
| `appTagline` | string | '' | Subtitulo/tagline do app |
| `loading` | boolean | false | Estado de loading |
| `error` | string | null | Mensagem de erro |
| `showRememberMe` | boolean | true | Exibir checkbox "Lembrar" |
| `showForgotPassword` | boolean | true | Exibir link "Esqueceu senha" |
| `showFontControls` | boolean | true | Controles de tamanho de fonte |
| `showLanguageToggle` | boolean | true | Toggle de idioma |

#### Eventos

| Evento | Payload | Descricao |
|--------|---------|-----------|
| `submit` | `{ email, password, rememberMe }` | Submissao do form |
| `forgotPassword` | - | Click em "Esqueceu senha" |

#### Slots

| Slot | Descricao |
|------|-----------|
| `icon` | Icone/SVG customizado do app |
| `footer` | Conteudo do rodape |

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

/* Sombras */
--trx-shadow-sm
--trx-shadow-md
--trx-shadow-lg
--trx-shadow-xl

/* Gradientes */
--trx-gradient-primary
--trx-gradient-success
--trx-gradient-warning
--trx-gradient-danger
--trx-gradient-info

/* Card */
--trx-card-border
--trx-card-radius
--trx-card-shadow
```

### Cores por Tema

| Variavel | Light | Dark (Dracula) |
|----------|-------|----------------|
| `--trx-bg-primary` | #ffffff | #282a36 |
| `--trx-bg-secondary` | #f8fafc | #1e1f29 |
| `--trx-text-primary` | #1e293b | #f8f8f2 |
| `--trx-accent-color` | #6ee7b7 | #bd93f9 |
| `--trx-success-color` | #10b981 | #50fa7b |
| `--trx-warning-color` | #f59e0b | #ffb86c |
| `--trx-danger-color` | #ef4444 | #ff5555 |
| `--trx-info-color` | #06b6d4 | #8be9fd |

### Classes Utilitarias

```css
/* Backgrounds */
.trx-bg-primary
.trx-bg-secondary
.trx-bg-card

/* Texto */
.trx-text-primary
.trx-text-secondary
.trx-text-muted

/* Status */
.trx-status-success
.trx-status-warning
.trx-status-danger
.trx-status-info

/* Borda */
.trx-border
```

## Desenvolvimento

### Scripts

```bash
# Instalar dependencias
npm install

# Build para producao
npm run build

# Watch mode (desenvolvimento)
npm run dev

# Type check
npm run typecheck
```

### Adicionar novo componente

1. Criar arquivo em `src/components/TrxNomeComponente.vue`
2. Exportar em `src/components/index.ts`
3. Rebuild: `npm run build`

### Adicionar nova funcao utilitaria

1. Adicionar em `src/utils/index.ts`
2. Rebuild: `npm run build`

### Adicionar novo composable

1. Criar arquivo em `src/composables/useNome.ts`
2. Exportar em `src/composables/index.ts`
3. Rebuild: `npm run build`

## Migracao de Apps Existentes

### Antes (app individual)

```typescript
// main.ts
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import './assets/themes.css'

app.use(PrimeVue, {
  theme: { preset: Aura, options: { darkModeSelector: '.dark' } }
})
```

### Depois (usando @trx/ui-common)

```typescript
// main.ts
import { configurePrimeVue } from '@trx/ui-common/primevue'
import '@trx/ui-common/themes'

configurePrimeVue(app)
```

## Apps do Ecossistema

| App | Diretorio | Descricao |
|-----|-----------|-----------|
| Call | `call/frontend` | PABX IP |
| Phone | `phone/frontend` | Softphone WebRTC |
| Dialer | `dailer/web/frontend` | Motor de discagem |
| Predictive | `predictive/web/frontend` | Discagem preditiva |
| Omnichannel | `omnichannel/frontend` | Atendimento multicanal |

## Licenca

Proprietario - TRX Systems
