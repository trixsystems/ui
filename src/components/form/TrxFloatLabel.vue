<script setup lang="ts">
import PvFloatLabel from 'primevue/floatlabel'
</script>
<template>
  <PvFloatLabel v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvFloatLabel>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
