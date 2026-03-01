<script setup lang="ts">
import TrxChannelBadge from './TrxChannelBadge.vue'
import type { TrxChannel } from './TrxChannelBadge.vue'

withDefaults(defineProps<{
  name: string
  phone?: string
  email?: string
  channel?: TrxChannel
  status?: string
  lastContact?: string
  avatar?: string
  loading?: boolean
}>(), {})

const emit = defineEmits<{
  call: []
  chat: []
  view: []
}>()

function initials(name: string) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
}
</script>

<template>
  <div class="trx-contact-card">
    <div v-if="loading" class="trx-contact-card__skeleton">
      <div class="trx-contact-card__skel trx-contact-card__skel--avatar"></div>
      <div class="trx-contact-card__skel-info">
        <div class="trx-contact-card__skel trx-contact-card__skel--name"></div>
        <div class="trx-contact-card__skel trx-contact-card__skel--sub"></div>
      </div>
    </div>
    <template v-else>
      <div class="trx-contact-card__left">
        <div class="trx-contact-card__avatar">
          <img v-if="avatar" :src="avatar" :alt="name" />
          <span v-else>{{ initials(name) }}</span>
        </div>
        <div class="trx-contact-card__info">
          <span class="trx-contact-card__name">{{ name }}</span>
          <span v-if="phone" class="trx-contact-card__detail"><i class="pi pi-phone"></i> {{ phone }}</span>
          <span v-if="email" class="trx-contact-card__detail"><i class="pi pi-envelope"></i> {{ email }}</span>
          <div v-if="channel || lastContact" class="trx-contact-card__meta">
            <TrxChannelBadge v-if="channel" :channel="channel" size="sm" />
            <span v-if="lastContact" class="trx-contact-card__last">{{ lastContact }}</span>
          </div>
        </div>
      </div>
      <div class="trx-contact-card__actions">
        <button v-if="phone" class="trx-contact-card__btn" title="Ligar" @click="emit('call')">
          <i class="pi pi-phone"></i>
        </button>
        <button class="trx-contact-card__btn" title="Chat" @click="emit('chat')">
          <i class="pi pi-comments"></i>
        </button>
        <button class="trx-contact-card__btn" title="Ver contato" @click="emit('view')">
          <i class="pi pi-external-link"></i>
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.trx-contact-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 10px;
  transition: all 0.15s;
}

.trx-contact-card:hover { box-shadow: var(--trx-shadow-sm, 0 1px 4px rgba(0,0,0,0.08)); }

.trx-contact-card__left { display: flex; align-items: center; gap: 0.75rem; flex: 1; min-width: 0; }

.trx-contact-card__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--trx-accent-color);
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}

.trx-contact-card__avatar img { width: 100%; height: 100%; object-fit: cover; }

.trx-contact-card__info { display: flex; flex-direction: column; gap: 0.15rem; min-width: 0; }
.trx-contact-card__name { font-size: 0.9rem; font-weight: 600; color: var(--trx-text-primary); }

.trx-contact-card__detail {
  font-size: 0.775rem;
  color: var(--trx-text-secondary);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.trx-contact-card__detail i { font-size: 0.7rem; }

.trx-contact-card__meta { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
.trx-contact-card__last { font-size: 0.7rem; color: var(--trx-text-secondary); }

.trx-contact-card__actions { display: flex; gap: 0.3rem; flex-shrink: 0; }

.trx-contact-card__btn {
  width: 30px;
  height: 30px;
  border: 1px solid var(--trx-border-color);
  border-radius: 6px;
  background: transparent;
  color: var(--trx-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all 0.15s;
}

.trx-contact-card__btn:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }

.trx-contact-card__skeleton { display: flex; align-items: center; gap: 0.75rem; }
.trx-contact-card__skel-info { display: flex; flex-direction: column; gap: 0.4rem; }
.trx-contact-card__skel {
  border-radius: 4px;
  background: linear-gradient(90deg, var(--trx-bg-secondary) 25%, var(--trx-border-color) 50%, var(--trx-bg-secondary) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
.trx-contact-card__skel--avatar { width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; }
.trx-contact-card__skel--name { width: 120px; height: 0.875rem; }
.trx-contact-card__skel--sub { width: 80px; height: 0.75rem; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
</style>
