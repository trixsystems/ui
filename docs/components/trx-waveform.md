# TrxWaveform

Visualizador de forma de onda em canvas para áudio. Suporta indicador de progresso interativo.

## Uso Básico

```vue
<TrxWaveform :data="waveformData" :progress="0.3" @seek="seekTo" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `data` | `number[]` | `[]` | Amplitudes normalizadas (0–1) |
| `progress` | `number` | `0` | Progresso de reprodução (0–1) |
| `color` | `string` | `var(--trx-border-color)` | Cor das barras não reproduzidas |
| `progressColor` | `string` | `var(--trx-accent-color)` | Cor das barras reproduzidas |
| `height` | `number` | `48` | Altura em pixels |
| `barWidth` | `number` | `3` | Largura de cada barra |
| `barGap` | `number` | `2` | Espaço entre barras |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `seek` | `progress: number` | Clique para navegar (0–1) |

## Exemplo com Player

```vue
<TrxWaveform
  :data="audioAnalysis"
  :progress="currentTime / duration"
  height="60"
  @seek="p => seekAudio(p * duration)"
/>
```
