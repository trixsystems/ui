<script setup lang="ts">
import PvToolbar from 'primevue/toolbar'
</script>
<template>
  <PvToolbar v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvToolbar>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
