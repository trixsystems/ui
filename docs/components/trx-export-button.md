# TrxExportButton

Botão dropdown para exportar dados nos formatos CSV, Excel e PDF.

## Uso Básico

```vue
<TrxExportButton @export="handleExport" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `formats` | `ExportFormat[]` | `['csv', 'excel']` | Formatos disponíveis |
| `loading` | `boolean` | `false` | Estado de carregamento |
| `disabled` | `boolean` | `false` | Desabilitar botão |
| `label` | `string` | `'Exportar'` | Texto do botão |

### Tipo `ExportFormat`

```ts
type ExportFormat = 'csv' | 'excel' | 'pdf'
```

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `export` | `format: ExportFormat` | Formato selecionado |

## Exemplo

```vue
<TrxExportButton
  :formats="['csv', 'excel', 'pdf']"
  :loading="exporting"
  @export="format => exportData(format)"
/>
```

```ts
async function exportData(format: 'csv' | 'excel' | 'pdf') {
  exporting.value = true
  try {
    await api.export({ format, filters: currentFilters.value })
  } finally {
    exporting.value = false
  }
}
```
