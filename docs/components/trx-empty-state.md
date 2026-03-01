# TrxEmptyState

Componente de estado vazio com ícone, título, descrição e CTA opcional.

## Uso

```vue
<script setup lang="ts">
import { TrxEmptyState, TrxButton } from '@trx/ui-common'
</script>

<template>
  <!-- Básico -->
  <TrxEmptyState
    icon="pi pi-inbox"
    title="Nenhum registro"
    description="Não há dados para exibir ainda."
  />

  <!-- Com ação -->
  <TrxEmptyState
    icon="pi pi-users"
    title="Nenhum usuário cadastrado"
    description="Cadastre o primeiro usuário para começar."
  >
    <template #action>
      <TrxButton label="Adicionar Usuário" icon="pi pi-plus" @click="openForm" />
    </template>
  </TrxEmptyState>

  <!-- Resultado de busca -->
  <TrxEmptyState
    icon="pi pi-search"
    title="Nenhum resultado encontrado"
    description="Tente outros termos de busca."
  />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `icon` | `string` | `'pi pi-inbox'` | Ícone PrimeIcons |
| `title` | `string` | `'Nenhum registro'` | Título principal |
| `description` | `string` | — | Texto explicativo |

## Slots

| Slot | Descrição |
|:-----|:----------|
| `action` | Botão ou link de CTA |

## Uso em TrxDataTable

O `TrxDataTable` usa `TrxEmptyState` automaticamente quando `value` é vazio:

```vue
<TrxDataTable :value="[]" empty-message="Nenhum dado encontrado">
  <!-- TrxEmptyState aparece automaticamente -->
</TrxDataTable>
```
