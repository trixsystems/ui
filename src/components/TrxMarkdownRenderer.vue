<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  content?: string
  prose?: boolean
}>(), {
  content: '',
  prose: true,
})

// Lightweight markdown → HTML renderer (no external deps)
const rendered = computed(() => {
  let html = props.content
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  // Fenced code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
    `<pre class="trx-md__pre"><code class="trx-md__code" data-lang="${lang}">${code.trimEnd()}</code></pre>`
  )
  // Headings
  html = html
    .replace(/^#{6}\s(.+)$/gm, '<h6>$1</h6>')
    .replace(/^#{5}\s(.+)$/gm, '<h5>$1</h5>')
    .replace(/^#{4}\s(.+)$/gm, '<h4>$1</h4>')
    .replace(/^#{3}\s(.+)$/gm, '<h3>$1</h3>')
    .replace(/^#{2}\s(.+)$/gm, '<h2>$1</h2>')
    .replace(/^#{1}\s(.+)$/gm, '<h1>$1</h1>')
  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr>')
  // Blockquote
  html = html.replace(/^&gt;\s(.+)$/gm, '<blockquote>$1</blockquote>')
  // Unordered list
  html = html.replace(/^[-*]\s(.+)$/gm, '<li>$1</li>')
  html = html.replace(/(<li>[\s\S]*?<\/li>)\n?(?!<li>)/g, '<ul>$1</ul>')
  // Ordered list
  html = html.replace(/^\d+\.\s(.+)$/gm, '<oli>$1</oli>')
  html = html.replace(/(<oli>[\s\S]*?<\/oli>)\n?(?!<oli>)/g, '<ol>$1</ol>')
  html = html.replace(/<\/?oli>/g, (m) => m === '<oli>' ? '<li>' : '</li>')
  // Inline
  html = html
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
    .replace(/~~(.+?)~~/g, '<del>$1</del>')
    .replace(/`(.+?)`/g, '<code class="trx-md__inline-code">$1</code>')
    .replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" class="trx-md__img">')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="trx-md__link">$1</a>')
  // Paragraphs
  html = html.replace(/\n{2,}/g, '</p><p>')
  html = `<p>${html}</p>`
  html = html.replace(/<p>(<h[1-6]>|<\/h[1-6]>|<hr>|<blockquote>|<\/blockquote>|<ul>|<\/ul>|<ol>|<\/ol>|<pre>|<\/pre>)/g, '$1')
  html = html.replace(/(<\/h[1-6]>|<hr>|<\/blockquote>|<\/ul>|<\/ol>|<\/pre>)<\/p>/g, '$1')
  html = html.replace(/<p><\/p>/g, '')
  html = html.replace(/\n/g, '<br>')
  return html
})
</script>

<template>
  <div class="trx-md-renderer" :class="{ 'trx-md-renderer--prose': prose }" v-html="rendered"></div>
</template>

<style scoped>
.trx-md-renderer { color: var(--trx-text-primary); line-height: 1.7; font-size: 0.9rem; }
.trx-md-renderer--prose :deep(h1) { font-size: 1.6rem; font-weight: 800; margin: 0 0 0.75rem; color: var(--trx-text-primary); }
.trx-md-renderer--prose :deep(h2) { font-size: 1.3rem; font-weight: 700; margin: 1.25rem 0 0.5rem; color: var(--trx-text-primary); }
.trx-md-renderer--prose :deep(h3) { font-size: 1.1rem; font-weight: 700; margin: 1rem 0 0.4rem; }
.trx-md-renderer--prose :deep(p) { margin: 0 0 0.75rem; }
.trx-md-renderer--prose :deep(strong) { font-weight: 700; }
.trx-md-renderer--prose :deep(em) { font-style: italic; }
.trx-md-renderer--prose :deep(del) { text-decoration: line-through; color: var(--trx-text-secondary); }
.trx-md-renderer--prose :deep(hr) { border: none; border-top: 1px solid var(--trx-border-color); margin: 1rem 0; }
.trx-md-renderer--prose :deep(blockquote) {
  border-left: 3px solid var(--trx-accent-color); margin: 0.75rem 0;
  padding: 0.4rem 1rem; background: color-mix(in srgb, var(--trx-accent-color) 6%, transparent);
  border-radius: 0 6px 6px 0; font-style: italic; color: var(--trx-text-secondary);
}
.trx-md-renderer--prose :deep(ul), .trx-md-renderer--prose :deep(ol) { padding-left: 1.5rem; margin: 0.4rem 0 0.75rem; }
.trx-md-renderer--prose :deep(li) { margin: 0.2rem 0; }
.trx-md-renderer--prose :deep(.trx-md__pre) {
  background: var(--trx-bg-secondary); border: 1px solid var(--trx-border-color);
  border-radius: 8px; padding: 0.75rem 1rem; overflow-x: auto; margin: 0.75rem 0;
}
.trx-md-renderer--prose :deep(.trx-md__code) { font-family: monospace; font-size: 0.825rem; color: var(--trx-text-primary); }
.trx-md-renderer--prose :deep(.trx-md__inline-code) {
  background: var(--trx-bg-secondary); padding: 0.1rem 0.35rem;
  border-radius: 4px; font-family: monospace; font-size: 0.85em; color: var(--trx-text-primary);
}
.trx-md-renderer--prose :deep(.trx-md__link) { color: var(--trx-accent-color); text-decoration: underline; }
.trx-md-renderer--prose :deep(.trx-md__img) { max-width: 100%; border-radius: 8px; margin: 0.5rem 0; }
</style>
