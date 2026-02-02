<script setup lang="ts">
import PvSelectButton from 'primevue/selectbutton'
</script>
<template>
  <PvSelectButton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvSelectButton>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
