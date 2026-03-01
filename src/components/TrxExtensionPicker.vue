<script setup lang="ts">
import { ref, computed } from 'vue'

export interface TrxExtension {
  id: string
  name: string
  extension: string
  department?: string
  available?: boolean
  avatar?: string
}

const props = withDefaults(defineProps<{
  extensions?: TrxExtension[]
  modelValue?: string | null
  placeholder?: string
  disabled?: boolean
  loading?: boolean
}>(), {
  extensions: () => [],
  modelValue: null,
  placeholder: 'Buscar ramal...',
})

const emit = defineEmits<{
  'update:modelValue': [id: string | null]
  select: [ext: TrxExtension]
}>()

const search = ref('')
const open = ref(false)

const filtered = computed(() =>
  props.extensions.filter(e =>
    !search.value ||
    e.name.toLowerCase().includes(search.value.toLowerCase()) ||
    e.extension.includes(search.value) ||
    (e.department ?? '').toLowerCase().includes(search.value.toLowerCase())
  )
)

const selected = computed(() => props.extensions.find(e => e.id === props.modelValue) ?? null)

function pick(ext: TrxExtension) {
  emit('update:modelValue', ext.id)
  emit('select', ext)
  open.value = false
  search.value = ''
}

function clear() {
  emit('update:modelValue', null)
  search.value = ''
}
</script>

<template>
  <div class="trx-ext-picker" :class="{ open }">
    <div class="trx-ext-picker__trigger" :class="{ disabled }" @click="!disabled && (open = !open)">
      <template v-if="selected">
        <div class="trx-ext-picker__dot" :class="selected.available ? 'on' : 'off'"></div>
        <span class="trx-ext-picker__name">{{ selected.name }}</span>
        <span class="trx-ext-picker__ext">{{ selected.extension }}</span>
        <button class="trx-ext-picker__clear" @click.stop="clear"><i class="pi pi-times"></i></button>
      </template>
      <span v-else class="trx-ext-picker__placeholder">
        <i class="pi pi-phone"></i> {{ placeholder }}
      </span>
      <i class="pi pi-chevron-down trx-ext-picker__arrow"></i>
    </div>

    <div v-if="open" class="trx-ext-picker__panel">
      <div class="trx-ext-picker__search-wrap">
        <i class="pi pi-search trx-ext-picker__search-icon"></i>
        <input v-model="search" class="trx-ext-picker__search" placeholder="Buscar..." autofocus />
      </div>
      <div v-if="loading" class="trx-ext-picker__loading"><i class="pi pi-spin pi-spinner"></i></div>
      <div v-else class="trx-ext-picker__list">
        <div
          v-for="ext in filtered"
          :key="ext.id"
          class="trx-ext-picker__item"
          :class="{ 'trx-ext-picker__item--selected': modelValue === ext.id }"
          @click="pick(ext)"
        >
          <div class="trx-ext-picker__dot" :class="ext.available ? 'on' : 'off'"></div>
          <div class="trx-ext-picker__item-info">
            <span class="trx-ext-picker__item-name">{{ ext.name }}</span>
            <span class="trx-ext-picker__item-dept">{{ ext.department }}</span>
          </div>
          <span class="trx-ext-picker__item-ext">{{ ext.extension }}</span>
        </div>
        <div v-if="!filtered.length" class="trx-ext-picker__empty">Nenhum resultado</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-ext-picker { position: relative; }
.trx-ext-picker__trigger {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.45rem 0.75rem; border: 1px solid var(--trx-border-color); border-radius: 8px;
  background: var(--trx-bg-card); cursor: pointer; transition: all 0.15s; min-height: 38px;
}
.trx-ext-picker__trigger:hover, .trx-ext-picker.open .trx-ext-picker__trigger { border-color: var(--trx-accent-color); }
.trx-ext-picker__trigger.disabled { opacity: 0.5; cursor: not-allowed; }
.trx-ext-picker__placeholder { color: var(--trx-text-secondary); font-size: 0.875rem; display: flex; align-items: center; gap: 0.4rem; flex: 1; }
.trx-ext-picker__name { font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); flex: 1; }
.trx-ext-picker__ext { font-size: 0.75rem; color: var(--trx-text-secondary); font-family: monospace; }
.trx-ext-picker__clear { background: none; border: none; cursor: pointer; color: var(--trx-text-secondary); padding: 0; font-size: 0.75rem; }
.trx-ext-picker__arrow { font-size: 0.7rem; color: var(--trx-text-secondary); margin-left: auto; }
.trx-ext-picker__dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.trx-ext-picker__dot.on { background: var(--trx-success-color); }
.trx-ext-picker__dot.off { background: var(--trx-danger-color); }
.trx-ext-picker__panel { position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 200; background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
.trx-ext-picker__search-wrap { position: relative; padding: 0.5rem; border-bottom: 1px solid var(--trx-border-color); }
.trx-ext-picker__search-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); font-size: 0.8rem; color: var(--trx-text-secondary); }
.trx-ext-picker__search { width: 100%; padding: 0.4rem 0.6rem 0.4rem 2rem; border: 1px solid var(--trx-border-color); border-radius: 6px; background: var(--trx-bg-secondary); color: var(--trx-text-primary); font-size: 0.875rem; outline: none; box-sizing: border-box; }
.trx-ext-picker__loading { padding: 1rem; text-align: center; color: var(--trx-text-secondary); }
.trx-ext-picker__list { max-height: 220px; overflow-y: auto; }
.trx-ext-picker__item { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; cursor: pointer; transition: background 0.15s; }
.trx-ext-picker__item:hover { background: var(--trx-bg-secondary); }
.trx-ext-picker__item--selected { background: color-mix(in srgb, var(--trx-accent-color) 8%, transparent); }
.trx-ext-picker__item-info { flex: 1; display: flex; flex-direction: column; }
.trx-ext-picker__item-name { font-size: 0.825rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-ext-picker__item-dept { font-size: 0.7rem; color: var(--trx-text-secondary); }
.trx-ext-picker__item-ext { font-size: 0.775rem; font-family: monospace; color: var(--trx-text-secondary); }
.trx-ext-picker__empty { padding: 0.75rem; text-align: center; font-size: 0.8rem; color: var(--trx-text-secondary); }
</style>
