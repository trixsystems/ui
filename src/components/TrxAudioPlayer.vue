<script setup lang="ts">
/**
 * TrxAudioPlayer — Player de áudio para gravações de chamadas.
 *
 * @example
 * <TrxAudioPlayer src="/recordings/call-123.mp3" :duration="185" />
 */

import { ref, computed, onBeforeUnmount, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    /** Duração em segundos (para exibir antes de carregar) */
    duration?: number
    /** Exibe botão de download */
    downloadable?: boolean
    /** Nome do arquivo para download */
    filename?: string
    /** Velocidades disponíveis */
    speeds?: number[]
  }>(),
  {
    downloadable: true,
    speeds: () => [0.5, 0.75, 1, 1.25, 1.5, 2],
  },
)

const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const totalDuration = ref(props.duration ?? 0)
const currentSpeed = ref(1)
const loading = ref(false)
const error = ref(false)
const speedOpen = ref(false)

const progress = computed(() =>
  totalDuration.value > 0 ? (currentTime.value / totalDuration.value) * 100 : 0,
)

function formatTime(seconds: number): string {
  const s = Math.floor(seconds)
  const m = Math.floor(s / 60)
  const rem = s % 60
  return `${m}:${rem.toString().padStart(2, '0')}`
}

function togglePlay() {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play()
  }
}

function seek(e: MouseEvent) {
  if (!audioRef.value || !totalDuration.value) return
  const bar = e.currentTarget as HTMLElement
  const rect = bar.getBoundingClientRect()
  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
  audioRef.value.currentTime = ratio * totalDuration.value
}

function setSpeed(speed: number) {
  currentSpeed.value = speed
  speedOpen.value = false
  if (audioRef.value) audioRef.value.playbackRate = speed
}

function onPlay()   { isPlaying.value = true }
function onPause()  { isPlaying.value = false }
function onEnded()  { isPlaying.value = false; currentTime.value = 0 }
function onTimeUpdate() { currentTime.value = audioRef.value?.currentTime ?? 0 }
function onLoadedMetadata() {
  totalDuration.value = audioRef.value?.duration ?? props.duration ?? 0
  loading.value = false
}
function onError() { error.value = true; loading.value = false }
function onWaiting() { loading.value = true }
function onCanPlay() { loading.value = false }

function download() {
  const a = document.createElement('a')
  a.href = props.src
  a.download = props.filename ?? props.src.split('/').pop() ?? 'gravacao.mp3'
  a.click()
}

// Atualiza velocidade ao mudar
watch(currentSpeed, (v) => {
  if (audioRef.value) audioRef.value.playbackRate = v
})

onBeforeUnmount(() => {
  audioRef.value?.pause()
})
</script>

<template>
  <div class="trx-player" role="region" aria-label="Player de áudio">
    <!-- Audio element -->
    <audio
      ref="audioRef"
      :src="src"
      preload="metadata"
      @play="onPlay"
      @pause="onPause"
      @ended="onEnded"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @error="onError"
      @waiting="onWaiting"
      @canplay="onCanPlay"
    />

    <!-- Erro -->
    <div v-if="error" class="trx-player__error">
      <i class="pi pi-exclamation-triangle" aria-hidden="true" />
      Não foi possível carregar o áudio.
    </div>

    <template v-else>
      <!-- Play/Pause -->
      <button
        type="button"
        class="trx-player__play"
        :aria-label="isPlaying ? 'Pausar' : 'Reproduzir'"
        :disabled="loading"
        @click="togglePlay"
      >
        <i
          :class="loading ? 'pi pi-spin pi-spinner' : isPlaying ? 'pi pi-pause' : 'pi pi-play'"
          aria-hidden="true"
        />
      </button>

      <!-- Progress -->
      <div class="trx-player__timeline">
        <span class="trx-player__time">{{ formatTime(currentTime) }}</span>

        <div
          class="trx-player__bar"
          role="slider"
          :aria-valuemin="0"
          :aria-valuemax="totalDuration"
          :aria-valuenow="currentTime"
          :aria-label="`Posição: ${formatTime(currentTime)} de ${formatTime(totalDuration)}`"
          tabindex="0"
          @click="seek"
        >
          <div class="trx-player__track">
            <div class="trx-player__fill" :style="{ width: `${progress}%` }" />
            <div class="trx-player__thumb" :style="{ left: `${progress}%` }" />
          </div>
        </div>

        <span class="trx-player__time trx-player__time--total">{{ formatTime(totalDuration) }}</span>
      </div>

      <!-- Velocidade -->
      <div class="trx-player__speed-wrap">
        <button
          type="button"
          class="trx-player__speed-btn"
          :aria-label="`Velocidade: ${currentSpeed}x`"
          @click="speedOpen = !speedOpen"
        >
          {{ currentSpeed }}x
        </button>
        <ul v-if="speedOpen" class="trx-player__speed-menu" role="listbox">
          <li
            v-for="s in speeds"
            :key="s"
            :class="['trx-player__speed-opt', { 'trx-player__speed-opt--active': s === currentSpeed }]"
            role="option"
            :aria-selected="s === currentSpeed"
            @click="setSpeed(s)"
          >
            {{ s }}x
          </li>
        </ul>
        <div v-if="speedOpen" class="trx-player__backdrop" @click="speedOpen = false" />
      </div>

      <!-- Download -->
      <button
        v-if="downloadable"
        type="button"
        class="trx-player__download"
        aria-label="Baixar gravação"
        title="Baixar gravação"
        @click="download"
      >
        <i class="pi pi-download" aria-hidden="true" />
      </button>
    </template>
  </div>
</template>

<style scoped>
.trx-player {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  background: var(--trx-bg-tertiary);
  border: 1px solid var(--trx-border);
  border-radius: 10px;
  min-width: 280px;
}

/* Play button */
.trx-player__play {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--trx-accent-color);
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.875rem;
  flex-shrink: 0;
  transition: background 0.15s, transform 0.1s;
}
.trx-player__play:hover { filter: brightness(1.1); }
.trx-player__play:active { transform: scale(0.94); }
.trx-player__play:disabled { opacity: 0.5; cursor: not-allowed; }

/* Timeline */
.trx-player__timeline {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.trx-player__time {
  font-size: 0.75rem;
  color: var(--trx-text-muted);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Progress bar */
.trx-player__bar {
  flex: 1;
  padding: 6px 0;
  cursor: pointer;
}
.trx-player__track {
  position: relative;
  height: 4px;
  background: var(--trx-border);
  border-radius: 2px;
}
.trx-player__fill {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  background: var(--trx-accent-color);
  border-radius: 2px;
  transition: width 0.1s linear;
}
.trx-player__thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--trx-accent-color);
  box-shadow: 0 0 0 2px var(--trx-bg-card);
  transition: left 0.1s linear;
}
.trx-player__bar:hover .trx-player__thumb { width: 14px; height: 14px; }

/* Speed */
.trx-player__speed-wrap { position: relative; flex-shrink: 0; }

.trx-player__speed-btn {
  font-size: 0.75rem; font-weight: 600;
  padding: 0.25rem 0.375rem;
  border: 1px solid var(--trx-border);
  border-radius: 5px;
  background: var(--trx-bg-card);
  color: var(--trx-text-secondary);
  cursor: pointer;
  min-width: 36px;
  transition: all 0.15s;
}
.trx-player__speed-btn:hover {
  border-color: var(--trx-accent-color);
  color: var(--trx-accent-color);
}

.trx-player__speed-menu {
  position: absolute;
  bottom: calc(100% + 4px);
  right: 0;
  z-index: 1001;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border);
  border-radius: 8px;
  box-shadow: var(--trx-shadow-lg);
  list-style: none;
  padding: 0.25rem;
  margin: 0;
  min-width: 64px;
}
.trx-player__speed-opt {
  padding: 0.375rem 0.625rem;
  font-size: 0.8125rem;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  color: var(--trx-text-primary);
  transition: background 0.12s;
}
.trx-player__speed-opt:hover { background: var(--trx-bg-hover); }
.trx-player__speed-opt--active {
  background: var(--trx-primary-soft);
  color: var(--trx-accent-color);
  font-weight: 600;
}

.trx-player__backdrop { position: fixed; inset: 0; z-index: 1000; }

/* Download */
.trx-player__download {
  background: none; border: none;
  color: var(--trx-text-muted);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 5px;
  display: flex; align-items: center;
  transition: color 0.15s;
  flex-shrink: 0;
}
.trx-player__download:hover { color: var(--trx-accent-color); }

/* Erro */
.trx-player__error {
  display: flex; align-items: center; gap: 0.5rem;
  color: var(--trx-danger); font-size: 0.875rem;
}
</style>
