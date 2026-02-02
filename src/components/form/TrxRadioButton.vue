<script setup lang="ts">
import PvRadioButton from 'primevue/radiobutton'
</script>
<template>
  <PvRadioButton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvRadioButton>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
