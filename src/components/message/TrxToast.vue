<script setup lang="ts">
import PvToast from 'primevue/toast'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  position: 'top-right' as const,
  ...attrs,
}))
</script>
<template>
  <PvToast v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvToast>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
