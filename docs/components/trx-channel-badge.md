# TrxChannelBadge

Badge de canal de comunicação com ícone e cor específicos por canal.

## Uso Básico

```vue
<TrxChannelBadge channel="whatsapp" />
<TrxChannelBadge channel="phone" :show-label="false" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `channel` | `TrxChannel` | — | Canal de comunicação |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho |
| `showLabel` | `boolean` | `true` | Exibir nome do canal |
| `iconOnly` | `boolean` | `false` | Apenas ícone (sem texto) |

### Tipo `TrxChannel`

```ts
type TrxChannel =
  | 'whatsapp' | 'phone' | 'email' | 'sms'
  | 'chat' | 'telegram' | 'instagram' | 'messenger'
```

## Canais Suportados

| Canal | Label | Cor |
|-------|-------|-----|
| `whatsapp` | WhatsApp | Verde #25D366 |
| `phone` | Telefone | Verde (accent) |
| `email` | E-mail | Azul #3b82f6 |
| `sms` | SMS | Roxo #8b5cf6 |
| `chat` | Chat | Ciano #06b6d4 |
| `telegram` | Telegram | Azul #0088CC |
| `instagram` | Instagram | Rosa #E1306C |
| `messenger` | Messenger | Azul #0099FF |

## Exemplo

```vue
<TrxChannelBadge channel="whatsapp" size="sm" />
<TrxChannelBadge channel="email" size="md" />
<TrxChannelBadge channel="phone" icon-only />
```
