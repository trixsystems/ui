<script setup lang="ts">
import PvRow from 'primevue/row'
</script>
<template>
  <PvRow v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvRow>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
