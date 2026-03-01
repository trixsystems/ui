# Sombras & Bordas

## Sombras

| Token | CSS Var | Valor |
|:------|:--------|:------|
| `shadow.sm` | `--trx-shadow-sm` | `0 1px 2px rgba(0,0,0,.05)` |
| `shadow.md` | `--trx-shadow-md` | `0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)` |
| `shadow.lg` | `--trx-shadow-lg` | `0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)` |
| `shadow.xl` | `--trx-shadow-xl` | `0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)` |

## Border Radius

| Token | CSS Var | Valor | Uso |
|:------|:--------|:------|:----|
| `borderRadius.sm` | `--trx-radius-sm` | `4px` | Chips, badges |
| `borderRadius.md` | `--trx-radius-md` | `8px` | Inputs, botões |
| `borderRadius.lg` | `--trx-radius-lg` | `12px` | Cards |
| `borderRadius.xl` | `--trx-radius-xl` | `16px` | Modais |
| `borderRadius.full` | `--trx-radius-full` | `9999px` | Avatares, pills |

### Token de Card

O `--trx-card-radius` é o token principal para consistência de cards:

```css
--trx-card-radius: 12px;  /* padrão */
```

Pode ser sobrescrito por app via `useAppTheme`:

```typescript
useAppTheme({
  appName: 'call',
  cardRadius: '8px',  // cards mais quadrados para Call
})
```

## Uso

```css
.meu-card {
  border-radius: var(--trx-card-radius);
  box-shadow: var(--trx-shadow-md);
  border: 1px solid var(--trx-border);
}
```
