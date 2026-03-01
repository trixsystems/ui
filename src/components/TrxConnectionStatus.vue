<script setup lang="ts">
import { computed } from 'vue'

type TrxConnStatus = 'connected' | 'disconnected' | 'connecting' | 'error'

const props = withDefaults(defineProps<{
  status: TrxConnStatus
  label?: string
  showLabel?: boolean
}>(), {
  showLabel: true,
})

const config = computed(() => {
  const map: Record<TrxConnStatus, { label: string; color: string; icon: string; pulse: boolean }> = {
    connected:    { label: 'Conectado',    color: 'var(--trx-success-color)', icon: 'pi pi-wifi',                    pulse: false },
    disconnected: { label: 'Desconectado', color: 'var(--trx-danger-color)',  icon: 'pi pi-times-circle',            pulse: false },
    connecting:   { label: 'Conectando...', color: 'var(--trx-warning-color)', icon: 'pi pi-spin pi-spinner',        pulse: true  },
    error:        { label: 'Erro',         color: 'var(--trx-danger-color)',  icon: 'pi pi-exclamation-triangle',    pulse: false },
  }
  return map[props.status]
})

const displayLabel = computed(() => props.label ?? config.value.label)
</script>

<template>
  <div class="trx-conn-status" :style="{ '--conn-color': config.color }">
    <span class="trx-conn-status__dot" :class="{ 'trx-conn-status__dot--pulse': config.pulse }"></span>
    <i class="trx-conn-status__icon" :class="config.icon"></i>
    <span v-if="showLabel" class="trx-conn-status__label">{{ displayLabel }}</span>
  </div>
</template>

<style scoped>
.trx-conn-status {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--conn-color);
}

.trx-conn-status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--conn-color);
  flex-shrink: 0;
}

.trx-conn-status__dot--pulse {
  animation: conn-pulse 1.4s ease-in-out infinite;
}

@keyframes conn-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
}

.trx-conn-status__icon { font-size: 0.875rem; }
.trx-conn-status__label { font-weight: 500; }
</style>
