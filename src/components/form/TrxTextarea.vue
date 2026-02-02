<script setup lang="ts">
import PvTextarea from 'primevue/textarea'
</script>
<template>
  <PvTextarea v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTextarea>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
