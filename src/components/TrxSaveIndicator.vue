<script setup lang="ts">
import { computed } from 'vue'

type TrxSaveState = 'idle' | 'saving' | 'saved' | 'error'

const props = withDefaults(defineProps<{
  state: TrxSaveState
  label?: string
  errorMessage?: string
}>(), {})

const config = computed(() => {
  const map: Record<TrxSaveState, { icon: string; text: string; color: string }> = {
    idle:   { icon: '',                          text: props.label ?? '',           color: 'var(--trx-text-secondary)' },
    saving: { icon: 'pi pi-spin pi-spinner',     text: 'Salvando...',               color: 'var(--trx-text-secondary)' },
    saved:  { icon: 'pi pi-check-circle',        text: props.label ?? 'Salvo',      color: 'var(--trx-success-color)' },
    error:  { icon: 'pi pi-exclamation-circle',  text: props.errorMessage ?? 'Erro ao salvar', color: 'var(--trx-danger-color)' },
  }
  return map[props.state]
})
</script>

<template>
  <Transition name="trx-save-fade" mode="out-in">
    <span v-if="state !== 'idle'" :key="state" class="trx-save-indicator" :style="{ color: config.color }">
      <i v-if="config.icon" :class="config.icon"></i>
      <span v-if="config.text">{{ config.text }}</span>
    </span>
  </Transition>
</template>

<style scoped>
.trx-save-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.trx-save-indicator i { font-size: 0.875rem; }

.trx-save-fade-enter-active, .trx-save-fade-leave-active { transition: all 0.2s ease; }
.trx-save-fade-enter-from, .trx-save-fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
