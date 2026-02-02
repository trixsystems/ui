<script setup lang="ts">
import PvImageCompare from 'primevue/imagecompare'
</script>
<template>
  <PvImageCompare v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvImageCompare>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
