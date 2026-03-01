# TrxMetricCard

Card de métrica com valor principal, variação percentual e sparkline integrado.

## Uso Básico

```vue
<TrxMetricCard
  title="Total de Chamadas"
  value="1.234"
  :change="12.5"
  change-label="vs. ontem"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `title` | `string` | — | Título da métrica |
| `value` | `string \| number` | — | Valor principal |
| `unit` | `string` | — | Unidade (ms, %, etc.) |
| `change` | `number` | — | Variação percentual (positivo = sobe) |
| `changeLabel` | `string` | — | Label da variação |
| `sparklineData` | `number[]` | — | Dados para o sparkline |
| `color` | `MetricColor` | `'primary'` | Cor do valor |
| `loading` | `boolean` | `false` | Estado de carregamento (skeleton) |

### Tipo `MetricColor`

```ts
type MetricColor = 'primary' | 'success' | 'warning' | 'danger'
```

## Exemplo

```vue
<TrxDashboardGrid :columns="4">
  <TrxMetricCard
    title="TMA"
    value="3:45"
    :change="-8.2"
    change-label="vs. semana passada"
    color="success"
    :sparkline-data="[240, 220, 235, 225, 218, 215]"
  />
  <TrxMetricCard title="Carregando..." :loading="true" />
</TrxDashboardGrid>
```
