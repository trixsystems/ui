<script setup lang="ts">
import PvScrollTop from 'primevue/scrolltop'
</script>
<template>
  <PvScrollTop v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvScrollTop>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
