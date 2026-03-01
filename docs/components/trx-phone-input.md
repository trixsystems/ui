# TrxPhoneInput

Input de telefone com máscara brasileira automática. Aplica formato `(XX) XXXX-XXXX` ou `(XX) XXXXX-XXXX` conforme a quantidade de dígitos.

## Uso Básico

```vue
<TrxPhoneInput v-model="phone" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `string` | `''` | Valor do telefone |
| `placeholder` | `string` | `'(00) 00000-0000'` | Placeholder |
| `disabled` | `boolean` | `false` | Desabilitar input |
| `invalid` | `boolean` | `false` | Estado de erro |
| `showDdi` | `boolean` | `false` | Mostrar campo DDI |
| `ddi` | `string` | `'+55'` | Código de país |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `string` | Valor atualizado |
| `change` | `string` | Valor após blur |

## Exemplos

```vue
<!-- Básico -->
<TrxPhoneInput v-model="phone" />

<!-- Com DDI -->
<TrxPhoneInput v-model="phone" :show-ddi="true" ddi="+55" />

<!-- Com validação -->
<TrxPhoneInput
  v-model="phone"
  :invalid="!isValidPhone(phone)"
  placeholder="(11) 99999-9999"
/>
```
