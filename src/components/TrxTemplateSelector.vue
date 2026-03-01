<script setup lang="ts">
import { ref, computed } from 'vue'

export interface TrxMessageTemplate {
  id: string
  name: string
  category: string
  language: string
  body: string
  variables?: string[] // ex: ['{{name}}', '{{order_id}}']
  channel?: string
}

const props = withDefaults(defineProps<{
  templates?: TrxMessageTemplate[]
  modelValue?: string | null
  loading?: boolean
}>(), {
  templates: () => [],
  modelValue: null,
})

const emit = defineEmits<{
  'update:modelValue': [id: string | null]
  select: [template: TrxMessageTemplate, variables: Record<string, string>]
}>()

const search = ref('')
const selected = ref<TrxMessageTemplate | null>(null)
const vars = ref<Record<string, string>>({})

const categories = computed(() => [...new Set(props.templates.map(t => t.category))])

const filtered = computed(() =>
  props.templates.filter(t =>
    !search.value ||
    t.name.toLowerCase().includes(search.value.toLowerCase()) ||
    t.body.toLowerCase().includes(search.value.toLowerCase())
  )
)

function pick(t: TrxMessageTemplate) {
  selected.value = t
  vars.value = Object.fromEntries((t.variables ?? []).map(v => [v, '']))
  emit('update:modelValue', t.id)
}

function confirm() {
  if (selected.value) emit('select', selected.value, vars.value)
}

function preview() {
  if (!selected.value) return ''
  let body = selected.value.body
  Object.entries(vars.value).forEach(([k, v]) => { body = body.replace(new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), v || k) })
  return body
}
</script>

<template>
  <div class="trx-tpl">
    <div class="trx-tpl__search">
      <i class="pi pi-search trx-tpl__search-icon"></i>
      <input v-model="search" class="trx-tpl__search-input" placeholder="Buscar template..." />
    </div>
    <div class="trx-tpl__layout">
      <div class="trx-tpl__list">
        <div v-if="loading" class="trx-tpl__loading"><i class="pi pi-spin pi-spinner"></i></div>
        <template v-else>
          <div v-for="cat in categories" :key="cat">
            <div class="trx-tpl__cat-label">{{ cat }}</div>
            <div
              v-for="t in filtered.filter(f => f.category === cat)"
              :key="t.id"
              class="trx-tpl__item"
              :class="{ 'trx-tpl__item--active': selected?.id === t.id }"
              @click="pick(t)"
            >
              <span class="trx-tpl__item-name">{{ t.name }}</span>
              <span class="trx-tpl__item-lang">{{ t.language }}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="trx-tpl__preview">
        <div v-if="!selected" class="trx-tpl__no-select">
          <i class="pi pi-file" style="font-size:1.5rem"></i>
          <span>Selecione um template</span>
        </div>
        <template v-else>
          <div class="trx-tpl__preview-body">{{ preview() }}</div>
          <div v-if="selected.variables?.length" class="trx-tpl__vars">
            <div class="trx-tpl__vars-title">Variáveis</div>
            <div v-for="v in selected.variables" :key="v" class="trx-tpl__var-row">
              <label class="trx-tpl__var-label">{{ v }}</label>
              <input v-model="vars[v]" class="trx-tpl__var-input" :placeholder="v" />
            </div>
          </div>
          <button class="trx-tpl__confirm-btn" @click="confirm">
            <i class="pi pi-check"></i> Usar Template
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-tpl { border: 1px solid var(--trx-border-color); border-radius: 12px; overflow: hidden; background: var(--trx-bg-card); }
.trx-tpl__search { position: relative; padding: 0.5rem; border-bottom: 1px solid var(--trx-border-color); }
.trx-tpl__search-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); font-size: 0.8rem; color: var(--trx-text-secondary); }
.trx-tpl__search-input { width: 100%; padding: 0.4rem 0.6rem 0.4rem 2rem; border: 1px solid var(--trx-border-color); border-radius: 7px; background: var(--trx-bg-secondary); color: var(--trx-text-primary); font-size: 0.875rem; outline: none; box-sizing: border-box; }
.trx-tpl__layout { display: flex; min-height: 280px; }
.trx-tpl__list { width: 200px; flex-shrink: 0; border-right: 1px solid var(--trx-border-color); overflow-y: auto; }
.trx-tpl__loading { padding: 1rem; text-align: center; color: var(--trx-text-secondary); }
.trx-tpl__cat-label { padding: 0.4rem 0.75rem 0.2rem; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--trx-text-secondary); }
.trx-tpl__item { display: flex; flex-direction: column; padding: 0.4rem 0.75rem; cursor: pointer; transition: background 0.15s; }
.trx-tpl__item:hover { background: var(--trx-bg-secondary); }
.trx-tpl__item--active { background: color-mix(in srgb, var(--trx-accent-color) 8%, transparent); }
.trx-tpl__item-name { font-size: 0.825rem; color: var(--trx-text-primary); font-weight: 500; }
.trx-tpl__item-lang { font-size: 0.7rem; color: var(--trx-text-secondary); }
.trx-tpl__preview { flex: 1; display: flex; flex-direction: column; padding: 0.75rem; gap: 0.75rem; }
.trx-tpl__no-select { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; color: var(--trx-text-secondary); font-size: 0.875rem; }
.trx-tpl__preview-body { font-size: 0.875rem; color: var(--trx-text-primary); background: var(--trx-bg-secondary); border-radius: 8px; padding: 0.75rem; line-height: 1.6; white-space: pre-wrap; flex: 1; }
.trx-tpl__vars { display: flex; flex-direction: column; gap: 0.4rem; }
.trx-tpl__vars-title { font-size: 0.75rem; font-weight: 700; color: var(--trx-text-secondary); }
.trx-tpl__var-row { display: flex; align-items: center; gap: 0.5rem; }
.trx-tpl__var-label { font-size: 0.75rem; color: var(--trx-accent-color); min-width: 90px; font-family: monospace; }
.trx-tpl__var-input { flex: 1; padding: 0.3rem 0.5rem; border: 1px solid var(--trx-border-color); border-radius: 6px; background: var(--trx-bg-secondary); color: var(--trx-text-primary); font-size: 0.825rem; outline: none; }
.trx-tpl__confirm-btn { padding: 0.55rem 1rem; background: var(--trx-accent-color); color: white; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.4rem; transition: opacity 0.15s; }
.trx-tpl__confirm-btn:hover { opacity: 0.9; }
</style>
