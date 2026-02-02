<script setup lang="ts">
import PvProgressSpinner from 'primevue/progressspinner'
</script>
<template>
  <PvProgressSpinner v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvProgressSpinner>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
