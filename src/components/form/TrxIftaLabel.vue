<script setup lang="ts">
import PvIftaLabel from 'primevue/iftalabel'
</script>
<template>
  <PvIftaLabel v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvIftaLabel>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
