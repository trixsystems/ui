<script setup lang="ts">
import PvSelect from 'primevue/select'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  placeholder: 'Selecione...',
  emptyMessage: 'Nenhum resultado',
  ...attrs,
}))
</script>
<template>
  <PvSelect v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvSelect>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
