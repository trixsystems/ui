---
title: TrxUpdatePrompt
description: Prompt de nova versão disponível com ação de atualização.
category: Sistema
---

# TrxUpdatePrompt

Toast flutuante no canto inferior direito. Integra-se com service workers (ex: vite-plugin-pwa).

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| modelValue | `boolean` | `false` | Visibilidade |
| title | `string` | `'Atualização disponível'` | Título |
| message | `string` | — | Descrição |
| version | `string` | — | Versão nova |
| updateLabel | `string` | `'Atualizar agora'` | Label do botão de update |
| dismissLabel | `string` | `'Depois'` | Label de adiar |

## Eventos

`update` · `dismiss` · `update:modelValue`

## Uso

```vue
<TrxUpdatePrompt v-model="showUpdate" version="1.5.0" @update="reloadPage" />
```
