<script setup lang="ts">
import PvTag from 'primevue/tag'
</script>
<template>
  <PvTag v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTag>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
