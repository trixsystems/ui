<script setup lang="ts">
export interface TrxRouterTab {
  key: string
  label: string
  icon?: string
  badge?: number | string
  disabled?: boolean
}

withDefaults(defineProps<{
  tabs: TrxRouterTab[]
  modelValue: string
}>(), {})

const emit = defineEmits<{ 'update:modelValue': [key: string] }>()
</script>

<template>
  <div class="trx-tabs-router">
    <nav class="trx-tabs-router__nav" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="trx-tabs-router__tab"
        :class="{ 'trx-tabs-router__tab--active': modelValue === tab.key }"
        :disabled="tab.disabled"
        role="tab"
        :aria-selected="modelValue === tab.key"
        @click="!tab.disabled && emit('update:modelValue', tab.key)"
      >
        <i v-if="tab.icon" :class="tab.icon"></i>
        <span>{{ tab.label }}</span>
        <span v-if="tab.badge !== undefined" class="trx-tabs-router__badge">{{ tab.badge }}</span>
      </button>
    </nav>
    <div class="trx-tabs-router__content" role="tabpanel">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.trx-tabs-router { display: flex; flex-direction: column; }

.trx-tabs-router__nav {
  display: flex;
  gap: 0.25rem;
  border-bottom: 2px solid var(--trx-border-color);
  padding-bottom: 0;
  overflow-x: auto;
  scrollbar-width: none;
}

.trx-tabs-router__nav::-webkit-scrollbar { display: none; }

.trx-tabs-router__tab {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  border: none;
  background: transparent;
  color: var(--trx-text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s;
  border-radius: 6px 6px 0 0;
}

.trx-tabs-router__tab:hover:not(:disabled) { color: var(--trx-text-primary); background: var(--trx-bg-secondary); }

.trx-tabs-router__tab--active {
  color: var(--trx-accent-color);
  border-bottom-color: var(--trx-accent-color);
}

.trx-tabs-router__tab:disabled { opacity: 0.4; cursor: not-allowed; }

.trx-tabs-router__badge {
  background: var(--trx-accent-color);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.1rem 0.35rem;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
}

.trx-tabs-router__content { padding-top: 1.25rem; }
</style>
