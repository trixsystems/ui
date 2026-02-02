<script setup lang="ts">
import PvColumnGroup from 'primevue/columngroup'
</script>
<template>
  <PvColumnGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvColumnGroup>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
