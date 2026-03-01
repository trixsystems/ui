# TrxDurationInput

Input de duração com formato HH:MM:SS ou MM:SS. Valor interno em segundos.

## Uso Básico

```vue
<TrxDurationInput v-model="durationSeconds" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `number` | `0` | Duração em segundos |
| `format` | `'hh:mm:ss' \| 'mm:ss'` | `'hh:mm:ss'` | Formato de exibição |
| `disabled` | `boolean` | `false` | Desabilitar input |
| `invalid` | `boolean` | `false` | Estado de erro |
| `placeholder` | `string` | — | Placeholder customizado |

## Exemplo

```vue
<!-- Filtro de duração mínima de chamada -->
<label>Duração mínima:</label>
<TrxDurationInput
  v-model="minDuration"
  format="mm:ss"
  placeholder="00:00"
/>
```
