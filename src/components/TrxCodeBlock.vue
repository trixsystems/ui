<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  code?: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  maxHeight?: string
}>(), {
  code: '',
  language: 'text',
  showLineNumbers: true,
})

const copied = ref(false)

async function copy() {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

function lines(code: string) {
  return code.split('\n')
}
</script>

<template>
  <div class="trx-code-block">
    <div class="trx-code-block__header">
      <div class="trx-code-block__lang-wrap">
        <span v-if="filename" class="trx-code-block__filename">
          <i class="pi pi-file"></i> {{ filename }}
        </span>
        <span v-else class="trx-code-block__lang">{{ language }}</span>
      </div>
      <button class="trx-code-block__copy" @click="copy" :title="copied ? 'Copiado!' : 'Copiar'">
        <i :class="copied ? 'pi pi-check' : 'pi pi-copy'"></i>
        <span>{{ copied ? 'Copiado' : 'Copiar' }}</span>
      </button>
    </div>
    <div class="trx-code-block__body" :style="maxHeight ? { maxHeight, overflowY: 'auto' } : {}">
      <table class="trx-code-block__table">
        <tbody>
          <tr v-for="(line, i) in lines(code)" :key="i">
            <td v-if="showLineNumbers" class="trx-code-block__lineno">{{ i + 1 }}</td>
            <td class="trx-code-block__line">{{ line || ' ' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.trx-code-block {
  border: 1px solid var(--trx-border-color); border-radius: 10px; overflow: hidden;
  background: var(--trx-bg-secondary);
}
.trx-code-block__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.5rem 0.875rem;
  background: var(--trx-bg-card); border-bottom: 1px solid var(--trx-border-color);
}
.trx-code-block__lang-wrap { display: flex; align-items: center; gap: 0.4rem; }
.trx-code-block__lang, .trx-code-block__filename {
  font-size: 0.775rem; color: var(--trx-text-secondary); font-family: monospace;
  display: flex; align-items: center; gap: 0.3rem;
}
.trx-code-block__copy {
  display: inline-flex; align-items: center; gap: 0.3rem;
  background: none; border: none; cursor: pointer;
  font-size: 0.75rem; color: var(--trx-text-secondary); transition: color 0.15s; padding: 0;
}
.trx-code-block__copy:hover { color: var(--trx-accent-color); }
.trx-code-block__body { overflow-x: auto; }
.trx-code-block__table { border-collapse: collapse; width: 100%; }
.trx-code-block__lineno {
  padding: 0 0.875rem 0 0.75rem; text-align: right;
  font-size: 0.8rem; font-family: monospace; color: var(--trx-border-color);
  user-select: none; vertical-align: top; white-space: nowrap;
  border-right: 1px solid var(--trx-border-color);
  min-width: 40px;
}
.trx-code-block__line {
  padding: 0 0.875rem; font-size: 0.825rem; font-family: 'Courier New', monospace;
  color: var(--trx-text-primary); white-space: pre; line-height: 1.6;
}
</style>
