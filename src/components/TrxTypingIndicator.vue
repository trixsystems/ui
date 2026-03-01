<script setup lang="ts">
withDefaults(defineProps<{
  name?: string
  visible?: boolean
  variant?: 'bubble' | 'text'
}>(), {
  visible: true,
  variant: 'bubble',
})
</script>

<template>
  <Transition name="trx-typing-fade">
    <div v-if="visible" class="trx-typing" :class="`trx-typing--${variant}`">
      <template v-if="variant === 'bubble'">
        <div class="trx-typing__bubble">
          <span class="trx-typing__dot"></span>
          <span class="trx-typing__dot"></span>
          <span class="trx-typing__dot"></span>
        </div>
        <span v-if="name" class="trx-typing__name">{{ name }} está digitando...</span>
      </template>
      <template v-else>
        <span class="trx-typing__text">
          {{ name ? `${name} está digitando` : 'Digitando' }}
          <span class="trx-typing__ellipsis">
            <span>.</span><span>.</span><span>.</span>
          </span>
        </span>
      </template>
    </div>
  </Transition>
</template>

<style scoped>
.trx-typing { display: flex; align-items: center; gap: 0.4rem; padding: 0.25rem 0; }
.trx-typing__bubble {
  display: flex; align-items: center; gap: 4px;
  background: var(--trx-bg-secondary); border: 1px solid var(--trx-border-color);
  border-radius: 14px 14px 14px 4px; padding: 8px 12px;
}
.trx-typing__dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--trx-text-secondary); animation: bounce 1.2s infinite;
}
.trx-typing__dot:nth-child(2) { animation-delay: 0.2s; }
.trx-typing__dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes bounce { 0%,80%,100%{transform:scale(0.7);opacity:0.5} 40%{transform:scale(1);opacity:1} }
.trx-typing__name { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-typing--text .trx-typing__text { font-size: 0.8rem; color: var(--trx-text-secondary); display: flex; align-items: baseline; gap: 2px; }
.trx-typing__ellipsis { display: flex; }
.trx-typing__ellipsis span { animation: blink 1.2s infinite; }
.trx-typing__ellipsis span:nth-child(2) { animation-delay: 0.2s; }
.trx-typing__ellipsis span:nth-child(3) { animation-delay: 0.4s; }
@keyframes blink { 0%,80%,100%{opacity:0.2} 40%{opacity:1} }
.trx-typing-fade-enter-active, .trx-typing-fade-leave-active { transition: all 0.2s; }
.trx-typing-fade-enter-from, .trx-typing-fade-leave-to { opacity: 0; transform: translateY(4px); }
</style>
