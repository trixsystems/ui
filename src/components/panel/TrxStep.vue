<script setup lang="ts">
import PvStep from 'primevue/step'
</script>
<template>
  <PvStep v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvStep>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
