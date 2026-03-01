<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

withDefaults(defineProps<{
  position?: 'top' | 'bottom'
  reconnectLabel?: string
}>(), {
  position: 'top',
  reconnectLabel: 'Reconectando...',
})

const offline = ref(!navigator.onLine)
const reconnecting = ref(false)

function onOffline() { offline.value = true; reconnecting.value = false }
function onOnline() { reconnecting.value = true; setTimeout(() => { offline.value = false; reconnecting.value = false }, 1200) }

onMounted(() => {
  window.addEventListener('offline', onOffline)
  window.addEventListener('online', onOnline)
})
onBeforeUnmount(() => {
  window.removeEventListener('offline', onOffline)
  window.removeEventListener('online', onOnline)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="trx-offline-slide">
      <div
        v-if="offline || reconnecting"
        class="trx-offline"
        :class="[`trx-offline--${position}`, { 'trx-offline--reconnecting': reconnecting }]"
        role="status"
        aria-live="assertive"
      >
        <template v-if="reconnecting">
          <i class="pi pi-spin pi-spinner"></i>
          <span>{{ reconnectLabel }}</span>
        </template>
        <template v-else>
          <i class="pi pi-wifi"></i>
          <span>Sem conexão com a internet</span>
        </template>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.trx-offline {
  position: fixed; left: 0; right: 0; z-index: 9999;
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  padding: 0.5rem 1rem; font-size: 0.85rem; font-weight: 600;
  background: #1a1a2e; color: #e2e8f0;
}
.trx-offline--top { top: 0; }
.trx-offline--bottom { bottom: 0; }
.trx-offline--reconnecting { background: #1e3a5f; }
.trx-offline-slide-enter-active, .trx-offline-slide-leave-active { transition: all 0.3s; }
.trx-offline--top.trx-offline-slide-enter-from,
.trx-offline--top.trx-offline-slide-leave-to { transform: translateY(-100%); }
.trx-offline--bottom.trx-offline-slide-enter-from,
.trx-offline--bottom.trx-offline-slide-leave-to { transform: translateY(100%); }
</style>
