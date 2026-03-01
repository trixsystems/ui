# Extras de Formulário

Wrappers para componentes de entrada especializados do PrimeVue: `TrxInputChips`, `TrxSlider`, `TrxRating`, `TrxKnob`, `TrxColorPicker`, `TrxSelectButton`, `TrxInputGroup`, `TrxIconField` e `TrxFloatLabel`. São pass-through completos sem defaults TRX específicos.

> `TrxChips` é um alias de `TrxInputChips` para compatibilidade com código legado.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  TrxInputChips, TrxSlider, TrxRating, TrxKnob,
  TrxColorPicker, TrxSelectButton, TrxInputGroup,
  TrxInputGroupAddon, TrxIconField, TrxInputIcon,
  TrxFloatLabel, TrxInputText,
} from '@trx/ui-common'

const tags = ref<string[]>([])
const volume = ref(50)
const avaliacao = ref(3)
const brilho = ref(75)
const cor = ref('#10b981')
const periodo = ref('dia')
const periodos = ref([
  { label: 'Dia', value: 'dia' },
  { label: 'Semana', value: 'semana' },
  { label: 'Mês', value: 'mes' },
])
const nome = ref('')
</script>

<template>
  <!-- Tags / chips de entrada livre -->
  <TrxInputChips v-model="tags" placeholder="Adicionar tag..." />

  <!-- Slider de volume -->
  <TrxSlider v-model="volume" :min="0" :max="100" />

  <!-- Avaliação em estrelas -->
  <TrxRating v-model="avaliacao" />

  <!-- Knob (controle circular) -->
  <TrxKnob v-model="brilho" :min="0" :max="100" value-template="{value}%" />

  <!-- Seletor de cor -->
  <TrxColorPicker v-model="cor" />

  <!-- Seletor de opções em botões -->
  <TrxSelectButton v-model="periodo" :options="periodos" option-label="label" option-value="value" />

  <!-- Grupo de input com addon de texto -->
  <TrxInputGroup>
    <TrxInputGroupAddon>R$</TrxInputGroupAddon>
    <TrxInputText placeholder="0,00" />
    <TrxInputGroupAddon>,00</TrxInputGroupAddon>
  </TrxInputGroup>

  <!-- Campo com ícone à esquerda -->
  <TrxIconField>
    <TrxInputIcon class="pi pi-search" />
    <TrxInputText placeholder="Buscar..." />
  </TrxIconField>

  <!-- Float label (rótulo flutuante) -->
  <TrxFloatLabel>
    <TrxInputText id="nome" v-model="nome" />
    <label for="nome">Nome completo</label>
  </TrxFloatLabel>
</template>
```

## Props principais — TrxInputChips

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `string[]` | Lista de chips via `v-model` |
| `separator` | `string` | Caractere que confirma um chip (ex: `,`) |
| `max` | `number` | Número máximo de chips |
| `invalid` | `boolean` | Estado de erro |

## Props principais — TrxSlider

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `number \| number[]` | Valor(es) via `v-model` |
| `min` | `number` | Valor mínimo |
| `max` | `number` | Valor máximo |
| `step` | `number` | Incremento do slider |
| `range` | `boolean` | Modo intervalo com dois handles |
| `orientation` | `string` | `horizontal` ou `vertical` |

## Props principais — TrxSelectButton

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `any` | Opção selecionada via `v-model` |
| `options` | `any[]` | Lista de opções |
| `optionLabel` | `string` | Campo usado como rótulo |
| `optionValue` | `string` | Campo usado como valor |
| `multiple` | `boolean` | Permite múltiplas seleções |

## Ver também

- [PrimeVue InputChips](https://primevue.org/inputchips/) — documentação completa da API
- [PrimeVue Slider](https://primevue.org/slider/) — documentação completa da API
- [PrimeVue Rating](https://primevue.org/rating/) — documentação completa da API
- [PrimeVue Knob](https://primevue.org/knob/) — documentação completa da API
- [PrimeVue ColorPicker](https://primevue.org/colorpicker/) — documentação completa da API
- [PrimeVue SelectButton](https://primevue.org/selectbutton/) — documentação completa da API
- [PrimeVue InputGroup](https://primevue.org/inputgroup/) — documentação completa da API
- [PrimeVue IconField](https://primevue.org/iconfield/) — documentação completa da API
- [PrimeVue FloatLabel](https://primevue.org/floatlabel/) — documentação completa da API
