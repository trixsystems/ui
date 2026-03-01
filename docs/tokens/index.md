# Design Tokens

Os design tokens do `@trx/ui-common` centralizam todos os valores de design em um único lugar, garantindo consistência visual em todo o ecossistema TRX.

## Estrutura

Os tokens seguem uma hierarquia de 3 níveis:

```
primitive → semantic → component
```

- **Primitivo**: valores brutos (ex: `emerald-500: #10b981`)
- **Semântico**: significado contextual (ex: `accent-color: var(--emerald-500)`)
- **Componente**: uso específico (ex: `card-radius: 12px`)

## Uso via CSS Custom Properties

Importe os estilos no seu `main.ts`:

```typescript
import '@trx/ui-common/styles'  // inclui todos os tokens como CSS vars
```

Os tokens ficam disponíveis como variáveis CSS:

```css
.meu-componente {
  color: var(--trx-text-primary);
  background: var(--trx-bg-card);
  border-radius: var(--trx-card-radius);
  box-shadow: var(--trx-shadow-md);
}
```

## Uso via TypeScript

```typescript
import { tokens } from '@trx/ui-common'
// ou
import { tokens } from '@trx/ui-common/tokens'

// Acessar valores
const primaryColor = tokens.color.brand.DEFAULT   // '#10b981'
const spacing4 = tokens.spacing[4]                // '1rem'
const fontLg = tokens.fontSize.lg                 // '1.125rem'
```

## Seções

- [Cores](/tokens/colors) — paleta de cores, semântica e dark mode
- [Espaçamento](/tokens/spacing) — escala de espaçamento
- [Tipografia](/tokens/typography) — tamanhos, pesos e line-heights
- [Sombras & Bordas](/tokens/shadows) — sombras, border-radius
- [Animações](/tokens/animation) — durações e easings
- [Z-Index](/tokens/zindex) — camadas de sobreposição

## Customização por App

Use `useAppTheme` para sobrescrever tokens específicos por aplicação:

```typescript
// main.ts — TRX Call
import { useAppTheme } from '@trx/ui-common'

useAppTheme({
  appName: 'call',
  primaryColor: '#0ea5e9',       // azul para Call
  primaryColorDark: '#38bdf8',
})
```

```typescript
// main.ts — TRX Omnichannel
useAppTheme({
  appName: 'omnichannel',
  primaryColor: '#8b5cf6',       // roxo para Omnichannel
  primaryColorDark: '#a78bfa',
})
```
