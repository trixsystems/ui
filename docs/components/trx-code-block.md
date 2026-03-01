# TrxCodeBlock

Bloco de código com numeração de linhas, botão de cópia e label de arquivo/linguagem.

## Uso

```vue
<TrxCodeBlock
  :code="sourceCode"
  language="typescript"
  filename="useAuth.ts"
  :show-line-numbers="true"
  max-height="400px"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `code` | `string` | `''` | Código a exibir |
| `language` | `string` | `''` | Linguagem (label) |
| `filename` | `string` | — | Nome do arquivo |
| `showLineNumbers` | `boolean` | `true` | Mostrar números de linha |
| `maxHeight` | `string` | — | Altura máxima com scroll |

## Funcionalidades

- Botão de cópia com feedback visual (✓ Copiado)
- Layout de tabela para alinhar números com linhas
- Scroll horizontal para linhas longas
