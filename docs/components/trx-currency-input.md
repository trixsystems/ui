# TrxCurrencyInput

Input de valor monetário formatado com `Intl.NumberFormat`. Formata ao perder foco, aceita decimal ao focar.

## Uso

```vue
<TrxCurrencyInput
  v-model="amount"
  currency="BRL"
  locale="pt-BR"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `number \| null` | `null` | Valor numérico |
| `currency` | `string` | `'BRL'` | Código de moeda ISO |
| `locale` | `string` | `'pt-BR'` | Locale de formatação |
| `disabled` | `boolean` | `false` | Desabilitar |
| `invalid` | `boolean` | `false` | Estado de erro |
