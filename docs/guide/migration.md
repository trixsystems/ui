# Migração

Como migrar apps existentes para usar o `@trx/ui-common`.

## Visão Geral

1. Adicionar `@trx/ui-common` como dependência
2. Atualizar `main.ts` com `configurePrimeVue`
3. Substituir CSS local pelo tema unificado
4. Substituir imports PrimeVue por wrappers `Trx*`
5. Substituir componentes locais pelos do pacote
6. Usar composables unificados

## Passo 1: Dependência

```json
{
  "dependencies": {
    "@trx/ui-common": "github:trixsystems/ui#v1.0.0"
  }
}
```

## Passo 2: main.ts

**Antes:**
```typescript
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import './assets/themes.css'

app.use(PrimeVue, { theme: { preset: Aura, options: { darkModeSelector: '.dark' } } })
app.use(ToastService)
```

**Depois:**
```typescript
import { configurePrimeVue } from '@trx/ui-common'
import 'primeicons/primeicons.css'
import '@trx/ui-common/styles'

configurePrimeVue(app)  // configura PrimeVue + Toast + Confirm + Dialog + Tooltip
```

## Passo 3: Estilos

- Remover `src/assets/themes.css`, `variables.css`
- Remover `import 'primeflex/primeflex.css'`
- Adicionar `import '@trx/ui-common/styles'`

::: warning
Não importe `primeflex/primeflex.css`. O `@trx/ui-common/styles` já inclui ~700 classes utilitárias que substituem o PrimeFlex.
:::

## Passo 4: Substituir imports PrimeVue

**Antes:**
```typescript
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Select from 'primevue/select'
import DataTable from 'primevue/datatable'
```

**Depois:**
```typescript
import {
  TrxButton, TrxInputText, TrxDialog,
  TrxSelect, TrxDataTable
} from '@trx/ui-common'
```

### Aliases legacy (PrimeVue v3)

```typescript
import {
  TrxDropdown,     // = TrxSelect
  TrxCalendar,     // = TrxDatePicker
  TrxSidebar,      // = TrxDrawer
  TrxInputSwitch,  // = TrxToggleSwitch
  TrxTabView       // = TrxTabs
} from '@trx/ui-common'
```

## Passo 5: Composables

| Antes | Depois |
|:------|:-------|
| `useToast()` de primevue | `useTrxToast()` — API simplificada |
| `useConfirm()` de primevue | `useConfirm()` — defaults PT-BR já inclusos |
| Auth manual | `useAuth({ appName, authUrl })` |
| Theme manual | `useTheme()` |

**Toast:**
```typescript
// Antes
toast.add({ severity: 'success', summary: 'Ok', detail: 'Feito!', life: 3000 })

// Depois
const toast = useTrxToast()
toast.success('Feito!')
```

## Passo 6: vite.config.ts

```typescript
export default defineConfig({
  resolve: {
    dedupe: ['vue', 'primevue']  // evita múltiplas instâncias com npm link
  }
})
```

## Problemas Comuns

**`inject() can only be used inside setup()`**
→ Falta `resolve.dedupe: ['vue', 'primevue']` no `vite.config.ts`

**`Cannot find module '@trx/ui-common'`**
→ Execute `npm link` no pacote e `npm link @trx/ui-common` no app

**Estilos não aplicados**
→ Verifique a ordem de imports: `@trx/ui-common/styles` deve vir antes dos estilos locais

## Checklist

- [ ] Dependência adicionada
- [ ] `configurePrimeVue` no `main.ts`
- [ ] `@trx/ui-common/styles` importado
- [ ] `primeflex` removido
- [ ] `resolve.dedupe` no `vite.config.ts`
- [ ] Imports PrimeVue → wrappers `Trx*`
- [ ] `TrxAppLayout` no lugar do layout customizado
- [ ] `useTrxToast` no lugar do `useToast` direto
- [ ] Tema Light/Dark testado
