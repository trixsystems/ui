<script setup lang="ts">
import PvGalleria from 'primevue/galleria'
</script>
<template>
  <PvGalleria v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvGalleria>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
