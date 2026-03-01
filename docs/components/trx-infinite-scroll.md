---
title: TrxInfiniteScroll
description: Container com carregamento infinito (scroll detection).
category: Dados
---

# TrxInfiniteScroll

Detecta quando o usuário está próximo do fim e emite `load`. Customizável com slots de loader e end.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| loading | `boolean` | `false` | Carregando mais itens |
| hasMore | `boolean` | `true` | Indica se há mais items |
| threshold | `number` | `80` | Pixels do fundo para disparar |
| scrollTarget | `string` | — | Seletor CSS de elemento de scroll |

## Slots

`#default` · `#loader` · `#end`

## Uso

```vue
<TrxInfiniteScroll :loading="fetching" :has-more="hasMore" @load="loadMore">
  <ContactCard v-for="c in contacts" :key="c.id" :contact="c" />
</TrxInfiniteScroll>
```
