<script setup lang="ts">
import PvCascadeSelect from 'primevue/cascadeselect'
</script>
<template>
  <PvCascadeSelect v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvCascadeSelect>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
