<script setup lang="ts">
import { ref } from 'vue'

export type TrxIVRNodeType = 'start' | 'menu' | 'message' | 'transfer' | 'hangup' | 'condition'

export interface TrxIVRNode {
  id: string
  type: TrxIVRNodeType
  label: string
  x: number
  y: number
  options?: { key: string; label: string; nextId?: string }[]
  nextId?: string
  data?: Record<string, string>
}

withDefaults(defineProps<{
  nodes?: TrxIVRNode[]
  readonly?: boolean
}>(), {
  nodes: () => [],
})

const emit = defineEmits<{
  'update:nodes': [nodes: TrxIVRNode[]]
  nodeClick: [node: TrxIVRNode]
  nodeAdd: [type: TrxIVRNodeType]
}>()

const selected = ref<string | null>(null)

const nodeConfig: Record<TrxIVRNodeType, { icon: string; color: string; label: string }> = {
  start:     { icon: 'pi pi-play-circle', color: 'var(--trx-success-color)', label: 'Início' },
  menu:      { icon: 'pi pi-list',        color: 'var(--trx-accent-color)',   label: 'Menu' },
  message:   { icon: 'pi pi-volume-up',   color: 'var(--trx-warning-color)',  label: 'Mensagem' },
  transfer:  { icon: 'pi pi-phone',       color: 'var(--trx-text-secondary)', label: 'Transferir' },
  hangup:    { icon: 'pi pi-times-circle',color: 'var(--trx-danger-color)',   label: 'Desligar' },
  condition: { icon: 'pi pi-code',        color: '#a78bfa',                   label: 'Condição' },
}

const nodeTypes: TrxIVRNodeType[] = ['menu', 'message', 'transfer', 'hangup', 'condition']

function select(node: TrxIVRNode) {
  selected.value = node.id
  emit('nodeClick', node)
}
</script>

<template>
  <div class="trx-ivr">
    <div v-if="!readonly" class="trx-ivr__toolbar">
      <span class="trx-ivr__toolbar-label">Adicionar nó:</span>
      <button
        v-for="t in nodeTypes"
        :key="t"
        class="trx-ivr__add-btn"
        :style="{ color: nodeConfig[t].color, borderColor: nodeConfig[t].color }"
        @click="emit('nodeAdd', t)"
      >
        <i :class="nodeConfig[t].icon"></i>
        {{ nodeConfig[t].label }}
      </button>
    </div>
    <div class="trx-ivr__canvas">
      <div
        v-for="node in nodes"
        :key="node.id"
        class="trx-ivr__node"
        :class="{ 'trx-ivr__node--selected': selected === node.id }"
        :style="{ left: node.x + 'px', top: node.y + 'px', '--node-color': nodeConfig[node.type].color }"
        @click="select(node)"
      >
        <div class="trx-ivr__node-header" :style="{ background: nodeConfig[node.type].color }">
          <i :class="nodeConfig[node.type].icon" class="trx-ivr__node-icon"></i>
          <span class="trx-ivr__node-type">{{ nodeConfig[node.type].label }}</span>
        </div>
        <div class="trx-ivr__node-body">
          <span class="trx-ivr__node-label">{{ node.label }}</span>
          <div v-if="node.options?.length" class="trx-ivr__node-options">
            <div v-for="opt in node.options" :key="opt.key" class="trx-ivr__node-option">
              <kbd class="trx-ivr__key">{{ opt.key }}</kbd>
              <span>{{ opt.label }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!nodes.length" class="trx-ivr__empty">
        <i class="pi pi-sitemap" style="font-size:2rem; color: var(--trx-text-secondary)"></i>
        <span>Nenhum nó. Adicione um nó para começar.</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-ivr { display: flex; flex-direction: column; height: 100%; }
.trx-ivr__toolbar {
  display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;
  padding: 0.75rem 1rem; background: var(--trx-bg-card);
  border-bottom: 1px solid var(--trx-border-color);
}
.trx-ivr__toolbar-label { font-size: 0.775rem; color: var(--trx-text-secondary); font-weight: 600; }
.trx-ivr__add-btn {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.3rem 0.65rem; border-radius: 6px; border: 1px solid;
  background: transparent; cursor: pointer; font-size: 0.775rem; transition: all 0.15s;
}
.trx-ivr__add-btn:hover { opacity: 0.75; }
.trx-ivr__canvas {
  flex: 1; position: relative; overflow: auto;
  background: var(--trx-bg-secondary);
  background-image: radial-gradient(circle, var(--trx-border-color) 1px, transparent 1px);
  background-size: 24px 24px;
  min-height: 400px;
}
.trx-ivr__node {
  position: absolute; width: 180px; background: var(--trx-bg-card);
  border: 2px solid var(--trx-border-color); border-radius: 10px;
  cursor: pointer; transition: border-color 0.15s, box-shadow 0.15s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.trx-ivr__node:hover { border-color: var(--node-color); }
.trx-ivr__node--selected { border-color: var(--node-color); box-shadow: 0 0 0 3px color-mix(in srgb, var(--node-color) 20%, transparent); }
.trx-ivr__node-header {
  display: flex; align-items: center; gap: 0.4rem;
  padding: 0.4rem 0.6rem; border-radius: 8px 8px 0 0; color: white;
}
.trx-ivr__node-icon { font-size: 0.8rem; }
.trx-ivr__node-type { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.trx-ivr__node-body { padding: 0.5rem 0.6rem; }
.trx-ivr__node-label { font-size: 0.825rem; color: var(--trx-text-primary); font-weight: 600; display: block; }
.trx-ivr__node-options { margin-top: 0.35rem; display: flex; flex-direction: column; gap: 0.2rem; }
.trx-ivr__node-option { display: flex; align-items: center; gap: 0.35rem; font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-ivr__key {
  padding: 0.1rem 0.35rem; background: var(--trx-bg-secondary);
  border: 1px solid var(--trx-border-color); border-radius: 3px;
  font-size: 0.7rem; font-family: monospace; color: var(--trx-text-primary);
}
.trx-ivr__empty {
  position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 0.75rem;
  color: var(--trx-text-secondary); font-size: 0.875rem;
}
</style>
