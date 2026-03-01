# Animações

Tokens de duração e easing para animações consistentes.

## Durações

| Token | Valor | Uso |
|:------|:------|:----|
| `animation.fast` | `150ms` | Micro-interações, hover |
| `animation.normal` | `250ms` | Transições padrão |
| `animation.slow` | `400ms` | Modais, drawers |
| `animation.slower` | `600ms` | Animações de entrada de página |

## Easings

| Padrão | Valor |
|:-------|:------|
| Ease out (padrão) | `cubic-bezier(0, 0, 0.2, 1)` |
| Ease in | `cubic-bezier(0.4, 0, 1, 1)` |
| Ease in-out | `cubic-bezier(0.4, 0, 0.2, 1)` |

## Classes Utilitárias

```html
<!-- Fade in -->
<div class="fadein">Aparece suavemente</div>

<!-- Scale in -->
<div class="scalein">Cresce suavemente</div>

<!-- Spin (loading) -->
<i class="pi pi-spin pi-spinner animate-spin"></i>
```

## Variáveis CSS

```css
.meu-componente {
  transition: all var(--trx-duration-normal) ease-out;
}

.modal-enter-active {
  animation: trx-fade-in var(--trx-duration-slow) ease-out;
}
```

## Uso Recomendado

- **`fast`** (150ms): tooltips, dropdowns, highlights
- **`normal`** (250ms): botões, inputs, toggles
- **`slow`** (400ms): modais, drawers, sidebars
- **`slower`** (600ms): onboarding, animações de página
