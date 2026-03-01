# TrxMarkdownEditor

Editor de Markdown com toolbar, preview e modo split. Sem dependências externas.

## Uso

```vue
<TrxMarkdownEditor
  v-model="content"
  placeholder="Escreva em Markdown..."
  min-height="300px"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `string` | `''` | Conteúdo Markdown |
| `placeholder` | `string` | `'Escreva em Markdown...'` | Placeholder |
| `minHeight` | `string` | `'200px'` | Altura mínima |
| `maxHeight` | `string` | `'600px'` | Altura máxima |
| `disabled` | `boolean` | `false` | Desabilitar |

## Modos de Visualização

- **Editar**: Somente o textarea
- **Split**: Textarea + Preview lado a lado
- **Preview**: Somente o preview renderizado

## Suporte Markdown

Headings (h1-h6), negrito, itálico, código inline, listas, links, quebras de linha.
