---
layout: default
title: TrxStatusBadge
nav_order: 4
parent: Componentes
---

# TrxStatusBadge
{: .no_toc }

Badge para exibir status de registros.
{: .fs-6 .fw-300 }

---

## Uso Basico

```vue
<script setup lang="ts">
import { TrxStatusBadge } from '@trx/ui-common/components'
</script>

<template>
  <TrxStatusBadge status="Ativo" />
  <TrxStatusBadge status="Pendente" type="warning" />
  <TrxStatusBadge status="Inativo" type="danger" />
</template>
```

---

## Props

| Prop | Tipo | Default | Descricao |
|:-----|:-----|:--------|:----------|
| `status` | `string` | - | Texto do status |
| `type` | `'success' \| 'warning' \| 'danger' \| 'info' \| 'secondary'` | `'success'` | Tipo visual |

---

## Tipos Visuais

| Type | Cor | Uso |
|:-----|:----|:----|
| `success` | Verde | Ativo, Concluido, Online |
| `warning` | Amarelo | Pendente, Em andamento |
| `danger` | Vermelho | Inativo, Erro, Offline |
| `info` | Azul | Informativo |
| `secondary` | Cinza | Neutro |

---

## Exemplos

```vue
<!-- Status de usuario -->
<TrxStatusBadge status="Online" type="success" />
<TrxStatusBadge status="Ocupado" type="danger" />
<TrxStatusBadge status="Ausente" type="warning" />

<!-- Status de campanha -->
<TrxStatusBadge status="Ativa" type="success" />
<TrxStatusBadge status="Pausada" type="warning" />
<TrxStatusBadge status="Finalizada" type="secondary" />

<!-- Status de chamada -->
<TrxStatusBadge status="Atendida" type="success" />
<TrxStatusBadge status="Nao Atendida" type="danger" />
<TrxStatusBadge status="Em Espera" type="info" />
```
