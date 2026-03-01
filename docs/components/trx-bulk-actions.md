# TrxBulkActions

Barra flutuante fixa no rodapé da tela para ações em massa sobre itens selecionados.

## Uso Básico

```vue
<TrxBulkActions :count="selected.length" @clear="selected = []">
  <TrxButton label="Excluir" severity="danger" size="small" />
  <TrxButton label="Exportar" icon="pi pi-download" size="small" />
</TrxBulkActions>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `count` | `number` | — | Quantidade de itens selecionados |
| `visible` | `boolean` | — | Controle manual de visibilidade (padrão: `count > 0`) |
| `label` | `string` | — | Label customizado (use `{count}` para interpolação) |

## Eventos

| Evento | Descrição |
|--------|-----------|
| `clear` | Limpar seleção |

## Slots

| Slot | Descrição |
|------|-----------|
| `default` | Botões de ação |

## Exemplo com Label Customizado

```vue
<TrxBulkActions
  :count="selected.length"
  label="{count} chamada(s) selecionada(s)"
  @clear="clearSelection"
>
  <TrxButton
    label="Arquivar"
    icon="pi pi-inbox"
    severity="secondary"
    size="small"
    @click="archiveCalls"
  />
  <TrxConfirmButton
    label="Excluir"
    variant="danger"
    @confirm="deleteCalls"
  />
</TrxBulkActions>
```
