<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  loading?: boolean
  hasMore?: boolean
  threshold?: number // px from bottom to trigger
  scrollTarget?: string // CSS selector; defaults to container itself
}>(), {
  loading: false,
  hasMore: true,
  threshold: 80,
})

const emit = defineEmits<{
  load: []
}>()

const container = ref<HTMLElement>()

function onScroll(e: Event) {
  if (props.loading || !props.hasMore) return
  const el = e.target as HTMLElement
  const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
  if (distFromBottom < props.threshold) emit('load')
}

function onWindowScroll() {
  if (props.loading || !props.hasMore) return
  const distFromBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight
  if (distFromBottom < props.threshold) emit('load')
}

let scrollEl: HTMLElement | Window | null = null

onMounted(() => {
  if (props.scrollTarget) {
    scrollEl = document.querySelector(props.scrollTarget) as HTMLElement
    scrollEl?.addEventListener('scroll', onScroll as EventListener, { passive: true })
  } else if (container.value) {
    // If the container has overflow, listen on it; otherwise listen window
    const style = getComputedStyle(container.value)
    if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
      scrollEl = container.value
      container.value.addEventListener('scroll', onScroll as EventListener, { passive: true })
    } else {
      scrollEl = window
      window.addEventListener('scroll', onWindowScroll, { passive: true })
    }
  }
})

onBeforeUnmount(() => {
  if (scrollEl === window) {
    window.removeEventListener('scroll', onWindowScroll)
  } else {
    ;(scrollEl as HTMLElement)?.removeEventListener('scroll', onScroll as EventListener)
  }
})
</script>

<template>
  <div ref="container" class="trx-inf">
    <slot />
    <!-- Sentinel / loader -->
    <div class="trx-inf__sentinel">
      <template v-if="loading">
        <slot name="loader">
          <div class="trx-inf__loader">
            <span class="trx-inf__dot"></span>
            <span class="trx-inf__dot"></span>
            <span class="trx-inf__dot"></span>
          </div>
        </slot>
      </template>
      <template v-else-if="!hasMore">
        <slot name="end">
          <div class="trx-inf__end">Sem mais itens</div>
        </slot>
      </template>
    </div>
  </div>
</template>

<style scoped>
.trx-inf { display: flex; flex-direction: column; }
.trx-inf__sentinel { display: flex; justify-content: center; padding: 1rem; }
.trx-inf__loader { display: flex; gap: 0.4rem; align-items: center; }
.trx-inf__dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--trx-accent-color);
  animation: trx-inf-bounce 1.2s infinite ease-in-out;
}
.trx-inf__dot:nth-child(1) { animation-delay: 0s; }
.trx-inf__dot:nth-child(2) { animation-delay: 0.2s; }
.trx-inf__dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes trx-inf-bounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}
.trx-inf__end { font-size: 0.8rem; color: var(--trx-text-secondary); }
</style>
