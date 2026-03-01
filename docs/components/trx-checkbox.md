# TrxCheckbox

Wrappers para componentes de seleção booleana e alternância do PrimeVue: `TrxCheckbox`, `TrxCheckboxGroup`, `TrxRadioButton`, `TrxRadioButtonGroup`, `TrxToggleSwitch` e `TrxToggleButton`. São pass-through completos sem defaults TRX específicos.

> `TrxInputSwitch` é um alias de `TrxToggleSwitch` para compatibilidade com código legado.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  TrxCheckbox, TrxCheckboxGroup,
  TrxRadioButton, TrxRadioButtonGroup,
  TrxToggleSwitch, TrxToggleButton,
} from '@trx/ui-common'

const aceito = ref(false)
const frutas = ref<string[]>([])
const plano = ref('mensal')
const notificacoes = ref(true)
const modoEdicao = ref(false)
</script>

<template>
  <!-- Checkbox simples -->
  <div class="flex align-items-center gap-2">
    <TrxCheckbox v-model="aceito" input-id="aceito" :binary="true" />
    <label for="aceito">Aceito os termos</label>
  </div>

  <!-- Grupo de checkboxes -->
  <TrxCheckboxGroup v-model="frutas" name="frutas">
    <div class="flex gap-4">
      <div class="flex align-items-center gap-2">
        <TrxCheckbox input-id="manga" value="manga" />
        <label for="manga">Manga</label>
      </div>
      <div class="flex align-items-center gap-2">
        <TrxCheckbox input-id="uva" value="uva" />
        <label for="uva">Uva</label>
      </div>
    </div>
  </TrxCheckboxGroup>

  <!-- Radio buttons -->
  <TrxRadioButtonGroup v-model="plano" name="plano">
    <div class="flex gap-4">
      <div class="flex align-items-center gap-2">
        <TrxRadioButton input-id="mensal" value="mensal" />
        <label for="mensal">Mensal</label>
      </div>
      <div class="flex align-items-center gap-2">
        <TrxRadioButton input-id="anual" value="anual" />
        <label for="anual">Anual</label>
      </div>
    </div>
  </TrxRadioButtonGroup>

  <!-- Toggle switch (liga/desliga) -->
  <TrxToggleSwitch v-model="notificacoes" />

  <!-- Toggle button (com rótulos) -->
  <TrxToggleButton v-model="modoEdicao" on-label="Editando" off-label="Editar" on-icon="pi pi-check" off-icon="pi pi-pencil" />
</template>
```

## Props principais — TrxCheckbox

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `any` | Valor via `v-model` |
| `binary` | `boolean` | Modo boolean simples (true/false) |
| `value` | `any` | Valor inserido no array ao marcar (modo grupo) |
| `invalid` | `boolean` | Estado de erro |
| `disabled` | `boolean` | Desabilita o componente |
| `inputId` | `string` | `id` do `<input>` interno para associação com `<label>` |

## Props principais — TrxToggleButton

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `boolean` | Estado via `v-model` |
| `onLabel` | `string` | Rótulo quando ativo |
| `offLabel` | `string` | Rótulo quando inativo |
| `onIcon` | `string` | Ícone quando ativo |
| `offIcon` | `string` | Ícone quando inativo |

## Ver também

- [PrimeVue Checkbox](https://primevue.org/checkbox/) — documentação completa da API
- [PrimeVue RadioButton](https://primevue.org/radiobutton/) — documentação completa da API
- [PrimeVue ToggleSwitch](https://primevue.org/toggleswitch/) — documentação completa da API
- [PrimeVue ToggleButton](https://primevue.org/togglebutton/) — documentação completa da API
