# TrxAddressForm

Formulário de endereço brasileiro com busca automática por CEP via ViaCEP.

## Uso Básico

```vue
<TrxAddressForm v-model="address" />
```

## Interface `TrxAddress`

```ts
interface TrxAddress {
  zipCode?: string
  street?: string
  number?: string
  complement?: string
  district?: string
  city?: string
  state?: string
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `TrxAddress` | `{}` | Endereço |
| `disabled` | `boolean` | `false` | Desabilitar formulário |
| `required` | `boolean` | `false` | Marcar campos como obrigatórios |

## Busca por CEP

Ao digitar um CEP com 8 dígitos, o componente consulta automaticamente a API ViaCEP e preenche os campos de logradouro, bairro, cidade e UF.

## Exemplo

```vue
<script setup>
const address = ref<TrxAddress>({})

function save() {
  if (!address.value.zipCode) return
  api.saveContact({ ...contact, address: address.value })
}
</script>

<TrxAddressForm v-model="address" required />
```
