<script setup lang="ts">
import PvConfirmPopup from 'primevue/confirmpopup'
</script>
<template>
  <PvConfirmPopup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvConfirmPopup>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
