---
title: TrxFilePreview
description: Preview inline de arquivos (imagem, PDF, vídeo, áudio, texto).
category: Sistema
---

# TrxFilePreview

Detecta tipo por MIME ou extensão. Fallback com botão de download para tipos desconhecidos.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| url | `string` | — | URL do arquivo |
| name | `string` | — | Nome do arquivo |
| mimeType | `string` | — | MIME type |
| size | `number` | — | Tamanho em bytes |
| maxHeight | `string` | `'480px'` | Altura máxima do preview |

## Eventos

`download` · `close`

## Uso

```vue
<TrxFilePreview :url="file.url" :name="file.name" :mime-type="file.mime" @close="closePreview" />
```
