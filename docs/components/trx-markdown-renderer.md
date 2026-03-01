# TrxMarkdownRenderer

Renderizador de Markdown para HTML sem dependências externas. Suporte completo a elementos comuns.

## Uso

```vue
<TrxMarkdownRenderer :content="markdownText" :prose="true" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `content` | `string` | `''` | Texto em Markdown |
| `prose` | `boolean` | `true` | Aplicar estilos tipográficos |

## Elementos Suportados

- Headings h1-h6
- **Negrito**, _itálico_, ~~tachado~~
- `código inline` e blocos de código com \`\`\`
- Listas ordenadas e não-ordenadas
- Blockquotes (`> texto`)
- Links e imagens
- Linhas horizontais (`---`)
- Quebras de parágrafo

## Segurança

O conteúdo é escapado (`&`, `<`, `>`) antes do processamento para evitar XSS em texto não confiável.
