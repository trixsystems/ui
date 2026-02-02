<script setup lang="ts">
import PvMeterGroup from 'primevue/metergroup'
</script>
<template>
  <PvMeterGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvMeterGroup>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
