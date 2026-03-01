<script setup lang="ts">
export type TrxDialerStatus = 'pending' | 'dialing' | 'connected' | 'completed' | 'failed' | 'skipped'

export interface TrxDialerContact {
  id: string
  name: string
  phone: string
  status: TrxDialerStatus
  attempts?: number
  lastAttempt?: string
  notes?: string
}

withDefaults(defineProps<{
  contacts?: TrxDialerContact[]
  loading?: boolean
  currentId?: string
}>(), {
  contacts: () => [],
})

const emit = defineEmits<{
  dial: [contact: TrxDialerContact]
  skip: [id: string]
  view: [contact: TrxDialerContact]
}>()

const statusConfig: Record<TrxDialerStatus, { label: string; color: string; icon: string }> = {
  pending:   { label: 'Pendente',    color: 'var(--trx-text-secondary)', icon: 'pi pi-clock' },
  dialing:   { label: 'Discando',    color: 'var(--trx-warning-color)',  icon: 'pi pi-spin pi-spinner' },
  connected: { label: 'Conectado',   color: 'var(--trx-success-color)',  icon: 'pi pi-phone' },
  completed: { label: 'Concluído',   color: 'var(--trx-accent-color)',   icon: 'pi pi-check' },
  failed:    { label: 'Falhou',      color: 'var(--trx-danger-color)',   icon: 'pi pi-times' },
  skipped:   { label: 'Ignorado',    color: 'var(--trx-text-secondary)', icon: 'pi pi-forward' },
}
</script>

<template>
  <div class="trx-dialer-list">
    <div v-if="loading" class="trx-dialer-list__empty">
      <i class="pi pi-spin pi-spinner"></i>
    </div>
    <div
      v-else
      v-for="contact in contacts"
      :key="contact.id"
      class="trx-dialer-list__item"
      :class="{ 'trx-dialer-list__item--current': currentId === contact.id }"
      @click="emit('view', contact)"
    >
      <div class="trx-dialer-list__status-icon" :style="{ color: statusConfig[contact.status].color }">
        <i :class="statusConfig[contact.status].icon"></i>
      </div>
      <div class="trx-dialer-list__info">
        <span class="trx-dialer-list__name">{{ contact.name }}</span>
        <span class="trx-dialer-list__phone">{{ contact.phone }}</span>
      </div>
      <div class="trx-dialer-list__meta">
        <span class="trx-dialer-list__status-label" :style="{ color: statusConfig[contact.status].color }">
          {{ statusConfig[contact.status].label }}
        </span>
        <span v-if="contact.attempts" class="trx-dialer-list__attempts">{{ contact.attempts }}x</span>
      </div>
      <div class="trx-dialer-list__actions" @click.stop>
        <button
          v-if="contact.status === 'pending'"
          class="trx-dialer-list__btn trx-dialer-list__btn--dial"
          title="Discar"
          @click="emit('dial', contact)"
        >
          <i class="pi pi-phone"></i>
        </button>
        <button
          v-if="contact.status === 'pending'"
          class="trx-dialer-list__btn"
          title="Pular"
          @click="emit('skip', contact.id)"
        >
          <i class="pi pi-forward"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-dialer-list { display: flex; flex-direction: column; }
.trx-dialer-list__empty { display: flex; align-items: center; justify-content: center; padding: 2rem; color: var(--trx-text-secondary); }
.trx-dialer-list__item {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.7rem 1rem; border-bottom: 1px solid var(--trx-border-color);
  cursor: pointer; transition: background 0.15s;
}
.trx-dialer-list__item:last-child { border-bottom: none; }
.trx-dialer-list__item:hover { background: var(--trx-bg-secondary); }
.trx-dialer-list__item--current { background: color-mix(in srgb, var(--trx-accent-color) 6%, transparent); }
.trx-dialer-list__status-icon { font-size: 1rem; flex-shrink: 0; width: 20px; text-align: center; }
.trx-dialer-list__info { flex: 1; display: flex; flex-direction: column; gap: 0.1rem; min-width: 0; }
.trx-dialer-list__name { font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-dialer-list__phone { font-size: 0.775rem; color: var(--trx-text-secondary); font-family: monospace; }
.trx-dialer-list__meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.1rem; flex-shrink: 0; }
.trx-dialer-list__status-label { font-size: 0.775rem; font-weight: 600; }
.trx-dialer-list__attempts { font-size: 0.7rem; color: var(--trx-text-secondary); }
.trx-dialer-list__actions { display: flex; gap: 0.3rem; flex-shrink: 0; }
.trx-dialer-list__btn {
  width: 28px; height: 28px; border: 1px solid var(--trx-border-color); border-radius: 6px;
  background: transparent; color: var(--trx-text-secondary); cursor: pointer;
  display: flex; align-items: center; justify-content: center; font-size: 0.75rem; transition: all 0.15s;
}
.trx-dialer-list__btn:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
.trx-dialer-list__btn--dial { background: color-mix(in srgb, var(--trx-success-color) 10%, transparent); color: var(--trx-success-color); border-color: var(--trx-success-color); }
</style>
