# TrxUserAvatar

Avatar de usuário com iniciais, foto opcional e indicador de status online/offline.

## Uso

```vue
<script setup lang="ts">
import { TrxUserAvatar } from '@trx/ui-common'
</script>

<template>
  <!-- Com iniciais -->
  <TrxUserAvatar name="João Silva" status="online" />

  <!-- Com foto -->
  <TrxUserAvatar name="Maria Santos" src="/avatars/maria.jpg" size="lg" />

  <!-- Tamanhos -->
  <TrxUserAvatar name="A B" size="sm" />
  <TrxUserAvatar name="A B" size="md" />
  <TrxUserAvatar name="A B" size="lg" />
  <TrxUserAvatar name="A B" size="xl" />

  <!-- Status -->
  <TrxUserAvatar name="A B" status="online" />
  <TrxUserAvatar name="A B" status="offline" />
  <TrxUserAvatar name="A B" status="away" />
  <TrxUserAvatar name="A B" status="busy" />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `name` | `string` | **required** | Nome do usuário (gera iniciais automaticamente) |
| `src` | `string` | — | URL da foto de perfil |
| `status` | `'online' \| 'offline' \| 'away' \| 'busy'` | — | Status de presença |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamanho do avatar |
| `color` | `string` | auto | Cor de fundo (gerada do nome se não informada) |

## Tamanhos

| Size | Dimensão |
|:-----|:---------|
| `sm` | 28px |
| `md` | 36px |
| `lg` | 48px |
| `xl` | 64px |

## Status

| Status | Cor |
|:-------|:----|
| `online` | Verde |
| `away` | Âmbar |
| `busy` | Vermelho |
| `offline` | Cinza |
