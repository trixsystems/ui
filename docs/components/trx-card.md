# TrxCard

Card container base com suporte a header, content e footer via slots.

## Uso

```vue
<script setup lang="ts">
import { TrxCard, TrxButton } from '@trx/ui-common'
</script>

<template>
  <!-- Simples -->
  <TrxCard title="Informações" icon="pi pi-info-circle">
    <p>Conteúdo do card.</p>
  </TrxCard>

  <!-- Com footer -->
  <TrxCard title="Usuário">
    <p>João Silva</p>
    <template #footer>
      <TrxButton label="Editar" size="small" />
    </template>
  </TrxCard>
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `title` | `string` | — | Título do card |
| `subtitle` | `string` | — | Subtítulo |
| `icon` | `string` | — | Ícone PrimeIcons no header |
| `loading` | `boolean` | `false` | Estado de carregamento com skeleton |
| `noPadding` | `boolean` | `false` | Remove padding interno |

## Slots

| Slot | Descrição |
|:-----|:----------|
| `default` | Conteúdo principal |
| `header-actions` | Ações no lado direito do header |
| `footer` | Área de rodapé do card |

## Exemplos

```vue
<!-- Card de estatística -->
<TrxCard title="Total de Chamadas" icon="pi pi-phone">
  <p class="text-4xl font-bold">1.248</p>
  <template #header-actions>
    <TrxButton icon="pi pi-refresh" severity="secondary" text size="small" />
  </template>
</TrxCard>

<!-- Card sem padding (para tabelas/imagens) -->
<TrxCard title="Tabela de Dados" :no-padding="true">
  <TrxDataTable :value="data" />
</TrxCard>
```
