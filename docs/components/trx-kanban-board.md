# TrxKanbanBoard

Quadro Kanban drag-and-drop usando HTML5 nativo. Colunas configuráveis com cards de prioridade.

## Uso

```vue
<TrxKanbanBoard
  :columns="kanbanColumns"
  @move="onCardMove"
  @card-click="onCardClick"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `columns` | `TrxKanbanColumn[]` | `[]` | Colunas do board |
| `loading` | `boolean` | `false` | Estado de carregamento |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `move` | `(cardId, fromColId, toColId)` | Card movido |
| `cardClick` | `(card, colId)` | Card clicado |

## Tipos

```ts
interface TrxKanbanCard {
  id: string
  title: string
  description?: string
  priority?: 'low' | 'medium' | 'high' | 'urgent'
  assignee?: string
  tags?: string[]
  dueDate?: string
}

interface TrxKanbanColumn {
  id: string
  title: string
  color?: string
  cards: TrxKanbanCard[]
  limit?: number
}
```
