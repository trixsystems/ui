<script setup lang="ts">
import PvStepPanels from 'primevue/steppanels'
</script>
<template>
  <PvStepPanels v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvStepPanels>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
