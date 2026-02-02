<script setup lang="ts">
import PvOverlayBadge from 'primevue/overlaybadge'
</script>
<template>
  <PvOverlayBadge v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvOverlayBadge>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
