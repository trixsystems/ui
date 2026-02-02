<script setup lang="ts">
import PvBreadcrumb from 'primevue/breadcrumb'
</script>
<template>
  <PvBreadcrumb v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvBreadcrumb>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
