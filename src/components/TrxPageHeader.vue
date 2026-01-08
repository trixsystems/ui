<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  icon?: string
}>()
</script>

<template>
  <div class="trx-page-header">
    <div class="trx-page-header__content">
      <i v-if="icon" :class="icon" class="trx-page-header__icon" />
      <div>
        <h1 class="trx-page-header__title">{{ title }}</h1>
        <p v-if="subtitle" class="trx-page-header__subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div class="trx-page-header__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped>
.trx-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--trx-border-color);
}

.trx-page-header__content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.trx-page-header__icon {
  font-size: 2rem;
  color: var(--trx-accent-color);
}

.dark .trx-page-header__icon {
  color: var(--dracula-purple);
}

.trx-page-header__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--trx-text-primary);
  margin: 0;
}

.trx-page-header__subtitle {
  font-size: 0.875rem;
  color: var(--trx-text-secondary);
  margin: 0.25rem 0 0 0;
}

.trx-page-header__actions {
  display: flex;
  gap: 0.5rem;
}
</style>
