<script setup lang="ts">
export interface TrxConferenceParticipant {
  id: string
  name: string
  number: string
  role?: 'host' | 'participant'
  muted?: boolean
  speaking?: boolean
  duration?: number
}

withDefaults(defineProps<{
  participants?: TrxConferenceParticipant[]
  muted?: boolean
  onHold?: boolean
}>(), {
  participants: () => [],
})

const emit = defineEmits<{
  muteParticipant: [id: string]
  kickParticipant: [id: string]
  addParticipant: []
  toggleMute: []
  toggleHold: []
  end: []
}>()

function fmt(s: number | undefined) {
  if (!s) return '--:--'
  const m = Math.floor(s / 60); const sec = s % 60
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
}
</script>

<template>
  <div class="trx-conf">
    <div class="trx-conf__header">
      <div class="trx-conf__header-info">
        <i class="pi pi-users trx-conf__icon"></i>
        <div>
          <div class="trx-conf__title">Conferência</div>
          <div class="trx-conf__count">{{ participants.length }} participantes</div>
        </div>
      </div>
      <button class="trx-conf__add-btn" title="Adicionar participante" @click="emit('addParticipant')">
        <i class="pi pi-plus"></i>
      </button>
    </div>

    <div class="trx-conf__participants">
      <div
        v-for="p in participants"
        :key="p.id"
        class="trx-conf__participant"
        :class="{ 'trx-conf__participant--speaking': p.speaking }"
      >
        <div class="trx-conf__participant-avatar">
          {{ p.name[0] }}
          <div v-if="p.speaking" class="trx-conf__speaking-ring"></div>
        </div>
        <div class="trx-conf__participant-info">
          <span class="trx-conf__participant-name">{{ p.name }}</span>
          <span class="trx-conf__participant-num">{{ p.number }}</span>
        </div>
        <span class="trx-conf__participant-dur">{{ fmt(p.duration) }}</span>
        <div class="trx-conf__participant-actions">
          <button
            class="trx-conf__p-btn"
            :class="{ 'muted': p.muted }"
            :title="p.muted ? 'Ativar' : 'Mutar'"
            @click="emit('muteParticipant', p.id)"
          >
            <i :class="p.muted ? 'pi pi-microphone-off' : 'pi pi-microphone'"></i>
          </button>
          <button
            v-if="p.role !== 'host'"
            class="trx-conf__p-btn trx-conf__p-btn--kick"
            title="Remover"
            @click="emit('kickParticipant', p.id)"
          >
            <i class="pi pi-times"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="trx-conf__controls">
      <button
        class="trx-conf__ctrl-btn"
        :class="{ active: muted }"
        title="Mutar/Desmutar"
        @click="emit('toggleMute')"
      >
        <i :class="muted ? 'pi pi-microphone-off' : 'pi pi-microphone'"></i>
      </button>
      <button
        class="trx-conf__ctrl-btn"
        :class="{ active: onHold }"
        title="Colocar em espera"
        @click="emit('toggleHold')"
      >
        <i class="pi pi-pause"></i>
      </button>
      <button class="trx-conf__ctrl-btn trx-conf__ctrl-btn--end" title="Encerrar" @click="emit('end')">
        <i class="pi pi-phone" style="transform:rotate(135deg)"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-conf { background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 12px; overflow: hidden; }
.trx-conf__header { display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--trx-bg-secondary); border-bottom: 1px solid var(--trx-border-color); }
.trx-conf__header-info { display: flex; align-items: center; gap: 0.5rem; }
.trx-conf__icon { font-size: 1.1rem; color: var(--trx-accent-color); }
.trx-conf__title { font-size: 0.875rem; font-weight: 700; color: var(--trx-text-primary); }
.trx-conf__count { font-size: 0.725rem; color: var(--trx-text-secondary); }
.trx-conf__add-btn { background: var(--trx-accent-color); color: white; border: none; border-radius: 6px; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 0.8rem; }
.trx-conf__participants { max-height: 260px; overflow-y: auto; }
.trx-conf__participant { display: flex; align-items: center; gap: 0.6rem; padding: 0.6rem 1rem; border-bottom: 1px solid var(--trx-border-color); transition: background 0.15s; }
.trx-conf__participant:last-child { border-bottom: none; }
.trx-conf__participant--speaking { background: color-mix(in srgb, var(--trx-success-color) 6%, transparent); }
.trx-conf__participant-avatar { position: relative; width: 32px; height: 32px; border-radius: 50%; background: var(--trx-accent-color); color: white; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; }
.trx-conf__speaking-ring { position: absolute; inset: -3px; border-radius: 50%; border: 2px solid var(--trx-success-color); animation: ring 1.5s ease-in-out infinite; }
@keyframes ring { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.1);opacity:0.6} }
.trx-conf__participant-info { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.trx-conf__participant-name { font-size: 0.825rem; font-weight: 600; color: var(--trx-text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.trx-conf__participant-num { font-size: 0.7rem; color: var(--trx-text-secondary); font-family: monospace; }
.trx-conf__participant-dur { font-size: 0.75rem; font-family: monospace; color: var(--trx-text-secondary); flex-shrink: 0; }
.trx-conf__participant-actions { display: flex; gap: 0.25rem; flex-shrink: 0; }
.trx-conf__p-btn { width: 26px; height: 26px; border: 1px solid var(--trx-border-color); border-radius: 5px; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: var(--trx-text-secondary); transition: all 0.15s; }
.trx-conf__p-btn.muted { color: var(--trx-warning-color); border-color: var(--trx-warning-color); }
.trx-conf__p-btn--kick:hover { color: var(--trx-danger-color); border-color: var(--trx-danger-color); }
.trx-conf__controls { display: flex; gap: 0.5rem; padding: 0.75rem 1rem; border-top: 1px solid var(--trx-border-color); justify-content: center; }
.trx-conf__ctrl-btn { width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--trx-border-color); background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; color: var(--trx-text-secondary); transition: all 0.15s; }
.trx-conf__ctrl-btn.active { background: color-mix(in srgb, var(--trx-warning-color) 12%, transparent); color: var(--trx-warning-color); border-color: var(--trx-warning-color); }
.trx-conf__ctrl-btn--end { background: var(--trx-danger-color); color: white; border-color: var(--trx-danger-color); }
</style>
