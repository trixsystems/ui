<script setup lang="ts">
import PvAutoComplete from 'primevue/autocomplete'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  placeholder: 'Buscar...',
  ...attrs,
}))
</script>
<template>
  <PvAutoComplete v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvAutoComplete>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
