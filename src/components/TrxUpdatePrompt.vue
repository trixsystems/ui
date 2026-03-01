<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: boolean
  title?: string
  message?: string
  updateLabel?: string
  dismissLabel?: string
  version?: string
}>(), {
  modelValue: false,
  title: 'Atualização disponível',
  message: 'Uma nova versão do sistema está disponível.',
  updateLabel: 'Atualizar agora',
  dismissLabel: 'Depois',
})

const emit = defineEmits<{
  'update:modelValue': [v: boolean]
  update: []
  dismiss: []
}>()

function onUpdate() {
  emit('update')
  emit('update:modelValue', false)
}

function onDismiss() {
  emit('dismiss')
  emit('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="trx-upd-slide">
      <div v-if="modelValue" class="trx-upd" role="dialog" aria-live="polite">
        <div class="trx-upd__icon-wrap">
          <i class="pi pi-refresh trx-upd__icon"></i>
        </div>
        <div class="trx-upd__content">
          <p class="trx-upd__title">{{ title }}</p>
          <p class="trx-upd__msg">{{ message }}<span v-if="version" class="trx-upd__ver"> v{{ version }}</span></p>
        </div>
        <div class="trx-upd__actions">
          <button class="trx-upd__btn trx-upd__btn--update" @click="onUpdate">
            <i class="pi pi-check"></i> {{ updateLabel }}
          </button>
          <button class="trx-upd__btn trx-upd__btn--dismiss" @click="onDismiss">
            {{ dismissLabel }}
          </button>
        </div>
        <button class="trx-upd__close" @click="onDismiss" title="Fechar">
          <i class="pi pi-times"></i>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.trx-upd {
  position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999;
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 14px; padding: 1rem 1.25rem; max-width: 360px; width: 100%;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  display: flex; align-items: flex-start; gap: 0.75rem;
}
.trx-upd__icon-wrap {
  width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
  background: color-mix(in srgb, var(--trx-accent-color) 15%, transparent);
  display: flex; align-items: center; justify-content: center;
}
.trx-upd__icon { color: var(--trx-accent-color); font-size: 1.1rem; }
.trx-upd__content { flex: 1; min-width: 0; }
.trx-upd__title { margin: 0 0 0.2rem; font-size: 0.9rem; font-weight: 700; color: var(--trx-text-primary); }
.trx-upd__msg { margin: 0; font-size: 0.8rem; color: var(--trx-text-secondary); }
.trx-upd__ver { font-weight: 600; color: var(--trx-accent-color); }
.trx-upd__actions { display: flex; flex-direction: column; gap: 0.4rem; flex-shrink: 0; }
.trx-upd__btn { padding: 0.35rem 0.75rem; border-radius: 7px; border: none; font-size: 0.8rem; cursor: pointer; white-space: nowrap; display: flex; align-items: center; gap: 0.3rem; transition: opacity 0.15s; }
.trx-upd__btn--update { background: var(--trx-accent-color); color: white; font-weight: 600; }
.trx-upd__btn--update:hover { opacity: 0.88; }
.trx-upd__btn--dismiss { background: var(--trx-bg-secondary); color: var(--trx-text-secondary); }
.trx-upd__btn--dismiss:hover { color: var(--trx-text-primary); }
.trx-upd__close {
  position: absolute; top: 0.5rem; right: 0.5rem;
  background: none; border: none; cursor: pointer;
  color: var(--trx-text-secondary); font-size: 0.75rem; padding: 0.2rem;
}
.trx-upd__close:hover { color: var(--trx-text-primary); }
.trx-upd-slide-enter-active, .trx-upd-slide-leave-active { transition: all 0.3s ease; }
.trx-upd-slide-enter-from, .trx-upd-slide-leave-to { opacity: 0; transform: translateY(16px) scale(0.97); }
</style>
