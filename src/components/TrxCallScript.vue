<script setup lang="ts">
import { ref } from 'vue'

export interface TrxScriptStep {
  id: string
  title: string
  content: string
  type?: 'info' | 'question' | 'action'
}

const props = withDefaults(defineProps<{
  steps?: TrxScriptStep[]
  title?: string
}>(), {
  steps: () => [],
  title: 'Script de Atendimento',
})

const emit = defineEmits<{ complete: []; stepChange: [index: number] }>()

const current = ref(0)

function next() {
  if (current.value < props.steps.length - 1) {
    current.value++
    emit('stepChange', current.value)
  } else {
    emit('complete')
  }
}

function prev() {
  if (current.value > 0) {
    current.value--
    emit('stepChange', current.value)
  }
}

const typeIcon: Record<string, string> = {
  info: 'pi pi-info-circle',
  question: 'pi pi-question-circle',
  action: 'pi pi-check-circle',
}
</script>

<template>
  <div class="trx-call-script">
    <div class="trx-call-script__header">
      <span class="trx-call-script__title">{{ title }}</span>
      <span class="trx-call-script__progress">{{ current + 1 }} / {{ steps.length }}</span>
    </div>
    <div class="trx-call-script__progress-bar">
      <div class="trx-call-script__progress-fill" :style="{ width: `${((current + 1) / steps.length) * 100}%` }"></div>
    </div>
    <div v-if="steps[current]" class="trx-call-script__step">
      <div class="trx-call-script__step-header">
        <i :class="typeIcon[steps[current].type ?? 'info']"></i>
        <h4 class="trx-call-script__step-title">{{ steps[current].title }}</h4>
      </div>
      <p class="trx-call-script__step-content">{{ steps[current].content }}</p>
    </div>
    <div v-else class="trx-call-script__empty">
      <i class="pi pi-file-edit"></i>
      <span>Nenhum script disponível</span>
    </div>
    <div class="trx-call-script__nav">
      <button class="trx-call-script__btn trx-call-script__btn--secondary" :disabled="current === 0" @click="prev">
        <i class="pi pi-chevron-left"></i> Anterior
      </button>
      <button class="trx-call-script__btn trx-call-script__btn--primary" @click="next">
        {{ current === steps.length - 1 ? 'Concluir' : 'Próximo' }}
        <i v-if="current < steps.length - 1" class="pi pi-chevron-right"></i>
        <i v-else class="pi pi-check"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-call-script {
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 12px;
  overflow: hidden;
}
.trx-call-script__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.875rem 1rem 0.5rem;
}
.trx-call-script__title { font-size: 0.875rem; font-weight: 700; color: var(--trx-text-primary); }
.trx-call-script__progress { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-call-script__progress-bar { height: 3px; background: var(--trx-bg-secondary); }
.trx-call-script__progress-fill { height: 100%; background: var(--trx-accent-color); transition: width 0.3s; }
.trx-call-script__step { padding: 1rem; min-height: 120px; }
.trx-call-script__step-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; color: var(--trx-accent-color); }
.trx-call-script__step-title { margin: 0; font-size: 0.9rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-call-script__step-content { font-size: 0.875rem; color: var(--trx-text-secondary); line-height: 1.6; margin: 0; }
.trx-call-script__empty {
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  padding: 2rem; color: var(--trx-text-secondary); font-size: 0.875rem;
}
.trx-call-script__nav {
  display: flex; justify-content: space-between; gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--trx-border-color);
  background: var(--trx-bg-secondary);
}
.trx-call-script__btn {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.4rem 0.875rem;
  border-radius: 8px; border: 1px solid var(--trx-border-color);
  font-size: 0.825rem; font-weight: 500; cursor: pointer; transition: all 0.15s;
}
.trx-call-script__btn:disabled { opacity: 0.4; cursor: not-allowed; }
.trx-call-script__btn--secondary { background: transparent; color: var(--trx-text-secondary); }
.trx-call-script__btn--secondary:hover:not(:disabled) { background: var(--trx-bg-card); }
.trx-call-script__btn--primary { background: var(--trx-accent-color); color: white; border-color: var(--trx-accent-color); margin-left: auto; }
.trx-call-script__btn--primary:hover { opacity: 0.9; }
</style>
