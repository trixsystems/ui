# TrxDialog

Wrappers para os componentes de diálogo do PrimeVue: `TrxDialog`, `TrxConfirmDialog`, `TrxConfirmPopup` e `TrxDynamicDialog`. `TrxDialog` e `TrxConfirmDialog` possuem defaults TRX.

## Defaults TRX

### TrxDialog

| Prop | Default TRX | Descrição |
|:-----|:------------|:----------|
| `modal` | `true` | Bloqueia interação com o conteúdo ao fundo |
| `closable` | `true` | Exibe botão de fechar no cabeçalho |
| `draggable` | `false` | Desabilita arrastar o diálogo |

### TrxConfirmDialog

| Prop | Default TRX | Descrição |
|:-----|:------------|:----------|
| `acceptLabel` | `"Sim"` | Rótulo do botão de confirmação |
| `rejectLabel` | `"Não"` | Rótulo do botão de rejeição |

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { TrxDialog, TrxConfirmDialog, TrxConfirmPopup, TrxButton } from '@trx/ui-common'

const visivel = ref(false)
const confirm = useConfirm()

function confirmarExclusao() {
  confirm.require({
    message: 'Deseja realmente excluir este registro?',
    header: 'Confirmar exclusão',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      // lógica de exclusão
    },
  })
}
</script>

<template>
  <!-- Diálogo padrão (modal=true, closable=true, draggable=false automáticos) -->
  <TrxButton label="Abrir diálogo" @click="visivel = true" />

  <TrxDialog v-model:visible="visivel" header="Detalhes" :style="{ width: '500px' }">
    <p>Conteúdo do diálogo.</p>

    <template #footer>
      <TrxButton label="Cancelar" severity="secondary" @click="visivel = false" />
      <TrxButton label="Salvar" @click="visivel = false" />
    </template>
  </TrxDialog>

  <!-- ConfirmDialog: renderizado globalmente, controlado via useConfirm() -->
  <TrxConfirmDialog />
  <TrxButton label="Excluir" severity="danger" @click="confirmarExclusao" />

  <!-- ConfirmPopup: aparece ancorado ao elemento clicado -->
  <TrxConfirmPopup />
</template>
```

## Props principais — TrxDialog

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `visible` | `boolean` | Controla visibilidade via `v-model:visible` |
| `header` | `string` | Título do cabeçalho |
| `modal` | `boolean` | Bloqueia interação ao fundo (padrão TRX: `true`) |
| `closable` | `boolean` | Exibe botão de fechar (padrão TRX: `true`) |
| `draggable` | `boolean` | Permite arrastar (padrão TRX: `false`) |
| `style` | `object` | Estilos inline do painel |
| `maximizable` | `boolean` | Exibe botão de maximizar |
| `position` | `string` | Posição: `center`, `top`, `bottom`, `left`, `right` |
| `blockScroll` | `boolean` | Bloqueia scroll da página |

## Slots — TrxDialog

| Slot | Descrição |
|:-----|:----------|
| `default` | Conteúdo do corpo |
| `header` | Substituição completa do cabeçalho |
| `footer` | Botões e ações do rodapé |

## Props principais — TrxConfirmDialog

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `group` | `string` | Grupo para múltiplas instâncias na mesma página |
| `acceptLabel` | `string` | Rótulo do botão de aceite (padrão TRX: `Sim`) |
| `rejectLabel` | `string` | Rótulo do botão de rejeição (padrão TRX: `Não`) |
| `acceptIcon` | `string` | Ícone do botão de aceite |
| `rejectIcon` | `string` | Ícone do botão de rejeição |

## Ver também

- [PrimeVue Dialog](https://primevue.org/dialog/) — documentação completa da API
- [PrimeVue ConfirmDialog](https://primevue.org/confirmdialog/) — documentação completa da API
- [PrimeVue ConfirmPopup](https://primevue.org/confirmpopup/) — documentação completa da API
- [PrimeVue DynamicDialog](https://primevue.org/dynamicdialog/) — documentação completa da API
