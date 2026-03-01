---
title: TrxContextMenu
description: Menu de contexto (clique direito) com Teleport e items configuráveis.
category: Layout
---

# TrxContextMenu

Fecha ao pressionar Escape, clicar fora ou selecionar um item. Suporte a separadores e items de perigo.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| items | `TrxContextMenuItem[]` | `[]` | Itens do menu |
| modelValue | `boolean` | `false` | Visibilidade |
| x | `number` | `0` | Posição X |
| y | `number` | `0` | Posição Y |

## Eventos

`select(item)` · `update:modelValue`

## Uso

```vue
<div @contextmenu.prevent="openCtx">...</div>
<TrxContextMenu v-model="ctxVisible" :x="ctxX" :y="ctxY" :items="ctxItems" @select="onCtx" />
```
