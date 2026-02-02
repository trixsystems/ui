<script setup lang="ts">
import PvDialog from 'primevue/dialog'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  modal: true,
  closable: true,
  draggable: false,
  ...attrs,
}))
</script>
<template>
  <PvDialog v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvDialog>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
