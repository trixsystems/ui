<script setup lang="ts">
import PvBadge from 'primevue/badge'
</script>
<template>
  <PvBadge v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvBadge>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
