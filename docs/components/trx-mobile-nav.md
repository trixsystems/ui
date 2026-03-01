# TrxMobileNav

Barra de navegação inferior para mobile com ícones, labels e badges de notificação.

## Uso Básico

```vue
<TrxMobileNav :items="navItems" v-model="currentPage" />
```

## Interface `TrxMobileNavItem`

```ts
interface TrxMobileNavItem {
  key: string
  label: string
  icon: string    // classe PrimeIcons
  badge?: number  // contador de notificações
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `items` | `TrxMobileNavItem[]` | — | Itens de navegação |
| `modelValue` | `string` | — | Chave do item ativo |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `string` | Item ativo |
| `select` | `TrxMobileNavItem` | Item clicado |

## Exemplo

```vue
<TrxMobileNav
  v-model="activeRoute"
  :items="[
    { key: 'home',      label: 'Início',    icon: 'pi pi-home' },
    { key: 'calls',     label: 'Chamadas',  icon: 'pi pi-phone',    badge: 3 },
    { key: 'contacts',  label: 'Contatos',  icon: 'pi pi-users' },
    { key: 'settings',  label: 'Config',    icon: 'pi pi-cog' },
  ]"
  @select="item => router.push({ name: item.key })"
/>
```
