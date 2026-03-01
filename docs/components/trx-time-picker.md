# TrxTimePicker

Seletor de horário com dropdown de opções em intervalos configuráveis.

## Uso Básico

```vue
<TrxTimePicker v-model="startTime" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `string` | — | Horário selecionado (`HH:MM`) |
| `disabled` | `boolean` | `false` | Desabilitar seletor |
| `invalid` | `boolean` | `false` | Estado de erro |
| `step` | `number` | `30` | Intervalo em minutos entre opções |
| `placeholder` | `string` | `'--:--'` | Placeholder |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `string` | Horário selecionado |

## Exemplo

```vue
<!-- Horário de expediente em intervalos de 15 minutos -->
<TrxTimePicker v-model="scheduleTime" :step="15" placeholder="Selecione o horário" />
```
