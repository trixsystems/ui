<script setup lang="ts">
import PvSplitButton from 'primevue/splitbutton'
</script>
<template>
  <PvSplitButton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvSplitButton>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
