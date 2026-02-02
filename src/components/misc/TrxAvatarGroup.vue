<script setup lang="ts">
import PvAvatarGroup from 'primevue/avatargroup'
</script>
<template>
  <PvAvatarGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvAvatarGroup>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
