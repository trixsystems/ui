<script setup lang="ts">
import PvStepList from 'primevue/steplist'
</script>
<template>
  <PvStepList v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvStepList>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
