<script setup lang="ts">

export interface TrxShortcut {
  keys: string[]
  description: string
  group?: string
}

const props = withDefaults(defineProps<{
  shortcuts?: TrxShortcut[]
  modelValue?: boolean
  triggerKey?: string
}>(), {
  shortcuts: () => [],
  modelValue: false,
  triggerKey: '?',
})

const emit = defineEmits<{ 'update:modelValue': [open: boolean] }>()

const grouped = () => {
  const g: Record<string, TrxShortcut[]> = {}
  for (const s of props.shortcuts) {
    const group = s.group ?? 'Geral'
    if (!g[group]) g[group] = []
    g[group].push(s)
  }
  return g
}
</script>

<template>
  <Teleport to="body">
    <Transition name="trx-shortcut-fade">
      <div v-if="modelValue" class="trx-shortcut-backdrop" @click.self="emit('update:modelValue', false)">
        <div class="trx-shortcut-panel">
          <div class="trx-shortcut-panel__header">
            <h3 class="trx-shortcut-panel__title">Atalhos de Teclado</h3>
            <button class="trx-shortcut-panel__close" @click="emit('update:modelValue', false)">
              <i class="pi pi-times"></i>
            </button>
          </div>
          <div class="trx-shortcut-panel__body">
            <template v-for="(shortcuts, group) in grouped()" :key="group">
              <div class="trx-shortcut-panel__group-label">{{ group }}</div>
              <div class="trx-shortcut-panel__list">
                <div v-for="(s, i) in shortcuts" :key="i" class="trx-shortcut-panel__item">
                  <span class="trx-shortcut-panel__desc">{{ s.description }}</span>
                  <div class="trx-shortcut-panel__keys">
                    <kbd v-for="k in s.keys" :key="k" class="trx-shortcut-panel__key">{{ k }}</kbd>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="trx-shortcut-panel__footer">
            Pressione <kbd class="trx-shortcut-panel__key">{{ triggerKey }}</kbd> para abrir/fechar
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.trx-shortcut-backdrop {
  position: fixed; inset: 0; z-index: 9998;
  background: rgba(0,0,0,0.4); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
}
.trx-shortcut-panel {
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 14px; width: 100%; max-width: 520px; max-height: 80vh;
  display: flex; flex-direction: column;
  box-shadow: var(--trx-shadow-xl, 0 20px 60px rgba(0,0,0,0.3));
}
.trx-shortcut-panel__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.25rem; border-bottom: 1px solid var(--trx-border-color);
}
.trx-shortcut-panel__title { margin: 0; font-size: 1rem; font-weight: 700; color: var(--trx-text-primary); }
.trx-shortcut-panel__close { background: none; border: none; cursor: pointer; color: var(--trx-text-secondary); font-size: 1rem; padding: 0.25rem; }
.trx-shortcut-panel__body { flex: 1; overflow-y: auto; padding: 0.75rem 1.25rem; }
.trx-shortcut-panel__group-label {
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--trx-text-secondary); margin: 0.75rem 0 0.35rem; padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--trx-border-color);
}
.trx-shortcut-panel__group-label:first-child { margin-top: 0; }
.trx-shortcut-panel__list { display: flex; flex-direction: column; gap: 0.2rem; }
.trx-shortcut-panel__item { display: flex; align-items: center; justify-content: space-between; padding: 0.4rem 0; }
.trx-shortcut-panel__desc { font-size: 0.875rem; color: var(--trx-text-primary); }
.trx-shortcut-panel__keys { display: flex; align-items: center; gap: 0.2rem; }
.trx-shortcut-panel__key {
  padding: 0.15rem 0.45rem; background: var(--trx-bg-secondary);
  border: 1px solid var(--trx-border-color); border-radius: 4px;
  font-size: 0.75rem; font-family: monospace; color: var(--trx-text-primary);
}
.trx-shortcut-panel__footer {
  padding: 0.75rem 1.25rem; border-top: 1px solid var(--trx-border-color);
  font-size: 0.775rem; color: var(--trx-text-secondary); text-align: center;
}
.trx-shortcut-fade-enter-active, .trx-shortcut-fade-leave-active { transition: all 0.2s ease; }
.trx-shortcut-fade-enter-from, .trx-shortcut-fade-leave-to { opacity: 0; }
</style>
