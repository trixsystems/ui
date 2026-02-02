<script setup lang="ts">
import PvSpeedDial from 'primevue/speeddial'
</script>
<template>
  <PvSpeedDial v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvSpeedDial>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
