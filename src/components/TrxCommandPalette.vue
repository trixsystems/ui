<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

export interface TrxCommand {
  id: string
  label: string
  description?: string
  icon?: string
  shortcut?: string
  group?: string
  action: () => void
}

const props = withDefaults(defineProps<{
  commands?: TrxCommand[]
  modelValue?: boolean
  placeholder?: string
}>(), {
  commands: () => [],
  modelValue: false,
  placeholder: 'Pesquisar comandos...',
})

const emit = defineEmits<{ 'update:modelValue': [open: boolean] }>()

const query = ref('')
const activeIdx = ref(0)
const searchInput = ref<HTMLInputElement>()

const filtered = computed(() => {
  if (!query.value) return props.commands
  const q = query.value.toLowerCase()
  return props.commands.filter(c =>
    c.label.toLowerCase().includes(q) || c.description?.toLowerCase().includes(q)
  )
})

const grouped = computed(() => {
  const groups: Record<string, TrxCommand[]> = {}
  for (const cmd of filtered.value) {
    const g = cmd.group ?? 'Geral'
    if (!groups[g]) groups[g] = []
    groups[g].push(cmd)
  }
  return groups
})

const flatFiltered = computed(() => filtered.value)

watch(() => props.modelValue, async (v) => {
  if (v) { query.value = ''; activeIdx.value = 0; await nextTick(); searchInput.value?.focus() }
})

function close() { emit('update:modelValue', false) }

function run(cmd: TrxCommand) {
  cmd.action()
  close()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') { close(); return }
  if (e.key === 'ArrowDown') { e.preventDefault(); activeIdx.value = Math.min(activeIdx.value + 1, flatFiltered.value.length - 1) }
  if (e.key === 'ArrowUp') { e.preventDefault(); activeIdx.value = Math.max(activeIdx.value - 1, 0) }
  if (e.key === 'Enter' && flatFiltered.value[activeIdx.value]) run(flatFiltered.value[activeIdx.value])
}
</script>

<template>
  <Teleport to="body">
    <Transition name="trx-palette-fade">
      <div v-if="modelValue" class="trx-palette-backdrop" @click.self="close">
        <div class="trx-palette" @keydown="onKeydown">
          <div class="trx-palette__search">
            <i class="pi pi-search trx-palette__search-icon"></i>
            <input
              ref="searchInput"
              class="trx-palette__input"
              :placeholder="placeholder"
              v-model="query"
              @input="activeIdx = 0"
            />
            <kbd class="trx-palette__esc" @click="close">Esc</kbd>
          </div>

          <div class="trx-palette__results">
            <template v-if="filtered.length">
              <template v-for="(cmds, group) in grouped" :key="group">
                <div class="trx-palette__group-label">{{ group }}</div>
                <button
                  v-for="cmd in cmds"
                  :key="cmd.id"
                  class="trx-palette__item"
                  :class="{ 'trx-palette__item--active': flatFiltered.indexOf(cmd) === activeIdx }"
                  @click="run(cmd)"
                  @mouseenter="activeIdx = flatFiltered.indexOf(cmd)"
                >
                  <i v-if="cmd.icon" :class="cmd.icon" class="trx-palette__item-icon"></i>
                  <div class="trx-palette__item-info">
                    <span class="trx-palette__item-label">{{ cmd.label }}</span>
                    <span v-if="cmd.description" class="trx-palette__item-desc">{{ cmd.description }}</span>
                  </div>
                  <kbd v-if="cmd.shortcut" class="trx-palette__shortcut">{{ cmd.shortcut }}</kbd>
                </button>
              </template>
            </template>
            <div v-else class="trx-palette__empty">
              <i class="pi pi-search"></i>
              <span>Nenhum comando encontrado</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.trx-palette-backdrop {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
  display: flex; align-items: flex-start; justify-content: center;
  padding-top: 10vh;
}
.trx-palette {
  width: 100%; max-width: 560px;
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 14px; box-shadow: var(--trx-shadow-xl, 0 20px 60px rgba(0,0,0,0.3));
  overflow: hidden;
}
.trx-palette__search {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.875rem 1rem; border-bottom: 1px solid var(--trx-border-color);
}
.trx-palette__search-icon { color: var(--trx-text-secondary); font-size: 0.9rem; }
.trx-palette__input { flex: 1; border: none; outline: none; background: transparent; color: var(--trx-text-primary); font-size: 1rem; }
.trx-palette__esc {
  padding: 0.15rem 0.4rem; border: 1px solid var(--trx-border-color); border-radius: 4px;
  font-size: 0.7rem; color: var(--trx-text-secondary); cursor: pointer; background: var(--trx-bg-secondary);
}
.trx-palette__results { max-height: 400px; overflow-y: auto; padding: 0.5rem; }
.trx-palette__group-label {
  padding: 0.4rem 0.75rem 0.2rem;
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--trx-text-secondary);
}
.trx-palette__item {
  display: flex; align-items: center; gap: 0.75rem;
  width: 100%; padding: 0.6rem 0.75rem;
  background: transparent; border: none; border-radius: 8px;
  cursor: pointer; text-align: left; transition: background 0.1s;
}
.trx-palette__item--active { background: var(--trx-bg-secondary); }
.trx-palette__item-icon { font-size: 1rem; color: var(--trx-accent-color); width: 20px; text-align: center; flex-shrink: 0; }
.trx-palette__item-info { flex: 1; display: flex; flex-direction: column; gap: 0.1rem; min-width: 0; }
.trx-palette__item-label { font-size: 0.875rem; font-weight: 500; color: var(--trx-text-primary); }
.trx-palette__item-desc { font-size: 0.775rem; color: var(--trx-text-secondary); }
.trx-palette__shortcut {
  padding: 0.15rem 0.4rem; border: 1px solid var(--trx-border-color); border-radius: 4px;
  font-size: 0.7rem; color: var(--trx-text-secondary); background: var(--trx-bg-secondary); flex-shrink: 0;
}
.trx-palette__empty {
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  padding: 2rem; color: var(--trx-text-secondary); font-size: 0.875rem;
}
.trx-palette-fade-enter-active, .trx-palette-fade-leave-active { transition: all 0.2s ease; }
.trx-palette-fade-enter-from, .trx-palette-fade-leave-to { opacity: 0; }
.trx-palette-fade-enter-from .trx-palette { transform: scale(0.96); }
</style>
