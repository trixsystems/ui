<script setup lang="ts">
import PvInputChips from 'primevue/inputchips'
</script>
<template>
  <PvInputChips v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvInputChips>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
