<script setup lang="ts">
import PvIconField from 'primevue/iconfield'
</script>
<template>
  <PvIconField v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvIconField>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
