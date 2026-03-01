---
title: TrxDraggableList
description: Lista reordenável via drag-and-drop nativo do HTML5.
category: Layout
---

# TrxDraggableList

Suporte a handle de arrastar configurável. Emite nova ordem ao soltar.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| items | `{ id: string; [k: string]: unknown }[]` | — | Itens |
| handle | `boolean` | `false` | Usa ícone de handle em vez de item inteiro |

## Eventos

`update:items(items)` · `reorder(from, to)`

## Slot

`#default="{ item, index }"`

## Uso

```vue
<TrxDraggableList v-model:items="list" handle>
  <template #default="{ item }">{{ item.name }}</template>
</TrxDraggableList>
```
