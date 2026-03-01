# TrxSparkline

Mini gráfico de linha em canvas para visualização de tendências inline.

## Uso Básico

```vue
<TrxSparkline :data="[10, 25, 18, 42, 35, 60]" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `data` | `number[]` | `[]` | Série de dados |
| `width` | `number` | `120` | Largura em pixels |
| `height` | `number` | `40` | Altura em pixels |
| `color` | `string` | `var(--trx-accent-color)` | Cor da linha e fill |
| `fill` | `boolean` | `true` | Preencher área sob a linha |
| `strokeWidth` | `number` | `2` | Espessura da linha |
| `showDot` | `boolean` | `true` | Mostrar ponto no último valor |

## Exemplo com TrxMetricCard

```vue
<TrxMetricCard
  title="Chamadas"
  value="1.234"
  :sparkline-data="[890, 920, 1100, 980, 1200, 1234]"
/>
```
