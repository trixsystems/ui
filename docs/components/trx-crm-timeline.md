# TrxCRMTimeline

Timeline de atividades CRM com tipos de evento, autor, duração e resultado.

## Uso

```vue
<TrxCRMTimeline
  :events="contactHistory"
  @event-click="onEventClick"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `events` | `TrxCRMEvent[]` | `[]` | Histórico de atividades |
| `loading` | `boolean` | `false` | Estado de carregamento |

## Tipos de Evento

| Tipo | Ícone | Cor |
|------|-------|-----|
| `call` | phone | success |
| `email` | envelope | accent |
| `note` | file-edit | warning |
| `meeting` | calendar | purple |
| `task` | check-square | secondary |
| `deal` | dollar | success |
| `whatsapp` | comments | #25d366 |
| `stage` | arrow-right | accent |

## Tipos

```ts
interface TrxCRMEvent {
  id: string
  type: TrxCRMEventType
  title: string
  description?: string
  author?: string
  date: string
  duration?: string
  outcome?: 'positive' | 'negative' | 'neutral'
}
```
