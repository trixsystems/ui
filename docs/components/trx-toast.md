# TrxToast e Mensagens

Wrappers para os componentes de mensagem do PrimeVue: `TrxToast` (notificações flutuantes), `TrxMessage` (mensagem inline estática) e `TrxInlineMessage` (mensagem dentro de campo de formulário). `TrxToast` possui default TRX de posição.

## Defaults TRX — TrxToast

| Prop | Default TRX | Descrição |
|:-----|:------------|:----------|
| `position` | `"top-right"` | Posição das notificações na tela |

## Uso

```vue
<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import { TrxToast, TrxMessage, TrxInlineMessage, TrxInputText } from '@trx/ui-common'

const toast = useToast()

function notificar() {
  toast.add({
    severity: 'success',
    summary: 'Salvo!',
    detail: 'O registro foi salvo com sucesso.',
    life: 3000,
  })
}

function notificarErro() {
  toast.add({
    severity: 'error',
    summary: 'Erro',
    detail: 'Não foi possível salvar. Tente novamente.',
    life: 5000,
  })
}
</script>

<template>
  <!-- TrxToast deve ser adicionado uma vez no layout principal -->
  <TrxToast />

  <!-- Disparar toasts com useToast() do PrimeVue -->
  <TrxButton label="Salvar" @click="notificar" />
  <TrxButton label="Simular erro" severity="danger" @click="notificarErro" />

  <!-- Mensagem estática inline (alerta, aviso, info) -->
  <TrxMessage severity="info">
    Sua sessão expira em 5 minutos.
  </TrxMessage>

  <TrxMessage severity="warn" :closable="false">
    Ambiente de homologação. Os dados não são reais.
  </TrxMessage>

  <TrxMessage severity="error">
    Falha ao carregar os dados. Recarregue a página.
  </TrxMessage>

  <!-- InlineMessage: exibido junto a campos de formulário -->
  <div class="flex flex-col gap-1">
    <TrxInputText :invalid="true" placeholder="E-mail" />
    <TrxInlineMessage severity="error">E-mail inválido.</TrxInlineMessage>
  </div>
</template>
```

## Props principais — TrxToast

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `position` | `string` | Posição: `top-right` (padrão TRX), `top-left`, `top-center`, `bottom-right`, `bottom-left`, `bottom-center`, `center` |
| `group` | `string` | Grupo para múltiplas instâncias de toast |
| `life` | `number` | Duração padrão em ms (pode ser sobrescrito por toast individual) |

## Disparando toasts — useToast()

Use o composable `useToast()` do PrimeVue para adicionar notificações programaticamente:

```typescript
import { useToast } from 'primevue/usetoast'

const toast = useToast()

// Tipos disponíveis
toast.add({ severity: 'success', summary: 'OK', detail: 'Operação concluída.', life: 3000 })
toast.add({ severity: 'info',    summary: 'Info', detail: 'Informação.', life: 3000 })
toast.add({ severity: 'warn',    summary: 'Atenção', detail: 'Verifique os dados.', life: 4000 })
toast.add({ severity: 'error',   summary: 'Erro', detail: 'Algo deu errado.', life: 5000 })

// Limpar todos
toast.removeAllGroups()
```

> O pacote também exporta `useTrxToast` (composable com atalhos de conveniência). Veja a documentação dos composables.

## Props principais — TrxMessage

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `severity` | `string` | Tipo: `success`, `info`, `warn`, `error`, `secondary`, `contrast` |
| `closable` | `boolean` | Exibe botão para fechar a mensagem |
| `life` | `number` | Auto-fecha após N milissegundos (0 = permanente) |
| `icon` | `string` | Ícone personalizado |

## Props principais — TrxInlineMessage

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `severity` | `string` | Tipo: `success`, `info`, `warn`, `error` |
| `icon` | `string` | Ícone personalizado |

## Ver também

- [PrimeVue Toast](https://primevue.org/toast/) — documentação completa da API
- [PrimeVue Message](https://primevue.org/message/) — documentação completa da API
- [PrimeVue InlineMessage](https://primevue.org/inlinemessage/) — documentação completa da API
