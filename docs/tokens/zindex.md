# Z-Index

Escala padronizada de camadas para evitar conflitos de sobreposição.

## Escala

| Token | CSS Var | Valor | Uso |
|:------|:--------|:------|:----|
| `zIndex.hide` | — | `-1` | Elementos ocultos atrás do fundo |
| `zIndex.base` | — | `0` | Elementos normais |
| `zIndex.raised` | `--trx-z-raised` | `1` | Cards elevados, dropdowns simples |
| `zIndex.dropdown` | `--trx-z-dropdown` | `1000` | Dropdowns, selects |
| `zIndex.sticky` | `--trx-z-sticky` | `1100` | Headers fixos, sidebar |
| `zIndex.fixed` | `--trx-z-fixed` | `1200` | Elementos fixos na tela |
| `zIndex.overlay` | `--trx-z-overlay` | `1300` | Backdrops de modal |
| `zIndex.modal` | `--trx-z-modal` | `1400` | Diálogos, modais |
| `zIndex.popover` | `--trx-z-popover` | `1500` | Tooltips, popovers |
| `zIndex.toast` | `--trx-z-toast` | `1600` | Notificações toast |
| `zIndex.max` | `--trx-z-max` | `9999` | Emergências |

## Hierarquia

```
page content  (0)
├── raised card (1)
├── dropdown (1000)
├── sidebar (1100)
├── modal backdrop (1300)
│   └── modal (1400)
│       └── tooltip (1500)
└── toast (1600)
```

## Uso

```css
.minha-sidebar {
  z-index: var(--trx-z-sticky);
}

.meu-modal {
  z-index: var(--trx-z-modal);
}
```

## TypeScript

```typescript
import { tokens } from '@trx/ui-common/tokens'

const modalZ = tokens.zIndex.modal    // 1400
const toastZ = tokens.zIndex.toast   // 1600
```
