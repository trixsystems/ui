<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'icon'
}>()
</script>

<template>
  <div
    class="trx-logo"
    :class="[
      `trx-logo--${size || 'md'}`,
      `trx-logo--${variant || 'full'}`
    ]"
  >
    <svg viewBox="0 0 120 40" class="trx-logo__svg">
      <!-- TRX Text -->
      <text
        x="10"
        y="30"
        class="trx-logo__text"
        font-family="Inter, system-ui, sans-serif"
        font-weight="700"
      >
        TRX
      </text>
    </svg>
  </div>
</template>

<style scoped>
.trx-logo {
  display: inline-flex;
  align-items: center;
}

.trx-logo__svg {
  fill: currentColor;
}

.trx-logo__text {
  fill: var(--trx-text-primary, currentColor);
}

.dark .trx-logo__text {
  fill: var(--dracula-purple, #bd93f9);
}

/* Sizes */
.trx-logo--sm .trx-logo__svg {
  width: 60px;
  height: 20px;
}

.trx-logo--md .trx-logo__svg {
  width: 90px;
  height: 30px;
}

.trx-logo--lg .trx-logo__svg {
  width: 120px;
  height: 40px;
}

/* Icon variant */
.trx-logo--icon .trx-logo__svg {
  width: 40px;
}
</style>
