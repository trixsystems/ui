<script setup lang="ts">
import PvDrawer from 'primevue/drawer'
</script>
<template>
  <PvDrawer v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvDrawer>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
