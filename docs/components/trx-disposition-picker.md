# TrxDispositionPicker

Seletor de tabulação/disposição de ligação com campo de nota opcional.

## Uso

```vue
<TrxDispositionPicker
  v-model="selectedDisposition"
  v-model:note="note"
  :dispositions="dispositions"
  @confirm="onConfirm"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `dispositions` | `TrxDisposition[]` | `[]` | Opções de tabulação |
| `modelValue` | `string` | `''` | ID selecionado |
| `note` | `string` | `''` | Nota da tabulação |
| `disabled` | `boolean` | `false` | Desabilitar |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `string` | Tabulação selecionada |
| `update:note` | `string` | Nota atualizada |
| `confirm` | `(id, note)` | Confirmar tabulação |

## Tipos

```ts
interface TrxDisposition {
  id: string
  label: string
  color?: string
  requireNote?: boolean
}
```
