<script setup lang="ts">
import PvDataView from 'primevue/dataview'
</script>
<template>
  <PvDataView v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvDataView>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
