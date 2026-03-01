<script setup lang="ts">
import { ref, onMounted, useTemplateRef } from 'vue'

const props = withDefaults(defineProps<{
  width?: number
  height?: number
  lineColor?: string
  lineWidth?: number
  disabled?: boolean
  placeholder?: string
}>(), {
  width: 400,
  height: 150,
  lineColor: 'var(--trx-text-primary)',
  lineWidth: 2,
  placeholder: 'Assine aqui',
})

const emit = defineEmits<{
  change: [dataUrl: string | null]
  clear: []
}>()

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
const drawing = ref(false)
const isEmpty = ref(true)

function getCtx() {
  return canvas.value?.getContext('2d') ?? null
}

function getPos(e: MouseEvent | TouchEvent) {
  const rect = canvas.value!.getBoundingClientRect()
  const src = 'touches' in e ? e.touches[0] : e
  return { x: src.clientX - rect.left, y: src.clientY - rect.top }
}

function startDraw(e: MouseEvent | TouchEvent) {
  if (props.disabled) return
  e.preventDefault()
  drawing.value = true
  const ctx = getCtx()
  if (!ctx) return
  const { x, y } = getPos(e)
  ctx.beginPath()
  ctx.moveTo(x, y)
}

function draw(e: MouseEvent | TouchEvent) {
  if (!drawing.value || props.disabled) return
  e.preventDefault()
  const ctx = getCtx()
  if (!ctx) return
  const { x, y } = getPos(e)
  ctx.lineTo(x, y)
  ctx.strokeStyle = props.lineColor
  ctx.lineWidth = props.lineWidth
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.stroke()
  isEmpty.value = false
}

function endDraw() {
  if (!drawing.value) return
  drawing.value = false
  emit('change', isEmpty.value ? null : canvas.value?.toDataURL() ?? null)
}

function clear() {
  const ctx = getCtx()
  if (!ctx || !canvas.value) return
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  isEmpty.value = true
  emit('clear')
  emit('change', null)
}

function toDataURL() {
  return isEmpty.value ? null : canvas.value?.toDataURL() ?? null
}

onMounted(() => {
  const ctx = getCtx()
  if (!ctx || !canvas.value) return
  const dpr = window.devicePixelRatio || 1
  canvas.value.width = props.width * dpr
  canvas.value.height = props.height * dpr
  ctx.scale(dpr, dpr)
})

defineExpose({ clear, toDataURL })
</script>

<template>
  <div class="trx-sig-pad" :class="{ 'trx-sig-pad--disabled': disabled }">
    <div class="trx-sig-pad__canvas-wrap" :style="{ width: `${width}px`, height: `${height}px` }">
      <canvas
        ref="canvas"
        class="trx-sig-pad__canvas"
        :style="{ width: `${width}px`, height: `${height}px` }"
        @mousedown="startDraw"
        @mousemove="draw"
        @mouseup="endDraw"
        @mouseleave="endDraw"
        @touchstart="startDraw"
        @touchmove="draw"
        @touchend="endDraw"
      />
      <span v-if="isEmpty" class="trx-sig-pad__placeholder">{{ placeholder }}</span>
    </div>
    <div class="trx-sig-pad__footer">
      <span class="trx-sig-pad__line-label">Assinatura</span>
      <button class="trx-sig-pad__clear" :disabled="isEmpty || disabled" @click="clear">
        <i class="pi pi-trash"></i> Limpar
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-sig-pad { display: inline-flex; flex-direction: column; gap: 0; }
.trx-sig-pad--disabled { opacity: 0.5; pointer-events: none; }
.trx-sig-pad__canvas-wrap {
  position: relative;
  border: 1px solid var(--trx-border-color); border-bottom: none;
  border-radius: 10px 10px 0 0; overflow: hidden;
  background: var(--trx-bg-card);
}
.trx-sig-pad__canvas { display: block; cursor: crosshair; touch-action: none; }
.trx-sig-pad__placeholder {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.875rem; color: var(--trx-border-color); pointer-events: none;
}
.trx-sig-pad__footer {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--trx-border-color); border-radius: 0 0 10px 10px;
  background: var(--trx-bg-secondary);
  border-top: 2px solid var(--trx-border-color);
}
.trx-sig-pad__line-label { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-sig-pad__clear {
  display: inline-flex; align-items: center; gap: 0.3rem;
  background: none; border: none; cursor: pointer;
  font-size: 0.75rem; color: var(--trx-danger-color); padding: 0;
}
.trx-sig-pad__clear:disabled { opacity: 0.4; cursor: not-allowed; }
</style>
