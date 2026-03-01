# TrxJsonEditor

Editor de JSON com numeração de linhas, validação em tempo real, formatação e minificação.

## Uso

```vue
<TrxJsonEditor
  v-model="config"
  :validate-on-change="true"
  @error="onJsonError"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `unknown` | `{}` | Objeto JavaScript |
| `minHeight` | `string` | `'180px'` | Altura mínima |
| `disabled` | `boolean` | `false` | Desabilitar |
| `validateOnChange` | `boolean` | `true` | Validar enquanto digita |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `unknown` | JSON válido parseado |
| `error` | `string` | Mensagem de erro de parse |

## Funcionalidades

- Numeração de linhas sincronizada
- Indicador de erro com mensagem
- Botão **Formatar** (pretty-print com indentação 2)
- Botão **Minificar** (compact JSON)
