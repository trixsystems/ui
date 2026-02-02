<script setup lang="ts">
import PvSkeleton from 'primevue/skeleton'
</script>
<template>
  <PvSkeleton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvSkeleton>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
