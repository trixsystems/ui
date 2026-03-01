# TrxChatWindow

Janela de chat completa com lista de mensagens, informações do contato e compositor.

## Uso Básico

```vue
<TrxChatWindow :messages="messages" :contact="contact" @send="sendMessage" />
```

## Interfaces

```ts
interface TrxChatMessage {
  id: string
  message?: string
  author?: string
  time?: string
  direction: 'in' | 'out'
  status?: TrxChatMessageStatus
  type?: TrxChatMessageType
  fileUrl?: string
  fileName?: string
}

interface TrxChatContact {
  name: string
  avatar?: string
  status?: string
  subtitle?: string
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `messages` | `TrxChatMessage[]` | `[]` | Histórico de mensagens |
| `contact` | `TrxChatContact` | — | Informações do contato |
| `loading` | `boolean` | `false` | Carregando mensagens |
| `placeholder` | `string` | `'Digite uma mensagem...'` | Placeholder do campo |
| `disabled` | `boolean` | `false` | Desabilitar envio |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `send` | `text: string` | Enviar mensagem |
| `attach` | — | Clique no botão de anexo |

## Exemplo Completo

```vue
<TrxChatWindow
  :messages="chatHistory"
  :contact="{ name: 'João Cliente', status: 'Online via WhatsApp' }"
  :loading="loadingMessages"
  @send="text => sendWhatsApp(text)"
  @attach="openFileUpload"
>
  <template #header-actions>
    <TrxChannelBadge channel="whatsapp" />
    <TrxButton icon="pi pi-phone" rounded outlined size="small" @click="startCall" />
  </template>
</TrxChatWindow>
```
