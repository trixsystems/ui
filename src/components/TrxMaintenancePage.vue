<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  message?: string
  estimatedTime?: string
  showCountdown?: boolean
  logoSrc?: string
}>(), {
  title: 'Em Manutenção',
  message: 'Estamos trabalhando para melhorar sua experiência. Voltaremos em breve.',
})
</script>

<template>
  <div class="trx-maintenance">
    <div class="trx-maintenance__card">
      <img v-if="logoSrc" :src="logoSrc" class="trx-maintenance__logo" alt="Logo" />
      <div class="trx-maintenance__icon">
        <i class="pi pi-wrench"></i>
      </div>
      <h1 class="trx-maintenance__title">{{ title }}</h1>
      <p class="trx-maintenance__message">{{ message }}</p>
      <div v-if="estimatedTime" class="trx-maintenance__eta">
        <i class="pi pi-clock"></i>
        <span>Previsão de retorno: <strong>{{ estimatedTime }}</strong></span>
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.trx-maintenance {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: var(--trx-bg-secondary); padding: 2rem;
}
.trx-maintenance__card {
  display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 20px; padding: 3rem 2.5rem; text-align: center;
  max-width: 480px; width: 100%;
  box-shadow: var(--trx-shadow-xl, 0 20px 60px rgba(0,0,0,0.1));
}
.trx-maintenance__logo { max-height: 48px; }
.trx-maintenance__icon {
  width: 80px; height: 80px; border-radius: 50%;
  background: color-mix(in srgb, var(--trx-warning-color) 12%, transparent);
  color: var(--trx-warning-color); font-size: 2rem;
  display: flex; align-items: center; justify-content: center;
  animation: wrench 2s ease-in-out infinite;
}
@keyframes wrench { 0%, 100% { transform: rotate(-10deg); } 50% { transform: rotate(10deg); } }
.trx-maintenance__title { font-size: 1.75rem; font-weight: 800; color: var(--trx-text-primary); margin: 0; }
.trx-maintenance__message { font-size: 0.9rem; color: var(--trx-text-secondary); line-height: 1.6; margin: 0; max-width: 360px; }
.trx-maintenance__eta {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.5rem 1rem; background: var(--trx-bg-secondary); border-radius: 8px;
  font-size: 0.875rem; color: var(--trx-text-secondary);
}
.trx-maintenance__eta strong { color: var(--trx-text-primary); }
</style>
