<script setup lang="ts">
import PvChip from 'primevue/chip'
</script>
<template>
  <PvChip v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvChip>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
