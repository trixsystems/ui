# TrxNotificationBell

Sino de notificações com dropdown de lista, contador de não lidas e ação de marcar todas como lidas.

## Uso Básico

```vue
<TrxNotificationBell :items="notifications" @read="markAsRead" @read-all="markAllRead" />
```

## Interface `TrxNotification`

```ts
interface TrxNotification {
  id: string
  title: string
  body?: string
  time?: string
  read?: boolean
  icon?: string
  type?: 'info' | 'success' | 'warning' | 'danger'
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `items` | `TrxNotification[]` | `[]` | Lista de notificações |
| `count` | `number` | — | Contador customizado (padrão: não lidas) |
| `loading` | `boolean` | `false` | Estado de carregamento |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `read` | `id: string` | Marcar como lida |
| `read-all` | — | Marcar todas como lidas |
| `open` | — | Dropdown aberto |

## Exemplo

```vue
<TrxNotificationBell
  :items="notifications"
  :loading="loadingNotifs"
  @read="id => api.markRead(id)"
  @read-all="api.markAllRead()"
  @open="loadNotifications()"
/>
```
