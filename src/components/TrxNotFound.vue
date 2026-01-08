<script setup lang="ts">
import Button from 'primevue/button'

withDefaults(defineProps<{
  code?: string | number
  title?: string
  message?: string
  buttonLabel?: string
  redirectTo?: string
}>(), {
  code: '404',
  title: 'Pagina nao encontrada',
  message: 'A pagina que voce esta procurando nao existe ou foi movida.',
  buttonLabel: 'Voltar ao Inicio',
  redirectTo: '/'
})
</script>

<template>
  <div class="trx-not-found">
    <div class="trx-not-found__content">
      <div class="trx-not-found__code">{{ code }}</div>
      <h1 class="trx-not-found__title">{{ title }}</h1>
      <p class="trx-not-found__message">{{ message }}</p>
      <router-link :to="redirectTo">
        <Button :label="buttonLabel" icon="pi pi-home" size="large" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.trx-not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--trx-bg-secondary);
}

.trx-not-found__content {
  text-align: center;
  padding: 2rem;
}

.trx-not-found__code {
  font-size: 8rem;
  font-weight: 800;
  color: var(--trx-accent-color);
  line-height: 1;
  margin-bottom: 1rem;
}

.dark .trx-not-found__code {
  background: var(--trx-gradient-primary, linear-gradient(135deg, #bd93f9 0%, #ff79c6 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.trx-not-found__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--trx-text-primary);
  margin-bottom: 0.75rem;
}

.trx-not-found__message {
  color: var(--trx-text-secondary);
  margin-bottom: 2rem;
  max-width: 400px;
}

.trx-not-found :deep(.p-button) {
  background: var(--trx-accent-color);
  border-color: var(--trx-accent-color);
}

.dark .trx-not-found :deep(.p-button) {
  background: linear-gradient(135deg, #bd93f9 0%, #a78bfa 100%);
  border: none;
}

.trx-not-found :deep(.p-button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.dark .trx-not-found :deep(.p-button:hover) {
  box-shadow: 0 4px 12px rgba(189, 147, 249, 0.4);
}
</style>
