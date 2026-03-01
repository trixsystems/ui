# TrxFileUpload

Wrapper do `FileUpload` do PrimeVue com rótulos dos botões traduzidos para o português.

## Defaults TRX

| Prop | Default TRX | Descrição |
|:-----|:------------|:----------|
| `chooseLabel` | `"Escolher"` | Rótulo do botão de seleção de arquivo |
| `uploadLabel` | `"Enviar"` | Rótulo do botão de envio |
| `cancelLabel` | `"Cancelar"` | Rótulo do botão de cancelamento |

## Uso

```vue
<script setup lang="ts">
import { TrxFileUpload } from '@trx/ui-common'

function aoEnviar(event: { files: File[] }) {
  const formData = new FormData()
  event.files.forEach(file => formData.append('arquivo', file))

  // fetch('/api/upload', { method: 'POST', body: formData })
}

function aoSelecionarArquivo(event: { files: File[] }) {
  console.log('Arquivo selecionado:', event.files[0].name)
}
</script>

<template>
  <!-- Upload automático ao selecionar -->
  <TrxFileUpload
    mode="basic"
    accept="image/*"
    :max-file-size="5000000"
    @select="aoSelecionarArquivo"
  />

  <!-- Upload avançado com painel de preview -->
  <TrxFileUpload
    name="arquivo"
    url="/api/upload"
    accept=".pdf,.doc,.docx"
    :max-file-size="10000000"
    :multiple="true"
    @upload="aoEnviar"
  />

  <!-- Upload customizado (sem envio automático) -->
  <TrxFileUpload
    mode="advanced"
    :auto="false"
    :multiple="true"
    accept="image/*,.pdf"
    :max-file-size="5000000"
    :custom-upload="true"
    @uploader="aoEnviar"
  />
</template>
```

## Props principais

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `name` | `string` | Nome do campo no FormData enviado |
| `url` | `string` | URL de destino do upload |
| `mode` | `string` | `basic` (botão simples) ou `advanced` (painel completo) |
| `multiple` | `boolean` | Permite seleção de múltiplos arquivos |
| `accept` | `string` | Tipos de arquivo aceitos (MIME types ou extensões) |
| `maxFileSize` | `number` | Tamanho máximo em bytes |
| `auto` | `boolean` | Envia automaticamente ao selecionar (padrão: `false`) |
| `customUpload` | `boolean` | Usa handler customizado via evento `uploader` |
| `chooseLabel` | `string` | Rótulo do botão escolher (padrão TRX: `Escolher`) |
| `uploadLabel` | `string` | Rótulo do botão enviar (padrão TRX: `Enviar`) |
| `cancelLabel` | `string` | Rótulo do botão cancelar (padrão TRX: `Cancelar`) |
| `disabled` | `boolean` | Desabilita o componente |
| `invalidFileSizeMessage` | `string` | Mensagem de arquivo muito grande |
| `invalidFileTypeMessage` | `string` | Mensagem de tipo inválido |

## Eventos principais

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `select` | `{ files: File[] }` | Disparado ao selecionar arquivos |
| `upload` | `{ files: File[] }` | Disparado após upload bem-sucedido |
| `uploader` | `{ files: File[] }` | Handler customizado (quando `customUpload=true`) |
| `error` | `{ files: File[] }` | Disparado em caso de erro no upload |
| `clear` | — | Disparado ao limpar a seleção |

## Ver também

- [PrimeVue FileUpload](https://primevue.org/fileupload/) — documentação completa da API
