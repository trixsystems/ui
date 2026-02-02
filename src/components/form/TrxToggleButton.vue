<script setup lang="ts">
import PvToggleButton from 'primevue/togglebutton'
</script>
<template>
  <PvToggleButton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvToggleButton>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
