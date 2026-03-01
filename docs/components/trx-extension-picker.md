---
title: TrxExtensionPicker
description: Seletor de ramal ou agente com busca e indicador de disponibilidade.
category: Telecom
---

# TrxExtensionPicker

Busca em tempo real, agrupamento por departamento e indicador de status (verde/vermelho).

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| extensions | `TrxExtension[]` | `[]` | Lista de ramais |
| modelValue | `TrxExtension \| null` | `null` | Ramal selecionado |
| placeholder | `string` | `'Buscar ramal...'` | Placeholder |

## Uso

```vue
<TrxExtensionPicker v-model="selectedExt" :extensions="exts" @select="dial" />
```
