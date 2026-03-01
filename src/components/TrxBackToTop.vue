<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  threshold?: number
  scrollTarget?: string // CSS selector, defaults to window
  behavior?: 'smooth' | 'auto'
}>(), {
  threshold: 300,
  behavior: 'smooth',
})

const visible = ref(false)

function onScroll() {
  const el = props.scrollTarget ? document.querySelector(props.scrollTarget) : null
  const top = el ? el.scrollTop : window.scrollY
  visible.value = top > props.threshold
}

function scrollToTop() {
  const el = props.scrollTarget ? document.querySelector(props.scrollTarget) : null
  if (el) el.scrollTo({ top: 0, behavior: props.behavior })
  else window.scrollTo({ top: 0, behavior: props.behavior })
}

onMounted(() => {
  const target = props.scrollTarget ? document.querySelector(props.scrollTarget) : window
  target?.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  const target = props.scrollTarget ? document.querySelector(props.scrollTarget) : window
  target?.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="trx-btt-fade">
      <button v-if="visible" class="trx-btt" title="Voltar ao topo" @click="scrollToTop">
        <i class="pi pi-arrow-up"></i>
      </button>
    </Transition>
  </Teleport>
</template>

<style scoped>
.trx-btt {
  position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 400;
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--trx-accent-color); color: white;
  border: none; cursor: pointer; font-size: 0.9rem;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 14px rgba(0,0,0,0.2); transition: transform 0.2s, box-shadow 0.2s;
}
.trx-btt:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.25); }
.trx-btt-fade-enter-active, .trx-btt-fade-leave-active { transition: all 0.25s; }
.trx-btt-fade-enter-from, .trx-btt-fade-leave-to { opacity: 0; transform: translateY(12px); }
</style>
