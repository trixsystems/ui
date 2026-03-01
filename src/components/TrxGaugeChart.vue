<script setup lang="ts">
import { useTemplateRef, onMounted, watch, computed } from 'vue'

const props = withDefaults(defineProps<{
  value: number
  min?: number
  max?: number
  label?: string
  unit?: string
  size?: number
  color?: 'auto' | string
  thickness?: number
}>(), {
  min: 0,
  max: 100,
  size: 160,
  color: 'auto',
  thickness: 12,
})

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')

const resolvedColor = computed(() => {
  if (props.color !== 'auto') return props.color
  const pct = ((props.value - props.min) / (props.max - props.min)) * 100
  if (pct >= 80) return '#ef4444'
  if (pct >= 60) return '#f59e0b'
  return '#10b981'
})

function draw() {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  el.width = props.size * dpr
  el.height = (props.size * 0.65) * dpr
  el.style.width = `${props.size}px`
  el.style.height = `${props.size * 0.65}px`
  ctx.scale(dpr, dpr)

  const cx = props.size / 2
  const cy = props.size * 0.55
  const r = (props.size - props.thickness * 2 - 8) / 2
  const startAngle = Math.PI
  const endAngle = 2 * Math.PI
  const pct = Math.max(0, Math.min(1, (props.value - props.min) / (props.max - props.min)))
  const valueAngle = startAngle + pct * Math.PI

  const style = getComputedStyle(document.documentElement)
  const trackColor = style.getPropertyValue('--trx-border-color').trim() || '#e2e8f0'

  ctx.beginPath()
  ctx.arc(cx, cy, r, startAngle, endAngle)
  ctx.strokeStyle = trackColor
  ctx.lineWidth = props.thickness
  ctx.lineCap = 'round'
  ctx.stroke()

  if (pct > 0) {
    ctx.beginPath()
    ctx.arc(cx, cy, r, startAngle, valueAngle)
    ctx.strokeStyle = resolvedColor.value
    ctx.lineWidth = props.thickness
    ctx.lineCap = 'round'
    ctx.stroke()
  }

  ctx.fillStyle = style.getPropertyValue('--trx-text-primary').trim() || '#1e293b'
  ctx.font = `bold ${props.size * 0.16}px Inter, system-ui`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const display = `${Math.round(props.value)}${props.unit || ''}`
  ctx.fillText(display, cx, cy - props.size * 0.04)

  if (props.label) {
    ctx.fillStyle = style.getPropertyValue('--trx-text-secondary').trim() || '#64748b'
    ctx.font = `${props.size * 0.09}px Inter, system-ui`
    ctx.fillText(props.label, cx, cy + props.size * 0.1)
  }
}

onMounted(draw)
watch(() => [props.value, props.color, props.size], draw)
</script>

<template>
  <canvas ref="canvas" class="trx-gauge"></canvas>
</template>

<style scoped>
.trx-gauge { display: block; }
</style>
