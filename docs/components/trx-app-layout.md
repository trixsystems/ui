# TrxAppLayout

Layout principal da aplicação com sidebar responsiva, topbar e área de conteúdo.

## Uso

```vue
<script setup lang="ts">
import { TrxAppLayout, type MenuItem } from '@trx/ui-common'

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: 'pi pi-home', path: '/' },
  { label: 'Usuários', icon: 'pi pi-users', path: '/users' },
  { label: 'Configurações', icon: 'pi pi-cog', path: '/settings' },
]
</script>

<template>
  <TrxAppLayout
    app-name="MeuApp"
    app-icon="pi pi-home"
    :menu-items="menuItems"
    user-name="João Silva"
    @logout="handleLogout"
  >
    <router-view />
  </TrxAppLayout>
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `appName` | `string` | **required** | Nome do app |
| `appIcon` | `string` | `'pi pi-box'` | Ícone PrimeIcons |
| `menuItems` | `MenuItem[]` | `[]` | Itens do menu (flat) |
| `menuSections` | `MenuSection[]` | `[]` | Menu com seções agrupadas |
| `userName` | `string` | `'Usuário'` | Nome do usuário logado |
| `userRole` | `string` | — | Role/cargo do usuário |
| `showStatus` | `boolean` | `false` | Exibir badge de status |
| `statusLabel` | `string` | — | Label do status |
| `statusType` | `'online' \| 'offline' \| 'busy' \| 'paused'` | `'offline'` | Tipo do status |

## Eventos

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `logout` | — | Clique em "Sair" |

## Slots

| Slot | Descrição |
|:-----|:----------|
| `default` | Conteúdo principal |
| `topbar-left` | Área extra na topbar (esquerda) |

## Tipos

```typescript
interface MenuItem {
  label: string
  icon: string
  path: string
  roles?: string[]  // restrição de acesso opcional
}

interface MenuSection {
  key: string
  label: string
  items: MenuItem[]
}
```

## Exemplos

### Menu com seções

```vue
<TrxAppLayout
  app-name="Omnichannel"
  :menu-sections="[
    {
      key: 'main',
      label: 'Principal',
      items: [
        { label: 'Dashboard', icon: 'pi pi-home', path: '/' },
        { label: 'Conversas', icon: 'pi pi-comments', path: '/conversations' },
      ]
    },
    {
      key: 'config',
      label: 'Configurações',
      items: [
        { label: 'Agentes', icon: 'pi pi-users', path: '/agents' },
        { label: 'Settings', icon: 'pi pi-cog', path: '/settings' },
      ]
    },
  ]"
>
  <router-view />
</TrxAppLayout>
```

### Com status do usuário

```vue
<TrxAppLayout
  app-name="Phone"
  :menu-items="menuItems"
  user-name="Agente"
  show-status
  status-label="Online"
  status-type="online"
>
  <router-view />
</TrxAppLayout>
```

## Acessibilidade

O componente inclui:
- Link "Pular para o conteúdo" (`#trx-main-content`) visível apenas no foco
- `id="trx-main-content"` e `tabindex="-1"` na área de conteúdo principal

## Responsividade

- **Desktop**: sidebar fixa, colapsável
- **Mobile**: sidebar oculta, abre como drawer via botão no topbar
