# TrxTruncateText

Truncamento de texto com CSS `-webkit-line-clamp` e botão "ver mais/menos".

## Uso

```vue
<TrxTruncateText
  :text="longDescription"
  :lines="3"
  expand-label="Ver mais"
  collapse-label="Ver menos"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `text` | `string` | `''` | Texto a truncar |
| `lines` | `number` | `3` | Número de linhas visíveis |
| `expandLabel` | `string` | `'Ver mais'` | Label para expandir |
| `collapseLabel` | `string` | `'Ver menos'` | Label para recolher |
