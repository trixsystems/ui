<script setup lang="ts">
export type TrxCRMEventType = 'call' | 'email' | 'note' | 'meeting' | 'task' | 'deal' | 'whatsapp' | 'stage'

export interface TrxCRMEvent {
  id: string
  type: TrxCRMEventType
  title: string
  description?: string
  author?: string
  date: string
  duration?: string
  outcome?: 'positive' | 'negative' | 'neutral'
}

withDefaults(defineProps<{
  events?: TrxCRMEvent[]
  loading?: boolean
}>(), {
  events: () => [],
})

const emit = defineEmits<{ eventClick: [event: TrxCRMEvent] }>()

const typeConfig: Record<TrxCRMEventType, { icon: string; color: string; label: string }> = {
  call:     { icon: 'pi pi-phone',          color: 'var(--trx-success-color)',  label: 'Ligação' },
  email:    { icon: 'pi pi-envelope',       color: 'var(--trx-accent-color)',   label: 'Email' },
  note:     { icon: 'pi pi-file-edit',      color: 'var(--trx-warning-color)',  label: 'Nota' },
  meeting:  { icon: 'pi pi-calendar',       color: '#a78bfa',                   label: 'Reunião' },
  task:     { icon: 'pi pi-check-square',   color: 'var(--trx-text-secondary)', label: 'Tarefa' },
  deal:     { icon: 'pi pi-dollar',         color: 'var(--trx-success-color)',  label: 'Negócio' },
  whatsapp: { icon: 'pi pi-comments',       color: '#25d366',                   label: 'WhatsApp' },
  stage:    { icon: 'pi pi-arrow-right',    color: 'var(--trx-accent-color)',   label: 'Mudança de Fase' },
}

const outcomeConfig = {
  positive: { icon: 'pi pi-thumbs-up', color: 'var(--trx-success-color)' },
  negative: { icon: 'pi pi-thumbs-down', color: 'var(--trx-danger-color)' },
  neutral:  { icon: 'pi pi-minus', color: 'var(--trx-text-secondary)' },
}

function formatDate(d: string) {
  return new Date(d).toLocaleString('pt-BR', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' })
}
</script>

<template>
  <div class="trx-crm-timeline">
    <div v-if="loading" class="trx-crm-timeline__loading">
      <i class="pi pi-spin pi-spinner"></i>
    </div>
    <div v-else-if="!events.length" class="trx-crm-timeline__empty">
      <i class="pi pi-history"></i>
      <span>Nenhuma atividade registrada</span>
    </div>
    <div v-else class="trx-crm-timeline__list">
      <div
        v-for="ev in events"
        :key="ev.id"
        class="trx-crm-timeline__item"
        @click="emit('eventClick', ev)"
      >
        <div class="trx-crm-timeline__line-wrap">
          <div class="trx-crm-timeline__dot" :style="{ background: typeConfig[ev.type].color }">
            <i :class="typeConfig[ev.type].icon" class="trx-crm-timeline__dot-icon"></i>
          </div>
          <div class="trx-crm-timeline__line"></div>
        </div>
        <div class="trx-crm-timeline__content">
          <div class="trx-crm-timeline__header">
            <span class="trx-crm-timeline__type-badge" :style="{ color: typeConfig[ev.type].color }">
              {{ typeConfig[ev.type].label }}
            </span>
            <span class="trx-crm-timeline__date">{{ formatDate(ev.date) }}</span>
          </div>
          <div class="trx-crm-timeline__title-row">
            <span class="trx-crm-timeline__title">{{ ev.title }}</span>
            <span
              v-if="ev.outcome"
              class="trx-crm-timeline__outcome"
              :style="{ color: outcomeConfig[ev.outcome].color }"
            >
              <i :class="outcomeConfig[ev.outcome].icon"></i>
            </span>
          </div>
          <p v-if="ev.description" class="trx-crm-timeline__desc">{{ ev.description }}</p>
          <div class="trx-crm-timeline__meta">
            <span v-if="ev.author" class="trx-crm-timeline__author"><i class="pi pi-user"></i> {{ ev.author }}</span>
            <span v-if="ev.duration" class="trx-crm-timeline__duration"><i class="pi pi-clock"></i> {{ ev.duration }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-crm-timeline { width: 100%; }
.trx-crm-timeline__loading, .trx-crm-timeline__empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 0.5rem; padding: 2rem; color: var(--trx-text-secondary); font-size: 0.875rem;
}
.trx-crm-timeline__list { display: flex; flex-direction: column; }
.trx-crm-timeline__item { display: flex; gap: 0.75rem; cursor: pointer; }
.trx-crm-timeline__item:hover .trx-crm-timeline__content { background: var(--trx-bg-secondary); }
.trx-crm-timeline__line-wrap { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.trx-crm-timeline__dot {
  width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; margin-top: 0.5rem;
}
.trx-crm-timeline__dot-icon { font-size: 0.75rem; color: white; }
.trx-crm-timeline__line { flex: 1; width: 2px; background: var(--trx-border-color); margin: 4px 0; }
.trx-crm-timeline__item:last-child .trx-crm-timeline__line { display: none; }
.trx-crm-timeline__content { flex: 1; padding: 0.5rem 0.75rem; border-radius: 8px; margin-bottom: 0.25rem; transition: background 0.15s; }
.trx-crm-timeline__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.2rem; }
.trx-crm-timeline__type-badge { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.trx-crm-timeline__date { font-size: 0.725rem; color: var(--trx-text-secondary); }
.trx-crm-timeline__title-row { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; }
.trx-crm-timeline__title { font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-crm-timeline__outcome { font-size: 0.85rem; }
.trx-crm-timeline__desc { font-size: 0.8rem; color: var(--trx-text-secondary); margin: 0.2rem 0 0; line-height: 1.5; }
.trx-crm-timeline__meta { display: flex; gap: 0.75rem; margin-top: 0.3rem; }
.trx-crm-timeline__author, .trx-crm-timeline__duration {
  font-size: 0.725rem; color: var(--trx-text-secondary);
  display: flex; align-items: center; gap: 0.25rem;
}
</style>
