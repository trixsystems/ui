<script setup lang="ts">
import PvTerminal from 'primevue/terminal'
</script>
<template>
  <PvTerminal v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTerminal>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
