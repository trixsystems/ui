<script setup lang="ts">
withDefaults(defineProps<{
  columns?: number
  gap?: string
}>(), {
  columns: 12,
  gap: '1rem',
})
</script>

<template>
  <div
    class="trx-dashboard-grid"
    :style="{
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: gap,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.trx-dashboard-grid {
  display: grid;
  width: 100%;
}

@media (max-width: 768px) {
  .trx-dashboard-grid { grid-template-columns: 1fr !important; }
  .trx-dashboard-grid :deep([data-cols]) { grid-column: span 1 !important; }
}
</style>
