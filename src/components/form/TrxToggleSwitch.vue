<script setup lang="ts">
import PvToggleSwitch from 'primevue/toggleswitch'
</script>
<template>
  <PvToggleSwitch v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvToggleSwitch>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
