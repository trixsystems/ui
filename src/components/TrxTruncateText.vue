<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
  text?: string
  lines?: number
  expandLabel?: string
  collapseLabel?: string
}>(), {
  text: '',
  lines: 3,
  expandLabel: 'Ver mais',
  collapseLabel: 'Ver menos',
})

const expanded = ref(false)
</script>

<template>
  <div class="trx-truncate">
    <div
      class="trx-truncate__content"
      :class="{ 'trx-truncate__content--collapsed': !expanded }"
      :style="!expanded ? { '-webkit-line-clamp': String(lines) } : {}"
    >
      <slot>{{ text }}</slot>
    </div>
    <button class="trx-truncate__toggle" @click="expanded = !expanded">
      {{ expanded ? collapseLabel : expandLabel }}
      <i :class="expanded ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"></i>
    </button>
  </div>
</template>

<style scoped>
.trx-truncate { display: flex; flex-direction: column; gap: 0.3rem; }
.trx-truncate__content--collapsed {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.trx-truncate__toggle {
  display: inline-flex; align-items: center; gap: 0.25rem;
  background: none; border: none; cursor: pointer; padding: 0;
  color: var(--trx-accent-color); font-size: 0.825rem; font-weight: 500;
  align-self: flex-start;
}
</style>
