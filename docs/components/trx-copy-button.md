# TrxCopyButton

Botão que copia texto para o clipboard com feedback visual animado.

## Uso

```vue
<script setup lang="ts">
import { TrxCopyButton } from '@trx/ui-common'
</script>

<template>
  <!-- Simples -->
  <TrxCopyButton value="(11) 99999-8888" />

  <!-- Com label -->
  <TrxCopyButton value="token_abc123" label="Copiar token" />

  <!-- Exibindo o valor ao lado -->
  <TrxCopyButton value="192.168.1.100" show-value />

  <!-- Pequeno -->
  <TrxCopyButton value="SIP/1234" size="small" />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `value` | `string` | **required** | Texto a ser copiado |
| `label` | `string` | `'Copiar'` | Label do botão |
| `showValue` | `boolean` | `false` | Exibe o valor em monospace ao lado do botão |
| `feedbackDuration` | `number` | `1500` | Duração do estado "Copiado!" em ms |
| `size` | `'small' \| 'normal'` | `'normal'` | Tamanho do botão |

## Eventos

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `copy` | `string` | Emitido após copiar com sucesso, com o valor copiado |

## Casos de uso

```vue
<!-- Ramal de telefone -->
<div class="flex align-items-center gap-2">
  <span>Ramal:</span>
  <TrxCopyButton value="4001" show-value size="small" />
</div>

<!-- Token de API -->
<TrxFormField label="Token de API">
  <TrxInputText :model-value="apiToken" readonly />
  <TrxCopyButton :value="apiToken" label="Copiar token" @copy="toast.success('Token copiado!')" />
</TrxFormField>

<!-- IP do servidor -->
<TrxCopyButton
  value="10.0.0.1"
  show-value
  @copy="(v) => console.log('Copiou:', v)"
/>
```
