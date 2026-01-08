---
layout: default
title: useTheme
nav_order: 3
parent: Composables
---

# useTheme
{: .no_toc }

Composable para gerenciamento de tema Light/Dark.
{: .fs-6 .fw-300 }

---

## Uso Basico

```typescript
import { useTheme } from '@trx/ui-common/composables'

const {
  theme,        // 'light' | 'dark'
  isDark,       // boolean
  fontSize,     // 'font-small' | 'font-normal' | 'font-large' | 'font-xlarge'
  toggleTheme,  // () => void
  setTheme,     // (theme) => void
  setFontSize   // (size) => void
} = useTheme()
```

---

## Retorno

| Propriedade | Tipo | Descricao |
|:------------|:-----|:----------|
| `theme` | `Ref<'light' \| 'dark'>` | Tema atual |
| `isDark` | `Ref<boolean>` | Se e tema dark |
| `fontSize` | `Ref<TrxFontSize>` | Tamanho da fonte |
| `toggleTheme` | `() => void` | Alterna o tema |
| `setTheme` | `(theme: TrxTheme) => void` | Define o tema |
| `setFontSize` | `(size: TrxFontSize) => void` | Define tamanho fonte |
| `initTheme` | `() => void` | Inicializa do localStorage |

---

## Exemplos

### Toggle de Tema

```vue
<template>
  <Button
    :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
    @click="toggleTheme"
  />
</template>

<script setup lang="ts">
import { useTheme } from '@trx/ui-common/composables'

const { isDark, toggleTheme } = useTheme()
</script>
```

### Definir Tema Especifico

```typescript
// Forcar tema dark
setTheme('dark')

// Forcar tema light
setTheme('light')
```

### Tamanho de Fonte

```vue
<template>
  <div class="font-controls">
    <Button label="A-" @click="setFontSize('font-small')" />
    <Button label="A" @click="setFontSize('font-normal')" />
    <Button label="A+" @click="setFontSize('font-large')" />
  </div>
</template>
```

### Respeitar Preferencia do Sistema

```typescript
// O composable automaticamente detecta prefers-color-scheme
// quando nao ha tema salvo no localStorage
```

---

## Persistencia

O tema e tamanho de fonte sao salvos automaticamente no localStorage:

- `trx-theme`: 'light' | 'dark'
- `trx-font-size`: 'font-small' | 'font-normal' | 'font-large' | 'font-xlarge'

---

## CSS Classes

O tema e aplicado atraves de classes no `<html>`:

```html
<!-- Light -->
<html>

<!-- Dark -->
<html class="dark">

<!-- Com tamanho de fonte -->
<html class="dark font-large">
```
