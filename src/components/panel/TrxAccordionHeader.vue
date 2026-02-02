<script setup lang="ts">
import PvAccordionHeader from 'primevue/accordionheader'
</script>
<template>
  <PvAccordionHeader v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvAccordionHeader>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
