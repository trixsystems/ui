<script setup lang="ts">
import PvTab from 'primevue/tab'
</script>
<template>
  <PvTab v-bind="($attrs as any)">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTab>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
