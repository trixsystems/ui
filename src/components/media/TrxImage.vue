<script setup lang="ts">
import PvImage from 'primevue/image'
</script>
<template>
  <PvImage v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvImage>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
