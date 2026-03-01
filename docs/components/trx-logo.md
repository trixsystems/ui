# TrxLogo

Logotipo SVG da TRX com variantes de tamanho e formato.

## Uso

```vue
<script setup lang="ts">
import { TrxLogo } from '@trx/ui-common'
</script>

<template>
  <!-- Padrão -->
  <TrxLogo />

  <!-- Tamanhos -->
  <TrxLogo size="sm" />
  <TrxLogo size="md" />
  <TrxLogo size="lg" />

  <!-- Apenas ícone (sem texto) -->
  <TrxLogo variant="icon" />

  <!-- Versão completa com texto -->
  <TrxLogo variant="full" size="lg" />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho do logo |
| `variant` | `'full' \| 'icon'` | `'full'` | Variante completa (texto) ou apenas ícone |

## Tamanhos

| Size | Dimensões |
|:-----|:----------|
| `sm` | 60 × 20 px |
| `md` | 90 × 30 px |
| `lg` | 120 × 40 px |

## Tema

O logo adapta automaticamente ao tema:
- **Light**: usa `--trx-text-primary`
- **Dark**: usa `--dracula-purple` (`#bd93f9`)

## No TrxAppLayout

```vue
<template #logo>
  <TrxLogo size="md" />
</template>
```

## Na tela de login

```vue
<TrxLogo size="lg" variant="full" />
```
