---
title: TrxJsonViewer
description: Visualizador de JSON com árvore expansível e realce de sintaxe.
category: Dados
---

# TrxJsonViewer

Expande/colapsa nós, copia JSON com um clique. Sem dependências externas.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| data | `unknown` | — | Objeto ou array a exibir |
| expandDepth | `number` | `2` | Profundidade inicial expandida |

## Uso

```vue
<TrxJsonViewer :data="apiResponse" :expand-depth="3" />
```
