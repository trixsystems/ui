<script setup lang="ts">
import { useTemplateRef, onMounted, watch } from 'vue'

const props = withDefaults(defineProps<{
  data: number[]
  width?: number
  height?: number
  color?: string
  fill?: boolean
  strokeWidth?: number
  showDot?: boolean
}>(), {
  width: 120,
  height: 40,
  fill: true,
  strokeWidth: 2,
  showDot: true,
})

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')

function draw() {
  const el = canvas.value
  if (!el || props.data.length < 2) return
  const ctx = el.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  el.width = props.width * dpr
  el.height = props.height * dpr
  el.style.width = `${props.width}px`
  el.style.height = `${props.height}px`
  ctx.scale(dpr, dpr)

  const color = props.color || getComputedStyle(document.documentElement).getPropertyValue('--trx-accent-color').trim() || '#10b981'
  const min = Math.min(...props.data)
  const max = Math.max(...props.data)
  const range = max - min || 1
  const pad = 2

  const points = props.data.map((v, i) => ({
    x: (i / (props.data.length - 1)) * (props.width - pad * 2) + pad,
    y: props.height - pad - ((v - min) / range) * (props.height - pad * 2),
  }))

  ctx.beginPath()
  ctx.moveTo(points[0].x, points[0].y)
  points.slice(1).forEach(p => ctx.lineTo(p.x, p.y))

  if (props.fill) {
    const last = points[points.length - 1]
    ctx.lineTo(last.x, props.height)
    ctx.lineTo(points[0].x, props.height)
    ctx.closePath()
    const grad = ctx.createLinearGradient(0, 0, 0, props.height)
    grad.addColorStop(0, color + '33')
    grad.addColorStop(1, color + '00')
    ctx.fillStyle = grad
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)
    points.slice(1).forEach(p => ctx.lineTo(p.x, p.y))
  }

  ctx.strokeStyle = color
  ctx.lineWidth = props.strokeWidth
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.stroke()

  if (props.showDot) {
    const last = points[points.length - 1]
    ctx.beginPath()
    ctx.arc(last.x, last.y, 3, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  }
}

onMounted(draw)
watch(() => [props.data, props.color, props.width, props.height], draw, { deep: true })
</script>

<template>
  <canvas ref="canvas" class="trx-sparkline"></canvas>
</template>

<style scoped>
.trx-sparkline { display: block; }
</style>
