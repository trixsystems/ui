<script setup lang="ts">
import PvPopover from 'primevue/popover'
</script>
<template>
  <PvPopover v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvPopover>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
