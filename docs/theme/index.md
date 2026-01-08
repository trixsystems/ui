---
layout: default
title: Sistema de Temas
nav_order: 6
has_children: false
permalink: /theme/
---

# Sistema de Temas
{: .no_toc }

Customizacao visual com variaveis CSS.
{: .fs-6 .fw-300 }

## Indice
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Visao Geral

O @trx/ui-common fornece um sistema de temas unificado com:

- **Light Theme**: Verde Palmeiras (#6ee7b7, #10b981)
- **Dark Theme**: Dracula (#bd93f9, #50fa7b, #ff79c6)

O tema e controlado pela classe `.dark` no elemento `<html>`.

---

## Importando o Tema

```typescript
// main.ts
import '@trx/ui-common/themes'
```

---

## Variaveis CSS

### Backgrounds

```css
--trx-bg-primary      /* Fundo principal */
--trx-bg-secondary    /* Fundo secundario */
--trx-bg-tertiary     /* Fundo terciario */
--trx-bg-card         /* Fundo de cards */
--trx-bg-elevated     /* Fundo elevado */
```

### Texto

```css
--trx-text-primary    /* Texto principal */
--trx-text-secondary  /* Texto secundario */
--trx-text-muted      /* Texto esmaecido */
```

### Bordas

```css
--trx-border-color    /* Cor de borda padrao */
--trx-border-subtle   /* Borda sutil */
```

### Cores de Destaque

```css
--trx-accent-color    /* Cor de destaque */
--trx-accent-hover    /* Destaque hover */
--trx-accent-glow     /* Glow do destaque */
```

### Status

```css
--trx-success-color   /* Verde - sucesso */
--trx-warning-color   /* Amarelo - aviso */
--trx-danger-color    /* Vermelho - erro */
--trx-info-color      /* Azul - informacao */
```

### Sombras

```css
--trx-shadow-sm
--trx-shadow-md
--trx-shadow-lg
--trx-shadow-xl
```

### Gradientes

```css
--trx-gradient-primary
--trx-gradient-success
--trx-gradient-warning
--trx-gradient-danger
--trx-gradient-info
```

### Cards

```css
--trx-card-border
--trx-card-radius
--trx-card-shadow
```

---

## Tabela de Cores

| Variavel | Light | Dark (Dracula) |
|:---------|:------|:---------------|
| `--trx-bg-primary` | #ffffff | #282a36 |
| `--trx-bg-secondary` | #f8fafc | #1e1f29 |
| `--trx-bg-tertiary` | #f1f5f9 | #21222c |
| `--trx-text-primary` | #1e293b | #f8f8f2 |
| `--trx-text-secondary` | #64748b | #b8c0e0 |
| `--trx-accent-color` | #6ee7b7 | #bd93f9 |
| `--trx-success-color` | #10b981 | #50fa7b |
| `--trx-warning-color` | #f59e0b | #ffb86c |
| `--trx-danger-color` | #ef4444 | #ff5555 |
| `--trx-info-color` | #06b6d4 | #8be9fd |

---

## Usando Variaveis

### Em CSS/SCSS

```css
.my-component {
  background: var(--trx-bg-card);
  color: var(--trx-text-primary);
  border: 1px solid var(--trx-border-color);
  border-radius: var(--trx-card-radius);
  box-shadow: var(--trx-shadow-md);
}

.my-button {
  background: var(--trx-accent-color);
  color: white;
}

.my-button:hover {
  background: var(--trx-accent-hover);
}
```

### Em Vue (scoped)

```vue
<style scoped>
.card {
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: var(--trx-card-radius);
}

.dark .card {
  box-shadow: var(--trx-shadow-lg), 0 0 20px rgba(189, 147, 249, 0.1);
}
</style>
```

---

## Classes Utilitarias

O tema inclui classes utilitarias:

```html
<!-- Backgrounds -->
<div class="trx-bg-primary">...</div>
<div class="trx-bg-secondary">...</div>
<div class="trx-bg-card">...</div>

<!-- Texto -->
<p class="trx-text-primary">Texto principal</p>
<p class="trx-text-secondary">Texto secundario</p>
<p class="trx-text-muted">Texto esmaecido</p>

<!-- Status -->
<span class="trx-status-success">Sucesso</span>
<span class="trx-status-warning">Aviso</span>
<span class="trx-status-danger">Erro</span>
<span class="trx-status-info">Info</span>

<!-- Borda -->
<div class="trx-border">Com borda</div>
```

---

## Alternando Temas

### Via useTheme

```typescript
import { useTheme } from '@trx/ui-common/composables'

const { isDark, toggleTheme, setTheme } = useTheme()

// Toggle
toggleTheme()

// Forcar tema
setTheme('dark')
setTheme('light')
```

### Via JavaScript

```typescript
// Ativar dark mode
document.documentElement.classList.add('dark')
localStorage.setItem('trx-theme', 'dark')

// Ativar light mode
document.documentElement.classList.remove('dark')
localStorage.setItem('trx-theme', 'light')
```

---

## Tamanhos de Fonte

O sistema suporta 4 tamanhos de fonte:

| Classe | Tamanho Base |
|:-------|:-------------|
| `font-small` | 14px |
| `font-normal` | 16px |
| `font-large` | 18px |
| `font-xlarge` | 20px |

```typescript
import { useTheme } from '@trx/ui-common/composables'

const { setFontSize } = useTheme()

setFontSize('font-small')
setFontSize('font-normal')
setFontSize('font-large')
setFontSize('font-xlarge')
```

---

## Customizacao

### Sobrescrevendo Variaveis

Voce pode sobrescrever as variaveis no seu CSS local:

```css
/* src/assets/custom.css */
:root {
  /* Customizar accent color */
  --trx-accent-color: #8b5cf6;
  --trx-accent-hover: #7c3aed;

  /* Customizar radius */
  --trx-card-radius: 8px;
}

.dark {
  /* Customizar cores dark */
  --trx-accent-color: #a78bfa;
}
```

### Ordem de Imports

```typescript
// main.ts
import '@trx/ui-common/themes'  // Primeiro
import './assets/custom.css'     // Depois (sobrescreve)
```

---

## Integracao com PrimeVue

O tema do @trx/ui-common e configurado para funcionar com PrimeVue Aura:

```typescript
import { configurePrimeVue } from '@trx/ui-common/primevue'

// Configura PrimeVue com:
// - Preset: Aura
// - Dark mode selector: '.dark'
// - CSS Layer: false
configurePrimeVue(app)
```

Os componentes PrimeVue herdam automaticamente as cores do sistema de temas TRX.
