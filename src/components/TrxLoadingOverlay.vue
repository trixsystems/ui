<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'

defineProps<{
  visible: boolean
  message?: string
}>()
</script>

<template>
  <Transition name="fade">
    <div v-if="visible" class="trx-loading-overlay">
      <div class="trx-loading-overlay__content">
        <ProgressSpinner
          style="width: 50px; height: 50px"
          strokeWidth="4"
        />
        <p v-if="message" class="trx-loading-overlay__message">{{ message }}</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.trx-loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.trx-loading-overlay__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.trx-loading-overlay__message {
  color: white;
  font-size: 1rem;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
