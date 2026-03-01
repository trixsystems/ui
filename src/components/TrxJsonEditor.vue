<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: unknown
  minHeight?: string
  disabled?: boolean
  validateOnChange?: boolean
}>(), {
  modelValue: () => ({}),
  minHeight: '180px',
  validateOnChange: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: unknown]
  error: [msg: string]
}>()

const raw = ref(JSON.stringify(props.modelValue, null, 2))
const parseError = ref('')

watch(() => props.modelValue, (v) => {
  try {
    const current = JSON.parse(raw.value)
    if (JSON.stringify(current) !== JSON.stringify(v)) {
      raw.value = JSON.stringify(v, null, 2)
    }
  } catch {
    raw.value = JSON.stringify(v, null, 2)
  }
}, { deep: true })

function onInput(e: Event) {
  const val = (e.target as HTMLTextAreaElement).value
  raw.value = val
  if (props.validateOnChange) validate(val)
}

function validate(val: string) {
  try {
    const parsed = JSON.parse(val)
    parseError.value = ''
    emit('update:modelValue', parsed)
  } catch (err) {
    const msg = (err as Error).message
    parseError.value = msg
    emit('error', msg)
  }
}

function format() {
  try {
    const parsed = JSON.parse(raw.value)
    raw.value = JSON.stringify(parsed, null, 2)
    parseError.value = ''
  } catch { /* keep error */ }
}

function minify() {
  try {
    const parsed = JSON.parse(raw.value)
    raw.value = JSON.stringify(parsed)
    parseError.value = ''
  } catch { /* keep error */ }
}

const lineCount = computed(() => raw.value.split('\n').length)
</script>

<template>
  <div class="trx-json-editor" :class="{ 'trx-json-editor--error': parseError, 'trx-json-editor--disabled': disabled }">
    <div class="trx-json-editor__bar">
      <span class="trx-json-editor__lang">JSON</span>
      <div class="trx-json-editor__actions">
        <button class="trx-json-editor__btn" :disabled="disabled" @click="format">
          <i class="pi pi-align-left"></i> Formatar
        </button>
        <button class="trx-json-editor__btn" :disabled="disabled" @click="minify">
          <i class="pi pi-minus"></i> Minificar
        </button>
      </div>
    </div>
    <div class="trx-json-editor__body">
      <div class="trx-json-editor__lines">
        <div v-for="n in lineCount" :key="n" class="trx-json-editor__line-num">{{ n }}</div>
      </div>
      <textarea
        class="trx-json-editor__textarea"
        :value="raw"
        :disabled="disabled"
        :style="{ minHeight }"
        spellcheck="false"
        autocomplete="off"
        @input="onInput"
      ></textarea>
    </div>
    <div v-if="parseError" class="trx-json-editor__error">
      <i class="pi pi-exclamation-triangle"></i>
      {{ parseError }}
    </div>
  </div>
</template>

<style scoped>
.trx-json-editor { border: 1px solid var(--trx-border-color); border-radius: 10px; overflow: hidden; font-family: monospace; }
.trx-json-editor--error { border-color: var(--trx-danger-color); }
.trx-json-editor--disabled { opacity: 0.6; pointer-events: none; }
.trx-json-editor__bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.4rem 0.75rem; background: var(--trx-bg-secondary);
  border-bottom: 1px solid var(--trx-border-color);
}
.trx-json-editor__lang { font-size: 0.7rem; font-weight: 700; color: var(--trx-text-secondary); text-transform: uppercase; letter-spacing: 0.08em; }
.trx-json-editor__actions { display: flex; gap: 0.35rem; }
.trx-json-editor__btn {
  padding: 0.2rem 0.5rem; border: 1px solid var(--trx-border-color); border-radius: 5px;
  background: transparent; font-size: 0.725rem; cursor: pointer; color: var(--trx-text-secondary);
  display: inline-flex; align-items: center; gap: 0.25rem; transition: all 0.15s;
}
.trx-json-editor__btn:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
.trx-json-editor__body { display: flex; overflow: auto; background: var(--trx-bg-card); }
.trx-json-editor__lines {
  padding: 0.6rem 0; background: var(--trx-bg-secondary);
  border-right: 1px solid var(--trx-border-color); user-select: none; min-width: 38px;
}
.trx-json-editor__line-num {
  text-align: right; padding: 0 8px; font-size: 0.75rem;
  color: var(--trx-text-secondary); line-height: 1.5rem;
}
.trx-json-editor__textarea {
  flex: 1; border: none; outline: none; resize: none;
  padding: 0.6rem 0.75rem; font-family: monospace; font-size: 0.825rem;
  background: transparent; color: var(--trx-text-primary); line-height: 1.5rem;
  tab-size: 2;
}
.trx-json-editor__error {
  display: flex; align-items: center; gap: 0.4rem;
  padding: 0.4rem 0.75rem; background: color-mix(in srgb, var(--trx-danger-color) 10%, transparent);
  font-size: 0.775rem; color: var(--trx-danger-color);
}
</style>
