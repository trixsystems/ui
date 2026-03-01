# TrxSelect

Wrappers para componentes de seleção do PrimeVue: `TrxSelect`, `TrxMultiSelect`, `TrxListbox`, `TrxCascadeSelect` e `TrxTreeSelect`. `TrxSelect` e `TrxMultiSelect` possuem defaults PT-BR.

> `TrxDropdown` é um alias de `TrxSelect` para compatibilidade com código legado.

## Defaults TRX

| Prop | Default TRX | Descrição |
|:-----|:------------|:----------|
| `placeholder` | `"Selecione..."` | Texto exibido quando nenhum item está selecionado (TrxSelect e TrxMultiSelect) |
| `emptyMessage` | `"Nenhum resultado"` | Mensagem exibida quando a lista está vazia (TrxSelect e TrxMultiSelect) |

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  TrxSelect, TrxMultiSelect, TrxListbox,
  TrxCascadeSelect, TrxTreeSelect,
} from '@trx/ui-common'

const cidade = ref(null)
const cidades = ref([
  { label: 'São Paulo', value: 'sp' },
  { label: 'Rio de Janeiro', value: 'rj' },
  { label: 'Belo Horizonte', value: 'bh' },
])

const selecionadas = ref([])

const regioes = ref([
  {
    label: 'Sudeste',
    items: [
      { label: 'São Paulo', value: 'sp' },
      { label: 'Rio de Janeiro', value: 'rj' },
    ],
  },
])
</script>

<template>
  <!-- Select simples (usa defaults PT-BR automaticamente) -->
  <TrxSelect v-model="cidade" :options="cidades" option-label="label" option-value="value" />

  <!-- MultiSelect -->
  <TrxMultiSelect v-model="selecionadas" :options="cidades" option-label="label" option-value="value" />

  <!-- Listbox (seleção inline, sem dropdown) -->
  <TrxListbox v-model="cidade" :options="cidades" option-label="label" option-value="value" />

  <!-- CascadeSelect -->
  <TrxCascadeSelect
    v-model="cidade"
    :options="regioes"
    option-label="label"
    option-value="value"
    option-group-label="label"
    :option-group-children="['items']"
  />
</template>
```

## Props principais — TrxSelect

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `any` | Valor selecionado via `v-model` |
| `options` | `any[]` | Lista de opções |
| `optionLabel` | `string` | Campo usado como rótulo |
| `optionValue` | `string` | Campo usado como valor |
| `filter` | `boolean` | Habilita campo de busca interno |
| `showClear` | `boolean` | Exibe botão para limpar seleção |
| `loading` | `boolean` | Estado de carregamento |
| `invalid` | `boolean` | Estado de erro |
| `fluid` | `boolean` | Ocupa toda a largura disponível |

## Props principais — TrxMultiSelect

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `any[]` | Valores selecionados via `v-model` |
| `options` | `any[]` | Lista de opções |
| `optionLabel` | `string` | Campo usado como rótulo |
| `maxSelectedLabels` | `number` | Máximo de rótulos exibidos antes de agrupar |
| `filter` | `boolean` | Habilita campo de busca interno |
| `selectAll` | `boolean` | Exibe opção de selecionar tudo |

## Ver também

- [PrimeVue Select](https://primevue.org/select/) — documentação completa da API
- [PrimeVue MultiSelect](https://primevue.org/multiselect/) — documentação completa da API
- [PrimeVue Listbox](https://primevue.org/listbox/) — documentação completa da API
- [PrimeVue CascadeSelect](https://primevue.org/cascadeselect/) — documentação completa da API
- [PrimeVue TreeSelect](https://primevue.org/treeselect/) — documentação completa da API
