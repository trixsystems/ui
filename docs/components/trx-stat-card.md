# TrxStatCard

Card de estatística com valor destacado, ícone colorido e indicador de tendência.

## Uso

```vue
<script setup lang="ts">
import { TrxStatCard } from '@trx/ui-common'
</script>

<template>
  <!-- Básico -->
  <TrxStatCard title="Total de chamadas" value="1.284" />

  <!-- Com ícone e cor -->
  <TrxStatCard
    title="Chamadas atendidas"
    value="1.102"
    icon="pi pi-phone"
    color="success"
  />

  <!-- Com tendência -->
  <TrxStatCard
    title="Tempo médio"
    value="3m 42s"
    icon="pi pi-clock"
    color="info"
    trend="up"
    trend-value="+12% vs ontem"
  />

  <!-- Tendência negativa -->
  <TrxStatCard
    title="Chamadas perdidas"
    value="182"
    icon="pi pi-times-circle"
    color="danger"
    trend="down"
    trend-value="-5% vs ontem"
  />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `title` | `string` | **required** | Rótulo da métrica |
| `value` | `string \| number` | **required** | Valor principal exibido |
| `icon` | `string` | — | Classe do ícone PrimeIcons (ex: `'pi pi-phone'`) |
| `trend` | `'up' \| 'down' \| 'neutral'` | — | Direção da tendência |
| `trendValue` | `string` | — | Texto da tendência (ex: `'+12% vs ontem'`) |
| `color` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'purple'` | `'primary'` | Cor do ícone e valor |

## Cores disponíveis

| Color | Uso típico |
|:------|:-----------|
| `primary` | Métricas gerais |
| `success` | Indicadores positivos |
| `warning` | Atenção, alertas |
| `danger` | Erros, falhas |
| `info` | Informações neutras |
| `purple` | Métricas de qualidade |

## Em um dashboard

```vue
<div class="grid grid-cols-4 gap-4">
  <TrxStatCard
    title="Chamadas hoje"
    value="1.284"
    icon="pi pi-phone"
    color="primary"
    trend="up"
    trend-value="+8%"
  />
  <TrxStatCard
    title="Atendidas"
    value="1.102"
    icon="pi pi-check-circle"
    color="success"
    trend="up"
    trend-value="+3%"
  />
  <TrxStatCard
    title="Perdidas"
    value="182"
    icon="pi pi-times-circle"
    color="danger"
    trend="down"
    trend-value="-2%"
  />
  <TrxStatCard
    title="TMA"
    value="3m 42s"
    icon="pi pi-clock"
    color="info"
    trend="neutral"
    trend-value="estável"
  />
</div>
```

::: tip
Para dashboards mais complexos com múltiplos valores, subtítulos e slots, use [`TrxKPICard`](/components/trx-kpi-card).
:::
