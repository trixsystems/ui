<script setup lang="ts">
import PvStepper from 'primevue/stepper'
</script>
<template>
  <PvStepper v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvStepper>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
