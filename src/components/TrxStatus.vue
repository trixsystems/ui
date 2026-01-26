<script setup lang="ts">
defineProps<{
  status: 'online' | 'offline' | 'busy' | 'away' | 'connecting'
  label?: string
  showLabel?: boolean
}>()

const statusConfig = {
  online: { color: 'var(--trx-success-color, var(--success-color))', label: 'Online' },
  offline: { color: 'var(--trx-danger-color, var(--danger-color))', label: 'Offline' },
  busy: { color: 'var(--trx-warning-color, var(--warning-color))', label: 'Ocupado' },
  away: { color: 'var(--trx-info-color, var(--info-color))', label: 'Ausente' },
  connecting: { color: 'var(--trx-text-secondary, var(--text-secondary))', label: 'Conectando...' }
}
</script>

<template>
  <div class="trx-status">
    <span
      class="status-dot"
      :class="{ pulse: status === 'connecting' }"
      :style="{ backgroundColor: statusConfig[status].color }"
    />
    <span v-if="showLabel !== false" class="status-label">
      {{ label || statusConfig[status].label }}
    </span>
  </div>
</template>

<style scoped>
.trx-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-dot.pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.status-label {
  font-size: 0.875rem;
  color: var(--trx-text-secondary, var(--text-secondary));
}
</style>
