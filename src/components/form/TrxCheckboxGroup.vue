<script setup lang="ts">
import PvCheckboxGroup from 'primevue/checkboxgroup'
</script>
<template>
  <PvCheckboxGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvCheckboxGroup>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
