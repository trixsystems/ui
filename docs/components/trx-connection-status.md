# TrxConnectionStatus

Indicador de status de conexão (WebSocket, rede, etc.) com ícone e label.

## Uso Básico

```vue
<TrxConnectionStatus :status="wsStatus" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `status` | `ConnStatus` | — | Status da conexão |
| `label` | `string` | — | Label customizado |
| `showLabel` | `boolean` | `true` | Exibir texto do status |

### Tipo `ConnStatus`

```ts
type ConnStatus = 'connected' | 'disconnected' | 'connecting' | 'error'
```

## Comportamento Visual

| Status | Cor | Ícone | Animação |
|--------|-----|-------|----------|
| `connected` | Verde | `pi-wifi` | — |
| `connecting` | Amarelo | `pi-spinner` | Pulso |
| `disconnected` | Vermelho | `pi-times-circle` | — |
| `error` | Vermelho | `pi-exclamation-triangle` | — |

## Exemplo

```vue
<script setup>
const wsStatus = ref<'connected' | 'disconnected' | 'connecting' | 'error'>('connecting')

const ws = new WebSocket('wss://api.empresa.com/ws')
ws.onopen = () => wsStatus.value = 'connected'
ws.onclose = () => wsStatus.value = 'disconnected'
ws.onerror = () => wsStatus.value = 'error'
</script>

<TrxConnectionStatus :status="wsStatus" />
```
