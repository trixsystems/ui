<script setup lang="ts">
export interface TrxKanbanCard {
  id: string
  title: string
  description?: string
  tags?: string[]
  assignee?: string
  priority?: 'low' | 'medium' | 'high'
  [key: string]: unknown
}

export interface TrxKanbanColumn {
  id: string
  label: string
  color?: string
  limit?: number
  cards: TrxKanbanCard[]
}

withDefaults(defineProps<{
  columns?: TrxKanbanColumn[]
  loading?: boolean
}>(), {
  columns: () => [],
})

const emit = defineEmits<{
  move: [cardId: string, fromCol: string, toCol: string]
  cardClick: [card: TrxKanbanCard, colId: string]
}>()

const priorityColor: Record<string, string> = {
  low: 'var(--trx-text-secondary)',
  medium: 'var(--trx-warning-color)',
  high: 'var(--trx-danger-color)',
}

let dragging: { cardId: string; fromCol: string } | null = null

function onDragStart(cardId: string, colId: string) {
  dragging = { cardId, fromCol: colId }
}

function onDrop(toCol: string) {
  if (!dragging || dragging.fromCol === toCol) return
  emit('move', dragging.cardId, dragging.fromCol, toCol)
  dragging = null
}
</script>

<template>
  <div class="trx-kanban">
    <div
      v-for="col in columns"
      :key="col.id"
      class="trx-kanban__col"
      @dragover.prevent
      @drop="onDrop(col.id)"
    >
      <div class="trx-kanban__col-header">
        <div class="trx-kanban__col-dot" :style="{ background: col.color ?? 'var(--trx-accent-color)' }"></div>
        <span class="trx-kanban__col-label">{{ col.label }}</span>
        <span class="trx-kanban__col-count">{{ col.cards.length }}<span v-if="col.limit">/{{ col.limit }}</span></span>
      </div>

      <div class="trx-kanban__cards">
        <div
          v-for="card in col.cards"
          :key="card.id"
          class="trx-kanban__card"
          draggable="true"
          @dragstart="onDragStart(card.id, col.id)"
          @click="emit('cardClick', card, col.id)"
        >
          <div class="trx-kanban__card-header">
            <p class="trx-kanban__card-title">{{ card.title }}</p>
            <span
              v-if="card.priority"
              class="trx-kanban__card-priority"
              :style="{ color: priorityColor[card.priority] }"
              :title="card.priority"
            >●</span>
          </div>
          <p v-if="card.description" class="trx-kanban__card-desc">{{ card.description }}</p>
          <div v-if="card.tags?.length" class="trx-kanban__card-tags">
            <span v-for="tag in card.tags" :key="tag" class="trx-kanban__card-tag">{{ tag }}</span>
          </div>
          <div v-if="card.assignee" class="trx-kanban__card-assignee">
            <span class="trx-kanban__card-avatar">{{ card.assignee.split(' ').map((w: string) => w[0]).join('').slice(0,2).toUpperCase() }}</span>
            <span class="trx-kanban__card-assignee-name">{{ card.assignee }}</span>
          </div>
        </div>

        <div v-if="!col.cards.length" class="trx-kanban__col-empty">
          <i class="pi pi-inbox"></i>
          <span>Vazio</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-kanban { display: flex; gap: 1rem; overflow-x: auto; align-items: flex-start; padding-bottom: 1rem; }
.trx-kanban__col {
  flex-shrink: 0; width: 280px;
  background: var(--trx-bg-secondary); border-radius: 12px; padding: 0.75rem;
}
.trx-kanban__col-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; }
.trx-kanban__col-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.trx-kanban__col-label { flex: 1; font-size: 0.875rem; font-weight: 700; color: var(--trx-text-primary); }
.trx-kanban__col-count { font-size: 0.75rem; color: var(--trx-text-secondary); background: var(--trx-bg-card); padding: 0.1rem 0.4rem; border-radius: 10px; }
.trx-kanban__cards { display: flex; flex-direction: column; gap: 0.5rem; min-height: 80px; }
.trx-kanban__card {
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 8px; padding: 0.75rem; cursor: grab; transition: all 0.15s;
}
.trx-kanban__card:hover { box-shadow: var(--trx-shadow-md); transform: translateY(-1px); }
.trx-kanban__card:active { cursor: grabbing; }
.trx-kanban__card-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.4rem; }
.trx-kanban__card-title { font-size: 0.85rem; font-weight: 600; color: var(--trx-text-primary); margin: 0; line-height: 1.4; flex: 1; }
.trx-kanban__card-priority { font-size: 1rem; flex-shrink: 0; }
.trx-kanban__card-desc { font-size: 0.775rem; color: var(--trx-text-secondary); margin: 0.35rem 0 0; line-height: 1.4;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.trx-kanban__card-tags { display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.5rem; }
.trx-kanban__card-tag { font-size: 0.65rem; padding: 0.1rem 0.35rem; background: color-mix(in srgb, var(--trx-accent-color) 10%, transparent); color: var(--trx-accent-color); border-radius: 4px; }
.trx-kanban__card-assignee { display: flex; align-items: center; gap: 0.35rem; margin-top: 0.5rem; }
.trx-kanban__card-avatar { width: 20px; height: 20px; border-radius: 50%; background: var(--trx-accent-color); color: white; font-size: 0.55rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.trx-kanban__card-assignee-name { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-kanban__col-empty { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; padding: 1.5rem; color: var(--trx-border-color); font-size: 0.8rem; }
</style>
