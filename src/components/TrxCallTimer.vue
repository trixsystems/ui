<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  running?: boolean
  startAt?: number
  format?: 'mm:ss' | 'hh:mm:ss'
  color?: 'default' | 'success' | 'warning' | 'danger'
}>(), {
  running: false,
  startAt: 0,
  format: 'mm:ss',
  color: 'default',
})

const emit = defineEmits<{ tick: [seconds: number] }>()

const seconds = ref(props.startAt)
let interval: ReturnType<typeof setInterval> | null = null

const displayColor = computed(() => {
  if (props.color !== 'default') return props.color
  if (seconds.value >= 300) return 'danger'
  if (seconds.value >= 180) return 'warning'
  return 'success'
})

const colorVar = computed(() => {
  const map: Record<string, string> = {
    success: 'var(--trx-success-color)',
    warning: 'var(--trx-warning-color)',
    danger:  'var(--trx-danger-color)',
    default: 'var(--trx-text-primary)',
  }
  return map[displayColor.value]
})

const formatted = computed(() => {
  const h = Math.floor(seconds.value / 3600)
  const m = Math.floor((seconds.value % 3600) / 60)
  const s = seconds.value % 60
  const mm = m.toString().padStart(2, '0')
  const ss = s.toString().padStart(2, '0')
  if (props.format === 'hh:mm:ss') {
    return `${h.toString().padStart(2, '0')}:${mm}:${ss}`
  }
  return `${(h * 60 + m).toString().padStart(2, '0')}:${ss}`
})

function start() {
  if (interval) return
  interval = setInterval(() => {
    seconds.value++
    emit('tick', seconds.value)
  }, 1000)
}

function stop() {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
}

watch(() => props.running, (val) => {
  val ? start() : stop()
}, { immediate: true })

watch(() => props.startAt, (val) => { seconds.value = val })

onUnmounted(() => stop())
</script>

<template>
  <span class="trx-call-timer" :style="{ color: colorVar }">
    <i class="pi pi-clock trx-call-timer__icon"></i>
    {{ formatted }}
  </span>
</template>

<style scoped>
.trx-call-timer {
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.trx-call-timer__icon { font-size: 0.85em; }
</style>
