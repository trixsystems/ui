---
title: TrxDiffViewer
description: Visualizador de diff de texto com modos unificado e side-by-side.
category: Dados
---

# TrxDiffViewer

Usa LCS para calcular diferenças. Exibe adições (verde) e remoções (vermelho) com numeração de linhas.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| original | `string` | — | Texto original |
| modified | `string` | — | Texto modificado |
| unified | `boolean` | `false` | Modo unificado (vs. side-by-side) |
| title | `string` | — | Título do diff |
| titleOriginal | `string` | `'Original'` | Label painel esquerdo |
| titleModified | `string` | `'Modificado'` | Label painel direito |

## Uso

```vue
<TrxDiffViewer :original="v1" :modified="v2" title="Comparação de Script" />
```
