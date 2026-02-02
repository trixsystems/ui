<script setup lang="ts">
import PvInplace from 'primevue/inplace'
</script>
<template>
  <PvInplace v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvInplace>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
