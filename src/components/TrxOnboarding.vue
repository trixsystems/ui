<script setup lang="ts">
import { computed } from 'vue'

export interface TrxOnboardingStep {
  title: string
  description: string
  icon?: string
  image?: string
}

const props = withDefaults(defineProps<{
  steps?: TrxOnboardingStep[]
  modelValue?: number
  title?: string
  finishLabel?: string
  skipLabel?: string
  skippable?: boolean
}>(), {
  steps: () => [],
  modelValue: 0,
  title: 'Bem-vindo!',
  finishLabel: 'Começar',
  skipLabel: 'Pular',
  skippable: true,
})

const emit = defineEmits<{
  'update:modelValue': [step: number]
  finish: []
  skip: []
}>()

const current = computed(() => props.modelValue)
const step = computed(() => props.steps[current.value])
const isLast = computed(() => current.value >= props.steps.length - 1)

function next() {
  if (isLast.value) emit('finish')
  else emit('update:modelValue', current.value + 1)
}

function prev() {
  if (current.value > 0) emit('update:modelValue', current.value - 1)
}

function goTo(i: number) {
  emit('update:modelValue', i)
}
</script>

<template>
  <div class="trx-onboarding">
    <div class="trx-onboarding__header">
      <span class="trx-onboarding__title-top">{{ title }}</span>
      <button v-if="skippable && !isLast" class="trx-onboarding__skip" @click="emit('skip')">
        {{ skipLabel }}
      </button>
    </div>

    <div class="trx-onboarding__body" v-if="step">
      <div v-if="step.image" class="trx-onboarding__image-wrap">
        <img :src="step.image" :alt="step.title" class="trx-onboarding__image" />
      </div>
      <div v-else-if="step.icon" class="trx-onboarding__icon-wrap">
        <i :class="step.icon" class="trx-onboarding__icon"></i>
      </div>
      <h2 class="trx-onboarding__step-title">{{ step.title }}</h2>
      <p class="trx-onboarding__step-desc">{{ step.description }}</p>
    </div>

    <div class="trx-onboarding__dots">
      <button
        v-for="(_, i) in steps"
        :key="i"
        class="trx-onboarding__dot"
        :class="{ 'trx-onboarding__dot--active': i === current, 'trx-onboarding__dot--done': i < current }"
        @click="goTo(i)"
      ></button>
    </div>

    <div class="trx-onboarding__footer">
      <button
        v-if="current > 0"
        class="trx-onboarding__btn trx-onboarding__btn--prev"
        @click="prev"
      >
        <i class="pi pi-arrow-left"></i> Anterior
      </button>
      <span v-else></span>
      <button class="trx-onboarding__btn trx-onboarding__btn--next" @click="next">
        {{ isLast ? finishLabel : 'Próximo' }}
        <i v-if="!isLast" class="pi pi-arrow-right"></i>
        <i v-else class="pi pi-check"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-onboarding {
  display: flex; flex-direction: column;
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 16px; padding: 1.5rem; max-width: 480px; width: 100%;
  box-shadow: var(--trx-shadow-xl, 0 20px 60px rgba(0,0,0,0.12));
}
.trx-onboarding__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
.trx-onboarding__title-top { font-size: 0.775rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--trx-accent-color); }
.trx-onboarding__skip { background: none; border: none; cursor: pointer; font-size: 0.8rem; color: var(--trx-text-secondary); }
.trx-onboarding__skip:hover { color: var(--trx-text-primary); }
.trx-onboarding__body { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1rem; flex: 1; }
.trx-onboarding__image-wrap { width: 100%; border-radius: 10px; overflow: hidden; }
.trx-onboarding__image { width: 100%; height: 180px; object-fit: cover; }
.trx-onboarding__icon-wrap {
  width: 80px; height: 80px; border-radius: 50%;
  background: color-mix(in srgb, var(--trx-accent-color) 12%, transparent);
  color: var(--trx-accent-color); font-size: 2rem;
  display: flex; align-items: center; justify-content: center;
}
.trx-onboarding__step-title { font-size: 1.25rem; font-weight: 700; color: var(--trx-text-primary); margin: 0; }
.trx-onboarding__step-desc { font-size: 0.875rem; color: var(--trx-text-secondary); margin: 0; line-height: 1.6; }
.trx-onboarding__dots { display: flex; justify-content: center; gap: 0.4rem; margin: 1.25rem 0; }
.trx-onboarding__dot {
  width: 8px; height: 8px; border-radius: 50%; border: none; cursor: pointer;
  background: var(--trx-border-color); transition: all 0.2s;
}
.trx-onboarding__dot--active { width: 20px; border-radius: 4px; background: var(--trx-accent-color); }
.trx-onboarding__dot--done { background: color-mix(in srgb, var(--trx-accent-color) 40%, transparent); }
.trx-onboarding__footer { display: flex; justify-content: space-between; align-items: center; }
.trx-onboarding__btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.55rem 1.1rem; border-radius: 10px; font-size: 0.875rem; font-weight: 600;
  cursor: pointer; transition: all 0.15s; border: none;
}
.trx-onboarding__btn--prev { background: var(--trx-bg-secondary); color: var(--trx-text-secondary); border: 1px solid var(--trx-border-color); }
.trx-onboarding__btn--prev:hover { background: var(--trx-border-color); }
.trx-onboarding__btn--next { background: var(--trx-accent-color); color: white; }
.trx-onboarding__btn--next:hover { opacity: 0.9; }
</style>
