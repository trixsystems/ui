<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

export interface TrxContextMenuItem {
  id: string
  label: string
  icon?: string
  danger?: boolean
  disabled?: boolean
  separator?: boolean
}

withDefaults(defineProps<{
  items?: TrxContextMenuItem[]
  modelValue?: boolean
  x?: number
  y?: number
}>(), {
  items: () => [],
  modelValue: false,
  x: 0,
  y: 0,
})

const emit = defineEmits<{
  'update:modelValue': [v: boolean]
  select: [item: TrxContextMenuItem]
}>()

function close() { emit('update:modelValue', false) }

function onKey(e: KeyboardEvent) { if (e.key === 'Escape') close() }

onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="trx-ctx-overlay" @click="close" @contextmenu.prevent="close"></div>
    <Transition name="trx-ctx-fade">
      <div
        v-if="modelValue"
        class="trx-ctx-menu"
        :style="{ left: x + 'px', top: y + 'px' }"
        role="menu"
      >
        <template v-for="item in items" :key="item.id">
          <div v-if="item.separator" class="trx-ctx-menu__separator"></div>
          <button
            v-else
            class="trx-ctx-menu__item"
            :class="{ 'trx-ctx-menu__item--danger': item.danger, 'trx-ctx-menu__item--disabled': item.disabled }"
            :disabled="item.disabled"
            role="menuitem"
            @click="!item.disabled && (emit('select', item), close())"
          >
            <i v-if="item.icon" :class="item.icon" class="trx-ctx-menu__icon"></i>
            <span>{{ item.label }}</span>
          </button>
        </template>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.trx-ctx-overlay { position: fixed; inset: 0; z-index: 9998; }
.trx-ctx-menu {
  position: fixed; z-index: 9999;
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 10px; padding: 0.35rem; min-width: 160px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
.trx-ctx-menu__separator { height: 1px; background: var(--trx-border-color); margin: 0.25rem 0; }
.trx-ctx-menu__item {
  display: flex; align-items: center; gap: 0.5rem; width: 100%;
  padding: 0.45rem 0.65rem; border: none; border-radius: 6px;
  background: transparent; cursor: pointer; font-size: 0.85rem;
  color: var(--trx-text-primary); transition: background 0.12s; text-align: left;
}
.trx-ctx-menu__item:hover { background: var(--trx-bg-secondary); }
.trx-ctx-menu__item--danger { color: var(--trx-danger-color); }
.trx-ctx-menu__item--danger:hover { background: color-mix(in srgb, var(--trx-danger-color) 8%, transparent); }
.trx-ctx-menu__item--disabled { opacity: 0.4; cursor: not-allowed; }
.trx-ctx-menu__icon { font-size: 0.825rem; width: 16px; text-align: center; }
.trx-ctx-fade-enter-active, .trx-ctx-fade-leave-active { transition: all 0.1s; }
.trx-ctx-fade-enter-from, .trx-ctx-fade-leave-to { opacity: 0; transform: scale(0.96); }
</style>
