# TrxDrawer e TrxPopover

Wrappers para componentes de sobreposição flutuante do PrimeVue: `TrxDrawer` (painel lateral deslizante) e `TrxPopover` (popover ancorado a um elemento). São pass-through completos sem defaults TRX específicos.

> `TrxSidebar` é um alias de `TrxDrawer` para compatibilidade com código legado.
> `TrxOverlayPanel` é um alias de `TrxPopover` para compatibilidade com código legado.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxDrawer, TrxPopover, TrxButton } from '@trx/ui-common'

const drawerVisivel = ref(false)
const popoverRef = ref()

function togglePopover(event: Event) {
  popoverRef.value.toggle(event)
}
</script>

<template>
  <!-- Drawer lateral direito -->
  <TrxButton label="Abrir painel" icon="pi pi-bars" @click="drawerVisivel = true" />

  <TrxDrawer v-model:visible="drawerVisivel" header="Configurações" position="right">
    <p>Conteúdo do painel lateral.</p>
  </TrxDrawer>

  <!-- Drawer da esquerda (menu de navegação) -->
  <TrxDrawer v-model:visible="drawerVisivel" position="left" :show-close-icon="false">
    <nav><!-- links de navegação --></nav>
  </TrxDrawer>

  <!-- Popover ancorado a um botão -->
  <TrxButton label="Opções" icon="pi pi-ellipsis-v" @click="togglePopover" />
  <TrxPopover ref="popoverRef">
    <div class="p-3">
      <p>Conteúdo do popover.</p>
    </div>
  </TrxPopover>
</template>
```

## Props principais — TrxDrawer

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `visible` | `boolean` | Controla visibilidade via `v-model:visible` |
| `header` | `string` | Título do cabeçalho |
| `position` | `string` | Posição: `left`, `right` (padrão), `top`, `bottom` |
| `modal` | `boolean` | Bloqueia interação com o fundo (padrão: `true`) |
| `showCloseIcon` | `boolean` | Exibe botão de fechar |
| `blockScroll` | `boolean` | Bloqueia scroll da página |
| `style` | `object` | Estilos inline do painel |

## Slots — TrxDrawer

| Slot | Descrição |
|:-----|:----------|
| `default` | Conteúdo do corpo |
| `header` | Substituição do cabeçalho |
| `footer` | Rodapé do painel |

## TrxPopover — Métodos da instância

O `TrxPopover` é controlado por referência de template (ref). Acesse o componente e chame os métodos:

| Método | Descrição |
|:-------|:----------|
| `toggle(event)` | Alterna visibilidade ancorado ao elemento do evento |
| `show(event, target?)` | Exibe o popover ancorado ao elemento alvo |
| `hide()` | Oculta o popover |

## Props principais — TrxPopover

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `dismissable` | `boolean` | Fecha ao clicar fora (padrão: `true`) |
| `appendTo` | `string` | Elemento onde o popover é montado (padrão: `body`) |
| `style` | `object` | Estilos inline |

## Ver também

- [PrimeVue Drawer](https://primevue.org/drawer/) — documentação completa da API
- [PrimeVue Popover](https://primevue.org/popover/) — documentação completa da API
