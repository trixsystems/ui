<script setup lang="ts">
import PvSlider from 'primevue/slider'
</script>
<template>
  <PvSlider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvSlider>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
