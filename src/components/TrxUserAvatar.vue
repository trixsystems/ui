<script setup lang="ts">
import { computed } from 'vue'

export type TrxAvatarStatus = 'online' | 'offline' | 'away' | 'busy'
export type TrxAvatarSize = 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{
    name?: string
    src?: string
    status?: TrxAvatarStatus
    size?: TrxAvatarSize
    /** Cor de fundo personalizada para as iniciais */
    color?: string
  }>(),
  { size: 'md' },
)

const initials = computed(() => {
  if (!props.name) return '?'
  return props.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const sizeMap: Record<TrxAvatarSize, string> = {
  sm: '1.75rem',
  md: '2.25rem',
  lg: '3rem',
  xl: '4rem',
}

const fontSizeMap: Record<TrxAvatarSize, string> = {
  sm: '0.625rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.375rem',
}
</script>

<template>
  <div
    :class="['trx-avatar', `trx-avatar--${size}`]"
    :style="{
      width: sizeMap[size],
      height: sizeMap[size],
      fontSize: fontSizeMap[size],
      backgroundColor: !src ? (color || 'var(--trx-primary-soft)') : undefined,
    }"
    :title="name"
    role="img"
    :aria-label="name ?? 'Avatar'"
  >
    <img v-if="src" :src="src" :alt="name ?? 'Avatar'" class="trx-avatar__img" />
    <span v-else class="trx-avatar__initials">{{ initials }}</span>

    <span
      v-if="status"
      :class="['trx-avatar__status', `trx-avatar__status--${status}`]"
      :aria-label="status"
    />
  </div>
</template>

<style scoped>
.trx-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: visible;
  flex-shrink: 0;
}

.trx-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.trx-avatar__initials {
  font-weight: 600;
  color: var(--trx-accent-color);
  user-select: none;
  letter-spacing: 0.025em;
}

.trx-avatar__status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  height: 30%;
  min-width: 8px;
  min-height: 8px;
  border-radius: 50%;
  border: 2px solid var(--trx-bg-primary);
}

.trx-avatar__status--online  { background: var(--trx-success-color, #10b981); }
.trx-avatar__status--offline { background: var(--trx-text-muted,    #94a3b8); }
.trx-avatar__status--away    { background: var(--trx-warning-color,  #f59e0b); }
.trx-avatar__status--busy    { background: var(--trx-danger-color,   #ef4444); }
</style>
