<script setup lang="ts">
import PvListbox from 'primevue/listbox'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  emptyMessage: 'Nenhum resultado',
  ...attrs,
}))
</script>
<template>
  <PvListbox v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvListbox>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
