# TrxKPICard

Card de métrica (KPI) com suporte a indicador de tendência e skeleton de loading.

## Uso

```vue
<script setup lang="ts">
import { TrxKPICard } from '@trx/ui-common'
</script>

<template>
  <!-- Básico -->
  <TrxKPICard title="Total de Chamadas" value="1.248" />

  <!-- Com tendência -->
  <TrxKPICard
    title="Taxa de Atendimento"
    value="94.2%"
    trend="+2.1%"
    trend-type="up"
    icon="pi pi-phone"
  />

  <!-- Tendência negativa -->
  <TrxKPICard
    title="Tempo Médio"
    value="3m 42s"
    trend="-8s"
    trend-type="down"
  />

  <!-- Loading state -->
  <TrxKPICard title="Receita" value="R$ 0" :loading="true" />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `title` | `string` | **required** | Título da métrica |
| `value` | `string \| number` | **required** | Valor principal |
| `trend` | `string` | — | Variação (ex: "+12%", "-3s") |
| `trendType` | `'up' \| 'down' \| 'neutral'` | `'neutral'` | Direção da tendência |
| `icon` | `string` | — | Ícone PrimeIcons (ex: "pi pi-chart-bar") |
| `loading` | `boolean` | `false` | Exibe skeleton de carregamento |
| `color` | `string` | — | Cor de acento do ícone |

## Tendências

| `trendType` | Cor | Ícone |
|:-----------|:----|:------|
| `up` | Verde | `pi-arrow-up` |
| `down` | Vermelho | `pi-arrow-down` |
| `neutral` | Cinza | `pi-minus` |
