<script setup lang="ts">
import PvInputOtp from 'primevue/inputotp'
</script>
<template>
  <PvInputOtp v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvInputOtp>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
