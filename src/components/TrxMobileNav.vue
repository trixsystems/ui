<script setup lang="ts">
export interface TrxMobileNavItem {
  key: string
  label: string
  icon: string
  badge?: number
}

withDefaults(defineProps<{
  items: TrxMobileNavItem[]
  modelValue?: string
}>(), {})

const emit = defineEmits<{
  'update:modelValue': [key: string]
  select: [item: TrxMobileNavItem]
}>()

function select(item: TrxMobileNavItem) {
  emit('update:modelValue', item.key)
  emit('select', item)
}
</script>

<template>
  <nav class="trx-mobile-nav">
    <button
      v-for="item in items"
      :key="item.key"
      class="trx-mobile-nav__item"
      :class="{ 'trx-mobile-nav__item--active': modelValue === item.key }"
      @click="select(item)"
    >
      <div class="trx-mobile-nav__icon-wrap">
        <i :class="item.icon"></i>
        <span v-if="item.badge" class="trx-mobile-nav__badge">{{ item.badge > 99 ? '99+' : item.badge }}</span>
      </div>
      <span class="trx-mobile-nav__label">{{ item.label }}</span>
    </button>
  </nav>
</template>

<style scoped>
.trx-mobile-nav {
  display: flex;
  align-items: stretch;
  background: var(--trx-bg-card);
  border-top: 1px solid var(--trx-border-color);
  padding: 0.25rem 0 env(safe-area-inset-bottom, 0);
}

.trx-mobile-nav__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  padding: 0.5rem 0.25rem;
  border: none;
  background: transparent;
  color: var(--trx-text-secondary);
  cursor: pointer;
  transition: color 0.2s;
  min-width: 0;
}

.trx-mobile-nav__item--active { color: var(--trx-accent-color); }

.trx-mobile-nav__icon-wrap { position: relative; }

.trx-mobile-nav__icon-wrap i { font-size: 1.25rem; }

.trx-mobile-nav__badge {
  position: absolute;
  top: -5px;
  right: -8px;
  background: var(--trx-danger-color);
  color: white;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.1rem 0.3rem;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
}

.trx-mobile-nav__label {
  font-size: 0.65rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
</style>
