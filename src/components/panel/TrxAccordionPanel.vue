<script setup lang="ts">
import PvAccordionPanel from 'primevue/accordionpanel'
</script>
<template>
  <PvAccordionPanel v-bind="($attrs as any)">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvAccordionPanel>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
