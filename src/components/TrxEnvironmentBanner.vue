<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
  env?: 'development' | 'staging' | 'homologation' | 'production'
  message?: string
  dismissible?: boolean
}>(), {
  env: 'development',
  dismissible: true,
})

const labels: Record<string, string> = {
  development: 'DESENVOLVIMENTO',
  staging: 'STAGING',
  homologation: 'HOMOLOGAÇÃO',
  production: 'PRODUÇÃO',
}

const icons: Record<string, string> = {
  development: 'pi pi-code',
  staging: 'pi pi-server',
  homologation: 'pi pi-check-circle',
  production: 'pi pi-globe',
}

const visible = ref(true)
</script>

<template>
  <Teleport to="body">
    <Transition name="trx-env-slide">
      <div
        v-if="visible && env !== 'production'"
        class="trx-env-banner"
        :class="`trx-env-banner--${env}`"
        role="banner"
      >
        <i :class="icons[env]" class="trx-env-banner__icon"></i>
        <span class="trx-env-banner__label">{{ labels[env] }}</span>
        <span v-if="message" class="trx-env-banner__msg">— {{ message }}</span>
        <button v-if="dismissible" class="trx-env-banner__close" @click="visible = false" title="Fechar">
          <i class="pi pi-times"></i>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.trx-env-banner {
  position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
  display: flex; align-items: center; gap: 0.4rem;
  padding: 0.3rem 1rem; font-size: 0.78rem; font-weight: 600;
  letter-spacing: 0.03em;
}
.trx-env-banner--development { background: #f97316; color: white; }
.trx-env-banner--staging { background: #8b5cf6; color: white; }
.trx-env-banner--homologation { background: #eab308; color: #1a1a1a; }
.trx-env-banner__icon { font-size: 0.8rem; }
.trx-env-banner__label { font-weight: 700; }
.trx-env-banner__msg { font-weight: 400; opacity: 0.9; }
.trx-env-banner__close {
  margin-left: auto; background: none; border: none; cursor: pointer;
  color: inherit; opacity: 0.7; font-size: 0.75rem; padding: 0.1rem 0.3rem;
  border-radius: 4px; transition: opacity 0.15s;
}
.trx-env-banner__close:hover { opacity: 1; }
.trx-env-slide-enter-active, .trx-env-slide-leave-active { transition: all 0.25s; }
.trx-env-slide-enter-from, .trx-env-slide-leave-to { transform: translateY(-100%); opacity: 0; }
</style>
