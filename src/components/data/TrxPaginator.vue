<script setup lang="ts">
import PvPaginator from 'primevue/paginator'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  rowsPerPageOptions: [10, 25, 50],
  ...attrs,
}))
</script>
<template>
  <PvPaginator v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvPaginator>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
