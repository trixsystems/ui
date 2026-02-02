<script setup lang="ts">
import PvDeferredContent from 'primevue/deferredcontent'
</script>
<template>
  <PvDeferredContent v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvDeferredContent>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
