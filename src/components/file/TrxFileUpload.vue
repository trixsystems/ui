<script setup lang="ts">
import PvFileUpload from 'primevue/fileupload'
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  chooseLabel: 'Escolher',
  uploadLabel: 'Enviar',
  cancelLabel: 'Cancelar',
  ...attrs,
}))
</script>
<template>
  <PvFileUpload v-bind="mergedAttrs">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </PvFileUpload>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
