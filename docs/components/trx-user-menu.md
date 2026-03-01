# TrxUserMenu

Menu dropdown do usuário com avatar, informações e lista de ações.

## Uso Básico

```vue
<TrxUserMenu
  name="João Silva"
  email="joao@empresa.com"
  :items="menuItems"
  @select="handleMenuItem"
  @logout="logout"
/>
```

## Interface `TrxUserMenuItem`

```ts
interface TrxUserMenuItem {
  key: string
  label: string
  icon?: string
  separator?: boolean   // linha divisória
  danger?: boolean      // estilo vermelho
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `name` | `string` | — | Nome do usuário |
| `email` | `string` | — | E-mail (exibido no topo do menu) |
| `avatar` | `string` | — | URL do avatar |
| `role` | `string` | — | Papel/função do usuário |
| `items` | `TrxUserMenuItem[]` | `[]` | Itens do menu |

## Exemplo Completo

```vue
<TrxUserMenu
  :name="user.name"
  :email="user.email"
  :role="user.role"
  :items="[
    { key: 'profile', label: 'Meu Perfil', icon: 'pi pi-user' },
    { key: 'settings', label: 'Configurações', icon: 'pi pi-cog' },
    { separator: true },
    { key: 'logout', label: 'Sair', icon: 'pi pi-sign-out', danger: true },
  ]"
  @select="key => router.push(`/${key}`)"
  @logout="auth.logout()"
/>
```
