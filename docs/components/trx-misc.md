# Utilitários e Miscelânea

Wrappers para componentes utilitários do PrimeVue: `TrxAvatar`, `TrxAvatarGroup`, `TrxBadge`, `TrxOverlayBadge`, `TrxTag`, `TrxChip`, `TrxProgressBar`, `TrxProgressSpinner`, `TrxSkeleton`, `TrxBlockUI`, `TrxInplace`, `TrxMeterGroup`, `TrxScrollTop` e `TrxTerminal`. São pass-through completos sem defaults TRX específicos.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  TrxAvatar, TrxAvatarGroup, TrxBadge, TrxOverlayBadge,
  TrxTag, TrxChip, TrxProgressBar, TrxProgressSpinner,
  TrxSkeleton, TrxBlockUI, TrxInplace, TrxMeterGroup,
  TrxScrollTop,
} from '@trx/ui-common'

const carregando = ref(false)
const progresso = ref(65)
const bloqueado = ref(false)
</script>

<template>
  <!-- Avatares -->
  <TrxAvatar label="JS" shape="circle" size="large" />
  <TrxAvatar image="/fotos/usuario.jpg" shape="circle" />
  <TrxAvatar icon="pi pi-user" shape="circle" />

  <!-- Grupo de avatares empilhados -->
  <TrxAvatarGroup>
    <TrxAvatar image="/fotos/u1.jpg" shape="circle" />
    <TrxAvatar image="/fotos/u2.jpg" shape="circle" />
    <TrxAvatar label="+3" shape="circle" />
  </TrxAvatarGroup>

  <!-- Badge -->
  <TrxBadge value="5" severity="danger" />
  <TrxBadge value="Novo" severity="success" />

  <!-- OverlayBadge: badge sobreposto a outro elemento -->
  <TrxOverlayBadge value="3" severity="danger">
    <i class="pi pi-bell" style="font-size: 1.5rem" />
  </TrxOverlayBadge>

  <!-- Tag (rótulo colorido) -->
  <TrxTag value="Ativo" severity="success" />
  <TrxTag value="Pendente" severity="warn" />
  <TrxTag value="Inativo" severity="danger" />
  <TrxTag value="Arquivado" severity="secondary" />

  <!-- Chip (com ícone e remoção) -->
  <TrxChip label="João Silva" icon="pi pi-user" removable />
  <TrxChip label="Vue.js" />

  <!-- Barra de progresso determinada -->
  <TrxProgressBar :value="progresso" />

  <!-- Barra de progresso indeterminada -->
  <TrxProgressBar mode="indeterminate" style="height: 4px" />

  <!-- Spinner de carregamento -->
  <TrxProgressSpinner style="width: 50px; height: 50px" />

  <!-- Skeleton (placeholder de carregamento) -->
  <TrxSkeleton width="100%" height="2rem" class="mb-2" />
  <TrxSkeleton width="75%" height="2rem" class="mb-2" />
  <TrxSkeleton width="50%" height="2rem" />

  <!-- BlockUI: bloqueia uma região da tela -->
  <TrxBlockUI :blocked="bloqueado">
    <div class="p-4 border border-round">
      Conteúdo que pode ser bloqueado
    </div>
  </TrxBlockUI>

  <!-- Inplace: edição inline -->
  <TrxInplace>
    <template #display>Clique para editar</template>
    <template #content>
      <TrxInputText placeholder="Edite aqui..." />
    </template>
  </TrxInplace>

  <!-- MeterGroup: barras de medição múltiplas -->
  <TrxMeterGroup
    :value="[
      { label: 'Apps', value: 30, color: '#10b981' },
      { label: 'Mídia', value: 25, color: '#3b82f6' },
      { label: 'Sistema', value: 15, color: '#f59e0b' },
    ]"
  />

  <!-- ScrollTop: botão flutuante para voltar ao topo -->
  <TrxScrollTop />
</template>
```

## Props principais — TrxAvatar

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `label` | `string` | Texto exibido (iniciais) |
| `icon` | `string` | Ícone (ex: `pi pi-user`) |
| `image` | `string` | URL da imagem |
| `size` | `string` | `normal`, `large`, `xlarge` |
| `shape` | `string` | `square` (padrão) ou `circle` |

## Props principais — TrxTag

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `string` | Texto da tag |
| `severity` | `string` | `success`, `info`, `warn`, `danger`, `secondary`, `contrast` |
| `icon` | `string` | Ícone prefixado |
| `rounded` | `boolean` | Bordas arredondadas |

## Props principais — TrxProgressBar

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `number` | Porcentagem de preenchimento (0-100) |
| `mode` | `string` | `determinate` (padrão) ou `indeterminate` |
| `showValue` | `boolean` | Exibe o valor percentual dentro da barra |

## Props principais — TrxSkeleton

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `width` | `string` | Largura (ex: `100%`, `200px`) |
| `height` | `string` | Altura (ex: `1rem`, `50px`) |
| `shape` | `string` | `rectangle` (padrão) ou `circle` |
| `borderRadius` | `string` | Raio das bordas para shapes customizados |
| `animation` | `string` | `wave` (padrão) ou `none` |

## Props principais — TrxChip

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `label` | `string` | Texto do chip |
| `icon` | `string` | Ícone prefixado |
| `image` | `string` | URL de imagem prefixada |
| `removable` | `boolean` | Exibe botão de remoção |

## Ver também

- [PrimeVue Avatar](https://primevue.org/avatar/) — documentação completa da API
- [PrimeVue Badge](https://primevue.org/badge/) — documentação completa da API
- [PrimeVue Tag](https://primevue.org/tag/) — documentação completa da API
- [PrimeVue Chip](https://primevue.org/chip/) — documentação completa da API
- [PrimeVue ProgressBar](https://primevue.org/progressbar/) — documentação completa da API
- [PrimeVue ProgressSpinner](https://primevue.org/progressspinner/) — documentação completa da API
- [PrimeVue Skeleton](https://primevue.org/skeleton/) — documentação completa da API
- [PrimeVue BlockUI](https://primevue.org/blockui/) — documentação completa da API
- [PrimeVue Inplace](https://primevue.org/inplace/) — documentação completa da API
- [PrimeVue MeterGroup](https://primevue.org/metergroup/) — documentação completa da API
- [PrimeVue ScrollTop](https://primevue.org/scrolltop/) — documentação completa da API
- [PrimeVue Terminal](https://primevue.org/terminal/) — documentação completa da API
