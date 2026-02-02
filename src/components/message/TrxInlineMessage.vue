<script setup lang="ts">
import PvInlineMessage from 'primevue/inlinemessage'
</script>
<template>
  <PvInlineMessage v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvInlineMessage>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
