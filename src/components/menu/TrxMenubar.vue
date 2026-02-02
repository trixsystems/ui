<script setup lang="ts">
import PvMenubar from 'primevue/menubar'
</script>
<template>
  <PvMenubar v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvMenubar>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
