<script setup lang="ts">
import Tag from 'primevue/tag'

const props = defineProps<{
  status: string
  type?: 'success' | 'warning' | 'danger' | 'info' | 'secondary'
}>()

const severityMap: Record<string, string> = {
  // Common statuses
  active: 'success',
  ativo: 'success',
  online: 'success',
  connected: 'success',
  available: 'success',
  completed: 'success',
  aprovado: 'success',

  inactive: 'secondary',
  inativo: 'secondary',
  offline: 'secondary',
  disconnected: 'secondary',

  pending: 'warning',
  pendente: 'warning',
  waiting: 'warning',
  aguardando: 'warning',
  busy: 'warning',
  ocupado: 'warning',

  error: 'danger',
  erro: 'danger',
  failed: 'danger',
  falha: 'danger',
  rejected: 'danger',
  rejeitado: 'danger',
  canceled: 'danger',
  cancelado: 'danger',

  info: 'info',
  processing: 'info',
  processando: 'info',
}

const getSeverity = () => {
  if (props.type) return props.type
  const key = props.status.toLowerCase()
  return severityMap[key] || 'secondary'
}
</script>

<template>
  <Tag :value="status" :severity="getSeverity()" class="trx-status-badge" />
</template>

<style scoped>
.trx-status-badge {
  text-transform: capitalize;
}
</style>
