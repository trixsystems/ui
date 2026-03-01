# TrxAudioPlayer

Player de áudio para gravações de chamadas com play/pause, barra de progresso, velocidade e download.

## Uso

```vue
<script setup lang="ts">
import { TrxAudioPlayer } from '@trx/ui-common'
</script>

<template>
  <!-- Básico -->
  <TrxAudioPlayer src="/recordings/call-20260301-001.mp3" />

  <!-- Com duração conhecida (exibe antes de carregar) -->
  <TrxAudioPlayer
    src="/recordings/call-20260301-001.mp3"
    :duration="185"
  />

  <!-- Com nome de arquivo para download -->
  <TrxAudioPlayer
    src="/recordings/call-20260301-001.mp3"
    filename="chamada-2026-03-01.mp3"
    :duration="185"
  />

  <!-- Sem botão de download -->
  <TrxAudioPlayer
    src="/recordings/call-20260301-001.mp3"
    :downloadable="false"
  />

  <!-- Velocidades customizadas -->
  <TrxAudioPlayer
    src="/recordings/call-20260301-001.mp3"
    :speeds="[1, 1.5, 2]"
  />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `src` | `string` | **required** | URL do arquivo de áudio |
| `duration` | `number` | — | Duração em segundos (para exibir antes de carregar) |
| `downloadable` | `boolean` | `true` | Exibe botão de download |
| `filename` | `string` | — | Nome do arquivo para download |
| `speeds` | `number[]` | `[0.5, 0.75, 1, 1.25, 1.5, 2]` | Velocidades de reprodução disponíveis |

## Funcionalidades

- **Play/Pause** — botão circular com ícone animado
- **Barra de progresso** — clicável, mostra posição atual
- **Tempo** — exibe `MM:SS` atual e total
- **Velocidade** — dropdown com as velocidades configuradas
- **Download** — baixa o arquivo com o nome definido em `filename`
- **Acessibilidade** — `role="slider"` na barra, `aria-label` em todos os controles

## Em uma tabela de chamadas

```vue
<TrxColumn header="Gravação" style="width: 320px">
  <template #body="{ data }">
    <TrxAudioPlayer
      v-if="data.recordingUrl"
      :src="data.recordingUrl"
      :duration="data.duration"
      :filename="`chamada-${data.id}.mp3`"
    />
    <TrxStatusBadge v-else status="Sem gravação" type="secondary" />
  </template>
</TrxColumn>
```

## Formatos suportados

Depende do suporte do navegador. Recomendados:
- **MP3** (`.mp3`) — suporte universal
- **OGG** (`.ogg`) — menor tamanho
- **WAV** (`.wav`) — sem compressão
