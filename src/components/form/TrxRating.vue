<script setup lang="ts">
import PvRating from 'primevue/rating'
</script>
<template>
  <PvRating v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvRating>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
