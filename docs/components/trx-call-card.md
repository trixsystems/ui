# TrxCallCard

Card de chamada telefônica com status, informações do caller e botões de ação contextuais.

## Uso Básico

```vue
<TrxCallCard
  caller-id="+55 11 99999-9999"
  caller-name="João Silva"
  :duration="120"
  status="active"
  direction="inbound"
  @answer="handleAnswer"
  @hangup="handleHangup"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `callerId` | `string` | — | Número ou ID do chamador |
| `callerName` | `string` | — | Nome do chamador |
| `duration` | `number` | `0` | Duração em segundos |
| `status` | `CallStatus` | `'ringing'` | Status da chamada |
| `direction` | `'inbound' \| 'outbound'` | `'inbound'` | Direção da chamada |
| `queue` | `string` | — | Fila da chamada |
| `agent` | `string` | — | Agente responsável |

### Tipo `CallStatus`

```ts
type CallStatus = 'ringing' | 'active' | 'hold' | 'ended' | 'missed'
```

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `answer` | — | Atender chamada |
| `hangup` | — | Desligar chamada |
| `hold` | — | Colocar em espera |
| `transfer` | — | Transferir chamada |

## Exemplos

### Chamada em toque (ringing)

```vue
<TrxCallCard
  caller-id="+55 11 98765-4321"
  caller-name="Maria Santos"
  status="ringing"
  direction="inbound"
  queue="Suporte"
  @answer="() => acceptCall()"
  @hangup="() => rejectCall()"
/>
```

### Chamada ativa com controles

```vue
<TrxCallCard
  caller-name="Carlos Oliveira"
  caller-id="4001"
  :duration="callDuration"
  status="active"
  @hold="toggleHold"
  @transfer="openTransfer"
  @hangup="endCall"
/>
```

### Chamada em espera (hold)

```vue
<TrxCallCard
  caller-name="Ana Costa"
  status="hold"
  :duration="holdTime"
/>
```
