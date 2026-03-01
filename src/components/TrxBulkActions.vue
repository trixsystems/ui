<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  count: number
  visible?: boolean
  label?: string
}>(), {})

const emit = defineEmits<{ clear: [] }>()

const show = computed(() => props.visible !== undefined ? props.visible : props.count > 0)
const displayLabel = computed(() => props.label?.replace('{count}', String(props.count)) ?? `${props.count} selecionado${props.count !== 1 ? 's' : ''}`)
</script>

<template>
  <Transition name="trx-bulk-up">
    <div v-if="show" class="trx-bulk-actions">
      <span class="trx-bulk-actions__count">{{ displayLabel }}</span>
      <div class="trx-bulk-actions__items">
        <slot />
      </div>
      <button class="trx-bulk-actions__clear" @click="emit('clear')" title="Limpar seleção">
        <i class="pi pi-times"></i>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.trx-bulk-actions {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 40px;
  padding: 0.6rem 1rem 0.6rem 1.25rem;
  box-shadow: var(--trx-shadow-xl, 0 20px 40px rgba(0,0,0,0.15));
  z-index: 1000;
  white-space: nowrap;
}

.trx-bulk-actions__count {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--trx-accent-color);
}

.trx-bulk-actions__items { display: flex; gap: 0.5rem; align-items: center; }

.trx-bulk-actions__clear {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--trx-border-color);
  background: var(--trx-bg-secondary);
  color: var(--trx-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  transition: all 0.15s;
}

.trx-bulk-actions__clear:hover { background: var(--trx-danger-color); color: white; border-color: var(--trx-danger-color); }

.trx-bulk-up-enter-active, .trx-bulk-up-leave-active { transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }
.trx-bulk-up-enter-from, .trx-bulk-up-leave-to { opacity: 0; transform: translateX(-50%) translateY(20px); }
</style>
