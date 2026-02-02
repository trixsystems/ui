<script setup lang="ts">
import PvInputNumber from 'primevue/inputnumber'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  locale: 'pt-BR',
  minFractionDigits: 2,
  ...attrs,
}))
</script>
<template>
  <PvInputNumber v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvInputNumber>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
