<script setup lang="ts">
import PvPanelMenu from 'primevue/panelmenu'
</script>
<template>
  <PvPanelMenu v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvPanelMenu>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
