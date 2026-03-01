<script setup lang="ts">
export interface TrxProfileStat {
  label: string
  value: string | number
}

withDefaults(defineProps<{
  name: string
  email?: string
  role?: string
  avatar?: string
  status?: 'online' | 'offline' | 'busy' | 'away'
  stats?: TrxProfileStat[]
  loading?: boolean
}>(), {
  status: 'offline',
})

const statusLabel: Record<string, string> = {
  online: 'Online',
  offline: 'Offline',
  busy: 'Ocupado',
  away: 'Ausente',
}

const statusColor: Record<string, string> = {
  online:  'var(--trx-success-color)',
  offline: 'var(--trx-text-secondary)',
  busy:    'var(--trx-danger-color)',
  away:    'var(--trx-warning-color)',
}

function initials(name: string) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
}
</script>

<template>
  <div class="trx-profile-card">
    <div v-if="loading" class="trx-profile-card__loading">
      <div class="trx-profile-card__skel trx-profile-card__skel--avatar"></div>
      <div class="trx-profile-card__skel trx-profile-card__skel--name"></div>
      <div class="trx-profile-card__skel trx-profile-card__skel--role"></div>
    </div>
    <template v-else>
      <div class="trx-profile-card__avatar-wrap">
        <img v-if="avatar" :src="avatar" :alt="name" class="trx-profile-card__avatar" />
        <span v-else class="trx-profile-card__initials">{{ initials(name) }}</span>
        <span class="trx-profile-card__status-dot" :style="{ background: statusColor[status ?? 'offline'] }"></span>
      </div>
      <h3 class="trx-profile-card__name">{{ name }}</h3>
      <p v-if="role" class="trx-profile-card__role">{{ role }}</p>
      <p v-if="email" class="trx-profile-card__email">{{ email }}</p>
      <div class="trx-profile-card__status">
        <span class="trx-profile-card__status-label" :style="{ color: statusColor[status ?? 'offline'] }">
          {{ statusLabel[status ?? 'offline'] }}
        </span>
      </div>

      <div v-if="stats?.length" class="trx-profile-card__stats">
        <div v-for="stat in stats" :key="stat.label" class="trx-profile-card__stat">
          <span class="trx-profile-card__stat-value">{{ stat.value }}</span>
          <span class="trx-profile-card__stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <div v-if="$slots.actions" class="trx-profile-card__actions">
        <slot name="actions" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.trx-profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-align: center;
}

.trx-profile-card__avatar-wrap { position: relative; display: inline-flex; }

.trx-profile-card__avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
}

.trx-profile-card__initials {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--trx-accent-color);
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trx-profile-card__status-dot {
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--trx-bg-card);
}

.trx-profile-card__name { font-size: 1.1rem; font-weight: 700; color: var(--trx-text-primary); margin: 0; }
.trx-profile-card__role { font-size: 0.8rem; color: var(--trx-accent-color); font-weight: 500; margin: 0; }
.trx-profile-card__email { font-size: 0.8rem; color: var(--trx-text-secondary); margin: 0; }
.trx-profile-card__status { font-size: 0.8rem; }

.trx-profile-card__stats {
  display: flex;
  gap: 1rem;
  border-top: 1px solid var(--trx-border-color);
  padding-top: 0.75rem;
  margin-top: 0.25rem;
  width: 100%;
  justify-content: center;
}

.trx-profile-card__stat { display: flex; flex-direction: column; align-items: center; gap: 0.1rem; }
.trx-profile-card__stat-value { font-size: 1.1rem; font-weight: 700; color: var(--trx-text-primary); }
.trx-profile-card__stat-label { font-size: 0.7rem; color: var(--trx-text-secondary); }

.trx-profile-card__actions { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; padding-top: 0.25rem; }

.trx-profile-card__loading { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.trx-profile-card__skel {
  border-radius: 4px;
  background: linear-gradient(90deg, var(--trx-bg-secondary) 25%, var(--trx-border-color) 50%, var(--trx-bg-secondary) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
.trx-profile-card__skel--avatar { width: 72px; height: 72px; border-radius: 50%; }
.trx-profile-card__skel--name { width: 140px; height: 1.1rem; }
.trx-profile-card__skel--role { width: 100px; height: 0.875rem; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
</style>
