# TrxOTPInput

Input de código OTP com células individuais. Suporta paste, navegação por setas e backspace.

## Uso

```vue
<TrxOTPInput
  v-model="otpCode"
  :length="6"
  :masked="false"
  @complete="onComplete"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `string` | `''` | Código OTP |
| `length` | `number` | `6` | Número de dígitos |
| `disabled` | `boolean` | `false` | Desabilitar |
| `invalid` | `boolean` | `false` | Estado de erro |
| `masked` | `boolean` | `false` | Mascarar como senha |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `string` | Código atualizado |
| `complete` | `string` | Código completo |
