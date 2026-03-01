<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  flag: string
  flags: Record<string, boolean>
}>()

const enabled = computed(() => props.flags[props.flag] === true)
</script>

<template>
  <slot v-if="enabled" />
  <slot v-else name="disabled" />
</template>
