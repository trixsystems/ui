<script setup lang="ts">
const emit = defineEmits<{ digit: [key: string] }>()

const KEYS = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['*', '0', '#'],
]

const SUB: Record<string, string> = {
  '1': '', '2': 'ABC', '3': 'DEF',
  '4': 'GHI', '5': 'JKL', '6': 'MNO',
  '7': 'PQRS', '8': 'TUV', '9': 'WXYZ',
  '*': '', '0': '+', '#': '',
}

function press(k: string) {
  emit('digit', k)
}
</script>

<template>
  <div class="trx-dtmf">
    <div v-for="(row, ri) in KEYS" :key="ri" class="trx-dtmf__row">
      <button
        v-for="k in row"
        :key="k"
        class="trx-dtmf__key"
        @click="press(k)"
      >
        <span class="trx-dtmf__main">{{ k }}</span>
        <span v-if="SUB[k]" class="trx-dtmf__sub">{{ SUB[k] }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-dtmf { display: flex; flex-direction: column; gap: 0.5rem; user-select: none; }
.trx-dtmf__row { display: flex; gap: 0.5rem; justify-content: center; }
.trx-dtmf__key {
  width: 64px; height: 64px; border-radius: 50%;
  border: 1px solid var(--trx-border-color);
  background: var(--trx-bg-card); cursor: pointer;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 1px; transition: all 0.1s;
}
.trx-dtmf__key:hover { background: var(--trx-bg-secondary); border-color: var(--trx-accent-color); }
.trx-dtmf__key:active { transform: scale(0.93); background: color-mix(in srgb, var(--trx-accent-color) 10%, transparent); }
.trx-dtmf__main { font-size: 1.2rem; font-weight: 600; color: var(--trx-text-primary); line-height: 1; }
.trx-dtmf__sub { font-size: 0.5rem; font-weight: 700; letter-spacing: 0.1em; color: var(--trx-text-secondary); }
</style>
