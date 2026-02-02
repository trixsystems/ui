<script setup lang="ts">
import PvColorPicker from 'primevue/colorpicker'
</script>
<template>
  <PvColorPicker v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvColorPicker>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
