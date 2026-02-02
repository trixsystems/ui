<script setup lang="ts">
import PvProgressBar from 'primevue/progressbar'
</script>
<template>
  <PvProgressBar v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvProgressBar>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
