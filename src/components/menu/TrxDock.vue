<script setup lang="ts">
import PvDock from 'primevue/dock'
</script>
<template>
  <PvDock v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvDock>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
