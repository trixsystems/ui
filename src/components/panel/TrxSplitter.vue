<script setup lang="ts">
import PvSplitter from 'primevue/splitter'
</script>
<template>
  <PvSplitter v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvSplitter>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
