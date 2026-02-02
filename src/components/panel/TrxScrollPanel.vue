<script setup lang="ts">
import PvScrollPanel from 'primevue/scrollpanel'
</script>
<template>
  <PvScrollPanel v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvScrollPanel>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
