<script setup lang="ts">
import PvKnob from 'primevue/knob'
</script>
<template>
  <PvKnob v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvKnob>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
