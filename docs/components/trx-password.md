# TrxPassword

Wrapper do `Password` do PrimeVue com rótulos de força de senha traduzidos para o português.

## Defaults TRX

| Prop | Default TRX | Descrição |
|:-----|:------------|:----------|
| `weakLabel` | `"Fraco"` | Rótulo para senha fraca |
| `mediumLabel` | `"Médio"` | Rótulo para senha de força média |
| `strongLabel` | `"Forte"` | Rótulo para senha forte |

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxPassword } from '@trx/ui-common'

const senha = ref('')
</script>

<template>
  <!-- Campo de senha com indicador de força (rótulos PT-BR automáticos) -->
  <TrxPassword v-model="senha" placeholder="Digite sua senha" />

  <!-- Sem o painel de feedback de força -->
  <TrxPassword v-model="senha" :feedback="false" placeholder="Confirmar senha" />

  <!-- Com toggle de visibilidade -->
  <TrxPassword v-model="senha" toggle-mask />
</template>
```

## Props principais

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `string` | Senha via `v-model` |
| `feedback` | `boolean` | Exibe painel de força da senha (padrão: `true`) |
| `toggleMask` | `boolean` | Exibe botão para alternar visibilidade |
| `weakLabel` | `string` | Rótulo para senha fraca (padrão TRX: `Fraco`) |
| `mediumLabel` | `string` | Rótulo para senha média (padrão TRX: `Médio`) |
| `strongLabel` | `string` | Rótulo para senha forte (padrão TRX: `Forte`) |
| `placeholder` | `string` | Texto de exemplo |
| `invalid` | `boolean` | Estado de erro |
| `disabled` | `boolean` | Desabilita o componente |
| `fluid` | `boolean` | Ocupa toda a largura disponível |
| `inputId` | `string` | `id` do elemento `<input>` interno |

## Ver também

- [PrimeVue Password](https://primevue.org/password/) — documentação completa da API
