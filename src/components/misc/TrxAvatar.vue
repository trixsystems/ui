<script setup lang="ts">
import PvAvatar from 'primevue/avatar'
</script>
<template>
  <PvAvatar v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvAvatar>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
