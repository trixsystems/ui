# TrxStatus

Indicador de status inline com ponto colorido e label. Ideal para exibir estado de conexão ou disponibilidade.

## Uso

```vue
<script setup lang="ts">
import { TrxStatus } from '@trx/ui-common'
</script>

<template>
  <!-- Básico -->
  <TrxStatus status="online" />
  <TrxStatus status="offline" />
  <TrxStatus status="busy" />
  <TrxStatus status="away" />
  <TrxStatus status="connecting" />

  <!-- Sem label -->
  <TrxStatus status="online" :show-label="false" />

  <!-- Com label customizado -->
  <TrxStatus status="online" label="Em chamada" />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `status` | `'online' \| 'offline' \| 'busy' \| 'away' \| 'connecting'` | **required** | Estado atual |
| `label` | `string` | auto | Override do label (padrão é o label do status) |
| `showLabel` | `boolean` | `true` | Exibe ou oculta o texto ao lado do ponto |

## Status disponíveis

| Status | Label padrão | Cor |
|:-------|:-------------|:----|
| `online` | Online | Verde (`--trx-success-color`) |
| `offline` | Offline | Vermelho (`--trx-danger-color`) |
| `busy` | Ocupado | Âmbar (`--trx-warning-color`) |
| `away` | Ausente | Azul (`--trx-info-color`) |
| `connecting` | Conectando... | Cinza + animação pulse |

## Em uma tabela

```vue
<TrxColumn header="Status">
  <template #body="{ data }">
    <TrxStatus :status="data.connectionStatus" />
  </template>
</TrxColumn>
```

## Diferença de TrxAgentStatus

| Componente | Uso |
|:-----------|:----|
| `TrxStatus` | Exibição simples, sem interação, status de conexão |
| `TrxAgentStatus` | Seletor com dropdown para agentes de call center, com v-model |

::: tip
Use `TrxStatus` para leitura e `TrxAgentStatus` para seleção interativa de status de agente.
:::
