# TrxStepper

Wrapper para o Stepper do PrimeVue 4. Utiliza a API composicional com `TrxStepper`, `TrxStepList`, `TrxStepItem`, `TrxStep`, `TrxStepPanels` e `TrxStepPanel`. Pass-through completo sem defaults TRX específicos.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  TrxStepper, TrxStepList, TrxStepItem,
  TrxStep, TrxStepPanels, TrxStepPanel, TrxButton,
} from '@trx/ui-common'

const ativo = ref(1)
</script>

<template>
  <!-- Stepper linear (wizard) -->
  <TrxStepper v-model:value="ativo" linear>
    <TrxStepList>
      <TrxStepItem :value="1">
        <TrxStep>Dados pessoais</TrxStep>
      </TrxStepItem>
      <TrxStepItem :value="2">
        <TrxStep>Endereço</TrxStep>
      </TrxStepItem>
      <TrxStepItem :value="3">
        <TrxStep>Confirmação</TrxStep>
      </TrxStepItem>
    </TrxStepList>

    <TrxStepPanels>
      <TrxStepPanel :value="1">
        <div class="flex flex-col gap-4">
          <p>Preencha seus dados pessoais.</p>
          <div class="flex gap-2">
            <TrxButton label="Próximo" icon="pi pi-arrow-right" icon-pos="right" @click="ativo = 2" />
          </div>
        </div>
      </TrxStepPanel>

      <TrxStepPanel :value="2">
        <div class="flex flex-col gap-4">
          <p>Informe seu endereço.</p>
          <div class="flex gap-2">
            <TrxButton label="Voltar" severity="secondary" icon="pi pi-arrow-left" @click="ativo = 1" />
            <TrxButton label="Próximo" icon="pi pi-arrow-right" icon-pos="right" @click="ativo = 3" />
          </div>
        </div>
      </TrxStepPanel>

      <TrxStepPanel :value="3">
        <div class="flex flex-col gap-4">
          <p>Confirme os dados e finalize.</p>
          <div class="flex gap-2">
            <TrxButton label="Voltar" severity="secondary" icon="pi pi-arrow-left" @click="ativo = 2" />
            <TrxButton label="Finalizar" icon="pi pi-check" severity="success" />
          </div>
        </div>
      </TrxStepPanel>
    </TrxStepPanels>
  </TrxStepper>
</template>
```

## Props principais — TrxStepper

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `number \| string` | Passo ativo via `v-model:value` |
| `linear` | `boolean` | Impede avançar sem completar o passo atual |
| `orientation` | `string` | `horizontal` (padrão) ou `vertical` |

## Props principais — TrxStepItem

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `number \| string` | Identificador único do passo |
| `disabled` | `boolean` | Desabilita a navegação para este passo |
| `asChild` | `boolean` | Passa props para o filho direto em vez de criar wrapper |

## Props principais — TrxStepPanel

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `number \| string` | Deve corresponder ao valor do `TrxStepItem` |

## Ver também

- [PrimeVue Stepper](https://primevue.org/stepper/) — documentação completa da API
