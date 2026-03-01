# TrxButton

Wrappers dos componentes de botão do PrimeVue. Incluem `TrxButton`, `TrxButtonGroup`, `TrxSplitButton` e `TrxSpeedDial`. São pass-through completos — aceitam todos os props e slots do PrimeVue original.

## Uso

```vue
<script setup lang="ts">
import { TrxButton, TrxButtonGroup, TrxSplitButton, TrxSpeedDial } from '@trx/ui-common'

const splitItems = [
  { label: 'Editar', icon: 'pi pi-pencil', command: () => {} },
  { label: 'Excluir', icon: 'pi pi-trash', command: () => {} },
]

const dialItems = [
  { label: 'Adicionar', icon: 'pi pi-plus', command: () => {} },
  { label: 'Exportar', icon: 'pi pi-download', command: () => {} },
]
</script>

<template>
  <!-- Botão simples -->
  <TrxButton label="Salvar" icon="pi pi-check" severity="success" />

  <!-- Variações de severidade -->
  <TrxButton label="Primário" />
  <TrxButton label="Secundário" severity="secondary" />
  <TrxButton label="Perigo" severity="danger" />
  <TrxButton label="Apenas ícone" icon="pi pi-search" rounded />

  <!-- Grupo de botões -->
  <TrxButtonGroup>
    <TrxButton label="Dia" />
    <TrxButton label="Semana" />
    <TrxButton label="Mês" />
  </TrxButtonGroup>

  <!-- Botão com menu suspenso -->
  <TrxSplitButton label="Salvar" icon="pi pi-check" :model="splitItems" />

  <!-- Discagem rápida (SpeedDial) -->
  <TrxSpeedDial :model="dialItems" direction="up" />
</template>
```

## Props principais — TrxButton

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `label` | `string` | Texto do botão |
| `icon` | `string` | Classe do ícone (ex: `pi pi-check`) |
| `severity` | `string` | Variante: `secondary`, `success`, `info`, `warn`, `danger`, `contrast` |
| `size` | `string` | Tamanho: `small`, `large` |
| `rounded` | `boolean` | Bordas arredondadas |
| `outlined` | `boolean` | Estilo sem fundo |
| `text` | `boolean` | Estilo apenas texto |
| `loading` | `boolean` | Exibe spinner de carregamento |
| `disabled` | `boolean` | Desabilita o botão |
| `as` | `string \| Component` | Tag HTML ou componente raiz renderizado |

## Props principais — TrxSplitButton

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `label` | `string` | Texto do botão principal |
| `icon` | `string` | Ícone do botão principal |
| `model` | `MenuItem[]` | Itens do menu suspenso |
| `severity` | `string` | Mesmas variantes do TrxButton |
| `menuButtonIcon` | `string` | Ícone do botão de abertura do menu |

## Props principais — TrxSpeedDial

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `model` | `MenuItem[]` | Itens das ações |
| `direction` | `string` | Direção: `up`, `down`, `left`, `right` |
| `type` | `string` | Layout: `linear`, `circle`, `semi-circle`, `quarter-circle` |
| `showIcon` | `string` | Ícone quando aberto |
| `hideIcon` | `string` | Ícone quando fechado |

## Ver também

- [PrimeVue Button](https://primevue.org/button/) — documentação completa da API
- [PrimeVue SplitButton](https://primevue.org/splitbutton/) — documentação completa da API
- [PrimeVue SpeedDial](https://primevue.org/speeddial/) — documentação completa da API
