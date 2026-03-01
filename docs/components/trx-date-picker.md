# TrxDatePicker

Wrapper do `DatePicker` do PrimeVue com defaults no formato brasileiro: `dd/mm/yy` e ícone de calendário habilitado por padrão.

> `TrxCalendar` é um alias de `TrxDatePicker` para compatibilidade com código legado.

## Defaults TRX

| Prop | Default TRX | Descrição |
|:-----|:------------|:----------|
| `dateFormat` | `"dd/mm/yy"` | Formato de exibição da data |
| `showIcon` | `true` | Exibe ícone de calendário no campo |

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxDatePicker } from '@trx/ui-common'

const data = ref<Date | null>(null)
const intervalo = ref<Date[]>([])
</script>

<template>
  <!-- Seleção de data simples (formato dd/mm/yy automático) -->
  <TrxDatePicker v-model="data" placeholder="Selecione a data" />

  <!-- Seleção de intervalo -->
  <TrxDatePicker v-model="intervalo" selection-mode="range" placeholder="Data inicial — Data final" />

  <!-- Com mínimo e máximo -->
  <TrxDatePicker
    v-model="data"
    :min-date="new Date()"
    placeholder="A partir de hoje"
  />

  <!-- Modo inline (sem campo, calendário direto) -->
  <TrxDatePicker v-model="data" inline />

  <!-- Com hora -->
  <TrxDatePicker v-model="data" show-time hour-format="24" date-format="dd/mm/yy" />
</template>
```

## Props principais

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `Date \| Date[] \| null` | Data(s) selecionada(s) via `v-model` |
| `dateFormat` | `string` | Formato de exibição (padrão TRX: `dd/mm/yy`) |
| `showIcon` | `boolean` | Exibe ícone de calendário (padrão TRX: `true`) |
| `selectionMode` | `string` | Modo: `single`, `multiple`, `range` |
| `minDate` | `Date` | Data mínima selecionável |
| `maxDate` | `Date` | Data máxima selecionável |
| `showTime` | `boolean` | Habilita seleção de hora |
| `hourFormat` | `string` | Formato de hora: `12` ou `24` |
| `inline` | `boolean` | Exibe o calendário inline (sem campo) |
| `disabled` | `boolean` | Desabilita o componente |
| `invalid` | `boolean` | Estado de erro |
| `showButtonBar` | `boolean` | Exibe botões "Hoje" e "Limpar" |
| `numberOfMonths` | `number` | Quantidade de meses exibidos lado a lado |
| `view` | `string` | Visualização: `date`, `month`, `year` |

## Ver também

- [PrimeVue DatePicker](https://primevue.org/datepicker/) — documentação completa da API
