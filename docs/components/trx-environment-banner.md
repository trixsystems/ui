---
title: TrxEnvironmentBanner
description: Banner de ambiente (desenvolvimento/staging/homologação) fixo no topo.
category: Sistema
---

# TrxEnvironmentBanner

Inserido via `Teleport` no body. Invisível em produção. Dismissível.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| env | `'development' \| 'staging' \| 'homologation' \| 'production'` | `'development'` | Ambiente atual |
| message | `string` | — | Mensagem extra |
| dismissible | `boolean` | `true` | Permite fechar |

## Uso

```vue
<TrxEnvironmentBanner env="staging" message="Dados fictícios" />
```
