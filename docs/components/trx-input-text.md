# TrxInputText

Wrappers para os componentes de entrada de texto do PrimeVue: `TrxInputText`, `TrxTextarea`, `TrxInputMask` e `TrxInputOtp`. São pass-through completos sem defaults TRX específicos.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxInputText, TrxTextarea, TrxInputMask, TrxInputOtp } from '@trx/ui-common'

const nome = ref('')
const descricao = ref('')
const telefone = ref('')
const otp = ref('')
</script>

<template>
  <!-- Input de texto simples -->
  <TrxInputText v-model="nome" placeholder="Digite seu nome" />

  <!-- Input inválido -->
  <TrxInputText v-model="nome" :invalid="!nome" placeholder="Campo obrigatório" />

  <!-- Textarea -->
  <TrxTextarea v-model="descricao" rows="4" placeholder="Descreva..." auto-resize />

  <!-- Máscara de telefone brasileiro -->
  <TrxInputMask v-model="telefone" mask="(99) 99999-9999" placeholder="(00) 00000-0000" />

  <!-- OTP de 6 dígitos -->
  <TrxInputOtp v-model="otp" :length="6" integer-only />
</template>
```

## Props principais — TrxInputText

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `string` | Valor vinculado via `v-model` |
| `placeholder` | `string` | Texto de exemplo |
| `invalid` | `boolean` | Estado de erro |
| `disabled` | `boolean` | Desabilita o campo |
| `size` | `string` | Tamanho: `small`, `large` |
| `fluid` | `boolean` | Ocupa toda a largura disponível |

## Props principais — TrxTextarea

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `string` | Valor vinculado via `v-model` |
| `rows` | `number` | Número de linhas visíveis |
| `autoResize` | `boolean` | Expande automaticamente com o conteúdo |
| `invalid` | `boolean` | Estado de erro |

## Props principais — TrxInputMask

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `string` | Valor vinculado via `v-model` |
| `mask` | `string` | Máscara de formatação (ex: `99/99/9999`) |
| `slotChar` | `string` | Caractere de preenchimento (padrão: `_`) |
| `placeholder` | `string` | Texto de exemplo |

## Props principais — TrxInputOtp

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `string \| number` | Valor vinculado via `v-model` |
| `length` | `number` | Quantidade de dígitos (padrão: `4`) |
| `integerOnly` | `boolean` | Aceita apenas números |
| `invalid` | `boolean` | Estado de erro |

## Ver também

- [PrimeVue InputText](https://primevue.org/inputtext/) — documentação completa da API
- [PrimeVue Textarea](https://primevue.org/textarea/) — documentação completa da API
- [PrimeVue InputMask](https://primevue.org/inputmask/) — documentação completa da API
- [PrimeVue InputOtp](https://primevue.org/inputotp/) — documentação completa da API
