<script setup lang="ts">
import { watch, onMounted, useTemplateRef } from 'vue'

const props = withDefaults(defineProps<{
  data: number[]
  progress?: number
  color?: string
  progressColor?: string
  height?: number
  barWidth?: number
  barGap?: number
}>(), {
  progress: 0,
  height: 48,
  barWidth: 3,
  barGap: 1,
})

const emit = defineEmits<{ seek: [progress: number] }>()

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')

function draw() {
  const el = canvas.value
  if (!el || !props.data.length) return
  const ctx = el.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const totalBarWidth = props.barWidth + props.barGap
  const w = totalBarWidth * props.data.length - props.barGap
  el.width = w * dpr
  el.height = props.height * dpr
  el.style.width = `${w}px`
  el.style.height = `${props.height}px`
  ctx.scale(dpr, dpr)

  const color = props.color || getComputedStyle(document.documentElement).getPropertyValue('--trx-accent-color').trim() || '#10b981'
  const pColor = props.progressColor || '#10b981'
  const half = props.height / 2

  props.data.forEach((val, i) => {
    const x = i * totalBarWidth
    const barH = Math.max(2, val * props.height * 0.9)
    const y = half - barH / 2
    const atProgress = i / props.data.length < props.progress
    ctx.fillStyle = atProgress ? pColor : color + '66'
    ctx.beginPath()
    ctx.roundRect(x, y, props.barWidth, barH, 1)
    ctx.fill()
  })
}

function onClick(e: MouseEvent) {
  const el = canvas.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const p = (e.clientX - rect.left) / rect.width
  emit('seek', Math.max(0, Math.min(1, p)))
}

onMounted(draw)
watch(() => [props.data, props.progress, props.color, props.progressColor], draw, { deep: true })
</script>

<template>
  <canvas ref="canvas" class="trx-waveform" @click="onClick"></canvas>
</template>

<style scoped>
.trx-waveform { cursor: pointer; display: block; }
</style>
