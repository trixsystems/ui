---
layout: default
title: TrxPageHeader
nav_order: 3
parent: Componentes
---

# TrxPageHeader
{: .no_toc }

Cabecalho de pagina com titulo, subtitulo e acoes.
{: .fs-6 .fw-300 }

---

## Uso Basico

```vue
<script setup lang="ts">
import { TrxPageHeader } from '@trx/ui-common/components'
import Button from 'primevue/button'
</script>

<template>
  <TrxPageHeader
    title="Usuarios"
    subtitle="Gerenciamento de usuarios do sistema"
    icon="pi pi-users"
  >
    <template #actions>
      <Button label="Novo Usuario" icon="pi pi-plus" />
    </template>
  </TrxPageHeader>
</template>
```

---

## Props

| Prop | Tipo | Default | Descricao |
|:-----|:-----|:--------|:----------|
| `title` | `string` | - | Titulo da pagina |
| `subtitle` | `string` | - | Subtitulo/descricao |
| `icon` | `string` | - | Classe do icone |

---

## Slots

| Slot | Descricao |
|:-----|:----------|
| `actions` | Botoes de acao no lado direito |
| `breadcrumb` | Breadcrumb acima do titulo |

---

## Exemplos

### Simples

```vue
<TrxPageHeader title="Dashboard" />
```

### Com Subtitulo

```vue
<TrxPageHeader
  title="Relatorios"
  subtitle="Visualize os relatorios do sistema"
  icon="pi pi-chart-bar"
/>
```

### Com Acoes

```vue
<TrxPageHeader title="Campanhas" icon="pi pi-megaphone">
  <template #actions>
    <Button label="Exportar" icon="pi pi-download" severity="secondary" />
    <Button label="Nova Campanha" icon="pi pi-plus" />
  </template>
</TrxPageHeader>
```

### Com Breadcrumb

```vue
<TrxPageHeader title="Detalhes do Usuario">
  <template #breadcrumb>
    <router-link to="/users">Usuarios</router-link>
    <span> / </span>
    <span>Detalhes</span>
  </template>
</TrxPageHeader>
```
