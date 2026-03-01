<script setup lang="ts">
export interface TrxBreadcrumb {
  label: string
  to?: string
}

withDefaults(defineProps<{
  title?: string
  subtitle?: string
  loading?: boolean
  breadcrumbs?: TrxBreadcrumb[]
}>(), {})
</script>

<template>
  <div class="trx-page-layout">
    <div v-if="breadcrumbs?.length" class="trx-page-layout__breadcrumb">
      <template v-for="(crumb, i) in breadcrumbs" :key="i">
        <span v-if="i > 0" class="trx-page-layout__sep">/</span>
        <a v-if="crumb.to" class="trx-page-layout__crumb trx-page-layout__crumb--link" :href="crumb.to">{{ crumb.label }}</a>
        <span v-else class="trx-page-layout__crumb">{{ crumb.label }}</span>
      </template>
    </div>

    <div v-if="title || $slots.header" class="trx-page-layout__header">
      <div class="trx-page-layout__heading">
        <div v-if="loading" class="trx-page-layout__skeleton trx-page-layout__skeleton--title"></div>
        <template v-else>
          <h1 v-if="title" class="trx-page-layout__title">{{ title }}</h1>
          <p v-if="subtitle" class="trx-page-layout__subtitle">{{ subtitle }}</p>
        </template>
      </div>
      <div v-if="$slots.actions" class="trx-page-layout__actions">
        <slot name="actions" />
      </div>
      <slot name="header" />
    </div>

    <div class="trx-page-layout__content">
      <slot />
    </div>

    <div v-if="$slots.footer" class="trx-page-layout__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.trx-page-layout { display: flex; flex-direction: column; gap: 1.25rem; padding: 1.5rem; min-height: 100%; }

.trx-page-layout__breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--trx-text-secondary);
}

.trx-page-layout__sep { opacity: 0.5; }
.trx-page-layout__crumb--link { color: var(--trx-accent-color); text-decoration: none; }
.trx-page-layout__crumb--link:hover { text-decoration: underline; }

.trx-page-layout__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.trx-page-layout__heading { flex: 1; }

.trx-page-layout__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--trx-text-primary);
  margin: 0 0 0.25rem;
  line-height: 1.2;
}

.trx-page-layout__subtitle {
  font-size: 0.875rem;
  color: var(--trx-text-secondary);
  margin: 0;
}

.trx-page-layout__actions { display: flex; gap: 0.5rem; align-items: center; flex-shrink: 0; }

.trx-page-layout__content { flex: 1; }

.trx-page-layout__footer {
  padding-top: 1rem;
  border-top: 1px solid var(--trx-border-color);
}

.trx-page-layout__skeleton {
  border-radius: 4px;
  background: linear-gradient(90deg, var(--trx-bg-secondary) 25%, var(--trx-border-color) 50%, var(--trx-bg-secondary) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.trx-page-layout__skeleton--title { height: 2rem; width: 240px; margin-bottom: 0.5rem; }

@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
</style>
