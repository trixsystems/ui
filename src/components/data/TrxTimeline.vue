<script setup lang="ts">
import PvTimeline from 'primevue/timeline'
</script>
<template>
  <PvTimeline v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTimeline>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
