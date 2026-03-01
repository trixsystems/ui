<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string[]
  placeholder?: string
  disabled?: boolean
  invalid?: boolean
  max?: number
  suggestions?: string[]
}>(), {
  modelValue: () => [],
  placeholder: 'Adicionar tag...',
})

const emit = defineEmits<{ 'update:modelValue': [tags: string[]] }>()

const input = ref('')

function add(tag: string) {
  const t = tag.trim()
  if (!t || props.modelValue.includes(t)) { input.value = ''; return }
  if (props.max && props.modelValue.length >= props.max) return
  emit('update:modelValue', [...props.modelValue, t])
  input.value = ''
}

function remove(tag: string) {
  emit('update:modelValue', props.modelValue.filter(t => t !== tag))
}

function onKeydown(e: KeyboardEvent) {
  if ((e.key === 'Enter' || e.key === ',') && input.value.trim()) {
    e.preventDefault()
    add(input.value)
  }
  if (e.key === 'Backspace' && !input.value && props.modelValue.length) {
    remove(props.modelValue[props.modelValue.length - 1])
  }
}

const filteredSuggestions = ref<string[]>([])
function onInput() {
  if (!props.suggestions?.length || !input.value) { filteredSuggestions.value = []; return }
  filteredSuggestions.value = props.suggestions.filter(s =>
    s.toLowerCase().includes(input.value.toLowerCase()) && !props.modelValue.includes(s)
  ).slice(0, 6)
}
</script>

<template>
  <div
    class="trx-tag-input"
    :class="{ 'trx-tag-input--invalid': invalid, 'trx-tag-input--disabled': disabled }"
    @click="($el as HTMLElement).querySelector('input')?.focus()"
  >
    <span v-for="tag in modelValue" :key="tag" class="trx-tag-input__tag">
      {{ tag }}
      <button class="trx-tag-input__remove" :disabled="disabled" @click.stop="remove(tag)">
        <i class="pi pi-times"></i>
      </button>
    </span>
    <input
      v-if="!max || modelValue.length < max"
      class="trx-tag-input__field"
      :placeholder="modelValue.length ? '' : placeholder"
      :disabled="disabled"
      v-model="input"
      @keydown="onKeydown"
      @input="onInput"
      @blur="input && add(input); filteredSuggestions = []"
    />
  </div>
  <div v-if="filteredSuggestions.length" class="trx-tag-input__suggestions">
    <button
      v-for="s in filteredSuggestions"
      :key="s"
      class="trx-tag-input__suggestion"
      @mousedown.prevent="add(s)"
    >{{ s }}</button>
  </div>
</template>

<style scoped>
.trx-tag-input {
  display: flex; flex-wrap: wrap; gap: 0.35rem;
  padding: 0.35rem 0.5rem; min-height: 38px;
  border: 1px solid var(--trx-border-color); border-radius: 8px;
  background: var(--trx-bg-card); cursor: text; transition: border-color 0.2s;
}
.trx-tag-input:focus-within { border-color: var(--trx-accent-color); }
.trx-tag-input--invalid { border-color: var(--trx-danger-color); }
.trx-tag-input--disabled { opacity: 0.5; pointer-events: none; }
.trx-tag-input__tag {
  display: inline-flex; align-items: center; gap: 0.25rem;
  padding: 0.15rem 0.4rem; background: color-mix(in srgb, var(--trx-accent-color) 12%, transparent);
  color: var(--trx-accent-color); border-radius: 4px; font-size: 0.8rem; font-weight: 500;
}
.trx-tag-input__remove { background: none; border: none; cursor: pointer; color: inherit; font-size: 0.6rem; padding: 0; line-height: 1; }
.trx-tag-input__field { border: none; outline: none; background: transparent; color: var(--trx-text-primary); font-size: 0.875rem; min-width: 80px; flex: 1; }
.trx-tag-input__suggestions {
  display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 0.25rem;
}
.trx-tag-input__suggestion {
  padding: 0.2rem 0.5rem; border: 1px solid var(--trx-border-color); border-radius: 4px;
  background: var(--trx-bg-card); color: var(--trx-text-secondary); font-size: 0.8rem; cursor: pointer;
  transition: all 0.15s;
}
.trx-tag-input__suggestion:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
</style>
