<script setup lang="ts">
import PvOrderList from 'primevue/orderlist'
</script>
<template>
  <PvOrderList v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvOrderList>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
