# TrxPhoneDialer

Teclado numérico de discagem (1–9, *, 0, #) com display e botões de ação.

## Uso Básico

```vue
<TrxPhoneDialer v-model="number" @call="makeCall" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `string` | `''` | Número digitado |
| `disabled` | `boolean` | `false` | Desabilitar teclado |
| `showDisplay` | `boolean` | `true` | Exibir campo do número |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `string` | Número atualizado |
| `call` | `number: string` | Iniciar chamada |
| `clear` | — | Limpar número |

## Exemplo Completo

```vue
<script setup>
const number = ref('')

function dial() {
  if (!number.value) return
  console.log('Discando:', number.value)
}
</script>

<template>
  <TrxPhoneDialer
    v-model="number"
    @call="dial"
    @clear="number = ''"
  />
</template>
```
