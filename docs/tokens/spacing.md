# Espaçamento

Escala de espaçamento baseada em múltiplos de 4px (0.25rem).

## Escala

| Token | CSS Var | Valor | px |
|:------|:--------|:------|:---|
| `spacing[0]` | `--trx-space-0` | `0` | 0 |
| `spacing[1]` | `--trx-space-1` | `0.25rem` | 4px |
| `spacing[2]` | `--trx-space-2` | `0.5rem` | 8px |
| `spacing[3]` | `--trx-space-3` | `0.75rem` | 12px |
| `spacing[4]` | `--trx-space-4` | `1rem` | 16px |
| `spacing[5]` | `--trx-space-5` | `1.25rem` | 20px |
| `spacing[6]` | `--trx-space-6` | `1.5rem` | 24px |
| `spacing[8]` | `--trx-space-8` | `2rem` | 32px |

## Classes Utilitárias

O `@trx/ui-common/styles` inclui classes de espaçamento compatíveis com a escala:

```html
<!-- Padding -->
<div class="p-1">4px</div>
<div class="p-2">8px</div>
<div class="px-4 py-2">padding x=16px y=8px</div>

<!-- Margin -->
<div class="mt-4">margin-top: 16px</div>
<div class="mb-2">margin-bottom: 8px</div>
<div class="mx-auto">centralizado</div>

<!-- Gap -->
<div class="flex gap-3">gap: 12px</div>
<div class="grid gap-4">gap: 16px</div>
```

## TypeScript

```typescript
import { tokens } from '@trx/ui-common/tokens'

const gap = tokens.spacing[4]  // '1rem'
```
