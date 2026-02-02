<script setup lang="ts">
import PvCarousel from 'primevue/carousel'
</script>
<template>
  <PvCarousel v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvCarousel>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
