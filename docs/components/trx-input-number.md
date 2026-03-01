# TrxInputNumber

Wrapper do `InputNumber` do PrimeVue configurado com locale brasileiro e duas casas decimais por padrão.

## Defaults TRX

| Prop | Default TRX | Descrição |
|:-----|:------------|:----------|
| `locale` | `"pt-BR"` | Locale de formatação numérica (separador decimal e de milhar) |
| `minFractionDigits` | `2` | Mínimo de casas decimais exibidas |

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxInputNumber } from '@trx/ui-common'

const preco = ref<number | null>(null)
const quantidade = ref<number | null>(null)
const percentual = ref<number | null>(null)
</script>

<template>
  <!-- Valor monetário (locale pt-BR e 2 casas decimais automáticos) -->
  <TrxInputNumber v-model="preco" mode="currency" currency="BRL" />

  <!-- Número inteiro (sobrescreve o default de frações) -->
  <TrxInputNumber v-model="quantidade" :min-fraction-digits="0" :max-fraction-digits="0" :min="0" />

  <!-- Percentual -->
  <TrxInputNumber v-model="percentual" suffix="%" :min="0" :max="100" />

  <!-- Com incremento/decremento (spinner) -->
  <TrxInputNumber v-model="quantidade" show-buttons :step="1" :min="0" />
</template>
```

## Props principais

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `number \| null` | Valor numérico via `v-model` |
| `locale` | `string` | Locale de formatação (padrão TRX: `pt-BR`) |
| `mode` | `string` | Modo: `decimal` (padrão) ou `currency` |
| `currency` | `string` | Código de moeda ISO 4217 (ex: `BRL`) |
| `minFractionDigits` | `number` | Mínimo de casas decimais (padrão TRX: `2`) |
| `maxFractionDigits` | `number` | Máximo de casas decimais |
| `min` | `number` | Valor mínimo permitido |
| `max` | `number` | Valor máximo permitido |
| `step` | `number` | Incremento ao usar setas ou spinner |
| `showButtons` | `boolean` | Exibe botões de incremento/decremento |
| `prefix` | `string` | Prefixo exibido antes do valor |
| `suffix` | `string` | Sufixo exibido após o valor |
| `invalid` | `boolean` | Estado de erro |
| `disabled` | `boolean` | Desabilita o componente |
| `fluid` | `boolean` | Ocupa toda a largura disponível |

## Ver também

- [PrimeVue InputNumber](https://primevue.org/inputnumber/) — documentação completa da API
