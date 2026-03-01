<script setup lang="ts">
const roleConfig: Record<string, { label: string; color: string }> = {
  admin:     { label: 'Admin',      color: 'var(--trx-danger-color)' },
  manager:   { label: 'Gerente',    color: 'var(--trx-warning-color)' },
  supervisor:{ label: 'Supervisor', color: 'var(--trx-info-color, #3b82f6)' },
  agent:     { label: 'Agente',     color: 'var(--trx-accent-color)' },
  viewer:    { label: 'Visualizador', color: 'var(--trx-text-secondary)' },
}

const props = withDefaults(defineProps<{
  role: string
  size?: 'sm' | 'md' | 'lg'
  label?: string
}>(), {
  size: 'md',
})

const config = roleConfig[props.role] ?? { label: props.role, color: 'var(--trx-text-secondary)' }
const displayLabel = props.label ?? config.label
</script>

<template>
  <span
    class="trx-role-badge"
    :class="`trx-role-badge--${size}`"
    :style="{ '--role-color': config.color }"
  >{{ displayLabel }}</span>
</template>

<style scoped>
.trx-role-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  font-weight: 600;
  background: color-mix(in srgb, var(--role-color) 12%, transparent);
  color: var(--role-color);
  border: 1px solid color-mix(in srgb, var(--role-color) 30%, transparent);
}

.trx-role-badge--sm { font-size: 0.65rem; padding: 0.1rem 0.45rem; }
.trx-role-badge--md { font-size: 0.75rem; padding: 0.2rem 0.6rem; }
.trx-role-badge--lg { font-size: 0.875rem; padding: 0.3rem 0.8rem; }
</style>
