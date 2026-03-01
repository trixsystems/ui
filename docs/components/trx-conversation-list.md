# TrxConversationList

Lista de conversas de omnichannel com skeleton loading, badge de não-lidas e indicador de canal.

## Uso

```vue
<TrxConversationList
  :conversations="conversations"
  :active-id="activeConversationId"
  :loading="loading"
  @select="onSelect"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `conversations` | `TrxConversation[]` | `[]` | Lista de conversas |
| `activeId` | `string` | — | ID da conversa ativa |
| `loading` | `boolean` | `false` | Skeleton de carregamento |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `select` | `TrxConversation` | Conversa selecionada |

## Tipos

```ts
interface TrxConversation {
  id: string
  name: string
  lastMessage: string
  channel: TrxChannel
  unread?: number
  time?: string
  avatar?: string
  status?: 'open' | 'pending' | 'resolved' | 'bot'
}
```
