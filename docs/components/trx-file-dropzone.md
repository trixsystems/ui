# TrxFileDropzone

Área de drag & drop para upload de arquivos com validação de tamanho.

## Uso Básico

```vue
<TrxFileDropzone @files="handleFiles" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accept` | `string` | — | Tipos MIME aceitos (`image/*`, `.pdf`, etc.) |
| `multiple` | `boolean` | `false` | Permitir múltiplos arquivos |
| `maxSize` | `number` | — | Tamanho máximo em MB |
| `disabled` | `boolean` | `false` | Desabilitar área |
| `label` | `string` | `'Arraste arquivos aqui ou clique...'` | Texto principal |
| `hint` | `string` | `'Todos os arquivos são aceitos'` | Texto de dica |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `files` | `File[]` | Arquivos selecionados ou soltos |
| `error` | `string` | Mensagem de erro de validação |

## Exemplo

```vue
<TrxFileDropzone
  accept=".mp3,.wav,.ogg"
  :max-size="50"
  label="Solte o arquivo de áudio aqui"
  hint="MP3, WAV ou OGG — máx. 50MB"
  @files="uploadAudio"
  @error="toast.error($event)"
/>
```
