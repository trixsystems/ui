# TrxThemeToggle

Botão que alterna entre tema claro e escuro, integrado ao `useTheme`.

## Uso

```vue
<script setup lang="ts">
import { TrxThemeToggle } from '@trx/ui-common'
</script>

<template>
  <TrxThemeToggle />
</template>
```

## Comportamento

- Sem props — lê e altera o tema via `useTheme()` internamente
- Exibe `pi-moon` no tema claro e `pi-sun` no tema escuro
- Tooltip automático: **"Tema Escuro"** / **"Tema Claro"**
- Rotação de 15° no hover
- Persistência do tema no `localStorage`

## No TrxAppLayout

Coloque no slot `topbar-right` para posicionamento padrão:

```vue
<TrxAppLayout app-name="Call" :menu-items="menuItems">
  <template #topbar-right>
    <TrxThemeToggle />
  </template>
  <router-view />
</TrxAppLayout>
```

## Com useTheme

Para lógica customizada, use o composable diretamente:

```vue
<script setup lang="ts">
import { useTheme } from '@trx/ui-common'

const { isDark, toggleTheme, setTheme } = useTheme()
</script>
```

::: tip
`TrxThemeToggle` é um wrapper thin em torno de `useTheme().toggleTheme()`. Use-o quando não precisar de customização visual.
:::
