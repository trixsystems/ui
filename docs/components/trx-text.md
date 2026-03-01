# TrxText

Componente tipográfico polimórfico que renderiza a tag HTML correta para cada variante tipográfica.

## Uso

```vue
<script setup lang="ts">
import { TrxText } from '@trx/ui-common'
</script>

<template>
  <!-- Headings -->
  <TrxText variant="h1">Título principal</TrxText>
  <TrxText variant="h2">Subtítulo</TrxText>
  <TrxText variant="h3">Seção</TrxText>

  <!-- Body -->
  <TrxText variant="body">Parágrafo normal</TrxText>
  <TrxText variant="body-sm">Texto menor</TrxText>
  <TrxText variant="body-lg">Texto maior</TrxText>

  <!-- Especiais -->
  <TrxText variant="caption">Legenda de imagem</TrxText>
  <TrxText variant="label">Campo obrigatório *</TrxText>
  <TrxText variant="overline">SEÇÃO DE DESTAQUE</TrxText>
  <TrxText variant="code">npm install @trx/ui-common</TrxText>

  <!-- Modificadores -->
  <TrxText variant="body" muted>Texto secundário</TrxText>
  <TrxText variant="body" bold>Texto em negrito</TrxText>
  <TrxText variant="body" truncate>Texto muito longo que será cortado...</TrxText>
  <TrxText variant="h3" no-margin>Sem margem inferior</TrxText>

  <!-- Tag customizada -->
  <TrxText as="span" variant="label">Label como span</TrxText>
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `variant` | `TrxTextVariant` | `'body'` | Variante tipográfica |
| `as` | `string` | auto | Tag HTML override (ex: `'span'`, `'div'`) |
| `muted` | `boolean` | `false` | Aplica cor secundária |
| `bold` | `boolean` | `false` | Força `font-weight: 700` |
| `truncate` | `boolean` | `false` | Trunca com reticências |
| `noMargin` | `boolean` | `false` | Remove margens padrão |

## Variantes

| Variant | Tag padrão | Font-size | Peso |
|:--------|:-----------|:----------|:-----|
| `h1` | `<h1>` | 2.25rem | 700 |
| `h2` | `<h2>` | 1.875rem | 700 |
| `h3` | `<h3>` | 1.5rem | 600 |
| `h4` | `<h4>` | 1.25rem | 600 |
| `h5` | `<h5>` | 1.125rem | 600 |
| `h6` | `<h6>` | 1rem | 600 |
| `body` | `<p>` | 1rem | 400 |
| `body-sm` | `<p>` | 0.875rem | 400 |
| `body-lg` | `<p>` | 1.125rem | 400 |
| `caption` | `<small>` | 0.75rem | 400 |
| `label` | `<label>` | 0.875rem | 500 |
| `overline` | `<span>` | 0.6875rem | 600, uppercase |
| `code` | `<code>` | 0.875em | 400, monospace |
