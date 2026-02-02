<script setup lang="ts">
import PvPanel from 'primevue/panel'
</script>
<template>
  <PvPanel v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvPanel>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
