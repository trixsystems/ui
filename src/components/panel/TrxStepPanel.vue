<script setup lang="ts">
import PvStepPanel from 'primevue/steppanel'
</script>
<template>
  <PvStepPanel v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvStepPanel>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
