# TrxFormField

Wrapper de campo de formulário com label, mensagem de erro e hint. Integra-se com `useForm`.

## Uso

```vue
<script setup lang="ts">
import { TrxFormField, TrxInputText, TrxButton } from '@trx/ui-common'
import { useForm } from '@trx/ui-common'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  name: z.string().min(2, 'Nome muito curto'),
})

const { values, errors, handleSubmit } = useForm({
  schema,
  initialValues: { email: '', name: '' },
})

const onSubmit = handleSubmit(async (data) => {
  console.log('Enviando:', data)
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <TrxFormField
      name="email"
      label="E-mail"
      :error="errors.email"
      required
      hint="Será usado para login"
    >
      <TrxInputText v-model="values.email" type="email" />
    </TrxFormField>

    <TrxFormField
      name="name"
      label="Nome completo"
      :error="errors.name"
      required
    >
      <TrxInputText v-model="values.name" />
    </TrxFormField>

    <TrxButton type="submit" label="Salvar" />
  </form>
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `name` | `string` | **required** | Identificador do campo (para `for`/`id`) |
| `label` | `string` | — | Label visível do campo |
| `error` | `string` | — | Mensagem de erro (exibe em vermelho) |
| `required` | `boolean` | `false` | Adiciona asterisco ao label |
| `hint` | `string` | — | Texto de ajuda abaixo do campo |
| `disabled` | `boolean` | `false` | Estado desabilitado |

## Comportamento de Erro

Quando `error` está preenchido:
- Exibe mensagem em vermelho com `role="alert"` para acessibilidade
- Aplica borda vermelha no input filho via `:deep()`
- Animação fade-in na mensagem de erro

## useForm

O `TrxFormField` se integra naturalmente com o composable `useForm`:

```typescript
import { useForm } from '@trx/ui-common'
import { z } from 'zod'

const { values, errors, isSubmitting, handleSubmit } = useForm({
  schema: z.object({
    email: z.string().email(),
  }),
  initialValues: { email: '' },
})
```

O composable `useForm` aceita `schema` (Zod) e `initialValues`, retornando estado e helpers para submissão.
