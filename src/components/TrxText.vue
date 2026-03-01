<script setup lang="ts">
/**
 * TrxText — Componente tipográfico polimórfico.
 *
 * @example
 * <TrxText variant="h1">Título</TrxText>
 * <TrxText variant="body" muted>Texto secundário</TrxText>
 * <TrxText as="span" variant="label">Campo obrigatório</TrxText>
 */

export type TrxTextVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body' | 'body-sm' | 'body-lg'
  | 'caption' | 'label' | 'overline' | 'code'

const tagMap: Record<TrxTextVariant, string> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
  body: 'p', 'body-sm': 'p', 'body-lg': 'p',
  caption: 'small', label: 'label', overline: 'span', code: 'code',
}

const props = withDefaults(
  defineProps<{
    variant?: TrxTextVariant
    /** Tag HTML a renderizar (sobrescreve a tag padrão do variant) */
    as?: string
    muted?: boolean
    bold?: boolean
    truncate?: boolean
    /** Não aplicar estilos de margem */
    noMargin?: boolean
  }>(),
  { variant: 'body' },
)

const tag = props.as ?? tagMap[props.variant]
</script>

<template>
  <component
    :is="tag"
    :class="[
      'trx-text',
      `trx-text--${variant}`,
      {
        'trx-text--muted': muted,
        'trx-text--bold': bold,
        'trx-text--truncate': truncate,
        'trx-text--no-margin': noMargin,
      },
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.trx-text { font-family: Inter, system-ui, -apple-system, sans-serif; }

/* Headings */
.trx-text--h1 { font-size: 2.25rem; font-weight: 700; line-height: 1.2; color: var(--trx-text-primary); margin: 0 0 1rem; }
.trx-text--h2 { font-size: 1.875rem; font-weight: 700; line-height: 1.25; color: var(--trx-text-primary); margin: 0 0 0.875rem; }
.trx-text--h3 { font-size: 1.5rem; font-weight: 600; line-height: 1.3; color: var(--trx-text-primary); margin: 0 0 0.75rem; }
.trx-text--h4 { font-size: 1.25rem; font-weight: 600; line-height: 1.35; color: var(--trx-text-primary); margin: 0 0 0.625rem; }
.trx-text--h5 { font-size: 1.125rem; font-weight: 600; line-height: 1.4; color: var(--trx-text-primary); margin: 0 0 0.5rem; }
.trx-text--h6 { font-size: 1rem; font-weight: 600; line-height: 1.4; color: var(--trx-text-primary); margin: 0 0 0.5rem; }

/* Body */
.trx-text--body    { font-size: 1rem; line-height: 1.6; color: var(--trx-text-primary); margin: 0 0 0.75rem; }
.trx-text--body-sm { font-size: 0.875rem; line-height: 1.5; color: var(--trx-text-primary); margin: 0 0 0.625rem; }
.trx-text--body-lg { font-size: 1.125rem; line-height: 1.6; color: var(--trx-text-primary); margin: 0 0 0.875rem; }

/* Special */
.trx-text--caption  { font-size: 0.75rem; line-height: 1.4; color: var(--trx-text-secondary); }
.trx-text--label    { font-size: 0.875rem; font-weight: 500; color: var(--trx-text-primary); }
.trx-text--overline { font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--trx-text-muted); }
.trx-text--code     { font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace; font-size: 0.875em; background: var(--trx-bg-tertiary); padding: 0.125em 0.375em; border-radius: 4px; color: var(--trx-accent-color); }

/* Modifiers */
.trx-text--muted { color: var(--trx-text-muted) !important; }
.trx-text--bold  { font-weight: 700 !important; }
.trx-text--truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.trx-text--no-margin { margin: 0 !important; }
</style>
