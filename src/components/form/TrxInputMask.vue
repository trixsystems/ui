<script setup lang="ts">
import PvInputMask from 'primevue/inputmask'
</script>
<template>
  <PvInputMask v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvInputMask>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
