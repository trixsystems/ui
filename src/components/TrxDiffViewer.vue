<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  original: string
  modified: string
  title?: string
  titleOriginal?: string
  titleModified?: string
  unified?: boolean
}>(), {
  titleOriginal: 'Original',
  titleModified: 'Modificado',
  unified: false,
})

type LineType = 'equal' | 'add' | 'remove'

interface DiffLine {
  type: LineType
  content: string
  lineOrig: number | null
  lineMod: number | null
}

function computeDiff(a: string, b: string): DiffLine[] {
  const linesA = a.split('\n')
  const linesB = b.split('\n')
  const m = linesA.length
  const n = linesB.length

  // LCS via DP (Myers simplified)
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (linesA[i] === linesB[j]) dp[i][j] = dp[i + 1][j + 1] + 1
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
    }
  }

  const result: DiffLine[] = []
  let i = 0, j = 0
  let lineOrig = 1, lineMod = 1

  while (i < m || j < n) {
    if (i < m && j < n && linesA[i] === linesB[j]) {
      result.push({ type: 'equal', content: linesA[i], lineOrig: lineOrig++, lineMod: lineMod++ })
      i++; j++
    } else if (j < n && (i >= m || dp[i][j + 1] >= dp[i + 1][j])) {
      result.push({ type: 'add', content: linesB[j], lineOrig: null, lineMod: lineMod++ })
      j++
    } else {
      result.push({ type: 'remove', content: linesA[i], lineOrig: lineOrig++, lineMod: null })
      i++
    }
  }
  return result
}

const diff = computed(() => computeDiff(props.original, props.modified))

const stats = computed(() => ({
  added: diff.value.filter(l => l.type === 'add').length,
  removed: diff.value.filter(l => l.type === 'remove').length,
}))

// Split view: separate columns
const origLines = computed(() => diff.value.filter(l => l.type !== 'add'))
const modLines = computed(() => diff.value.filter(l => l.type !== 'remove'))
</script>

<template>
  <div class="trx-diff">
    <!-- Header -->
    <div class="trx-diff__header">
      <span v-if="title" class="trx-diff__title">{{ title }}</span>
      <div class="trx-diff__stats">
        <span class="trx-diff__stat trx-diff__stat--add">+{{ stats.added }}</span>
        <span class="trx-diff__stat trx-diff__stat--rem">-{{ stats.removed }}</span>
      </div>
    </div>

    <!-- Unified view -->
    <div v-if="unified" class="trx-diff__unified">
      <div
        v-for="(line, i) in diff"
        :key="i"
        class="trx-diff__line"
        :class="`trx-diff__line--${line.type}`"
      >
        <span class="trx-diff__gutter">{{ line.lineOrig ?? '' }}</span>
        <span class="trx-diff__gutter">{{ line.lineMod ?? '' }}</span>
        <span class="trx-diff__marker">{{ line.type === 'add' ? '+' : line.type === 'remove' ? '-' : ' ' }}</span>
        <span class="trx-diff__code">{{ line.content }}</span>
      </div>
    </div>

    <!-- Split view -->
    <div v-else class="trx-diff__split">
      <div class="trx-diff__pane">
        <div class="trx-diff__pane-title">{{ titleOriginal }}</div>
        <div
          v-for="(line, i) in origLines"
          :key="i"
          class="trx-diff__line"
          :class="`trx-diff__line--${line.type}`"
        >
          <span class="trx-diff__gutter">{{ line.lineOrig }}</span>
          <span class="trx-diff__marker">{{ line.type === 'remove' ? '-' : ' ' }}</span>
          <span class="trx-diff__code">{{ line.content }}</span>
        </div>
      </div>
      <div class="trx-diff__divider"></div>
      <div class="trx-diff__pane">
        <div class="trx-diff__pane-title">{{ titleModified }}</div>
        <div
          v-for="(line, i) in modLines"
          :key="i"
          class="trx-diff__line"
          :class="`trx-diff__line--${line.type}`"
        >
          <span class="trx-diff__gutter">{{ line.lineMod }}</span>
          <span class="trx-diff__marker">{{ line.type === 'add' ? '+' : ' ' }}</span>
          <span class="trx-diff__code">{{ line.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-diff { border: 1px solid var(--trx-border-color); border-radius: 10px; overflow: hidden; font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.8rem; }
.trx-diff__header { display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0.75rem; background: var(--trx-bg-secondary); border-bottom: 1px solid var(--trx-border-color); }
.trx-diff__title { font-size: 0.8rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-diff__stats { display: flex; gap: 0.5rem; }
.trx-diff__stat { font-size: 0.78rem; font-weight: 600; }
.trx-diff__stat--add { color: var(--trx-success-color); }
.trx-diff__stat--rem { color: var(--trx-danger-color); }
.trx-diff__unified, .trx-diff__pane { overflow: auto; }
.trx-diff__split { display: flex; }
.trx-diff__pane { flex: 1; min-width: 0; overflow: auto; }
.trx-diff__divider { width: 1px; background: var(--trx-border-color); flex-shrink: 0; }
.trx-diff__pane-title { padding: 0.3rem 0.6rem; font-size: 0.75rem; color: var(--trx-text-secondary); background: var(--trx-bg-secondary); border-bottom: 1px solid var(--trx-border-color); font-weight: 600; }
.trx-diff__line { display: flex; align-items: stretch; min-height: 1.5rem; }
.trx-diff__line--add { background: color-mix(in srgb, var(--trx-success-color) 10%, transparent); }
.trx-diff__line--remove { background: color-mix(in srgb, var(--trx-danger-color) 10%, transparent); }
.trx-diff__gutter { min-width: 36px; padding: 0.1rem 0.4rem; text-align: right; color: var(--trx-text-secondary); font-size: 0.72rem; background: var(--trx-bg-secondary); border-right: 1px solid var(--trx-border-color); user-select: none; flex-shrink: 0; line-height: 1.5rem; }
.trx-diff__marker { width: 18px; flex-shrink: 0; text-align: center; line-height: 1.5rem; font-weight: 700; }
.trx-diff__line--add .trx-diff__marker { color: var(--trx-success-color); }
.trx-diff__line--remove .trx-diff__marker { color: var(--trx-danger-color); }
.trx-diff__code { padding: 0.1rem 0.4rem; white-space: pre; line-height: 1.5rem; color: var(--trx-text-primary); flex: 1; }
</style>
