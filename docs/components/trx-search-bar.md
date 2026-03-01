# TrxSearchBar

Modal de busca global ativado por teclado (Cmd+K / Ctrl+K) ou via botão trigger.

## Uso

```vue
<script setup lang="ts">
import { TrxSearchBar } from '@trx/ui-common'

function handleSearch(query: string) {
  // buscar resultados...
}
</script>

<template>
  <TrxSearchBar
    placeholder="Buscar em todo o sistema..."
    @search="handleSearch"
  >
    <!-- Slot para resultados customizados -->
    <template #results="{ query }">
      <div v-if="query">
        <p>Resultados para: {{ query }}</p>
      </div>
    </template>
  </TrxSearchBar>
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `placeholder` | `string` | `'Buscar...'` | Placeholder do input |
| `shortcut` | `boolean` | `true` | Exibe atalho de teclado no botão |
| `triggerLabel` | `string` | `'Buscar'` | Label do botão trigger |

## Eventos

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `search` | `string` | Emitido a cada keystroke no input |
| `open` | — | Modal aberto |
| `close` | — | Modal fechado |

## Slots

| Slot | Props | Descrição |
|:-----|:------|:----------|
| `results` | `{ query: string }` | Área de resultados customizados |

## Atalho de Teclado

O modal é aberto automaticamente ao pressionar `Cmd+K` (macOS) ou `Ctrl+K` (Windows/Linux) em qualquer lugar da página.
