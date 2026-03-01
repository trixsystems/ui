# TrxStatusBadge

Badge colorido para exibir status de registros.

## Uso

```vue
<script setup lang="ts">
import { TrxStatusBadge } from '@trx/ui-common'
</script>

<template>
  <TrxStatusBadge status="Ativo" />
  <TrxStatusBadge status="Pendente" type="warning" />
  <TrxStatusBadge status="Inativo" type="danger" />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `status` | `string` | **required** | Texto do status |
| `type` | `'success' \| 'warning' \| 'danger' \| 'info' \| 'secondary'` | `'success'` | Variante visual |

## Variantes

| Type | Cor | Uso |
|:-----|:----|:----|
| `success` | Verde | Ativo, Concluído, Online |
| `warning` | Âmbar | Pendente, Em andamento |
| `danger` | Vermelho | Inativo, Erro, Offline |
| `info` | Azul | Informativo |
| `secondary` | Cinza | Neutro |

## Exemplos

```vue
<!-- Status de usuário -->
<TrxStatusBadge status="Online" type="success" />
<TrxStatusBadge status="Ocupado" type="danger" />
<TrxStatusBadge status="Ausente" type="warning" />

<!-- Status de campanha -->
<TrxStatusBadge status="Ativa" type="success" />
<TrxStatusBadge status="Pausada" type="warning" />
<TrxStatusBadge status="Finalizada" type="secondary" />

<!-- Em tabela -->
<TrxColumn header="Status">
  <template #body="{ data }">
    <TrxStatusBadge :status="data.status" :type="getStatusType(data.status)" />
  </template>
</TrxColumn>
```
