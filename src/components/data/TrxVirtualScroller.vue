<script setup lang="ts">
import PvVirtualScroller from 'primevue/virtualscroller'
</script>
<template>
  <PvVirtualScroller v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvVirtualScroller>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
