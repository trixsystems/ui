<script setup lang="ts">
import PvInputText from 'primevue/inputtext'
</script>
<template>
  <PvInputText v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvInputText>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
