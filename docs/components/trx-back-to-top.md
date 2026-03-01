---
title: TrxBackToTop
description: Botão flutuante para voltar ao topo da página.
category: Layout
---

# TrxBackToTop

Aparece após o usuário rolar além do threshold. Suporte a scroll em elemento customizado.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| threshold | `number` | `300` | Pixels de scroll para exibir |
| scrollTarget | `string` | — | Seletor CSS do elemento de scroll |
| behavior | `'smooth' \| 'auto'` | `'smooth'` | Comportamento da rolagem |

## Uso

```vue
<TrxBackToTop :threshold="400" />
```
