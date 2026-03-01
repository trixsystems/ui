# TrxAlert

Alerta inline com 4 variantes semânticas. Ideal para mensagens contextuais dentro do conteúdo da página.

## Uso

```vue
<script setup lang="ts">
import { TrxAlert } from '@trx/ui-common'
</script>

<template>
  <TrxAlert type="info" title="Informação" />
  <TrxAlert type="success" title="Salvo!" message="As alterações foram salvas com sucesso." />
  <TrxAlert type="warning" title="Atenção" message="Esta ação não pode ser desfeita." dismissible />
  <TrxAlert type="error" title="Erro" message="Falha ao carregar dados." />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Variante visual e semântica |
| `title` | `string` | — | Título em negrito |
| `message` | `string` | — | Mensagem de detalhe (ou use o slot default) |
| `dismissible` | `boolean` | `false` | Exibe botão de fechar |
| `icon` | `string` | auto | Ícone PrimeIcons (auto por tipo) |

## Eventos

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `dismiss` | — | Emitido ao fechar o alerta |

## Slot

```vue
<TrxAlert type="info" title="Aviso">
  Conteúdo personalizado com <strong>HTML</strong>.
</TrxAlert>
```

## Variantes

| Tipo | Cor | Ícone padrão |
|:-----|:----|:-------------|
| `info` | Azul | `pi pi-info-circle` |
| `success` | Verde | `pi pi-check-circle` |
| `warning` | Âmbar | `pi pi-exclamation-triangle` |
| `error` | Vermelho | `pi pi-times-circle` |
