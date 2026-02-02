<script setup lang="ts">
import PvRadioButtonGroup from 'primevue/radiobuttongroup'
</script>
<template>
  <PvRadioButtonGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvRadioButtonGroup>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
