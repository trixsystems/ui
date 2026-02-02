<script setup lang="ts">
import PvSteps from 'primevue/steps'
</script>
<template>
  <PvSteps v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvSteps>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
