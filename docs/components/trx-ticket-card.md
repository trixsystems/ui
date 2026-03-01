# TrxTicketCard

Card de ticket de atendimento com status, prioridade, canal e informações do agente/cliente.

## Uso Básico

```vue
<TrxTicketCard
  id="12345"
  title="Problema com fatura do mês de janeiro"
  status="open"
  priority="high"
  channel="whatsapp"
  @view="openTicket"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `id` | `string \| number` | — | ID do ticket |
| `title` | `string` | — | Título/assunto |
| `status` | `TrxTicketStatus` | `'open'` | Status atual |
| `priority` | `TrxTicketPriority` | `'medium'` | Prioridade |
| `channel` | `TrxChannel` | — | Canal de origem |
| `agent` | `string` | — | Agente responsável |
| `customer` | `string` | — | Nome do cliente |
| `createdAt` | `string` | — | Data de criação |
| `updatedAt` | `string` | — | Data de atualização |

### Tipos

```ts
type TrxTicketStatus = 'open' | 'pending' | 'resolved' | 'closed'
type TrxTicketPriority = 'low' | 'medium' | 'high' | 'urgent'
```

## Eventos

| Evento | Descrição |
|--------|-----------|
| `view` | Abrir ticket |
| `assign` | Atribuir agente |

## Slots

| Slot | Descrição |
|------|-----------|
| `actions` | Substitui botões padrão |

## Exemplo em Kanban

```vue
<div class="grid grid-cols-4 gap-4">
  <div v-for="col in kanbanColumns" :key="col.status">
    <h3>{{ col.label }} ({{ col.tickets.length }})</h3>
    <TrxTicketCard
      v-for="ticket in col.tickets"
      :key="ticket.id"
      v-bind="ticket"
      @view="router.push(`/tickets/${ticket.id}`)"
      @assign="openAssignModal(ticket)"
    />
  </div>
</div>
```
