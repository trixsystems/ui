<script setup lang="ts">
import { computed } from 'vue'

export type TrxErrorCode = 500 | 403 | 503 | 404

const props = withDefaults(
  defineProps<{
    code?: TrxErrorCode
    title?: string
    description?: string
    /** Exibe botão de voltar */
    showBack?: boolean
    /** Exibe botão de tentar novamente */
    showRetry?: boolean
  }>(),
  { code: 500, showBack: true, showRetry: true },
)

const emit = defineEmits<{
  back: []
  retry: []
}>()

const config = computed(() => {
  const map: Record<TrxErrorCode, { icon: string; title: string; description: string }> = {
    500: {
      icon: 'pi pi-server',
      title: 'Erro Interno do Servidor',
      description: 'Algo deu errado no servidor. Nossa equipe já foi notificada.',
    },
    403: {
      icon: 'pi pi-lock',
      title: 'Acesso Negado',
      description: 'Você não tem permissão para acessar este recurso.',
    },
    503: {
      icon: 'pi pi-wrench',
      title: 'Em Manutenção',
      description: 'O sistema está temporariamente indisponível. Tente novamente em alguns minutos.',
    },
    404: {
      icon: 'pi pi-map-marker',
      title: 'Página Não Encontrada',
      description: 'A página que você está procurando não existe ou foi movida.',
    },
  }
  return map[props.code]
})
</script>

<template>
  <div class="trx-error" role="main">
    <div class="trx-error__inner">
      <div class="trx-error__icon-wrap">
        <i :class="['trx-error__icon', config.icon]" aria-hidden="true" />
        <span class="trx-error__code">{{ code }}</span>
      </div>

      <h1 class="trx-error__title">{{ title ?? config.title }}</h1>
      <p class="trx-error__desc">{{ description ?? config.description }}</p>

      <div v-if="$slots.default" class="trx-error__content">
        <slot />
      </div>

      <div class="trx-error__actions">
        <button
          v-if="showBack"
          type="button"
          class="trx-error__btn trx-error__btn--secondary"
          @click="emit('back')"
        >
          <i class="pi pi-arrow-left" aria-hidden="true" />
          Voltar
        </button>
        <button
          v-if="showRetry"
          type="button"
          class="trx-error__btn trx-error__btn--primary"
          @click="emit('retry')"
        >
          <i class="pi pi-refresh" aria-hidden="true" />
          Tentar novamente
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-error {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
}

.trx-error__inner {
  text-align: center;
  max-width: 480px;
}

.trx-error__icon-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: var(--trx-bg-tertiary);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.trx-error__icon {
  font-size: 2.5rem;
  color: var(--trx-text-muted);
}

.trx-error__code {
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  background: var(--trx-danger-color);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.125rem 0.375rem;
  border-radius: 20px;
  line-height: 1.4;
}

.trx-error__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--trx-text-primary);
  margin: 0 0 0.75rem;
}

.trx-error__desc {
  font-size: 0.9375rem;
  color: var(--trx-text-secondary);
  line-height: 1.6;
  margin: 0 0 2rem;
}

.trx-error__content { margin-bottom: 1.5rem; }

.trx-error__actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.trx-error__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: all 0.2s;
}

.trx-error__btn--primary {
  background: var(--trx-accent-color);
  color: var(--trx-bg-primary);
}
.trx-error__btn--primary:hover {
  background: var(--trx-accent-hover);
}

.trx-error__btn--secondary {
  background: var(--trx-bg-tertiary);
  color: var(--trx-text-primary);
  border: 1px solid var(--trx-border-color);
}
.trx-error__btn--secondary:hover {
  background: var(--trx-border-color);
}
</style>
