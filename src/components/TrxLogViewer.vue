<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

export type TrxLogLevel = 'debug' | 'info' | 'warn' | 'error' | 'success'

export interface TrxLogEntry {
  id: string
  level: TrxLogLevel
  message: string
  timestamp?: string
  source?: string
  meta?: Record<string, unknown>
}

const props = withDefaults(defineProps<{
  logs: TrxLogEntry[]
  maxHeight?: string
  filter?: TrxLogLevel[]
  autoScroll?: boolean
  showTimestamp?: boolean
  showSource?: boolean
}>(), {
  maxHeight: '400px',
  autoScroll: true,
  showTimestamp: true,
  showSource: true,
})

const search = ref('')
const selectedLevels = ref<Set<TrxLogLevel>>(new Set(['debug', 'info', 'warn', 'error', 'success']))
const container = ref<HTMLElement>()

const allLevels: TrxLogLevel[] = ['debug', 'info', 'warn', 'error', 'success']

function toggleLevel(level: TrxLogLevel) {
  selectedLevels.value.has(level) ? selectedLevels.value.delete(level) : selectedLevels.value.add(level)
}

const filtered = computed(() => {
  const q = search.value.toLowerCase()
  return props.logs.filter(l =>
    selectedLevels.value.has(l.level) &&
    (l.message.toLowerCase().includes(q) || l.source?.toLowerCase().includes(q) || !q)
  )
})

watch(() => props.logs.length, async () => {
  if (props.autoScroll && container.value) {
    await nextTick()
    container.value.scrollTop = container.value.scrollHeight
  }
})

const levelIcon: Record<TrxLogLevel, string> = {
  debug: 'pi pi-code',
  info: 'pi pi-info-circle',
  warn: 'pi pi-exclamation-triangle',
  error: 'pi pi-times-circle',
  success: 'pi pi-check-circle',
}
</script>

<template>
  <div class="trx-log">
    <!-- Toolbar -->
    <div class="trx-log__toolbar">
      <div class="trx-log__filters">
        <button
          v-for="level in allLevels"
          :key="level"
          class="trx-log__filter"
          :class="[`trx-log__filter--${level}`, { 'trx-log__filter--active': selectedLevels.has(level) }]"
          @click="toggleLevel(level)"
        >
          <i :class="levelIcon[level]"></i>
          <span>{{ level }}</span>
        </button>
      </div>
      <div class="trx-log__search-wrap">
        <i class="pi pi-search trx-log__search-icon"></i>
        <input v-model="search" class="trx-log__search" placeholder="Buscar..." />
      </div>
      <span class="trx-log__count">{{ filtered.length }} / {{ logs.length }}</span>
    </div>
    <!-- Log body -->
    <div ref="container" class="trx-log__body" :style="{ maxHeight }">
      <div v-if="!filtered.length" class="trx-log__empty">Nenhum log</div>
      <div
        v-for="entry in filtered"
        :key="entry.id"
        class="trx-log__entry"
        :class="`trx-log__entry--${entry.level}`"
      >
        <i :class="levelIcon[entry.level]" class="trx-log__entry-icon"></i>
        <span v-if="showTimestamp && entry.timestamp" class="trx-log__ts">{{ entry.timestamp }}</span>
        <span v-if="showSource && entry.source" class="trx-log__source">[{{ entry.source }}]</span>
        <span class="trx-log__msg">{{ entry.message }}</span>
        <details v-if="entry.meta" class="trx-log__meta">
          <summary>meta</summary>
          <pre>{{ JSON.stringify(entry.meta, null, 2) }}</pre>
        </details>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-log { border: 1px solid var(--trx-border-color); border-radius: 10px; overflow: hidden; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; }
.trx-log__toolbar { display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.6rem; background: var(--trx-bg-secondary); border-bottom: 1px solid var(--trx-border-color); flex-wrap: wrap; }
.trx-log__filters { display: flex; gap: 0.25rem; flex-wrap: wrap; }
.trx-log__filter { display: flex; align-items: center; gap: 0.2rem; padding: 0.15rem 0.4rem; border-radius: 4px; border: 1px solid transparent; font-size: 0.7rem; cursor: pointer; background: var(--trx-bg-card); color: var(--trx-text-secondary); opacity: 0.45; transition: all 0.15s; }
.trx-log__filter--active { opacity: 1; }
.trx-log__filter--debug.trx-log__filter--active { border-color: #6b7280; color: #6b7280; }
.trx-log__filter--info.trx-log__filter--active { border-color: #3b82f6; color: #3b82f6; }
.trx-log__filter--warn.trx-log__filter--active { border-color: #f59e0b; color: #f59e0b; }
.trx-log__filter--error.trx-log__filter--active { border-color: var(--trx-danger-color); color: var(--trx-danger-color); }
.trx-log__filter--success.trx-log__filter--active { border-color: var(--trx-success-color); color: var(--trx-success-color); }
.trx-log__search-wrap { position: relative; flex: 1; min-width: 120px; }
.trx-log__search-icon { position: absolute; left: 0.4rem; top: 50%; transform: translateY(-50%); font-size: 0.7rem; color: var(--trx-text-secondary); }
.trx-log__search { width: 100%; padding: 0.2rem 0.4rem 0.2rem 1.5rem; border: 1px solid var(--trx-border-color); border-radius: 5px; background: var(--trx-bg-card); color: var(--trx-text-primary); font-size: 0.75rem; font-family: inherit; }
.trx-log__count { font-size: 0.72rem; color: var(--trx-text-secondary); white-space: nowrap; }
.trx-log__body { overflow-y: auto; background: var(--trx-bg-card); }
.trx-log__empty { padding: 1rem; text-align: center; color: var(--trx-text-secondary); }
.trx-log__entry { display: flex; align-items: baseline; gap: 0.35rem; padding: 0.2rem 0.6rem; border-bottom: 1px solid var(--trx-border-color); flex-wrap: wrap; }
.trx-log__entry:last-child { border-bottom: none; }
.trx-log__entry--debug { color: #6b7280; }
.trx-log__entry--info { color: var(--trx-text-primary); }
.trx-log__entry--warn { background: color-mix(in srgb, #f59e0b 6%, transparent); color: #b45309; }
.trx-log__entry--error { background: color-mix(in srgb, var(--trx-danger-color) 8%, transparent); color: var(--trx-danger-color); }
.trx-log__entry--success { color: var(--trx-success-color); }
.trx-log__entry-icon { font-size: 0.7rem; flex-shrink: 0; }
.trx-log__ts { color: var(--trx-text-secondary); font-size: 0.7rem; flex-shrink: 0; }
.trx-log__source { color: var(--trx-accent-color); font-size: 0.7rem; flex-shrink: 0; }
.trx-log__msg { flex: 1; min-width: 0; word-break: break-all; }
.trx-log__meta { width: 100%; font-size: 0.7rem; }
.trx-log__meta pre { margin: 0.25rem 0; background: var(--trx-bg-secondary); padding: 0.3rem; border-radius: 4px; overflow: auto; }
</style>
