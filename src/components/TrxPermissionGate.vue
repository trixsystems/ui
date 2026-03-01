<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  permission: string | string[]
  userPermissions: string[]
  operator?: 'and' | 'or'
}>(), {
  operator: 'or',
})

const allowed = computed(() => {
  const perms = Array.isArray(props.permission) ? props.permission : [props.permission]
  if (props.operator === 'and') return perms.every(p => props.userPermissions.includes(p))
  return perms.some(p => props.userPermissions.includes(p))
})
</script>

<template>
  <slot v-if="allowed" />
  <slot v-else name="fallback" />
</template>
