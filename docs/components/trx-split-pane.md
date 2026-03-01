---
title: TrxSplitPane
description: Painel dividido e redimensionável (horizontal ou vertical).
category: Layout
---

# TrxSplitPane

Arraste a alça entre os painéis para redimensionar. Suporte a touch.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| direction | `'horizontal' \| 'vertical'` | `'horizontal'` | Direção da divisão |
| initialSize | `number` | `50` | Tamanho inicial do primeiro painel (%) |
| minSize | `number` | `15` | Mínimo (%) |
| maxSize | `number` | `85` | Máximo (%) |

## Slots

`#first` · `#second`

## Uso

```vue
<TrxSplitPane direction="horizontal">
  <template #first><Editor /></template>
  <template #second><Preview /></template>
</TrxSplitPane>
```
