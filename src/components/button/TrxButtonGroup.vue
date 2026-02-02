<script setup lang="ts">
import PvButtonGroup from 'primevue/buttongroup'
</script>
<template>
  <PvButtonGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvButtonGroup>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
