# TrxCalendarView

Visualização de calendário mensal com eventos coloridos. Navegação por mês e seleção de data.

## Uso

```vue
<TrxCalendarView
  v-model="selectedDate"
  :events="calendarEvents"
  @event-click="onEventClick"
  @date-click="onDateClick"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `events` | `TrxCalendarEvent[]` | `[]` | Eventos do calendário |
| `modelValue` | `string` | — | Data selecionada (YYYY-MM-DD) |
| `loading` | `boolean` | `false` | Estado de carregamento |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `string` | Data selecionada |
| `eventClick` | `TrxCalendarEvent` | Evento clicado |
| `dateClick` | `string` | Data clicada |

## Tipos

```ts
interface TrxCalendarEvent {
  id: string
  title: string
  date: string      // YYYY-MM-DD
  color?: string    // Cor do evento
  allDay?: boolean
  time?: string     // HH:MM
}
```
