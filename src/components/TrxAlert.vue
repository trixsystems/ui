<script setup lang="ts">
export type TrxAlertType = 'info' | 'success' | 'warning' | 'error'

const props = withDefaults(
  defineProps<{
    type?: TrxAlertType
    title?: string
    dismissible?: boolean
    icon?: string
  }>(),
  { type: 'info', dismissible: false },
)

const emit = defineEmits<{ dismiss: [] }>()

const iconMap: Record<TrxAlertType, string> = {
  info: 'pi pi-info-circle',
  success: 'pi pi-check-circle',
  warning: 'pi pi-exclamation-triangle',
  error: 'pi pi-times-circle',
}

const resolvedIcon = props.icon ?? iconMap[props.type]
</script>

<template>
  <div :class="['trx-alert', `trx-alert--${type}`]" role="alert">
    <i :class="['trx-alert__icon', resolvedIcon]" aria-hidden="true" />

    <div class="trx-alert__body">
      <p v-if="title" class="trx-alert__title">{{ title }}</p>
      <div class="trx-alert__content">
        <slot />
      </div>
    </div>

    <button
      v-if="dismissible"
      class="trx-alert__close"
      type="button"
      aria-label="Fechar"
      @click="emit('dismiss')"
    >
      <i class="pi pi-times" aria-hidden="true" />
    </button>
  </div>
</template>

<style scoped>
.trx-alert {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: 8px;
  border-left: 4px solid transparent;
  font-size: 0.875rem;
}

.trx-alert--info    { background: var(--trx-info-soft, #ecfeff);   border-left-color: var(--trx-info-color,    #06b6d4); }
.trx-alert--success { background: var(--trx-success-soft, #ecfdf5); border-left-color: var(--trx-success-color, #10b981); }
.trx-alert--warning { background: var(--trx-warning-soft, #fffbeb); border-left-color: var(--trx-warning-color, #f59e0b); }
.trx-alert--error   { background: var(--trx-danger-soft, #fef2f2);  border-left-color: var(--trx-danger-color,  #ef4444); }

.trx-alert__icon {
  font-size: 1.125rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}
.trx-alert--info    .trx-alert__icon { color: var(--trx-info-color,    #06b6d4); }
.trx-alert--success .trx-alert__icon { color: var(--trx-success-color, #10b981); }
.trx-alert--warning .trx-alert__icon { color: var(--trx-warning-color, #f59e0b); }
.trx-alert--error   .trx-alert__icon { color: var(--trx-danger-color,  #ef4444); }

.trx-alert__body { flex: 1; min-width: 0; }

.trx-alert__title {
  font-weight: 600;
  color: var(--trx-text-primary);
  margin: 0 0 0.25rem;
}

.trx-alert__content {
  color: var(--trx-text-secondary);
  margin: 0;
}

.trx-alert__close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.125rem;
  color: var(--trx-text-muted);
  flex-shrink: 0;
  transition: color 0.2s;
}
.trx-alert__close:hover { color: var(--trx-text-primary); }
</style>
