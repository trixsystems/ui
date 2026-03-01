<script setup lang="ts">

export interface TrxTranscriptionSegment {
  id: string
  speaker: 'agent' | 'customer' | string
  text: string
  startTime: number
  endTime?: number
  confidence?: number
}

const props = withDefaults(defineProps<{
  segments: TrxTranscriptionSegment[]
  currentTime?: number
  agentName?: string
  customerName?: string
  searchQuery?: string
}>(), {
  agentName: 'Agente',
  customerName: 'Cliente',
})

function formatTime(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, '0')
  const sec = Math.floor(s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}

function isActive(seg: TrxTranscriptionSegment) {
  if (props.currentTime === undefined) return false
  const end = seg.endTime ?? seg.startTime + 5
  return props.currentTime >= seg.startTime && props.currentTime <= end
}

function highlight(text: string) {
  if (!props.searchQuery) return text
  const q = props.searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return text.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>')
}

function speakerName(speaker: string) {
  if (speaker === 'agent') return props.agentName
  if (speaker === 'customer') return props.customerName
  return speaker
}

function initials(name: string) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}
</script>

<template>
  <div class="trx-transcription">
    <div
      v-for="seg in segments"
      :key="seg.id"
      class="trx-transcription__segment"
      :class="[
        `trx-transcription__segment--${seg.speaker}`,
        { 'trx-transcription__segment--active': isActive(seg) }
      ]"
    >
      <div v-if="seg.speaker !== 'system'" class="trx-transcription__avatar">
        {{ initials(speakerName(seg.speaker)) }}
      </div>
      <div class="trx-transcription__bubble">
        <div class="trx-transcription__header">
          <span class="trx-transcription__speaker">{{ speakerName(seg.speaker) }}</span>
          <span class="trx-transcription__time">{{ formatTime(seg.startTime) }}</span>
          <span v-if="seg.confidence !== undefined && seg.confidence < 0.7" class="trx-transcription__low-conf" title="Baixa confiança">
            <i class="pi pi-exclamation-triangle"></i>
          </span>
        </div>
        <p class="trx-transcription__text" v-html="highlight(seg.text)"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-transcription { display: flex; flex-direction: column; gap: 0.75rem; padding: 0.5rem 0; }

.trx-transcription__segment {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  transition: opacity 0.2s;
}

.trx-transcription__segment--customer { flex-direction: row-reverse; }

.trx-transcription__segment--system {
  justify-content: center;
  font-size: 0.75rem;
  color: var(--trx-text-secondary);
  font-style: italic;
}

.trx-transcription__segment--active .trx-transcription__bubble {
  outline: 2px solid var(--trx-accent-color);
}

.trx-transcription__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--trx-accent-color);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.trx-transcription__segment--customer .trx-transcription__avatar {
  background: var(--trx-info-color);
}

.trx-transcription__bubble {
  max-width: 75%;
  background: var(--trx-bg-secondary);
  border-radius: 12px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--trx-border-color);
}

.trx-transcription__segment--agent .trx-transcription__bubble {
  background: var(--trx-bg-card);
  border-radius: 2px 12px 12px 12px;
}

.trx-transcription__segment--customer .trx-transcription__bubble {
  background: rgba(16, 185, 129, 0.08);
  border-color: rgba(16, 185, 129, 0.2);
  border-radius: 12px 2px 12px 12px;
}

.trx-transcription__header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.2rem;
}

.trx-transcription__speaker { font-size: 0.72rem; font-weight: 600; color: var(--trx-text-secondary); }
.trx-transcription__time { font-size: 0.7rem; color: var(--trx-text-secondary); font-family: monospace; }
.trx-transcription__low-conf { color: var(--trx-warning-color); font-size: 0.7rem; }

.trx-transcription__text {
  font-size: 0.875rem;
  color: var(--trx-text-primary);
  line-height: 1.5;
  margin: 0;
}

.trx-transcription__text :deep(mark) {
  background: rgba(245, 158, 11, 0.3);
  border-radius: 2px;
  padding: 0 0.1em;
}
</style>
