<script setup lang="ts">
import PvInputIcon from 'primevue/inputicon'
</script>
<template>
  <PvInputIcon v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvInputIcon>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
