<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{
  data: unknown
  expandDepth?: number
}>(), {
  expandDepth: 2,
})

const copied = ref(false)

function copyJson() {
  navigator.clipboard.writeText(JSON.stringify(props.data, null, 2))
  copied.value = true
  setTimeout(() => { copied.value = false }, 1500)
}

// Generate syntax-highlighted HTML from JSON
function highlight(val: unknown, depth = 0): string {
  if (val === null) return `<span class="trx-jv-null">null</span>`
  if (typeof val === 'boolean') return `<span class="trx-jv-bool">${val}</span>`
  if (typeof val === 'number') return `<span class="trx-jv-num">${val}</span>`
  if (typeof val === 'string') return `<span class="trx-jv-str">"${escHtml(val)}"</span>`

  const isArr = Array.isArray(val)
  const entries = isArr
    ? (val as unknown[]).map((v, i) => [i, v] as [number | string, unknown])
    : Object.entries(val as Record<string, unknown>)

  if (entries.length === 0) return isArr ? `<span class="trx-jv-brace">[]</span>` : `<span class="trx-jv-brace">{}</span>`

  const collapsed = depth >= props.expandDepth
  const id = `jv-${Math.random().toString(36).slice(2)}`
  const open = isArr ? '[' : '{'
  const close = isArr ? ']' : '}'
  const indent = '  '.repeat(depth + 1)
  const closeIndent = '  '.repeat(depth)

  const inner = entries.map(([k, v]) => {
    const keyHtml = isArr ? '' : `<span class="trx-jv-key">"${escHtml(String(k))}"</span><span class="trx-jv-colon">: </span>`
    return `${indent}${keyHtml}${highlight(v, depth + 1)}`
  }).join(',\n')

  return `<span class="trx-jv-brace">${open}</span><span class="trx-jv-toggle" data-target="${id}" title="Toggle">${collapsed ? '▸' : '▾'}</span><span class="trx-jv-count">${entries.length}</span><span id="${id}" class="trx-jv-block"${collapsed ? ' style="display:none"' : ''}>\n${inner}\n${closeIndent}</span><span class="trx-jv-brace">${close}</span>`
}

function escHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

const html = computed(() => highlight(props.data))

function onToggle(e: MouseEvent) {
  const btn = (e.target as HTMLElement).closest('.trx-jv-toggle') as HTMLElement | null
  if (!btn) return
  const targetId = btn.dataset.target
  if (!targetId) return
  const block = document.getElementById(targetId)
  if (!block) return
  const hidden = block.style.display === 'none'
  block.style.display = hidden ? '' : 'none'
  btn.textContent = hidden ? '▾' : '▸'
}
</script>

<template>
  <div class="trx-jv">
    <div class="trx-jv__toolbar">
      <span class="trx-jv__badge">JSON</span>
      <button class="trx-jv__copy" @click="copyJson">
        <i :class="copied ? 'pi pi-check' : 'pi pi-copy'"></i>
        {{ copied ? 'Copiado' : 'Copiar' }}
      </button>
    </div>
    <pre class="trx-jv__body" @click="onToggle" v-html="html"></pre>
  </div>
</template>

<style scoped>
.trx-jv { background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 10px; font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.8rem; overflow: hidden; }
.trx-jv__toolbar { display: flex; align-items: center; justify-content: space-between; padding: 0.4rem 0.75rem; border-bottom: 1px solid var(--trx-border-color); background: var(--trx-bg-secondary); }
.trx-jv__badge { font-size: 0.7rem; font-weight: 600; background: var(--trx-accent-color); color: white; padding: 0.1rem 0.4rem; border-radius: 4px; }
.trx-jv__copy { display: flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; background: none; border: none; color: var(--trx-text-secondary); cursor: pointer; transition: color 0.15s; }
.trx-jv__copy:hover { color: var(--trx-accent-color); }
.trx-jv__body { padding: 0.75rem 1rem; overflow: auto; margin: 0; white-space: pre; color: var(--trx-text-primary); line-height: 1.6; cursor: default; }
</style>

<style>
.trx-jv-str { color: #98c379; }
.trx-jv-num { color: #d19a66; }
.trx-jv-bool { color: #56b6c2; }
.trx-jv-null { color: #abb2bf; font-style: italic; }
.trx-jv-key { color: #e06c75; }
.trx-jv-colon { color: var(--trx-text-secondary); }
.trx-jv-brace { color: var(--trx-text-secondary); }
.trx-jv-toggle { cursor: pointer; user-select: none; font-size: 0.65rem; color: var(--trx-text-secondary); margin: 0 0.2rem; }
.trx-jv-toggle:hover { color: var(--trx-accent-color); }
.trx-jv-count { font-size: 0.7rem; color: var(--trx-text-secondary); margin-left: 0.1rem; }
.trx-jv-block { display: inline; }
</style>
', { class: 'trx-jv__row' }, [
        h('span', { class: 'trx-jv__indent' }),
        label,
        h('span', { class: valClass }, display),
      ])
    }
  },
})

export { TrxJsonViewerNode }
</script>

<style scoped>
.trx-jv { background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 10px; font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.8rem; overflow: hidden; }
.trx-jv__toolbar { display: flex; align-items: center; justify-content: space-between; padding: 0.4rem 0.75rem; border-bottom: 1px solid var(--trx-border-color); background: var(--trx-bg-secondary); }
.trx-jv__badge { font-size: 0.7rem; font-weight: 600; background: var(--trx-accent-color); color: white; padding: 0.1rem 0.4rem; border-radius: 4px; }
.trx-jv__copy { display: flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; background: none; border: none; color: var(--trx-text-secondary); cursor: pointer; transition: color 0.15s; }
.trx-jv__copy:hover { color: var(--trx-accent-color); }
.trx-jv__body { padding: 0.75rem 1rem; overflow: auto; }
.trx-jv__brace { color: var(--trx-text-secondary); }
.trx-jv__count { color: var(--trx-text-secondary); font-style: italic; margin-left: 0.25rem; font-size: 0.72rem; }
.trx-jv__ellipsis { color: var(--trx-text-secondary); cursor: pointer; }
.trx-jv__ellipsis:hover { color: var(--trx-accent-color); }
</style>

<style>
.trx-jv__row { display: flex; align-items: flex-start; line-height: 1.6; flex-wrap: wrap; }
.trx-jv__toggle { background: none; border: none; cursor: pointer; color: var(--trx-text-secondary); font-size: 0.7rem; padding: 0 0.2rem; width: 14px; flex-shrink: 0; }
.trx-jv__key { color: #e06c75; }
.trx-jv__val--string { color: #98c379; }
.trx-jv__val--number { color: #d19a66; }
.trx-jv__val--boolean { color: #56b6c2; }
.trx-jv__val--null { color: #abb2bf; font-style: italic; }
.trx-jv__children { margin-left: 1.25rem; width: 100%; }
.trx-jv__indent { width: 14px; flex-shrink: 0; }
</style>
