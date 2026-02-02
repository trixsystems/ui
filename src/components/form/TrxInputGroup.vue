<script setup lang="ts">
import PvInputGroup from 'primevue/inputgroup'
</script>
<template>
  <PvInputGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvInputGroup>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
