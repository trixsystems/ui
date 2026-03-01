<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

export interface TrxNotification {
  id: string
  title: string
  body?: string
  time?: string
  read?: boolean
  icon?: string
  type?: 'info' | 'success' | 'warning' | 'danger'
}

const props = withDefaults(defineProps<{
  items?: TrxNotification[]
  count?: number
  loading?: boolean
}>(), {
  items: () => [],
})

const emit = defineEmits<{
  read: [id: string]
  'read-all': []
  open: []
}>()

const open = ref(false)
const unread = () => props.count ?? props.items.filter(n => !n.read).length

const typeIcon: Record<string, string> = {
  info:    'pi pi-info-circle',
  success: 'pi pi-check-circle',
  warning: 'pi pi-exclamation-triangle',
  danger:  'pi pi-times-circle',
}

const typeColor: Record<string, string> = {
  info:    'var(--trx-info-color, #3b82f6)',
  success: 'var(--trx-success-color)',
  warning: 'var(--trx-warning-color)',
  danger:  'var(--trx-danger-color)',
}

function toggle() {
  open.value = !open.value
  if (open.value) emit('open')
}

function onDocClick(e: MouseEvent) {
  const el = document.querySelector('.trx-notif-bell')
  if (el && !el.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onDocClick, true))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick, true))
</script>

<template>
  <div class="trx-notif-bell">
    <button class="trx-notif-bell__btn" @click="toggle" :class="{ 'trx-notif-bell__btn--active': open }">
      <i class="pi pi-bell"></i>
      <span v-if="unread() > 0" class="trx-notif-bell__count">{{ unread() > 99 ? '99+' : unread() }}</span>
    </button>

    <Transition name="trx-dropdown">
      <div v-if="open" class="trx-notif-bell__panel">
        <div class="trx-notif-bell__header">
          <span class="trx-notif-bell__title">Notificações</span>
          <button v-if="unread() > 0" class="trx-notif-bell__read-all" @click="emit('read-all')">
            Marcar todas como lidas
          </button>
        </div>

        <div v-if="loading" class="trx-notif-bell__loading">
          <i class="pi pi-spin pi-spinner"></i>
        </div>

        <div v-else-if="!items.length" class="trx-notif-bell__empty">
          <i class="pi pi-bell-slash"></i>
          <span>Nenhuma notificação</span>
        </div>

        <div v-else class="trx-notif-bell__list">
          <div
            v-for="item in items"
            :key="item.id"
            class="trx-notif-bell__item"
            :class="{ 'trx-notif-bell__item--unread': !item.read }"
            @click="emit('read', item.id)"
          >
            <div class="trx-notif-bell__item-icon" :style="{ color: typeColor[item.type ?? 'info'] }">
              <i :class="item.icon ?? typeIcon[item.type ?? 'info']"></i>
            </div>
            <div class="trx-notif-bell__item-content">
              <p class="trx-notif-bell__item-title">{{ item.title }}</p>
              <p v-if="item.body" class="trx-notif-bell__item-body">{{ item.body }}</p>
              <span v-if="item.time" class="trx-notif-bell__item-time">{{ item.time }}</span>
            </div>
            <div v-if="!item.read" class="trx-notif-bell__item-dot"></div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trx-notif-bell { position: relative; }

.trx-notif-bell__btn {
  position: relative;
  width: 36px;
  height: 36px;
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  background: var(--trx-bg-card);
  color: var(--trx-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.15s;
}

.trx-notif-bell__btn:hover,
.trx-notif-bell__btn--active { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }

.trx-notif-bell__count {
  position: absolute;
  top: -6px;
  right: -6px;
  background: var(--trx-danger-color);
  color: white;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.1rem 0.3rem;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
  border: 2px solid var(--trx-bg-card);
}

.trx-notif-bell__panel {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  width: 320px;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 12px;
  box-shadow: var(--trx-shadow-md);
  overflow: hidden;
  z-index: 100;
}

.trx-notif-bell__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--trx-border-color);
}

.trx-notif-bell__title { font-size: 0.875rem; font-weight: 700; color: var(--trx-text-primary); }

.trx-notif-bell__read-all {
  background: none;
  border: none;
  font-size: 0.75rem;
  color: var(--trx-accent-color);
  cursor: pointer;
  padding: 0;
}

.trx-notif-bell__read-all:hover { text-decoration: underline; }

.trx-notif-bell__loading,
.trx-notif-bell__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  color: var(--trx-text-secondary);
  font-size: 0.875rem;
}

.trx-notif-bell__empty i { font-size: 1.5rem; }

.trx-notif-bell__list { max-height: 360px; overflow-y: auto; }

.trx-notif-bell__item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--trx-border-color);
  cursor: pointer;
  transition: background 0.15s;
  position: relative;
}

.trx-notif-bell__item:last-child { border-bottom: none; }
.trx-notif-bell__item:hover { background: var(--trx-bg-secondary); }
.trx-notif-bell__item--unread { background: color-mix(in srgb, var(--trx-accent-color) 4%, transparent); }

.trx-notif-bell__item-icon { font-size: 1.1rem; flex-shrink: 0; padding-top: 0.1rem; }

.trx-notif-bell__item-content { flex: 1; min-width: 0; }
.trx-notif-bell__item-title { font-size: 0.8rem; font-weight: 600; color: var(--trx-text-primary); margin: 0 0 0.15rem; }
.trx-notif-bell__item-body { font-size: 0.775rem; color: var(--trx-text-secondary); margin: 0 0 0.25rem; }
.trx-notif-bell__item-time { font-size: 0.7rem; color: var(--trx-text-secondary); }

.trx-notif-bell__item-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--trx-accent-color);
  flex-shrink: 0;
  margin-top: 0.3rem;
}

.trx-dropdown-enter-active, .trx-dropdown-leave-active { transition: all 0.15s ease; }
.trx-dropdown-enter-from, .trx-dropdown-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
