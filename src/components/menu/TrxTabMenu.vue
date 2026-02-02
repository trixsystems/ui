<script setup lang="ts">
import PvTabMenu from 'primevue/tabmenu'
</script>
<template>
  <PvTabMenu v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTabMenu>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
