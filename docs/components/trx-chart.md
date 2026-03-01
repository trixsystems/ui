# TrxChart

Wrapper do `Chart` do PrimeVue, que integra o Chart.js para renderizar gráficos interativos. Pass-through completo sem defaults TRX específicos.

> O pacote `chart.js` deve estar instalado como dependência: `npm install chart.js`.

## Uso

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { TrxChart } from '@trx/ui-common'

// Gráfico de barras
const dadosBarras = computed(() => ({
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Chamadas Atendidas',
      backgroundColor: '#10b981',
      data: [420, 385, 510, 467, 390, 535],
    },
    {
      label: 'Chamadas Perdidas',
      backgroundColor: '#ef4444',
      data: [38, 52, 21, 44, 60, 29],
    },
  ],
}))

const opcoesBarras = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: {
      display: true,
      text: 'Chamadas por mês',
    },
  },
}

// Gráfico de pizza
const dadosPizza = computed(() => ({
  labels: ['Atendidas', 'Perdidas', 'Em espera'],
  datasets: [
    {
      data: [540, 80, 35],
      backgroundColor: ['#10b981', '#ef4444', '#f59e0b'],
    },
  ],
}))

// Gráfico de linha
const dadosLinha = computed(() => ({
  labels: ['09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'],
  datasets: [
    {
      label: 'Chamadas simultâneas',
      data: [5, 12, 18, 8, 3, 15, 22, 19, 6],
      fill: false,
      borderColor: '#6ee7b7',
      tension: 0.4,
    },
  ],
}))
</script>

<template>
  <!-- Gráfico de barras -->
  <TrxChart type="bar" :data="dadosBarras" :options="opcoesBarras" />

  <!-- Gráfico de pizza -->
  <TrxChart type="pie" :data="dadosPizza" style="max-width: 400px" />

  <!-- Gráfico de linha -->
  <TrxChart type="line" :data="dadosLinha" />

  <!-- Gráfico de rosca (donut) -->
  <TrxChart type="doughnut" :data="dadosPizza" style="max-width: 400px" />
</template>
```

## Props principais

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `type` | `string` | Tipo do gráfico: `bar`, `line`, `pie`, `doughnut`, `radar`, `polarArea`, `bubble`, `scatter` |
| `data` | `object` | Objeto de dados no formato Chart.js (`labels` + `datasets`) |
| `options` | `object` | Opções de configuração no formato Chart.js |
| `plugins` | `any[]` | Plugins adicionais do Chart.js |
| `width` | `number` | Largura em pixels |
| `height` | `number` | Altura em pixels |

## Estrutura de dados — datasets

```typescript
interface Dataset {
  label: string           // Nome da série (legenda)
  data: number[]          // Valores numéricos
  backgroundColor: string | string[]  // Cor de preenchimento
  borderColor?: string | string[]     // Cor da borda/linha
  tension?: number        // Suavização da linha (0-1, apenas 'line')
  fill?: boolean          // Preencher área sob a linha
}
```

## Ver também

- [PrimeVue Chart](https://primevue.org/chart/) — documentação completa da API
- [Chart.js](https://www.chartjs.org/docs/) — documentação do Chart.js
