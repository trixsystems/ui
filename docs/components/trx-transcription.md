# TrxTranscription

Exibe transcrição de chamada com segmentos por speaker (agente, cliente, sistema). Suporte a busca com highlight.

## Uso Básico

```vue
<TrxTranscription :segments="transcriptionData" />
```

## Interface `TrxTranscriptionSegment`

```ts
interface TrxTranscriptionSegment {
  id: string
  speaker: 'agent' | 'customer' | 'system'
  text: string
  startTime?: number   // segundos
  endTime?: number
  confidence?: number  // 0–1
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `segments` | `TrxTranscriptionSegment[]` | `[]` | Segmentos da transcrição |
| `currentTime` | `number` | — | Tempo atual para highlight ativo |
| `agentName` | `string` | `'Agente'` | Nome do agente |
| `customerName` | `string` | `'Cliente'` | Nome do cliente |
| `searchQuery` | `string` | — | Termo para highlight na transcrição |

## Exemplo

```vue
<TrxTranscription
  :segments="call.transcription"
  :current-time="audioPlayer.currentTime"
  agent-name="Maria"
  customer-name="João"
  search-query="problema"
/>
```
