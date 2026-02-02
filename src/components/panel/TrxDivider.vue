<script setup lang="ts">
import PvDivider from 'primevue/divider'
</script>
<template>
  <PvDivider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvDivider>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
