<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string
  placeholder?: string
  minHeight?: string
  maxHeight?: string
  disabled?: boolean
}>(), {
  modelValue: '',
  placeholder: 'Escreva em Markdown...',
  minHeight: '200px',
  maxHeight: '600px',
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const mode = ref<'write' | 'preview' | 'split'>('write')

// Minimal markdown → HTML (headings, bold, italic, code, lists, links, line breaks)
const rendered = computed(() => {
  let html = props.modelValue
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/^#{6}\s(.+)$/gm, '<h6>$1</h6>')
    .replace(/^#{5}\s(.+)$/gm, '<h5>$1</h5>')
    .replace(/^#{4}\s(.+)$/gm, '<h4>$1</h4>')
    .replace(/^#{3}\s(.+)$/gm, '<h3>$1</h3>')
    .replace(/^#{2}\s(.+)$/gm, '<h2>$1</h2>')
    .replace(/^#{1}\s(.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>')
    .replace(/\n/g, '<br>')
  return html
})

function insert(before: string, after = '') {
  const ta = document.querySelector('.trx-md-editor__textarea') as HTMLTextAreaElement | null
  if (!ta) return
  const start = ta.selectionStart
  const end = ta.selectionEnd
  const sel = ta.value.slice(start, end)
  const newVal = ta.value.slice(0, start) + before + sel + after + ta.value.slice(end)
  emit('update:modelValue', newVal)
  setTimeout(() => {
    ta.focus()
    ta.setSelectionRange(start + before.length, start + before.length + sel.length)
  }, 0)
}

const toolbar = [
  { icon: 'pi pi-bold',          title: 'Negrito',   action: () => insert('**', '**') },
  { icon: 'pi pi-italic',        title: 'Itálico',   action: () => insert('*', '*') },
  { icon: 'pi pi-code',          title: 'Código',    action: () => insert('`', '`') },
  { icon: 'pi pi-list',          title: 'Lista',     action: () => insert('- ') },
  { icon: 'pi pi-link',          title: 'Link',      action: () => insert('[texto](', ')') },
]
</script>

<template>
  <div class="trx-md-editor" :class="{ 'trx-md-editor--disabled': disabled }">
    <div class="trx-md-editor__bar">
      <div class="trx-md-editor__toolbar">
        <button
          v-for="t in toolbar"
          :key="t.title"
          class="trx-md-editor__tool-btn"
          :title="t.title"
          :disabled="disabled"
          @click.prevent="t.action()"
        >
          <i :class="t.icon"></i>
        </button>
      </div>
      <div class="trx-md-editor__modes">
        <button
          v-for="m in ['write', 'split', 'preview'] as const"
          :key="m"
          class="trx-md-editor__mode-btn"
          :class="{ active: mode === m }"
          @click="mode = m"
        >{{ m === 'write' ? 'Editar' : m === 'preview' ? 'Preview' : 'Split' }}</button>
      </div>
    </div>
    <div class="trx-md-editor__body" :class="`trx-md-editor__body--${mode}`">
      <textarea
        v-if="mode !== 'preview'"
        class="trx-md-editor__textarea"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :style="{ minHeight, maxHeight }"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      ></textarea>
      <div
        v-if="mode !== 'write'"
        class="trx-md-editor__preview"
        :style="{ minHeight }"
        v-html="rendered"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.trx-md-editor { border: 1px solid var(--trx-border-color); border-radius: 10px; overflow: hidden; background: var(--trx-bg-card); }
.trx-md-editor--disabled { opacity: 0.6; pointer-events: none; }
.trx-md-editor__bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.4rem 0.6rem; border-bottom: 1px solid var(--trx-border-color);
  background: var(--trx-bg-secondary); gap: 0.5rem; flex-wrap: wrap;
}
.trx-md-editor__toolbar { display: flex; gap: 0.2rem; }
.trx-md-editor__tool-btn {
  width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;
  border: none; border-radius: 6px; background: transparent; cursor: pointer;
  color: var(--trx-text-secondary); font-size: 0.825rem; transition: all 0.15s;
}
.trx-md-editor__tool-btn:hover { background: var(--trx-bg-card); color: var(--trx-accent-color); }
.trx-md-editor__modes { display: flex; gap: 0.2rem; }
.trx-md-editor__mode-btn {
  padding: 0.25rem 0.6rem; border: 1px solid var(--trx-border-color); border-radius: 6px;
  background: transparent; font-size: 0.75rem; cursor: pointer; color: var(--trx-text-secondary); transition: all 0.15s;
}
.trx-md-editor__mode-btn.active { background: var(--trx-accent-color); color: white; border-color: var(--trx-accent-color); }
.trx-md-editor__body { display: flex; }
.trx-md-editor__body--split { gap: 0; }
.trx-md-editor__textarea {
  flex: 1; width: 100%; border: none; outline: none; resize: vertical;
  padding: 0.75rem 1rem; font-family: monospace; font-size: 0.875rem;
  background: var(--trx-bg-card); color: var(--trx-text-primary);
  line-height: 1.6;
}
.trx-md-editor__body--split .trx-md-editor__textarea { border-right: 1px solid var(--trx-border-color); }
.trx-md-editor__preview {
  flex: 1; padding: 0.75rem 1rem; overflow-y: auto;
  font-size: 0.875rem; color: var(--trx-text-primary); line-height: 1.7;
}
.trx-md-editor__preview :deep(h1) { font-size: 1.4rem; margin: 0 0 0.5rem; }
.trx-md-editor__preview :deep(h2) { font-size: 1.2rem; margin: 0.75rem 0 0.4rem; }
.trx-md-editor__preview :deep(h3) { font-size: 1rem; margin: 0.5rem 0 0.3rem; }
.trx-md-editor__preview :deep(code) { background: var(--trx-bg-secondary); padding: 0.1rem 0.35rem; border-radius: 4px; font-family: monospace; font-size: 0.85em; }
.trx-md-editor__preview :deep(ul) { padding-left: 1.5rem; margin: 0.3rem 0; }
.trx-md-editor__preview :deep(a) { color: var(--trx-accent-color); }
</style>
