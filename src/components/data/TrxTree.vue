<script setup lang="ts">
import PvTree from 'primevue/tree'
</script>
<template>
  <PvTree v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTree>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
