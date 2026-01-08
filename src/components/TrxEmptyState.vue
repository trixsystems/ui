<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="trx-empty-state">
    <i :class="icon || 'pi pi-inbox'" class="trx-empty-state__icon" />
    <h3 class="trx-empty-state__title">{{ title }}</h3>
    <p v-if="description" class="trx-empty-state__description">{{ description }}</p>
    <div class="trx-empty-state__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped>
.trx-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
}

.trx-empty-state__icon {
  font-size: 4rem;
  color: var(--trx-text-muted);
  margin-bottom: 1rem;
}

.trx-empty-state__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--trx-text-primary);
  margin: 0 0 0.5rem 0;
}

.trx-empty-state__description {
  font-size: 0.875rem;
  color: var(--trx-text-secondary);
  margin: 0 0 1.5rem 0;
  max-width: 400px;
}

.trx-empty-state__actions {
  display: flex;
  gap: 0.5rem;
}
</style>
