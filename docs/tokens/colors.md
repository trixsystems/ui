# Cores

O sistema de cores do TRX usa tokens semânticos que mudam automaticamente entre light e dark mode.

## Cores de Acento (Brand)

| Token CSS | Light | Dark | Uso |
|:----------|:------|:-----|:----|
| `--trx-accent-color` | `#10b981` (Emerald 500) | `#50fa7b` (Dracula Green) | Cor primária de interação |
| `--trx-accent-hover` | `#059669` | `#69ff91` | Hover/active |
| `--trx-primary-soft` | `rgba(16,185,129,.15)` | `rgba(80,250,123,.1)` | Fundos suaves |
| `--trx-accent-glow` | — | `rgba(80,250,123,.3)` | Glow no dark mode |

## Cores de Fundo

| Token CSS | Light | Dark | Uso |
|:----------|:------|:-----|:----|
| `--trx-bg-base` | `#f8fafc` | `#282a36` | Fundo da página |
| `--trx-bg-card` | `#ffffff` | `#1e1f2e` | Fundo de cards |
| `--trx-bg-sidebar` | `#1e293b` | `#1a1b2e` | Sidebar |
| `--trx-bg-elevated` | `#ffffff` | `#252637` | Componentes elevados |
| `--trx-bg-tertiary` | `#f1f5f9` | `#313244` | Fundos terciários |
| `--trx-bg-hover` | `#f1f5f9` | `rgba(255,255,255,.05)` | Estados hover |

## Cores de Texto

| Token CSS | Light | Dark | Uso |
|:----------|:------|:-----|:----|
| `--trx-text-primary` | `#0f172a` | `#f8f8f2` | Texto principal |
| `--trx-text-secondary` | `#475569` | `#94a3b8` | Texto secundário |
| `--trx-text-muted` | `#94a3b8` | `#6272a4` | Texto desabilitado |
| `--trx-text-on-accent` | `#ffffff` | `#282a36` | Texto sobre acento |
| `--trx-text-sidebar` | `#94a3b8` | `#94a3b8` | Texto da sidebar |

## Cores de Borda

| Token CSS | Light | Dark |
|:----------|:------|:-----|
| `--trx-border` | `#e2e8f0` | `rgba(255,255,255,.08)` |
| `--trx-border-strong` | `#cbd5e1` | `rgba(255,255,255,.15)` |

## Cores Semânticas

| Token CSS | Valor | Uso |
|:----------|:------|:----|
| `--trx-success` | `#10b981` | Sucesso, confirmação |
| `--trx-success-bg` | `#ecfdf5` | Fundo de success |
| `--trx-warning` | `#f59e0b` | Aviso |
| `--trx-warning-bg` | `#fffbeb` | Fundo de warning |
| `--trx-danger` | `#ef4444` | Erro, exclusão |
| `--trx-danger-bg` | `#fef2f2` | Fundo de danger |
| `--trx-info` | `#3b82f6` | Informação |
| `--trx-info-bg` | `#eff6ff` | Fundo de info |

## Dark Mode (Dracula)

No dark mode, o tema usa as cores do [Dracula Theme](https://draculatheme.com/):

```css
/* Aplicar dark mode */
document.documentElement.classList.add('dark')
```

| Nome | Hex | Uso |
|:-----|:----|:----|
| Background | `#282a36` | Fundo principal |
| Current Line | `#44475a` | Linha atual / seleção |
| Foreground | `#f8f8f2` | Texto |
| Purple | `#bd93f9` | Acento Dracula |
| Green | `#50fa7b` | Acento primário TRX dark |
| Pink | `#ff79c6` | Destaques |
| Cyan | `#8be9fd` | Info |
| Yellow | `#f1fa8c` | Warning |

## Uso no TypeScript

```typescript
import { tokens } from '@trx/ui-common/tokens'

const brand = tokens.color.brand.DEFAULT   // '#10b981'
const success = tokens.color.success       // '#10b981'
const danger = tokens.color.danger         // '#ef4444'
```
