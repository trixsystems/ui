# TrxChatBubble

Bolha de mensagem de chat com suporte a texto, áudio, imagem e arquivo.

## Uso Básico

```vue
<TrxChatBubble message="Olá, como posso ajudar?" direction="in" author="Agente" time="14:32" />
<TrxChatBubble message="Preciso de suporte" direction="out" status="read" time="14:31" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `message` | `string` | — | Texto da mensagem |
| `author` | `string` | — | Nome do remetente (exibido em mensagens `in`) |
| `time` | `string` | — | Horário da mensagem |
| `direction` | `'in' \| 'out'` | `'in'` | Direção da mensagem |
| `status` | `MessageStatus` | — | Status de entrega |
| `type` | `MessageType` | `'text'` | Tipo do conteúdo |
| `fileUrl` | `string` | — | URL do arquivo/imagem/áudio |
| `fileName` | `string` | — | Nome do arquivo |

### Tipos

```ts
type TrxChatDirection = 'in' | 'out'
type TrxChatMessageType = 'text' | 'audio' | 'image' | 'file'
type TrxChatMessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | 'error'
```

## Exemplo

```vue
<!-- Mensagem de texto recebida -->
<TrxChatBubble
  message="Boa tarde! Como posso ajudar?"
  direction="in"
  author="Carlos"
  time="15:30"
/>

<!-- Mensagem de áudio enviada -->
<TrxChatBubble
  type="audio"
  :file-url="audioUrl"
  direction="out"
  time="15:31"
  status="delivered"
/>
```
