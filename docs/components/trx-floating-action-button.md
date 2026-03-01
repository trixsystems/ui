---
title: TrxFloatingActionButton
description: Botão de ação flutuante (FAB) com sub-ações expansíveis.
category: Layout
---

# TrxFloatingActionButton

Posicionamento configurável (bottom-right, bottom-left, top-right, top-left). Sub-ações com animação escalonada.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| icon | `string` | `'pi pi-plus'` | Ícone principal |
| actions | `TrxFABAction[]` | `[]` | Sub-ações |
| position | `string` | `'bottom-right'` | Posição |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho |
| color | `string` | — | Cor de fundo |

## Uso

```vue
<TrxFloatingActionButton icon="pi pi-plus" :actions="fabActions" @action="onFabAction" />
```
