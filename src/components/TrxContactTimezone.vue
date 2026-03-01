<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  timezone?: string  // IANA: 'America/Sao_Paulo'
  contactName?: string
  showClock?: boolean
  compact?: boolean
}>(), {
  timezone: 'America/Sao_Paulo',
  showClock: true,
  compact: false,
})

const now = ref(new Date())
let timer: ReturnType<typeof setInterval>

onMounted(() => { timer = setInterval(() => { now.value = new Date() }, 1000) })
onBeforeUnmount(() => clearInterval(timer))

const contactTime = computed(() => {
  try {
    return now.value.toLocaleTimeString('pt-BR', { timeZone: props.timezone, hour: '2-digit', minute: '2-digit', second: props.compact ? undefined : '2-digit' })
  } catch { return '--:--' }
})

const contactDate = computed(() => {
  try {
    return now.value.toLocaleDateString('pt-BR', { timeZone: props.timezone, weekday: 'short', day: '2-digit', month: 'short' })
  } catch { return '' }
})

const localTime = computed(() => now.value.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }))

const offset = computed(() => {
  try {
    const dt = new Intl.DateTimeFormat('en-US', { timeZone: props.timezone, timeZoneName: 'short' })
    const parts = dt.formatToParts(now.value)
    return parts.find(p => p.type === 'timeZoneName')?.value ?? props.timezone
  } catch { return props.timezone }
})

const hourContact = computed(() => {
  try {
    return parseInt(now.value.toLocaleString('pt-BR', { timeZone: props.timezone, hour: '2-digit', hour12: false }))
  } catch { return 12 }
})

const isBusinessHours = computed(() => hourContact.value >= 8 && hourContact.value < 18)
const isLateNight = computed(() => hourContact.value < 7 || hourContact.value >= 22)
</script>

<template>
  <div class="trx-tz" :class="{ 'trx-tz--compact': compact }">
    <div class="trx-tz__icon-wrap" :class="isLateNight ? 'night' : isBusinessHours ? 'day' : 'evening'">
      <i :class="isLateNight ? 'pi pi-moon' : 'pi pi-sun'"></i>
    </div>
    <div class="trx-tz__content">
      <div class="trx-tz__time">{{ contactTime }}</div>
      <div class="trx-tz__meta">
        <span v-if="!compact" class="trx-tz__date">{{ contactDate }}</span>
        <span class="trx-tz__offset">{{ offset }}</span>
        <span
          class="trx-tz__status"
          :class="isLateNight ? 'night' : isBusinessHours ? 'business' : 'off'"
        >
          {{ isLateNight ? 'Noite' : isBusinessHours ? 'Horário comercial' : 'Fora do horário' }}
        </span>
      </div>
    </div>
    <div v-if="!compact" class="trx-tz__local">
      <span class="trx-tz__local-label">Seu horário:</span>
      <span class="trx-tz__local-time">{{ localTime }}</span>
    </div>
  </div>
</template>

<style scoped>
.trx-tz { display: flex; align-items: center; gap: 0.65rem; padding: 0.5rem 0.75rem; background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 10px; }
.trx-tz--compact { padding: 0.35rem 0.6rem; }
.trx-tz__icon-wrap { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
.trx-tz__icon-wrap.day { background: color-mix(in srgb, #facc15 15%, transparent); color: #ca8a04; }
.trx-tz__icon-wrap.evening { background: color-mix(in srgb, #fb923c 15%, transparent); color: #ea580c; }
.trx-tz__icon-wrap.night { background: color-mix(in srgb, #818cf8 15%, transparent); color: #6366f1; }
.trx-tz__content { flex: 1; display: flex; flex-direction: column; gap: 0.1rem; }
.trx-tz__time { font-size: 1.1rem; font-weight: 700; font-family: monospace; color: var(--trx-text-primary); }
.trx-tz--compact .trx-tz__time { font-size: 0.9rem; }
.trx-tz__meta { display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
.trx-tz__date { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-tz__offset { font-size: 0.7rem; color: var(--trx-text-secondary); font-family: monospace; }
.trx-tz__status { font-size: 0.7rem; font-weight: 600; padding: 0.05rem 0.35rem; border-radius: 10px; }
.trx-tz__status.business { color: var(--trx-success-color); background: color-mix(in srgb, var(--trx-success-color) 10%, transparent); }
.trx-tz__status.off { color: var(--trx-warning-color); background: color-mix(in srgb, var(--trx-warning-color) 10%, transparent); }
.trx-tz__status.night { color: #6366f1; background: color-mix(in srgb, #6366f1 10%, transparent); }
.trx-tz__local { display: flex; flex-direction: column; align-items: flex-end; gap: 1px; flex-shrink: 0; }
.trx-tz__local-label { font-size: 0.65rem; color: var(--trx-text-secondary); }
.trx-tz__local-time { font-size: 0.825rem; font-family: monospace; color: var(--trx-text-secondary); }
</style>
