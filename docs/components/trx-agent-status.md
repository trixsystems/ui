# TrxAgentStatus

Seletor de status do agente de call center com dropdown e feedback visual por cor.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxAgentStatus, type TrxAgentStatusValue } from '@trx/ui-common'

const status = ref<TrxAgentStatusValue>('online')
</script>

<template>
  <!-- Seletor interativo (v-model) -->
  <TrxAgentStatus v-model="status" />

  <!-- Badge somente leitura -->
  <TrxAgentStatus :model-value="status" readonly />

  <!-- Badge compacto (sem dropdown) -->
  <TrxAgentStatus :model-value="status" compact />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `modelValue` | `TrxAgentStatusValue` | `'offline'` | Status atual |
| `readonly` | `boolean` | `false` | Somente leitura (badge sem interação) |
| `compact` | `boolean` | `false` | Badge compacto sem dropdown |
| `options` | `TrxAgentStatusOption[]` | padrão | Lista customizada de status |

## Eventos

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `update:modelValue` | `TrxAgentStatusValue` | Novo status selecionado |
| `change` | `TrxAgentStatusValue` | Emitido ao trocar de status |

## Status disponíveis

| Value | Label | Cor |
|:------|:------|:----|
| `'online'` | Online | Verde |
| `'busy'` | Ocupado | Vermelho |
| `'paused'` | Pausa | Âmbar |
| `'offline'` | Offline | Cinza |

## Status customizados

```vue
<TrxAgentStatus
  v-model="status"
  :options="[
    { value: 'online',   label: 'Disponível',    color: '#10b981', icon: 'pi pi-circle-fill' },
    { value: 'busy',     label: 'Em chamada',    color: '#ef4444', icon: 'pi pi-phone' },
    { value: 'paused',   label: 'Almoço',        color: '#f59e0b', icon: 'pi pi-clock' },
    { value: 'offline',  label: 'Offline',       color: '#94a3b8', icon: 'pi pi-circle' },
  ]"
/>
```

## No TrxAppLayout

```vue
<TrxAppLayout
  app-name="Call"
  :menu-items="menuItems"
  show-status
>
  <template #topbar-left>
    <TrxAgentStatus v-model="agentStatus" @change="updateStatus" />
  </template>
  <router-view />
</TrxAppLayout>
```
