# TrxCallHistory

Lista de histórico de ligações com ícones de direção, duração e ações de reprodução e callback.

## Uso

```vue
<TrxCallHistory
  :calls="callHistory"
  :show-recording="true"
  @play="onPlay"
  @callback="onCallback"
  @view="onView"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `calls` | `TrxCallRecord[]` | `[]` | Lista de registros de ligação |
| `loading` | `boolean` | `false` | Estado de carregamento |
| `showRecording` | `boolean` | `false` | Exibe botão de reprodução |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `play` | `id: string` | Reproduzir gravação |
| `callback` | `TrxCallRecord` | Retornar ligação |
| `view` | `TrxCallRecord` | Ver detalhes |

## Tipos

```ts
interface TrxCallRecord {
  id: string
  number: string
  name?: string
  direction: 'inbound' | 'outbound' | 'missed'
  duration?: number // segundos
  date: string
  hasRecording?: boolean
}
```
