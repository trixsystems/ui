<script setup lang="ts">
import PvSplitterPanel from 'primevue/splitterpanel'
</script>
<template>
  <PvSplitterPanel v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvSplitterPanel>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
