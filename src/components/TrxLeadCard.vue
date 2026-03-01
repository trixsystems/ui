<script setup lang="ts">
export type TrxLeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost'
export type TrxLeadPriority = 'low' | 'medium' | 'high'

const statusConfig: Record<TrxLeadStatus, { label: string; color: string }> = {
  new:       { label: 'Novo',         color: 'var(--trx-info-color, #3b82f6)' },
  contacted: { label: 'Contatado',    color: 'var(--trx-accent-color)' },
  qualified: { label: 'Qualificado',  color: 'var(--trx-warning-color)' },
  proposal:  { label: 'Proposta',     color: '#8b5cf6' },
  won:       { label: 'Ganho',        color: 'var(--trx-success-color)' },
  lost:      { label: 'Perdido',      color: 'var(--trx-danger-color)' },
}

const priorityIcon: Record<TrxLeadPriority, string> = {
  low: 'pi pi-arrow-down', medium: 'pi pi-minus', high: 'pi pi-arrow-up',
}

withDefaults(defineProps<{
  name: string
  company?: string
  email?: string
  phone?: string
  value?: number
  status?: TrxLeadStatus
  priority?: TrxLeadPriority
  assignee?: string
  source?: string
  updatedAt?: string
}>(), {
  status: 'new',
  priority: 'medium',
})

const emit = defineEmits<{ view: []; call: []; email: [] }>()

function formatCurrency(n: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n)
}

function initials(name: string) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
}
</script>

<template>
  <div class="trx-lead-card" @click="emit('view')">
    <div class="trx-lead-card__header">
      <div class="trx-lead-card__avatar">{{ initials(name) }}</div>
      <div class="trx-lead-card__identity">
        <span class="trx-lead-card__name">{{ name }}</span>
        <span v-if="company" class="trx-lead-card__company">{{ company }}</span>
      </div>
      <div class="trx-lead-card__badges">
        <span class="trx-lead-card__status" :style="{ '--lst-color': statusConfig[status ?? 'new'].color }">
          {{ statusConfig[status ?? 'new'].label }}
        </span>
        <i :class="priorityIcon[priority ?? 'medium']" class="trx-lead-card__priority" :title="priority"></i>
      </div>
    </div>

    <div v-if="value" class="trx-lead-card__value">{{ formatCurrency(value) }}</div>

    <div class="trx-lead-card__meta">
      <span v-if="source" class="trx-lead-card__source"><i class="pi pi-map-marker"></i> {{ source }}</span>
      <span v-if="assignee" class="trx-lead-card__assignee"><i class="pi pi-user"></i> {{ assignee }}</span>
      <span v-if="updatedAt" class="trx-lead-card__time"><i class="pi pi-clock"></i> {{ updatedAt }}</span>
    </div>

    <div class="trx-lead-card__actions" @click.stop>
      <button v-if="phone" class="trx-lead-card__btn" title="Ligar" @click="emit('call')"><i class="pi pi-phone"></i></button>
      <button v-if="email" class="trx-lead-card__btn" title="E-mail" @click="emit('email')"><i class="pi pi-envelope"></i></button>
      <button class="trx-lead-card__btn" title="Ver lead" @click="emit('view')"><i class="pi pi-external-link"></i></button>
    </div>
  </div>
</template>

<style scoped>
.trx-lead-card {
  display: flex; flex-direction: column; gap: 0.6rem;
  padding: 0.875rem 1rem; background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color); border-radius: 10px;
  cursor: pointer; transition: all 0.15s;
}
.trx-lead-card:hover { box-shadow: var(--trx-shadow-md); transform: translateY(-1px); }
.trx-lead-card__header { display: flex; align-items: center; gap: 0.6rem; }
.trx-lead-card__avatar {
  width: 36px; height: 36px; border-radius: 50%; background: var(--trx-accent-color);
  color: white; font-size: 0.8rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.trx-lead-card__identity { flex: 1; min-width: 0; }
.trx-lead-card__name { display: block; font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-lead-card__company { font-size: 0.775rem; color: var(--trx-text-secondary); }
.trx-lead-card__badges { display: flex; align-items: center; gap: 0.35rem; flex-shrink: 0; }
.trx-lead-card__status {
  font-size: 0.7rem; font-weight: 600; padding: 0.1rem 0.45rem; border-radius: 20px;
  background: color-mix(in srgb, var(--lst-color) 12%, transparent);
  color: var(--lst-color);
  border: 1px solid color-mix(in srgb, var(--lst-color) 25%, transparent);
}
.trx-lead-card__priority { font-size: 0.8rem; color: var(--trx-warning-color); }
.trx-lead-card__value { font-size: 1.1rem; font-weight: 700; color: var(--trx-success-color); }
.trx-lead-card__meta { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.trx-lead-card__meta span { display: flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-lead-card__meta i { font-size: 0.7rem; }
.trx-lead-card__actions { display: flex; gap: 0.4rem; }
.trx-lead-card__btn {
  width: 28px; height: 28px; border: 1px solid var(--trx-border-color); border-radius: 6px;
  background: transparent; color: var(--trx-text-secondary);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  font-size: 0.775rem; transition: all 0.15s;
}
.trx-lead-card__btn:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
</style>
