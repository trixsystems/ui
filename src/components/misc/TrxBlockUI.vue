<script setup lang="ts">
import PvBlockUI from 'primevue/blockui'
</script>
<template>
  <PvBlockUI v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvBlockUI>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
