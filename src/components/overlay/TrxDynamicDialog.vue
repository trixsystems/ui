<script setup lang="ts">
import PvDynamicDialog from 'primevue/dynamicdialog'
</script>
<template>
  <PvDynamicDialog v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvDynamicDialog>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
