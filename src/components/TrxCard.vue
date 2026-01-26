<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  icon?: string
  loading?: boolean
  hoverable?: boolean
}>()
</script>

<template>
  <div :class="['trx-card', { hoverable, loading }]">
    <div v-if="title || icon || $slots.header" class="trx-card-header">
      <div class="header-content">
        <div v-if="icon" class="card-icon">
          <i :class="icon"></i>
        </div>
        <div v-if="title || subtitle" class="header-text">
          <h3 v-if="title" class="card-title">{{ title }}</h3>
          <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
        </div>
      </div>
      <slot name="header-actions" />
    </div>
    <div class="trx-card-content">
      <div v-if="loading" class="loading-overlay">
        <i class="pi pi-spin pi-spinner"></i>
      </div>
      <slot />
    </div>
    <div v-if="$slots.footer" class="trx-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.trx-card {
  background: var(--trx-bg-card, var(--bg-card));
  border: 1px solid var(--trx-border-color, var(--border-color));
  border-radius: 16px;
  box-shadow: var(--trx-shadow-sm, var(--shadow-sm));
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.trx-card.hoverable:hover {
  box-shadow: var(--trx-shadow-md, var(--shadow-md));
  transform: translateY(-2px);
}

.dark .trx-card.hoverable:hover {
  border-color: var(--trx-accent-color, var(--accent-color));
  box-shadow: var(--trx-shadow-md, var(--shadow-md)), var(--trx-glow-purple, var(--glow-purple));
}

.trx-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--trx-border-color, var(--border-color));
}

.header-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-icon {
  width: 40px;
  height: 40px;
  background: var(--trx-primary-soft, var(--primary-soft));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon i {
  font-size: 1.25rem;
  color: var(--trx-accent-color, var(--accent-color));
}

.dark .card-icon {
  background: var(--trx-primary-soft, var(--primary-soft));
}

.header-text {
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--trx-text-primary, var(--text-primary));
  margin: 0;
}

.card-subtitle {
  font-size: 0.8rem;
  color: var(--trx-text-secondary, var(--text-secondary));
  margin: 0.125rem 0 0;
}

.trx-card-content {
  padding: 1.25rem;
  position: relative;
}

.trx-card-footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--trx-border-color, var(--border-color));
  background: var(--trx-bg-tertiary, var(--bg-tertiary));
}

.loading-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.dark .loading-overlay {
  background: rgba(40, 42, 54, 0.8);
}

.loading-overlay i {
  font-size: 2rem;
  color: var(--trx-accent-color, var(--accent-color));
}
</style>
