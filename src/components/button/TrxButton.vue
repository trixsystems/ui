<script setup lang="ts">
import PvButton from 'primevue/button'
</script>
<template>
  <PvButton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvButton>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
