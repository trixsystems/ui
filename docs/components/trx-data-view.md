# Dados e Listas

Wrappers para os componentes de visualização de dados do PrimeVue: `TrxDataView`, `TrxTimeline`, `TrxOrderList`, `TrxPickList`, `TrxOrganizationChart`, `TrxTree`, `TrxTreeTable` e `TrxVirtualScroller`. São pass-through completos sem defaults TRX específicos.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  TrxDataView, TrxTimeline, TrxOrderList,
  TrxPickList, TrxTree, TrxVirtualScroller,
} from '@trx/ui-common'

const produtos = ref([
  { id: 1, nome: 'Headset TRX Pro', preco: 299.9 },
  { id: 2, nome: 'Webcam Ultra HD', preco: 449.0 },
])

const eventos = ref([
  { status: 'Pedido realizado', date: '10/02/2026', icon: 'pi pi-shopping-cart', color: '#10b981' },
  { status: 'Pagamento aprovado', date: '10/02/2026', icon: 'pi pi-check', color: '#6ee7b7' },
  { status: 'Em transporte', date: '11/02/2026', icon: 'pi pi-send', color: '#3b82f6' },
  { status: 'Entregue', date: '13/02/2026', icon: 'pi pi-home', color: '#8b5cf6' },
])

const nosFonte = ref(['Opção A', 'Opção B', 'Opção C', 'Opção D'])
const nosAlvo = ref<string[]>([])

const items = Array.from({ length: 10000 }, (_, i) => ({ id: i, label: `Item ${i}` }))
</script>

<template>
  <!-- DataView: lista ou grid com template customizado -->
  <TrxDataView :value="produtos" layout="grid">
    <template #grid="{ items }">
      <div class="grid grid-cols-3 gap-4">
        <div v-for="item in items" :key="item.id" class="border border-round p-4">
          <h3>{{ item.nome }}</h3>
          <p>R$ {{ item.preco.toFixed(2) }}</p>
        </div>
      </div>
    </template>
  </TrxDataView>

  <!-- Timeline de eventos -->
  <TrxTimeline :value="eventos" align="alternate">
    <template #marker="{ item }">
      <span class="flex w-8 h-8 align-items-center justify-content-center rounded-full" :style="{ backgroundColor: item.color }">
        <i :class="item.icon" style="color: white" />
      </span>
    </template>
    <template #content="{ item }">
      <small>{{ item.date }}</small>
      <p class="font-semibold">{{ item.status }}</p>
    </template>
  </TrxTimeline>

  <!-- PickList: transferência entre duas listas -->
  <TrxPickList v-model="[nosFonte, nosAlvo]" :show-source-controls="false">
    <template #item="{ item }">{{ item }}</template>
  </TrxPickList>

  <!-- VirtualScroller: lista virtualizada para grandes volumes -->
  <TrxVirtualScroller :items="items" :item-size="50" style="height: 400px">
    <template #item="{ item }">
      <div class="p-2 border-bottom-1">{{ item.label }}</div>
    </template>
  </TrxVirtualScroller>
</template>
```

## Props principais — TrxDataView

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `any[]` | Dados a exibir |
| `layout` | `string` | `list` ou `grid` |
| `paginator` | `boolean` | Habilita paginação integrada |
| `rows` | `number` | Linhas por página |
| `sortField` | `string` | Campo de ordenação |
| `sortOrder` | `number` | `1` (ASC) ou `-1` (DESC) |

## Props principais — TrxTimeline

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `any[]` | Eventos da linha do tempo |
| `align` | `string` | `left`, `right`, `alternate` |
| `layout` | `string` | `vertical` (padrão) ou `horizontal` |

## Props principais — TrxTree

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `TreeNode[]` | Nós da árvore |
| `selectionMode` | `string` | `single`, `multiple`, `checkbox` |
| `filter` | `boolean` | Habilita busca nos nós |
| `loading` | `boolean` | Estado de carregamento |

## Props principais — TrxVirtualScroller

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `items` | `any[]` | Lista de itens (pode ser muito grande) |
| `itemSize` | `number` | Altura de cada item em pixels |
| `lazy` | `boolean` | Carregamento sob demanda |

## Ver também

- [PrimeVue DataView](https://primevue.org/dataview/) — documentação completa da API
- [PrimeVue Timeline](https://primevue.org/timeline/) — documentação completa da API
- [PrimeVue OrderList](https://primevue.org/orderlist/) — documentação completa da API
- [PrimeVue PickList](https://primevue.org/picklist/) — documentação completa da API
- [PrimeVue OrganizationChart](https://primevue.org/organizationchart/) — documentação completa da API
- [PrimeVue Tree](https://primevue.org/tree/) — documentação completa da API
- [PrimeVue TreeTable](https://primevue.org/treetable/) — documentação completa da API
- [PrimeVue VirtualScroller](https://primevue.org/virtualscroller/) — documentação completa da API
