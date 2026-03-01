<script setup lang="ts">
import TrxChannelBadge from './TrxChannelBadge.vue'
import type { TrxChannel } from './TrxChannelBadge.vue'

export interface TrxConversation {
  id: string
  contact: string
  avatar?: string
  lastMessage?: string
  lastTime?: string
  unread?: number
  channel?: TrxChannel
  status?: 'open' | 'pending' | 'resolved'
  agent?: string
}

withDefaults(defineProps<{
  conversations?: TrxConversation[]
  activeId?: string
  loading?: boolean
}>(), {
  conversations: () => [],
})

const emit = defineEmits<{ select: [conv: TrxConversation] }>()

const statusColor: Record<string, string> = {
  open: 'var(--trx-accent-color)',
  pending: 'var(--trx-warning-color)',
  resolved: 'var(--trx-success-color)',
}

function initials(name: string) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
}
</script>

<template>
  <div class="trx-conv-list">
    <div v-if="loading" class="trx-conv-list__skeleton">
      <div v-for="i in 5" :key="i" class="trx-conv-list__skel-item">
        <div class="trx-conv-list__skel trx-conv-list__skel--avatar"></div>
        <div class="trx-conv-list__skel-info">
          <div class="trx-conv-list__skel trx-conv-list__skel--name"></div>
          <div class="trx-conv-list__skel trx-conv-list__skel--msg"></div>
        </div>
      </div>
    </div>

    <div
      v-else
      v-for="conv in conversations"
      :key="conv.id"
      class="trx-conv-list__item"
      :class="{ 'trx-conv-list__item--active': activeId === conv.id }"
      @click="emit('select', conv)"
    >
      <div class="trx-conv-list__avatar">
        <img v-if="conv.avatar" :src="conv.avatar" :alt="conv.contact" />
        <span v-else>{{ initials(conv.contact) }}</span>
        <span
          v-if="conv.status"
          class="trx-conv-list__status-dot"
          :style="{ background: statusColor[conv.status] }"
        ></span>
      </div>

      <div class="trx-conv-list__info">
        <div class="trx-conv-list__top">
          <span class="trx-conv-list__name">{{ conv.contact }}</span>
          <span class="trx-conv-list__time">{{ conv.lastTime }}</span>
        </div>
        <div class="trx-conv-list__bottom">
          <span class="trx-conv-list__msg">{{ conv.lastMessage ?? '—' }}</span>
          <div class="trx-conv-list__meta">
            <TrxChannelBadge v-if="conv.channel" :channel="conv.channel" size="sm" icon-only :show-label="false" />
            <span v-if="conv.unread" class="trx-conv-list__unread">{{ conv.unread }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-conv-list { display: flex; flex-direction: column; }
.trx-conv-list__item {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.75rem 1rem; cursor: pointer; transition: background 0.15s;
  border-bottom: 1px solid var(--trx-border-color);
}
.trx-conv-list__item:last-child { border-bottom: none; }
.trx-conv-list__item:hover { background: var(--trx-bg-secondary); }
.trx-conv-list__item--active { background: color-mix(in srgb, var(--trx-accent-color) 6%, transparent); }
.trx-conv-list__avatar {
  position: relative; width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
  background: var(--trx-accent-color); color: white;
  font-size: 0.875rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
}
.trx-conv-list__avatar img { width: 100%; height: 100%; object-fit: cover; }
.trx-conv-list__status-dot { position: absolute; bottom: 1px; right: 1px; width: 10px; height: 10px; border-radius: 50%; border: 2px solid var(--trx-bg-card); }
.trx-conv-list__info { flex: 1; min-width: 0; }
.trx-conv-list__top, .trx-conv-list__bottom { display: flex; align-items: center; justify-content: space-between; gap: 0.4rem; }
.trx-conv-list__name { font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-conv-list__time { font-size: 0.7rem; color: var(--trx-text-secondary); flex-shrink: 0; }
.trx-conv-list__msg { font-size: 0.775rem; color: var(--trx-text-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }
.trx-conv-list__meta { display: flex; align-items: center; gap: 0.25rem; flex-shrink: 0; }
.trx-conv-list__unread { background: var(--trx-accent-color); color: white; font-size: 0.65rem; font-weight: 700; padding: 0.1rem 0.35rem; border-radius: 10px; min-width: 18px; text-align: center; }

.trx-conv-list__skeleton { display: flex; flex-direction: column; gap: 0.75rem; padding: 0.75rem; }
.trx-conv-list__skel-item { display: flex; align-items: center; gap: 0.75rem; }
.trx-conv-list__skel-info { display: flex; flex-direction: column; gap: 0.4rem; flex: 1; }
.trx-conv-list__skel {
  border-radius: 4px;
  background: linear-gradient(90deg, var(--trx-bg-secondary) 25%, var(--trx-border-color) 50%, var(--trx-bg-secondary) 75%);
  background-size: 200% 100%; animation: shimmer 1.5s infinite;
}
.trx-conv-list__skel--avatar { width: 40px; height: 40px; border-radius: 50%; }
.trx-conv-list__skel--name { width: 120px; height: 0.875rem; }
.trx-conv-list__skel--msg { width: 80%; height: 0.75rem; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
</style>
