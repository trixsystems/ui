# TrxPageHeader

Cabeçalho de página com título, subtítulo e slot de ações.

## Uso

```vue
<script setup lang="ts">
import { TrxPageHeader, TrxButton } from '@trx/ui-common'
</script>

<template>
  <TrxPageHeader
    title="Usuários"
    subtitle="Gerenciamento de usuários do sistema"
    icon="pi pi-users"
  >
    <template #actions>
      <TrxButton label="Novo Usuário" icon="pi pi-plus" />
    </template>
  </TrxPageHeader>
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `title` | `string` | **required** | Título da página |
| `subtitle` | `string` | — | Subtítulo/descrição |
| `icon` | `string` | — | Classe do ícone (ex: `pi pi-users`) |

## Slots

| Slot | Descrição |
|:-----|:----------|
| `actions` | Botões de ação no lado direito |
| `breadcrumb` | Breadcrumb acima do título |

## Exemplos

```vue
<!-- Simples -->
<TrxPageHeader title="Dashboard" />

<!-- Com subtítulo e ícone -->
<TrxPageHeader
  title="Relatórios"
  subtitle="Visualize os relatórios do sistema"
  icon="pi pi-chart-bar"
/>

<!-- Com ações -->
<TrxPageHeader title="Campanhas" icon="pi pi-megaphone">
  <template #actions>
    <TrxButton label="Exportar" icon="pi pi-download" severity="secondary" />
    <TrxButton label="Nova Campanha" icon="pi pi-plus" />
  </template>
</TrxPageHeader>

<!-- Com breadcrumb -->
<TrxPageHeader title="Detalhes do Usuário">
  <template #breadcrumb>
    <router-link to="/users">Usuários</router-link>
    <span> / </span>
    <span>Detalhes</span>
  </template>
</TrxPageHeader>
```
