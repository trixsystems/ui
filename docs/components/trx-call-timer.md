# TrxCallTimer

Cronômetro em tempo real para chamadas. Muda de cor automaticamente conforme a duração aumenta.

## Uso Básico

```vue
<TrxCallTimer :running="callActive" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `running` | `boolean` | `false` | Se o cronômetro está rodando |
| `startAt` | `number` | `0` | Valor inicial em segundos |
| `format` | `'mm:ss' \| 'hh:mm:ss'` | `'mm:ss'` | Formato de exibição |
| `color` | `string` | `'auto'` | Cor do texto (`auto` = muda conforme duração) |

### Comportamento de cor automática

Quando `color="auto"` (padrão):
- **Verde** (`success`): 0–2:59
- **Amarelo** (`warning`): 3:00–4:59
- **Vermelho** (`danger`): 5:00+

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `tick` | `seconds: number` | Emitido a cada segundo |

## Exemplos

```vue
<TrxCallTimer
  :running="isCallActive"
  :start-at="existingDuration"
  format="hh:mm:ss"
  @tick="onTick"
/>
```
