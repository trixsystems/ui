# TrxBanner

Banner de aviso no topo da página para notificações globais (manutenção, novidades, alertas críticos).

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxBanner } from '@trx/ui-common'

const showBanner = ref(true)
</script>

<template>
  <TrxBanner
    v-if="showBanner"
    type="warning"
    title="Manutenção programada"
    dismissible
    @dismiss="showBanner = false"
  >
    O sistema ficará indisponível das 02h às 04h do dia 15/03.
  </TrxBanner>
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `type` | `'info' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | `'info'` | Variante visual |
| `title` | `string` | — | Texto em negrito |
| `dismissible` | `boolean` | `false` | Exibe botão de fechar |
| `sticky` | `boolean` | `false` | Fixa no topo com `position: sticky` |
| `icon` | `string` | auto | Override do ícone PrimeIcons |

## Eventos

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `dismiss` | — | Botão de fechar clicado |

## Slot

```vue
<TrxBanner type="info" title="Novidade">
  Texto adicional com <a href="#">link</a> ou qualquer conteúdo.
</TrxBanner>
```

## Variantes

| Tipo | Uso |
|:-----|:----|
| `info` | Informações neutras, dicas |
| `success` | Confirmações, deploy concluído |
| `warning` | Manutenção, avisos importantes |
| `error` | Falhas críticas, serviço degradado |
| `neutral` | Mensagens sem conotação |

## Banner sticky (fixo no topo)

```vue
<TrxBanner type="error" title="Serviço degradado" sticky>
  Estamos trabalhando para resolver o problema.
</TrxBanner>
```

::: tip
Use `sticky` para banners que devem permanecer visíveis durante a rolagem da página, como alertas de sistema críticos.
:::
