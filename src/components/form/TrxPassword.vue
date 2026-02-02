<script setup lang="ts">
import PvPassword from 'primevue/password'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  weakLabel: 'Fraco',
  mediumLabel: 'Médio',
  strongLabel: 'Forte',
  ...attrs,
}))
</script>
<template>
  <PvPassword v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvPassword>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
