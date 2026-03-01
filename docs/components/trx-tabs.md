# TrxTabs

Wrapper para o sistema de abas do PrimeVue 4. Utiliza a nova API composicional com `TrxTabs`, `TrxTabList`, `TrxTab`, `TrxTabPanels` e `TrxTabPanel`.

> `TrxTabView` é um alias de `TrxTabs` para compatibilidade com código legado. A nova API PrimeVue 4 é composicional e diferente da API do TabView legado.

## Uso

```vue
<script setup lang="ts">
import {
  TrxTabs, TrxTabList, TrxTab,
  TrxTabPanels, TrxTabPanel,
} from '@trx/ui-common'
</script>

<template>
  <!-- Estrutura básica de abas -->
  <TrxTabs value="0">
    <TrxTabList>
      <TrxTab value="0">Visão Geral</TrxTab>
      <TrxTab value="1">Configurações</TrxTab>
      <TrxTab value="2">Histórico</TrxTab>
    </TrxTabList>

    <TrxTabPanels>
      <TrxTabPanel value="0">
        <p>Conteúdo da aba Visão Geral.</p>
      </TrxTabPanel>
      <TrxTabPanel value="1">
        <p>Conteúdo da aba Configurações.</p>
      </TrxTabPanel>
      <TrxTabPanel value="2">
        <p>Conteúdo da aba Histórico.</p>
      </TrxTabPanel>
    </TrxTabPanels>
  </TrxTabs>

  <!-- Abas controláveis (v-model) -->
  <TrxTabs v-model:value="abaAtiva">
    <TrxTabList>
      <TrxTab value="geral">Geral</TrxTab>
      <TrxTab value="avancado" :disabled="!podeMudar">Avançado</TrxTab>
    </TrxTabList>
    <TrxTabPanels>
      <TrxTabPanel value="geral"><!-- ... --></TrxTabPanel>
      <TrxTabPanel value="avancado"><!-- ... --></TrxTabPanel>
    </TrxTabPanels>
  </TrxTabs>

  <!-- Abas com ícones -->
  <TrxTabs value="0">
    <TrxTabList>
      <TrxTab value="0">
        <i class="pi pi-home mr-2" />Início
      </TrxTab>
      <TrxTab value="1">
        <i class="pi pi-cog mr-2" />Configurações
      </TrxTab>
    </TrxTabList>
    <TrxTabPanels>
      <TrxTabPanel value="0"><!-- ... --></TrxTabPanel>
      <TrxTabPanel value="1"><!-- ... --></TrxTabPanel>
    </TrxTabPanels>
  </TrxTabs>
</template>
```

## Props principais — TrxTabs

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `string \| number` | Aba ativa via `v-model:value` |
| `scrollable` | `boolean` | Habilita scroll horizontal na lista de abas |
| `lazy` | `boolean` | Renderiza o conteúdo das abas somente quando ativadas |

## Props principais — TrxTab

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `string \| number` | Identificador único da aba (deve corresponder ao `TrxTabPanel`) |
| `disabled` | `boolean` | Desabilita a aba |
| `as` | `string \| Component` | Tag raiz renderizada |

## Props principais — TrxTabPanel

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `string \| number` | Identificador (deve corresponder ao `TrxTab`) |
| `as` | `string \| Component` | Tag raiz renderizada |

## Ver também

- [PrimeVue Tabs](https://primevue.org/tabs/) — documentação completa da API
