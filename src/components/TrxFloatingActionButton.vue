<script setup lang="ts">
import { ref } from 'vue'

export interface TrxFABAction {
  id: string
  icon: string
  label: string
  color?: string
}

withDefaults(defineProps<{
  icon?: string
  actions?: TrxFABAction[]
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  color?: string
  size?: 'sm' | 'md' | 'lg'
}>(), {
  icon: 'pi pi-plus',
  actions: () => [],
  position: 'bottom-right',
  size: 'md',
})

const emit = defineEmits<{
  click: []
  action: [action: TrxFABAction]
}>()

const open = ref(false)
</script>

<template>
  <div class="trx-fab-wrap" :class="`trx-fab-wrap--${position}`">
    <!-- Sub actions -->
    <Transition name="trx-fab-actions">
      <div v-if="open && actions.length" class="trx-fab-actions">
        <div
          v-for="(act, i) in [...actions].reverse()"
          :key="act.id"
          class="trx-fab-action"
          :style="{ '--delay': i * 0.05 + 's', '--ac': act.color ?? 'var(--trx-accent-color)' }"
        >
          <span class="trx-fab-action__label">{{ act.label }}</span>
          <button
            class="trx-fab-action__btn"
            :style="{ background: act.color ?? 'var(--trx-accent-color)' }"
            :title="act.label"
            @click="emit('action', act); open = false"
          >
            <i :class="act.icon"></i>
          </button>
        </div>
      </div>
    </Transition>
    <!-- Main button -->
    <button
      class="trx-fab"
      :class="`trx-fab--${size}`"
      :style="{ background: color ?? 'var(--trx-accent-color)' }"
      @click="actions.length ? (open = !open) : emit('click')"
    >
      <Transition name="trx-fab-rotate">
        <i :key="open ? 'close' : 'open'" :class="open ? 'pi pi-times' : icon"></i>
      </Transition>
    </button>
  </div>
</template>

<style scoped>
.trx-fab-wrap { position: fixed; z-index: 500; display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem; }
.trx-fab-wrap--bottom-right { bottom: 1.5rem; right: 1.5rem; }
.trx-fab-wrap--bottom-left { bottom: 1.5rem; left: 1.5rem; align-items: flex-start; }
.trx-fab-wrap--top-right { top: 1.5rem; right: 1.5rem; }
.trx-fab-wrap--top-left { top: 1.5rem; left: 1.5rem; align-items: flex-start; }
.trx-fab { width: 56px; height: 56px; border-radius: 50%; border: none; color: white; font-size: 1.1rem; cursor: pointer; box-shadow: 0 4px 16px rgba(0,0,0,0.25); transition: transform 0.2s, box-shadow 0.2s; display: flex; align-items: center; justify-content: center; }
.trx-fab--sm { width: 44px; height: 44px; font-size: 0.9rem; }
.trx-fab--lg { width: 68px; height: 68px; font-size: 1.25rem; }
.trx-fab:hover { transform: scale(1.08); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }
.trx-fab:active { transform: scale(0.95); }
.trx-fab-actions { display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-end; }
.trx-fab-action { display: flex; align-items: center; gap: 0.5rem; animation: fab-in calc(var(--delay) + 0.1s) ease both; }
@keyframes fab-in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
.trx-fab-action__label { background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 6px; padding: 0.25rem 0.6rem; font-size: 0.8rem; color: var(--trx-text-primary); white-space: nowrap; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.trx-fab-action__btn { width: 40px; height: 40px; border-radius: 50%; border: none; color: white; cursor: pointer; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.2); transition: transform 0.15s; }
.trx-fab-action__btn:hover { transform: scale(1.1); }
.trx-fab-rotate-enter-active, .trx-fab-rotate-leave-active { transition: all 0.2s; }
.trx-fab-rotate-enter-from { opacity: 0; transform: rotate(-90deg); }
.trx-fab-rotate-leave-to { opacity: 0; transform: rotate(90deg); }
.trx-fab-actions-enter-active, .trx-fab-actions-leave-active { transition: all 0.2s; }
.trx-fab-actions-enter-from, .trx-fab-actions-leave-to { opacity: 0; transform: translateY(8px); }
</style>
