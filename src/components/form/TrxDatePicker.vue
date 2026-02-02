<script setup lang="ts">
import PvDatePicker from 'primevue/datepicker'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  dateFormat: 'dd/mm/yy',
  showIcon: true,
  ...attrs,
}))
</script>
<template>
  <PvDatePicker v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvDatePicker>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
