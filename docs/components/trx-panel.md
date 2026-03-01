# Painéis e Layout

Wrappers para componentes de painel e layout do PrimeVue: `TrxPanel`, `TrxFieldset`, `TrxDivider`, `TrxScrollPanel`, `TrxSplitter`, `TrxSplitterPanel` e `TrxToolbar`. São pass-through completos sem defaults TRX específicos.

## Uso

```vue
<script setup lang="ts">
import {
  TrxPanel, TrxFieldset, TrxDivider,
  TrxScrollPanel, TrxSplitter, TrxSplitterPanel,
  TrxToolbar, TrxButton,
} from '@trx/ui-common'

const colapsado = ref(false)
</script>

<template>
  <!-- Panel com cabeçalho e colapso -->
  <TrxPanel header="Detalhes do cliente" toggleable v-model:collapsed="colapsado">
    <p>Conteúdo do painel.</p>
  </TrxPanel>

  <!-- Fieldset com legenda -->
  <TrxFieldset legend="Endereço" toggleable>
    <div class="grid grid-cols-2 gap-4">
      <!-- campos de endereço -->
    </div>
  </TrxFieldset>

  <!-- Divisor horizontal -->
  <TrxDivider />

  <!-- Divisor com texto -->
  <TrxDivider align="center" type="dashed">
    <span class="text-sm text-secondary">ou</span>
  </TrxDivider>

  <!-- Divisor vertical -->
  <div class="flex">
    <div>Coluna esquerda</div>
    <TrxDivider layout="vertical" />
    <div>Coluna direita</div>
  </div>

  <!-- ScrollPanel com altura fixa -->
  <TrxScrollPanel style="height: 300px">
    <!-- conteúdo longo -->
  </TrxScrollPanel>

  <!-- Splitter com painéis redimensionáveis -->
  <TrxSplitter style="height: 400px">
    <TrxSplitterPanel :size="30" :min-size="20">
      <div class="p-4">Painel esquerdo</div>
    </TrxSplitterPanel>
    <TrxSplitterPanel :size="70">
      <div class="p-4">Painel direito</div>
    </TrxSplitterPanel>
  </TrxSplitter>

  <!-- Toolbar com slots start, center e end -->
  <TrxToolbar>
    <template #start>
      <TrxButton label="Novo" icon="pi pi-plus" />
      <TrxButton label="Excluir" severity="danger" icon="pi pi-trash" class="ml-2" />
    </template>
    <template #end>
      <TrxButton icon="pi pi-download" severity="secondary" outlined />
    </template>
  </TrxToolbar>
</template>
```

## Props principais — TrxPanel

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `header` | `string` | Título do cabeçalho |
| `toggleable` | `boolean` | Habilita colapso do conteúdo |
| `collapsed` | `boolean` | Estado de colapso via `v-model:collapsed` |

## Props principais — TrxFieldset

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `legend` | `string` | Texto da legenda |
| `toggleable` | `boolean` | Habilita colapso do conteúdo |
| `collapsed` | `boolean` | Estado de colapso via `v-model:collapsed` |

## Props principais — TrxDivider

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `layout` | `string` | `horizontal` (padrão) ou `vertical` |
| `type` | `string` | `solid` (padrão), `dashed` ou `dotted` |
| `align` | `string` | Alinhamento do conteúdo: `left`, `center`, `right` |

## Props principais — TrxSplitter

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `layout` | `string` | `horizontal` (padrão) ou `vertical` |
| `stateKey` | `string` | Chave para persistir tamanhos no localStorage |
| `stateStorage` | `string` | `local` ou `session` |

## Props principais — TrxSplitterPanel

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `size` | `number` | Tamanho inicial em porcentagem |
| `minSize` | `number` | Tamanho mínimo em porcentagem |

## Ver também

- [PrimeVue Panel](https://primevue.org/panel/) — documentação completa da API
- [PrimeVue Fieldset](https://primevue.org/fieldset/) — documentação completa da API
- [PrimeVue Divider](https://primevue.org/divider/) — documentação completa da API
- [PrimeVue ScrollPanel](https://primevue.org/scrollpanel/) — documentação completa da API
- [PrimeVue Splitter](https://primevue.org/splitter/) — documentação completa da API
- [PrimeVue Toolbar](https://primevue.org/toolbar/) — documentação completa da API
