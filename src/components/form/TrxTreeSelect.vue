<script setup lang="ts">
import PvTreeSelect from 'primevue/treeselect'
</script>
<template>
  <PvTreeSelect v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTreeSelect>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
