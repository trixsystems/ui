# TrxSoftphone

Barra de controles do softphone WebRTC com botões de atender, desligar, mudo, espera e transferir.

## Uso Básico

```vue
<TrxSoftphone
  status="active"
  :call-info="{ name: 'João Silva', number: '+55 11 99999-9999' }"
  @hangup="endCall"
  @mute="muteCall"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `status` | `SoftphoneStatus` | `'idle'` | Estado atual do softphone |
| `callInfo` | `object` | — | Informações da chamada ativa |
| `canTransfer` | `boolean` | `true` | Habilitar botão transferir |
| `canHold` | `boolean` | `true` | Habilitar botão espera |

### Tipo `SoftphoneStatus`

```ts
type SoftphoneStatus = 'idle' | 'ringing' | 'active' | 'hold' | 'muted'
```

## Eventos

| Evento | Descrição |
|--------|-----------|
| `answer` | Atender chamada |
| `hangup` | Desligar |
| `mute` | Silenciar microfone |
| `unmute` | Reativar microfone |
| `hold` | Colocar em espera |
| `resume` | Retomar chamada |
| `transfer` | Iniciar transferência |
