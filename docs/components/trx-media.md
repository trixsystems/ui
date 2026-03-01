# Mídia

Wrappers para os componentes de mídia do PrimeVue: `TrxImage`, `TrxCarousel`, `TrxGalleria` e `TrxImageCompare`. São pass-through completos sem defaults TRX específicos.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxImage, TrxCarousel, TrxGalleria, TrxImageCompare } from '@trx/ui-common'

const imagens = ref([
  { src: '/fotos/foto1.jpg', alt: 'Foto 1', thumb: '/fotos/thumb1.jpg' },
  { src: '/fotos/foto2.jpg', alt: 'Foto 2', thumb: '/fotos/thumb2.jpg' },
  { src: '/fotos/foto3.jpg', alt: 'Foto 3', thumb: '/fotos/thumb3.jpg' },
])

const produtos = ref([
  { nome: 'Headset Pro', preco: 'R$ 299,90', imagem: '/img/headset.jpg' },
  { nome: 'Webcam Ultra', preco: 'R$ 449,00', imagem: '/img/webcam.jpg' },
  { nome: 'Monitor Curvo', preco: 'R$ 1.890,00', imagem: '/img/monitor.jpg' },
])
</script>

<template>
  <!-- Imagem com visualização em tela cheia ao clicar -->
  <TrxImage src="/fotos/produto.jpg" alt="Produto" width="300" preview />

  <!-- Imagem com fallback para erro -->
  <TrxImage src="/fotos/avatar.jpg" alt="Avatar" :on-error="() => {}" />

  <!-- Carrossel de produtos -->
  <TrxCarousel
    :value="produtos"
    :num-visible="3"
    :num-scroll="1"
    circular
    :auto-play-interval="4000"
  >
    <template #item="{ data }">
      <div class="border border-round p-4 m-2 text-center">
        <img :src="data.imagem" :alt="data.nome" class="w-full" />
        <h3>{{ data.nome }}</h3>
        <p>{{ data.preco }}</p>
      </div>
    </template>
  </TrxCarousel>

  <!-- Galeria de imagens com lightbox -->
  <TrxGalleria
    :value="imagens"
    :num-visible="4"
    :show-thumbnails="true"
    :show-item-navigators="true"
  >
    <template #item="{ item }">
      <img :src="item.src" :alt="item.alt" style="max-height: 400px; object-fit: contain" />
    </template>
    <template #thumbnail="{ item }">
      <img :src="item.thumb" :alt="item.alt" style="width: 80px; height: 60px; object-fit: cover" />
    </template>
  </TrxGalleria>

  <!-- Comparação de imagens (slider entre antes/depois) -->
  <TrxImageCompare>
    <template #start>
      <img src="/antes.jpg" alt="Antes" />
    </template>
    <template #end>
      <img src="/depois.jpg" alt="Depois" />
    </template>
  </TrxImageCompare>
</template>
```

## Props principais — TrxImage

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `src` | `string` | URL da imagem |
| `alt` | `string` | Texto alternativo |
| `preview` | `boolean` | Habilita visualização em tela cheia ao clicar |
| `width` | `string` | Largura da imagem |
| `height` | `string` | Altura da imagem |
| `imageStyle` | `object` | Estilos inline da imagem |

## Props principais — TrxCarousel

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `any[]` | Lista de itens do carrossel |
| `numVisible` | `number` | Número de itens visíveis simultaneamente |
| `numScroll` | `number` | Número de itens avançados por clique |
| `circular` | `boolean` | Navegação circular infinita |
| `autoPlayInterval` | `number` | Intervalo de auto-avanço em ms (0 = desabilitado) |
| `showIndicators` | `boolean` | Exibe indicadores de posição |
| `responsiveOptions` | `any[]` | Configurações por breakpoint |

## Props principais — TrxGalleria

| Prop | Tipo | Descrição |
|:-----|:-----|:----------|
| `value` | `any[]` | Lista de imagens |
| `numVisible` | `number` | Número de thumbnails visíveis |
| `showThumbnails` | `boolean` | Exibe miniaturas abaixo da imagem principal |
| `showItemNavigators` | `boolean` | Exibe setas de navegação |
| `fullScreen` | `boolean` | Exibe em modo tela cheia |
| `circular` | `boolean` | Navegação circular |

## Ver também

- [PrimeVue Image](https://primevue.org/image/) — documentação completa da API
- [PrimeVue Carousel](https://primevue.org/carousel/) — documentação completa da API
- [PrimeVue Galleria](https://primevue.org/galleria/) — documentação completa da API
- [PrimeVue ImageCompare](https://primevue.org/imagecompare/) — documentação completa da API
