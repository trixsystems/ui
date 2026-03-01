<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

defineProps<{
  placeholder?: string
  /** Desabilita o atalho Cmd/Ctrl+K */
  disableShortcut?: boolean
}>()

const emit = defineEmits<{
  search: [query: string]
  open: []
  close: []
}>()

const isOpen = ref(false)
const query = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const open = async () => {
  isOpen.value = true
  emit('open')
  await nextTick()
  inputRef.value?.focus()
}

const close = () => {
  isOpen.value = false
  query.value = ''
  emit('close')
}

const onInput = (e: Event) => {
  query.value = (e.target as HTMLInputElement).value
  emit('search', query.value)
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

const onGlobalKeydown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    isOpen.value ? close() : open()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onGlobalKeydown)
})

defineExpose({ open, close })
</script>

<template>
  <div class="trx-search">
    <!-- Trigger button -->
    <button
      type="button"
      class="trx-search__trigger"
      @click="open"
      :aria-label="placeholder ?? 'Buscar'"
      aria-haspopup="dialog"
    >
      <i class="pi pi-search" aria-hidden="true" />
      <span class="trx-search__trigger-text">{{ placeholder ?? 'Buscar...' }}</span>
      <kbd class="trx-search__kbd">⌘K</kbd>
    </button>

    <!-- Modal overlay -->
    <Transition name="trx-search">
      <div
        v-if="isOpen"
        class="trx-search__overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Busca"
        @click.self="close"
      >
        <div class="trx-search__modal">
          <div class="trx-search__input-wrap">
            <i class="pi pi-search trx-search__input-icon" aria-hidden="true" />
            <input
              ref="inputRef"
              type="search"
              class="trx-search__input"
              :placeholder="placeholder ?? 'Buscar...'"
              :value="query"
              @input="onInput"
              @keydown="onKeydown"
              autocomplete="off"
            />
            <button
              v-if="query"
              type="button"
              class="trx-search__clear"
              aria-label="Limpar"
              @click="query = ''; emit('search', '')"
            >
              <i class="pi pi-times" aria-hidden="true" />
            </button>
            <kbd class="trx-search__esc" @click="close">Esc</kbd>
          </div>

          <div class="trx-search__results">
            <slot :query="query">
              <p v-if="!query" class="trx-search__hint">
                <i class="pi pi-info-circle" aria-hidden="true" />
                Digite para buscar
              </p>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trx-search__trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: var(--trx-bg-secondary);
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  cursor: pointer;
  color: var(--trx-text-secondary);
  font-size: 0.875rem;
  transition: all 0.2s;
  min-width: 180px;
}
.trx-search__trigger:hover {
  background: var(--trx-bg-tertiary);
  color: var(--trx-text-primary);
}
.trx-search__trigger-text { flex: 1; text-align: left; }

.trx-search__kbd {
  background: var(--trx-bg-tertiary);
  border: 1px solid var(--trx-border-color);
  border-radius: 4px;
  padding: 0.1em 0.4em;
  font-size: 0.7em;
  font-family: inherit;
  color: var(--trx-text-muted);
}

/* Overlay */
.trx-search__overlay {
  position: fixed;
  inset: 0;
  z-index: 1040;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
  backdrop-filter: blur(4px);
}

.trx-search__modal {
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 16px;
  width: min(600px, 90vw);
  max-height: 70vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--trx-shadow-xl);
}

.trx-search__input-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1rem;
  border-bottom: 1px solid var(--trx-border-color);
}
.trx-search__input-icon { color: var(--trx-text-muted); font-size: 1rem; }

.trx-search__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: var(--trx-text-primary);
}
.trx-search__input::placeholder { color: var(--trx-text-muted); }

.trx-search__clear {
  background: none; border: none; cursor: pointer;
  color: var(--trx-text-muted); padding: 0.25rem; border-radius: 4px;
}
.trx-search__clear:hover { color: var(--trx-text-primary); background: var(--trx-bg-tertiary); }

.trx-search__esc {
  background: var(--trx-bg-secondary);
  border: 1px solid var(--trx-border-color);
  border-radius: 4px;
  padding: 0.1em 0.5em;
  font-size: 0.75rem;
  font-family: inherit;
  color: var(--trx-text-muted);
  cursor: pointer;
  white-space: nowrap;
}

.trx-search__results {
  padding: 0.75rem;
  overflow-y: auto;
  flex: 1;
}

.trx-search__hint {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--trx-text-muted);
  font-size: 0.875rem;
  margin: 0;
  padding: 0.5rem 0.25rem;
}

/* Transitions */
.trx-search-enter-active, .trx-search-leave-active { transition: opacity 0.2s, transform 0.2s; }
.trx-search-enter-from, .trx-search-leave-to { opacity: 0; }
.trx-search-enter-from .trx-search__modal,
.trx-search-leave-to .trx-search__modal { transform: scale(0.96) translateY(-8px); }
</style>
