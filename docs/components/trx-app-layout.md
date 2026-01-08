---
layout: default
title: TrxAppLayout
nav_order: 1
parent: Componentes
---

# TrxAppLayout
{: .no_toc }

Layout principal da aplicacao com sidebar, topbar e area de conteudo.
{: .fs-6 .fw-300 }

## Indice
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Uso Basico

```vue
<script setup lang="ts">
import { TrxAppLayout, type MenuItem } from '@trx/ui-common/components'

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: 'pi pi-home', path: '/' },
  { label: 'Usuarios', icon: 'pi pi-users', path: '/users' },
  { label: 'Configuracoes', icon: 'pi pi-cog', path: '/settings' }
]

const handleLogout = () => {
  // Logica de logout
}
</script>

<template>
  <TrxAppLayout
    app-name="MeuApp"
    app-icon="pi pi-home"
    :menu-items="menuItems"
    user-name="Joao Silva"
    @logout="handleLogout"
  >
    <router-view />
  </TrxAppLayout>
</template>
```

---

## Props

| Prop | Tipo | Default | Descricao |
|:-----|:-----|:--------|:----------|
| `appName` | `string` | - | Nome do app (obrigatorio) |
| `appIcon` | `string` | `'pi pi-box'` | Classe do icone PrimeIcons |
| `menuItems` | `MenuItem[]` | `[]` | Lista de itens do menu |
| `menuSections` | `MenuSection[]` | `[]` | Menu com secoes agrupadas |
| `userName` | `string` | `'Usuario'` | Nome do usuario logado |
| `userRole` | `string` | - | Role do usuario |
| `showStatus` | `boolean` | `false` | Exibir badge de status |
| `statusLabel` | `string` | - | Label do status |
| `statusType` | `'online' \| 'offline' \| 'busy' \| 'paused'` | `'offline'` | Tipo do status |
| `onLogout` | `() => void` | - | Callback de logout |

---

## Tipos

### MenuItem

```typescript
interface MenuItem {
  label: string      // Texto exibido
  icon: string       // Classe do icone (ex: 'pi pi-home')
  path: string       // Rota de navegacao
  roles?: string[]   // Roles permitidas (opcional)
}
```

### MenuSection

```typescript
interface MenuSection {
  key: string         // Identificador unico
  label: string       // Titulo da secao
  items: MenuItem[]   // Itens da secao
}
```

---

## Eventos

| Evento | Payload | Descricao |
|:-------|:--------|:----------|
| `logout` | - | Emitido ao clicar em sair |
| `navigate` | `path: string` | Emitido ao navegar |

---

## Slots

| Slot | Descricao |
|:-----|:----------|
| `default` | Conteudo principal (area de conteudo) |
| `topbar-left` | Conteudo extra no lado esquerdo da topbar |

---

## Exemplos

### Menu Simples

```vue
<template>
  <TrxAppLayout
    app-name="Call"
    app-icon="pi pi-phone"
    :menu-items="[
      { label: 'Dashboard', icon: 'pi pi-home', path: '/' },
      { label: 'Ramais', icon: 'pi pi-phone', path: '/extensions' },
      { label: 'Configuracoes', icon: 'pi pi-cog', path: '/settings' }
    ]"
    user-name="Admin"
  >
    <router-view />
  </TrxAppLayout>
</template>
```

### Menu com Secoes

```vue
<script setup lang="ts">
import { TrxAppLayout, type MenuSection } from '@trx/ui-common/components'

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
    key: 'channels',
    label: 'Canais',
    items: [
      { label: 'WhatsApp', icon: 'pi pi-whatsapp', path: '/whatsapp' },
      { label: 'Call Center', icon: 'pi pi-phone', path: '/call-center' }
    ]
  },
  {
    key: 'config',
    label: 'Configuracoes',
    items: [
      { label: 'Agentes', icon: 'pi pi-users', path: '/agents' },
      { label: 'Settings', icon: 'pi pi-cog', path: '/settings' }
    ]
  }
]
</script>

<template>
  <TrxAppLayout
    app-name="Omnichannel"
    app-icon="pi pi-comments"
    :menu-sections="menuSections"
    user-name="Supervisor"
  >
    <router-view />
  </TrxAppLayout>
</template>
```

### Com Status do Usuario

```vue
<template>
  <TrxAppLayout
    app-name="Phone"
    app-icon="pi pi-phone"
    :menu-items="menuItems"
    user-name="Agente"
    show-status
    status-label="Online"
    status-type="online"
  >
    <router-view />
  </TrxAppLayout>
</template>
```

### Status Types

- `online` - Verde (disponivel)
- `busy` - Vermelho (ocupado)
- `paused` - Amarelo (pausado)
- `offline` - Cinza (offline)

---

## Responsividade

O componente e totalmente responsivo:

- **Desktop**: Sidebar fixa, expansivel/colapsavel
- **Mobile**: Sidebar oculta, abre como drawer

A sidebar pode ser colapsada clicando no botao no rodape ou no icone de menu na topbar (mobile).

---

## Tema

O componente segue automaticamente o tema Light/Dark do sistema:

- **Light**: Sidebar verde (#059669)
- **Dark**: Sidebar Dracula (#282a36)

O toggle de tema esta disponivel na topbar.
