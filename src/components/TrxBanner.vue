<script setup lang="ts">
/**
 * TrxBanner — Banner fixo/sticky no topo da página.
 *
 * @example
 * <TrxBanner type="warning" title="Manutenção programada" dismissible>
 *   O sistema ficará indisponível das 02h às 04h.
 * </TrxBanner>
 */

export type TrxBannerType = 'info' | 'success' | 'warning' | 'error' | 'neutral'

const props = withDefaults(
  defineProps<{
    type?: TrxBannerType
    title?: string
    dismissible?: boolean
    sticky?: boolean
    icon?: string
  }>(),
  { type: 'info', sticky: false, dismissible: false },
)

const emit = defineEmits<{
  dismiss: []
}>()

const iconMap: Record<TrxBannerType, string> = {
  info: 'pi pi-info-circle',
  success: 'pi pi-check-circle',
  warning: 'pi pi-exclamation-triangle',
  error: 'pi pi-times-circle',
  neutral: 'pi pi-bell',
}

const resolvedIcon = props.icon ?? iconMap[props.type]
</script>

<template>
  <div
    :class="[
      'trx-banner',
      `trx-banner--${type}`,
      { 'trx-banner--sticky': sticky },
    ]"
    role="banner"
    :aria-label="title"
  >
    <div class="trx-banner__content">
      <i :class="['trx-banner__icon', resolvedIcon]" aria-hidden="true" />
      <div class="trx-banner__body">
        <strong v-if="title" class="trx-banner__title">{{ title }}</strong>
        <span v-if="$slots.default" class="trx-banner__message"><slot /></span>
      </div>
    </div>

    <button
      v-if="dismissible"
      type="button"
      class="trx-banner__close"
      aria-label="Fechar aviso"
      @click="emit('dismiss')"
    >
      <i class="pi pi-times" aria-hidden="true" />
    </button>
  </div>
</template>

<style scoped>
.trx-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  line-height: 1.4;
  border-bottom: 1px solid transparent;
  width: 100%;
}

.trx-banner--sticky {
  position: sticky;
  top: 0;
  z-index: 1100;
}

/* Types */
.trx-banner--info    { background: #eff6ff; color: #1e40af; border-color: #bfdbfe; }
.trx-banner--success { background: #ecfdf5; color: #065f46; border-color: #a7f3d0; }
.trx-banner--warning { background: #fffbeb; color: #92400e; border-color: #fde68a; }
.trx-banner--error   { background: #fef2f2; color: #991b1b; border-color: #fecaca; }
.trx-banner--neutral { background: var(--trx-bg-tertiary); color: var(--trx-text-primary); border-color: var(--trx-border); }

.dark .trx-banner--info    { background: rgba(59,130,246,.15); color: #93c5fd; border-color: rgba(59,130,246,.3); }
.dark .trx-banner--success { background: rgba(16,185,129,.1); color: #6ee7b7; border-color: rgba(16,185,129,.3); }
.dark .trx-banner--warning { background: rgba(245,158,11,.1); color: #fcd34d; border-color: rgba(245,158,11,.3); }
.dark .trx-banner--error   { background: rgba(239,68,68,.1); color: #fca5a5; border-color: rgba(239,68,68,.3); }

.trx-banner__content {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex: 1;
}

.trx-banner__icon { font-size: 1rem; flex-shrink: 0; }

.trx-banner__body { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }

.trx-banner__title { font-weight: 600; }

.trx-banner__close {
  background: none; border: none; cursor: pointer;
  opacity: 0.6; padding: 0.25rem; border-radius: 4px;
  color: inherit; display: flex; align-items: center;
  transition: opacity 0.15s;
  flex-shrink: 0;
}
.trx-banner__close:hover { opacity: 1; }
</style>
