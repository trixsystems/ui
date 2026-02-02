<script setup lang="ts">
import PvTreeTable from 'primevue/treetable'
</script>
<template>
  <PvTreeTable v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTreeTable>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
