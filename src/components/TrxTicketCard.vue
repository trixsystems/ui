<script setup lang="ts">
import TrxChannelBadge from './TrxChannelBadge.vue'
import type { TrxChannel } from './TrxChannelBadge.vue'

export type TrxTicketStatus = 'open' | 'pending' | 'resolved' | 'closed'
export type TrxTicketPriority = 'low' | 'medium' | 'high' | 'urgent'

const statusConfig: Record<TrxTicketStatus, { label: string; color: string }> = {
  open:     { label: 'Aberto',    color: 'var(--trx-accent-color)' },
  pending:  { label: 'Pendente',  color: 'var(--trx-warning-color)' },
  resolved: { label: 'Resolvido', color: 'var(--trx-success-color)' },
  closed:   { label: 'Fechado',   color: 'var(--trx-text-secondary)' },
}

const priorityConfig: Record<TrxTicketPriority, { label: string; color: string; icon: string }> = {
  low:    { label: 'Baixa',   color: 'var(--trx-text-secondary)',  icon: 'pi pi-minus' },
  medium: { label: 'Média',   color: 'var(--trx-warning-color)',   icon: 'pi pi-equals' },
  high:   { label: 'Alta',    color: 'var(--trx-danger-color)',    icon: 'pi pi-arrow-up' },
  urgent: { label: 'Urgente', color: 'var(--trx-danger-color)',    icon: 'pi pi-exclamation-triangle' },
}

withDefaults(defineProps<{
  id: string | number
  title: string
  status?: TrxTicketStatus
  priority?: TrxTicketPriority
  channel?: TrxChannel
  agent?: string
  customer?: string
  createdAt?: string
  updatedAt?: string
}>(), {
  status: 'open',
  priority: 'medium',
})

const emit = defineEmits<{
  view: []
  assign: []
}>()
</script>

<template>
  <div class="trx-ticket-card" @click="emit('view')">
    <div class="trx-ticket-card__top">
      <span class="trx-ticket-card__id">#{{ id }}</span>
      <div class="trx-ticket-card__badges">
        <TrxChannelBadge v-if="channel" :channel="channel" size="sm" :show-label="false" icon-only />
        <span
          class="trx-ticket-card__status"
          :style="{ '--st-color': statusConfig[status ?? 'open'].color }"
        >{{ statusConfig[status ?? 'open'].label }}</span>
        <span
          class="trx-ticket-card__priority"
          :style="{ '--pr-color': priorityConfig[priority ?? 'medium'].color }"
          :title="priorityConfig[priority ?? 'medium'].label"
        >
          <i :class="priorityConfig[priority ?? 'medium'].icon"></i>
        </span>
      </div>
    </div>

    <p class="trx-ticket-card__title">{{ title }}</p>

    <div class="trx-ticket-card__meta">
      <span v-if="customer" class="trx-ticket-card__meta-item">
        <i class="pi pi-user"></i> {{ customer }}
      </span>
      <span v-if="agent" class="trx-ticket-card__meta-item">
        <i class="pi pi-headphones"></i> {{ agent }}
      </span>
      <span v-if="updatedAt ?? createdAt" class="trx-ticket-card__meta-item trx-ticket-card__meta-item--time">
        <i class="pi pi-clock"></i> {{ updatedAt ?? createdAt }}
      </span>
    </div>

    <div class="trx-ticket-card__actions" @click.stop>
      <slot name="actions">
        <button class="trx-ticket-card__btn" @click="emit('view')"><i class="pi pi-eye"></i> Ver</button>
        <button class="trx-ticket-card__btn" @click="emit('assign')"><i class="pi pi-user-plus"></i> Atribuir</button>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.trx-ticket-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.875rem 1rem;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s;
}

.trx-ticket-card:hover { box-shadow: var(--trx-shadow-md); transform: translateY(-1px); }

.trx-ticket-card__top { display: flex; align-items: center; justify-content: space-between; }

.trx-ticket-card__id { font-size: 0.75rem; color: var(--trx-text-secondary); font-weight: 600; font-family: monospace; }

.trx-ticket-card__badges { display: flex; align-items: center; gap: 0.35rem; }

.trx-ticket-card__status {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.1rem 0.45rem;
  border-radius: 20px;
  background: color-mix(in srgb, var(--st-color) 12%, transparent);
  color: var(--st-color);
  border: 1px solid color-mix(in srgb, var(--st-color) 25%, transparent);
}

.trx-ticket-card__priority {
  font-size: 0.75rem;
  color: var(--pr-color);
}

.trx-ticket-card__title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--trx-text-primary);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.trx-ticket-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.trx-ticket-card__meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--trx-text-secondary);
}

.trx-ticket-card__meta-item i { font-size: 0.7rem; }
.trx-ticket-card__meta-item--time { margin-left: auto; }

.trx-ticket-card__actions { display: flex; gap: 0.4rem; }

.trx-ticket-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.6rem;
  border: 1px solid var(--trx-border-color);
  border-radius: 6px;
  background: transparent;
  color: var(--trx-text-secondary);
  font-size: 0.775rem;
  cursor: pointer;
  transition: all 0.15s;
}

.trx-ticket-card__btn:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
</style>
