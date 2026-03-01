# TrxRealTimeTicker

Exibição de valor em tempo real com animação de subida/descida ao mudar.

## Uso

```vue
<TrxRealTimeTicker
  :value="currentTMA"
  :previous-value="previousTMA"
  label="TMA"
  unit="s"
  :animate="true"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `number` | `0` | Valor atual |
| `previousValue` | `number` | — | Valor anterior (para direção) |
| `label` | `string` | — | Rótulo |
| `unit` | `string` | — | Unidade |
| `prefix` | `string` | — | Prefixo (ex: R$) |
| `decimals` | `number` | `0` | Casas decimais |
| `animate` | `boolean` | `true` | Animação de mudança |
