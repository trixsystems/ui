<script setup lang="ts">
import { ref, computed } from 'vue'

export interface TrxWizardStep {
  key: string
  label: string
  icon?: string
  optional?: boolean
}

const props = withDefaults(defineProps<{
  steps?: TrxWizardStep[]
  modelValue?: number
  canGoNext?: boolean
  loading?: boolean
}>(), {
  steps: () => [],
  modelValue: 0,
  canGoNext: true,
})

const emit = defineEmits<{
  'update:modelValue': [step: number]
  next: [step: number]
  prev: [step: number]
  finish: []
}>()

const visited = ref(new Set([0]))

function goTo(i: number) {
  if (i < 0 || i >= props.steps.length) return
  if (i > (props.modelValue ?? 0) && !props.canGoNext) return
  visited.value.add(i)
  emit('update:modelValue', i)
}

function next() {
  if (!props.canGoNext) return
  const next = (props.modelValue ?? 0) + 1
  if (next >= props.steps.length) { emit('finish'); return }
  visited.value.add(next)
  emit('update:modelValue', next)
  emit('next', next)
}

function prev() {
  const prev = (props.modelValue ?? 0) - 1
  if (prev < 0) return
  emit('update:modelValue', prev)
  emit('prev', prev)
}

const isFirst = computed(() => (props.modelValue ?? 0) === 0)
const isLast  = computed(() => (props.modelValue ?? 0) === props.steps.length - 1)
</script>

<template>
  <div class="trx-wizard">
    <div class="trx-wizard__steps">
      <template v-for="(step, i) in steps" :key="step.key">
        <div
          class="trx-wizard__step"
          :class="{
            'trx-wizard__step--active':    i === modelValue,
            'trx-wizard__step--completed': i < (modelValue ?? 0),
            'trx-wizard__step--visited':   visited.has(i),
          }"
          @click="goTo(i)"
        >
          <div class="trx-wizard__step-circle">
            <i v-if="i < (modelValue ?? 0)" class="pi pi-check"></i>
            <i v-else-if="step.icon" :class="step.icon"></i>
            <span v-else>{{ i + 1 }}</span>
          </div>
          <div class="trx-wizard__step-info">
            <span class="trx-wizard__step-label">{{ step.label }}</span>
            <span v-if="step.optional" class="trx-wizard__step-optional">Opcional</span>
          </div>
        </div>
        <div v-if="i < steps.length - 1" class="trx-wizard__connector"
          :class="{ 'trx-wizard__connector--done': i < (modelValue ?? 0) }"></div>
      </template>
    </div>

    <div class="trx-wizard__content">
      <slot :step="steps[modelValue ?? 0]" :index="modelValue ?? 0" />
    </div>

    <div class="trx-wizard__footer">
      <button class="trx-wizard__btn trx-wizard__btn--secondary" :disabled="isFirst" @click="prev">
        <i class="pi pi-chevron-left"></i> Anterior
      </button>
      <span class="trx-wizard__counter">{{ (modelValue ?? 0) + 1 }} / {{ steps.length }}</span>
      <button
        class="trx-wizard__btn trx-wizard__btn--primary"
        :disabled="!canGoNext || loading"
        @click="next"
      >
        <i v-if="loading" class="pi pi-spin pi-spinner"></i>
        <template v-else>
          {{ isLast ? 'Concluir' : 'Próximo' }}
          <i v-if="!isLast" class="pi pi-chevron-right"></i>
          <i v-else class="pi pi-check"></i>
        </template>
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-wizard { display: flex; flex-direction: column; gap: 1.5rem; }
.trx-wizard__steps { display: flex; align-items: center; }
.trx-wizard__step {
  display: flex; align-items: center; gap: 0.5rem; cursor: pointer;
  flex-shrink: 0; transition: opacity 0.15s;
}
.trx-wizard__step:not(.trx-wizard__step--visited):not(.trx-wizard__step--active) { opacity: 0.5; cursor: default; }
.trx-wizard__step-circle {
  width: 32px; height: 32px; border-radius: 50%;
  border: 2px solid var(--trx-border-color);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; font-weight: 700; color: var(--trx-text-secondary);
  background: var(--trx-bg-card); flex-shrink: 0; transition: all 0.2s;
}
.trx-wizard__step--active .trx-wizard__step-circle {
  border-color: var(--trx-accent-color); color: var(--trx-accent-color);
  background: color-mix(in srgb, var(--trx-accent-color) 10%, transparent);
}
.trx-wizard__step--completed .trx-wizard__step-circle {
  border-color: var(--trx-accent-color); background: var(--trx-accent-color); color: white;
}
.trx-wizard__step-info { display: none; }
@media (min-width: 640px) {
  .trx-wizard__step-info { display: flex; flex-direction: column; }
}
.trx-wizard__step-label { font-size: 0.8rem; font-weight: 600; color: var(--trx-text-primary); white-space: nowrap; }
.trx-wizard__step--active .trx-wizard__step-label { color: var(--trx-accent-color); }
.trx-wizard__step-optional { font-size: 0.7rem; color: var(--trx-text-secondary); }
.trx-wizard__connector {
  flex: 1; height: 2px; background: var(--trx-border-color); margin: 0 0.5rem; transition: background 0.3s;
}
.trx-wizard__connector--done { background: var(--trx-accent-color); }
.trx-wizard__content { flex: 1; }
.trx-wizard__footer {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 1rem; border-top: 1px solid var(--trx-border-color); gap: 0.75rem;
}
.trx-wizard__counter { font-size: 0.8rem; color: var(--trx-text-secondary); }
.trx-wizard__btn {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.45rem 0.875rem; border-radius: 8px;
  font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.15s;
}
.trx-wizard__btn:disabled { opacity: 0.4; cursor: not-allowed; }
.trx-wizard__btn--secondary { border: 1px solid var(--trx-border-color); background: transparent; color: var(--trx-text-secondary); }
.trx-wizard__btn--secondary:hover:not(:disabled) { background: var(--trx-bg-secondary); }
.trx-wizard__btn--primary { border: none; background: var(--trx-accent-color); color: white; }
.trx-wizard__btn--primary:hover:not(:disabled) { opacity: 0.9; }
</style>
