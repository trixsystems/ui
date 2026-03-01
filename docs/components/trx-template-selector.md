---
title: TrxTemplateSelector
description: Seletor de templates de mensagem (WhatsApp, SMS, etc.) com preview de variáveis.
category: Omnichannel
---

# TrxTemplateSelector

Agrupa templates por categoria, exibe preview com variáveis preenchíveis e botão de confirmação.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| templates | `TrxMessageTemplate[]` | `[]` | Templates disponíveis |
| modelValue | `TrxMessageTemplate \| null` | `null` | Template selecionado |

## Eventos

`confirm(template)` · `update:modelValue`

## Uso

```vue
<TrxTemplateSelector :templates="waTemplates" @confirm="sendTemplate" />
```
