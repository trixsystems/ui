<script setup lang="ts">
import PvAccordionContent from 'primevue/accordioncontent'
</script>
<template>
  <PvAccordionContent v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvAccordionContent>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
