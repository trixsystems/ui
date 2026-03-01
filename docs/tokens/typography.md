# Tipografia

Sistema tipográfico baseado na fonte **Inter** com escala modular.

## Fonte

```css
/* Importada automaticamente pelo @trx/ui-common/styles */
font-family: Inter, system-ui, -apple-system, sans-serif;
```

## Tamanhos de Fonte

| Token | CSS Var | Valor | Uso |
|:------|:--------|:------|:----|
| `fontSize.xs` | `--trx-text-xs` | `0.75rem` (12px) | Captions, labels |
| `fontSize.sm` | `--trx-text-sm` | `0.875rem` (14px) | Texto secundário |
| `fontSize.base` | `--trx-text-base` | `1rem` (16px) | Texto padrão |
| `fontSize.lg` | `--trx-text-lg` | `1.125rem` (18px) | Subtítulos |
| `fontSize.xl` | `--trx-text-xl` | `1.25rem` (20px) | Títulos menores |
| `fontSize.2xl` | `--trx-text-2xl` | `1.5rem` (24px) | h3 |
| `fontSize.3xl` | `--trx-text-3xl` | `1.875rem` (30px) | h2 |
| `fontSize.4xl` | `--trx-text-4xl` | `2.25rem` (36px) | h1 |

## Pesos

| Token | Valor | Uso |
|:------|:------|:----|
| `fontWeight.light` | `300` | Texto leve |
| `fontWeight.normal` | `400` | Texto padrão |
| `fontWeight.medium` | `500` | Labels, ênfase |
| `fontWeight.semibold` | `600` | Subtítulos |
| `fontWeight.bold` | `700` | Títulos, destaque |

## Line Heights

| Token | Valor |
|:------|:------|
| `lineHeight.tight` | `1.25` |
| `lineHeight.snug` | `1.375` |
| `lineHeight.normal` | `1.5` |
| `lineHeight.relaxed` | `1.625` |
| `lineHeight.loose` | `2` |

## Componente TrxText

Use o componente `TrxText` para aplicar a escala tipográfica:

```vue
<TrxText variant="h1">Título</TrxText>
<TrxText variant="body" muted>Parágrafo secundário</TrxText>
<TrxText variant="code">console.log('hello')</TrxText>
```

Ver [TrxText](/components/trx-text) para documentação completa.

## Classes Utilitárias

```html
<p class="text-sm font-medium">Texto pequeno e médio</p>
<h2 class="text-2xl font-bold">Título grande</h2>
<span class="text-muted">Texto atenuado</span>
```
