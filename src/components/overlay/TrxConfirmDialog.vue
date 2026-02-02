<script setup lang="ts">
import PvConfirmDialog from 'primevue/confirmdialog'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  acceptLabel: 'Sim',
  rejectLabel: 'Não',
  ...attrs,
}))
</script>
<template>
  <PvConfirmDialog v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvConfirmDialog>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
