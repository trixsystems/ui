<script setup lang="ts">
import PvTabPanel from 'primevue/tabpanel'
</script>
<template>
  <PvTabPanel v-bind="($attrs as any)">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTabPanel>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
