<script setup lang="ts">
import PvTabs from 'primevue/tabs'
</script>
<template>
  <PvTabs v-bind="($attrs as any)">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvTabs>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
