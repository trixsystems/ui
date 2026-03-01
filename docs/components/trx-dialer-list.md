# TrxDialerList

Lista de contatos do discador preditivo com ícones de status e ações de discagem.

## Uso

```vue
<TrxDialerList
  :contacts="contacts"
  :current-id="currentContactId"
  :loading="loading"
  @dial="onDial"
  @skip="onSkip"
  @view="onView"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `contacts` | `TrxDialerContact[]` | `[]` | Lista de contatos |
| `loading` | `boolean` | `false` | Estado de carregamento |
| `currentId` | `string` | — | ID do contato atual |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `dial` | `TrxDialerContact` | Discar para contato |
| `skip` | `id: string` | Pular contato |
| `view` | `TrxDialerContact` | Ver detalhes |

## Tipos

```ts
type TrxDialerStatus = 'pending' | 'dialing' | 'connected' | 'completed' | 'failed' | 'skipped'

interface TrxDialerContact {
  id: string
  name: string
  phone: string
  status: TrxDialerStatus
  attempts?: number
  lastAttempt?: string
  notes?: string
}
```
