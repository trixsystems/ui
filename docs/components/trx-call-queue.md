# TrxCallQueue

Lista de chamadas aguardando na fila, ordenadas por prioridade e tempo de espera.

## Uso Básico

```vue
<TrxCallQueue
  :calls="queuedCalls"
  queue-name="Suporte Técnico"
  @answer="handleAnswer"
/>
```

## Interface `TrxQueueCall`

```ts
interface TrxQueueCall {
  id: string
  callerId: string
  callerName?: string
  waitTime: number      // segundos aguardando
  priority?: number     // maior = mais prioritário
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `calls` | `TrxQueueCall[]` | `[]` | Chamadas na fila |
| `queueName` | `string` | — | Nome da fila |
| `maxWaitWarning` | `number` | `120` | Tempo (s) para alerta de espera longa |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `answer` | `callId: string` | Atender chamada da fila |
| `transfer` | `callId: string` | Transferir chamada |

## Exemplo

```vue
<script setup>
const calls = ref([
  { id: '1', callerId: '+55 11 99999-0001', callerName: 'João', waitTime: 45 },
  { id: '2', callerId: '+55 11 99999-0002', waitTime: 180, priority: 1 },
])
</script>

<TrxCallQueue
  :calls="calls"
  queue-name="Vendas"
  :max-wait-warning="60"
  @answer="id => pickupCall(id)"
/>
```
