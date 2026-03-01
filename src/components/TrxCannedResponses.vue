<script setup lang="ts">
import { ref, computed } from 'vue'

export interface TrxCannedResponse {
  id: string
  shortcut: string  // ex: /saudacao
  title: string
  content: string
  category?: string
}

const props = withDefaults(defineProps<{
  responses?: TrxCannedResponse[]
  modelValue?: boolean
  trigger?: string // character to open (default '/')
}>(), {
  responses: () => [],
  modelValue: false,
  trigger: '/',
})

const emit = defineEmits<{
  'update:modelValue': [v: boolean]
  select: [response: TrxCannedResponse]
}>()

const search = ref('')
const highlighted = ref(0)

const filtered = computed(() =>
  props.responses.filter(r =>
    !search.value ||
    r.shortcut.includes(search.value) ||
    r.title.toLowerCase().includes(search.value.toLowerCase()) ||
    r.content.toLowerCase().includes(search.value.toLowerCase())
  )
)

function pick(r: TrxCannedResponse) {
  emit('select', r)
  emit('update:modelValue', false)
  search.value = ''
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') { e.preventDefault(); highlighted.value = Math.min(highlighted.value + 1, filtered.value.length - 1) }
  if (e.key === 'ArrowUp') { e.preventDefault(); highlighted.value = Math.max(highlighted.value - 1, 0) }
  if (e.key === 'Enter' && filtered.value[highlighted.value]) { e.preventDefault(); pick(filtered.value[highlighted.value]) }
  if (e.key === 'Escape') emit('update:modelValue', false)
}
</script>

<template>
  <div v-if="modelValue" class="trx-canned" @keydown="onKey">
    <div class="trx-canned__search-wrap">
      <i class="pi pi-search trx-canned__search-icon"></i>
      <input
        v-model="search"
        class="trx-canned__search"
        :placeholder="`Buscar resposta (${trigger}...)`"
        autofocus
        @input="highlighted = 0"
      />
      <button class="trx-canned__close" @click="emit('update:modelValue', false)">
        <i class="pi pi-times"></i>
      </button>
    </div>
    <div class="trx-canned__list">
      <div
        v-for="(r, i) in filtered"
        :key="r.id"
        class="trx-canned__item"
        :class="{ 'trx-canned__item--highlighted': i === highlighted }"
        @click="pick(r)"
        @mouseenter="highlighted = i"
      >
        <code class="trx-canned__shortcut">{{ r.shortcut }}</code>
        <div class="trx-canned__info">
          <span class="trx-canned__title">{{ r.title }}</span>
          <span class="trx-canned__preview">{{ r.content }}</span>
        </div>
        <span v-if="r.category" class="trx-canned__cat">{{ r.category }}</span>
      </div>
      <div v-if="!filtered.length" class="trx-canned__empty">Nenhuma resposta encontrada</div>
    </div>
  </div>
</template>

<style scoped>
.trx-canned { background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); overflow: hidden; }
.trx-canned__search-wrap { display: flex; align-items: center; padding: 0.5rem 0.75rem; border-bottom: 1px solid var(--trx-border-color); gap: 0.5rem; }
.trx-canned__search-icon { color: var(--trx-text-secondary); font-size: 0.8rem; }
.trx-canned__search { flex: 1; border: none; outline: none; background: transparent; color: var(--trx-text-primary); font-size: 0.875rem; }
.trx-canned__close { background: none; border: none; cursor: pointer; color: var(--trx-text-secondary); font-size: 0.8rem; padding: 0; }
.trx-canned__list { max-height: 260px; overflow-y: auto; }
.trx-canned__item { display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.75rem; cursor: pointer; transition: background 0.1s; }
.trx-canned__item--highlighted { background: var(--trx-bg-secondary); }
.trx-canned__shortcut { font-family: monospace; font-size: 0.75rem; background: color-mix(in srgb, var(--trx-accent-color) 12%, transparent); color: var(--trx-accent-color); padding: 0.15rem 0.4rem; border-radius: 4px; flex-shrink: 0; }
.trx-canned__info { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.trx-canned__title { font-size: 0.825rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-canned__preview { font-size: 0.75rem; color: var(--trx-text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.trx-canned__cat { font-size: 0.7rem; color: var(--trx-text-secondary); background: var(--trx-bg-secondary); padding: 0.1rem 0.35rem; border-radius: 4px; flex-shrink: 0; }
.trx-canned__empty { padding: 1rem; text-align: center; font-size: 0.8rem; color: var(--trx-text-secondary); }
</style>
