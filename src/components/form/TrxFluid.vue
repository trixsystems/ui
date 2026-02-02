<script setup lang="ts">
import PvFluid from 'primevue/fluid'
</script>
<template>
  <PvFluid v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvFluid>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
