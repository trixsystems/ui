# TrxAutoComplete

Wrapper do `AutoComplete` do PrimeVue com placeholder padrão em português.

## Defaults TRX

| Prop | Default TRX | Descrição |
|:-----|:------------|:----------|
| `placeholder` | `"Buscar..."` | Texto exibido quando o campo está vazio |

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxAutoComplete } from '@trx/ui-common'

const valor = ref('')
const sugestoes = ref<string[]>([])

const cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Fortaleza']

function buscar(event: { query: string }) {
  const q = event.query.toLowerCase()
  sugestoes.value = cidades.filter(c => c.toLowerCase().includes(q))
}
</script>

<template>
  <!-- AutoComplete simples (placeholder PT-BR automático) -->
  <TrxAutoComplete v-model="valor" :suggestions="sugestoes" @complete="buscar" />

  <!-- Com dropdown forçado -->
  <TrxAutoComplete
    v-model="valor"
    :suggestions="sugestoes"
    dropdown
    @complete="buscar"
  />

  <!-- Múltiplas seleções -->
  <TrxAutoComplete
    v-model="valor"
    :suggestions="sugestoes"
    multiple
    @complete="buscar"
  />

  <!-- Com objetos e campo de display -->
  <TrxAutoComplete
    v-model="valor"
    :suggestions="sugestoes"
    option-label="nome"
    @complete="buscar"
  />
</template>
```

## Props principais

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `modelValue` | `any` | Valor selecionado via `v-model` |
| `suggestions` | `any[]` | Lista de sugestões retornadas pelo evento `complete` |
| `optionLabel` | `string` | Campo usado como rótulo quando as sugestões são objetos |
| `placeholder` | `string` | Texto de exemplo (padrão TRX: `Buscar...`) |
| `multiple` | `boolean` | Permite múltiplas seleções (chips) |
| `dropdown` | `boolean` | Exibe botão de dropdown |
| `minLength` | `number` | Mínimo de caracteres para disparar sugestões (padrão: `1`) |
| `delay` | `number` | Atraso em ms antes de buscar sugestões (padrão: `300`) |
| `forceSelection` | `boolean` | Obriga o usuário a selecionar uma sugestão da lista |
| `invalid` | `boolean` | Estado de erro |
| `disabled` | `boolean` | Desabilita o componente |
| `fluid` | `boolean` | Ocupa toda a largura disponível |

## Eventos principais

| Evento | Payload | Descrição |
|:-------|:--------|:----------|
| `complete` | `{ query: string }` | Disparado para buscar sugestões |
| `item-select` | `{ value: any }` | Disparado ao selecionar um item |
| `item-unselect` | `{ value: any }` | Disparado ao remover um item (modo `multiple`) |

## Ver também

- [PrimeVue AutoComplete](https://primevue.org/autocomplete/) — documentação completa da API
