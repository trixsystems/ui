# TrxAccordion

Wrapper para o Accordion do PrimeVue 4. Utiliza a nova API composicional com `TrxAccordion`, `TrxAccordionPanel`, `TrxAccordionHeader` e `TrxAccordionContent`. Pass-through completo sem defaults TRX específicos.

## Uso

```vue
<script setup lang="ts">
import {
  TrxAccordion, TrxAccordionPanel,
  TrxAccordionHeader, TrxAccordionContent,
} from '@trx/ui-common'
</script>

<template>
  <!-- Accordion básico com múltiplos painéis -->
  <TrxAccordion value="0">
    <TrxAccordionPanel value="0">
      <TrxAccordionHeader>Seção 1</TrxAccordionHeader>
      <TrxAccordionContent>
        <p>Conteúdo da primeira seção.</p>
      </TrxAccordionContent>
    </TrxAccordionPanel>

    <TrxAccordionPanel value="1">
      <TrxAccordionHeader>Seção 2</TrxAccordionHeader>
      <TrxAccordionContent>
        <p>Conteúdo da segunda seção.</p>
      </TrxAccordionContent>
    </TrxAccordionPanel>

    <TrxAccordionPanel value="2">
      <TrxAccordionHeader>Seção 3</TrxAccordionHeader>
      <TrxAccordionContent>
        <p>Conteúdo da terceira seção.</p>
      </TrxAccordionContent>
    </TrxAccordionPanel>
  </TrxAccordion>

  <!-- Múltiplos painéis abertos simultaneamente -->
  <TrxAccordion :value="['0', '2']" multiple>
    <TrxAccordionPanel value="0">
      <TrxAccordionHeader>FAQ 1</TrxAccordionHeader>
      <TrxAccordionContent>Resposta 1</TrxAccordionContent>
    </TrxAccordionPanel>
    <TrxAccordionPanel value="2">
      <TrxAccordionHeader>FAQ 3</TrxAccordionHeader>
      <TrxAccordionContent>Resposta 3</TrxAccordionContent>
    </TrxAccordionPanel>
  </TrxAccordion>

  <!-- Controlado (v-model) -->
  <TrxAccordion v-model:value="painelAberto">
    <TrxAccordionPanel value="config">
      <TrxAccordionHeader>
        <i class="pi pi-cog mr-2" />Configurações
      </TrxAccordionHeader>
      <TrxAccordionContent>
        <!-- formulário de configurações -->
      </TrxAccordionContent>
    </TrxAccordionPanel>
  </TrxAccordion>
</template>
```

## Props principais — TrxAccordion

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `string \| string[]` | Painel(is) aberto(s) via `v-model:value` |
| `multiple` | `boolean` | Permite múltiplos painéis abertos simultaneamente |
| `lazy` | `boolean` | Renderiza o conteúdo somente quando o painel é aberto pela primeira vez |

## Props principais — TrxAccordionPanel

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `string` | Identificador único do painel |
| `disabled` | `boolean` | Desabilita o painel |

## Slots — TrxAccordionHeader

O slot padrão do `TrxAccordionHeader` aceita conteúdo HTML completo, permitindo ícones, badges e outros elementos no cabeçalho.

## Ver também

- [PrimeVue Accordion](https://primevue.org/accordion/) — documentação completa da API
