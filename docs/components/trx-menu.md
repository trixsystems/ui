# Menus e Navegação

Wrappers para os componentes de menu e navegação do PrimeVue: `TrxMenu`, `TrxMenubar`, `TrxBreadcrumb`, `TrxTabMenu`, `TrxContextMenu`, `TrxTieredMenu`, `TrxPanelMenu`, `TrxMegaMenu`, `TrxDock` e `TrxSteps`. São pass-through completos sem defaults TRX específicos.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  TrxMenu, TrxMenubar, TrxBreadcrumb, TrxTabMenu,
  TrxContextMenu, TrxPanelMenu, TrxSteps, TrxButton,
} from '@trx/ui-common'
import type { MenuItem } from 'primevue/menuitem'

const menuRef = ref()
const ctxRef = ref()

const itens: MenuItem[] = [
  { label: 'Perfil', icon: 'pi pi-user', command: () => {} },
  { label: 'Configurações', icon: 'pi pi-cog', command: () => {} },
  { separator: true },
  { label: 'Sair', icon: 'pi pi-sign-out', command: () => {} },
]

const breadcrumb: MenuItem[] = [
  { label: 'Início', url: '/' },
  { label: 'Usuários', url: '/usuarios' },
  { label: 'João Silva' },
]

const abas: MenuItem[] = [
  { label: 'Dashboard', icon: 'pi pi-home' },
  { label: 'Relatórios', icon: 'pi pi-chart-bar' },
  { label: 'Configurações', icon: 'pi pi-cog' },
]

const passos: MenuItem[] = [
  { label: 'Cadastro' },
  { label: 'Endereço' },
  { label: 'Revisão' },
  { label: 'Pagamento' },
]
</script>

<template>
  <!-- Menu suspenso controlado por botão -->
  <TrxMenu ref="menuRef" :model="itens" popup />
  <TrxButton label="Minha conta" icon="pi pi-user" @click="menuRef.toggle($event)" />

  <!-- Menubar (barra horizontal) -->
  <TrxMenubar :model="itens" />

  <!-- Breadcrumb -->
  <TrxBreadcrumb :model="breadcrumb" :home="{ icon: 'pi pi-home', url: '/' }" />

  <!-- TabMenu (abas de navegação) -->
  <TrxTabMenu :model="abas" />

  <!-- Menu de contexto (clique direito) -->
  <TrxContextMenu ref="ctxRef" :model="itens" />
  <div @contextmenu="ctxRef.show($event)">Clique com botão direito aqui</div>

  <!-- PanelMenu (acordeão de navegação) -->
  <TrxPanelMenu :model="itens" />

  <!-- Steps (indicador de progresso) -->
  <TrxSteps :model="passos" :active-step="1" />
</template>
```

## Props principais — TrxMenu

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `model` | `MenuItem[]` | Lista de itens do menu |
| `popup` | `boolean` | Modo popup (controlado via `toggle()`) |

## Props principais — TrxMenubar

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `model` | `MenuItem[]` | Itens da barra |
| `breakpoint` | `string` | Largura para modo responsivo (padrão: `960px`) |

## Props principais — TrxBreadcrumb

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `model` | `MenuItem[]` | Itens do caminho |
| `home` | `MenuItem` | Item inicial (ícone de início) |

## Props principais — TrxSteps

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `model` | `MenuItem[]` | Passos do fluxo |
| `activeStep` | `number` | Índice do passo ativo |
| `readonly` | `boolean` | Impede navegação clicando nos passos |

## MenuItem — estrutura básica

```typescript
interface MenuItem {
  label?: string       // Texto exibido
  icon?: string        // Classe do ícone (ex: 'pi pi-home')
  url?: string         // Link de navegação
  route?: object       // Rota Vue Router
  command?: () => void // Função executada ao clicar
  items?: MenuItem[]   // Subitens (submenus)
  separator?: boolean  // Renderiza um separador
  disabled?: boolean   // Desabilita o item
  visible?: boolean    // Oculta o item
}
```

## Ver também

- [PrimeVue Menu](https://primevue.org/menu/) — documentação completa da API
- [PrimeVue Menubar](https://primevue.org/menubar/) — documentação completa da API
- [PrimeVue Breadcrumb](https://primevue.org/breadcrumb/) — documentação completa da API
- [PrimeVue TabMenu](https://primevue.org/tabmenu/) — documentação completa da API
- [PrimeVue ContextMenu](https://primevue.org/contextmenu/) — documentação completa da API
- [PrimeVue TieredMenu](https://primevue.org/tieredmenu/) — documentação completa da API
- [PrimeVue PanelMenu](https://primevue.org/panelmenu/) — documentação completa da API
- [PrimeVue MegaMenu](https://primevue.org/megamenu/) — documentação completa da API
- [PrimeVue Dock](https://primevue.org/dock/) — documentação completa da API
- [PrimeVue Steps](https://primevue.org/steps/) — documentação completa da API
