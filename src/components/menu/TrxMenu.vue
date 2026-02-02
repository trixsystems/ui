<script setup lang="ts">
import PvMenu from 'primevue/menu'
</script>
<template>
  <PvMenu v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvMenu>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
