<script setup lang="ts">
import PvMegaMenu from 'primevue/megamenu'
</script>
<template>
  <PvMegaMenu v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvMegaMenu>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
