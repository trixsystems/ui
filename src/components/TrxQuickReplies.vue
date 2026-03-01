<script setup lang="ts">
export interface TrxQuickReply {
  id: string
  label: string
  value?: string // se diferente do label
}

withDefaults(defineProps<{
  replies?: TrxQuickReply[]
  disabled?: boolean
}>(), {
  replies: () => [],
})

const emit = defineEmits<{ select: [reply: TrxQuickReply] }>()
</script>

<template>
  <div class="trx-quick-replies">
    <button
      v-for="r in replies"
      :key="r.id"
      class="trx-quick-replies__btn"
      :disabled="disabled"
      @click="emit('select', r)"
    >
      {{ r.label }}
    </button>
  </div>
</template>

<style scoped>
.trx-quick-replies { display: flex; flex-wrap: wrap; gap: 0.4rem; padding: 0.5rem 0; }
.trx-quick-replies__btn {
  padding: 0.35rem 0.85rem; border-radius: 20px;
  border: 1px solid var(--trx-accent-color); background: transparent;
  color: var(--trx-accent-color); font-size: 0.825rem; cursor: pointer; transition: all 0.15s;
  white-space: nowrap;
}
.trx-quick-replies__btn:hover { background: var(--trx-accent-color); color: white; }
.trx-quick-replies__btn:disabled { opacity: 0.4; cursor: not-allowed; }
</style>
