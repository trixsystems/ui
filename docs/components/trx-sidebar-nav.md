# TrxSidebarNav

Navegação lateral colapsável com grupos, badges, separadores e ícones.

## Uso

```vue
<TrxSidebarNav
  :items="navItems"
  v-model="activeRoute"
  :collapsed="isCollapsed"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `items` | `TrxSidebarNavItem[]` | `[]` | Itens de navegação |
| `modelValue` | `string` | `''` | Item ativo (id) |
| `collapsed` | `boolean` | `false` | Estado colapsado |
| `width` | `string` | `'240px'` | Largura expandida |
| `collapsedWidth` | `string` | `'60px'` | Largura colapsada |

## Tipos

```ts
interface TrxSidebarNavItem {
  id: string
  label: string
  icon?: string
  badge?: string | number
  separator?: boolean
  children?: TrxSidebarNavItem[]
}
```
