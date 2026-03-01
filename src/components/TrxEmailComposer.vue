<script setup lang="ts">
import { ref } from 'vue'

export interface TrxEmailDraft {
  to: string[]
  cc?: string[]
  subject: string
  body: string
  attachments?: File[]
}

const draft = ref<TrxEmailDraft>({ to: [], cc: [], subject: '', body: '' })
const toInput = ref('')
const ccInput = ref('')
const showCc = ref(false)
const sending = ref(false)

const emit = defineEmits<{
  send: [draft: TrxEmailDraft]
  discard: []
}>()

function addEmail(field: 'to' | 'cc', input: { value: string }) {
  const val = input.value.trim()
  if (val && val.includes('@')) {
    draft.value[field] = [...(draft.value[field] ?? []), val]
    input.value = ''
    if (field === 'to') toInput.value = ''
    else ccInput.value = ''
  }
}

function removeEmail(field: 'to' | 'cc', i: number) {
  const arr = [...(draft.value[field] ?? [])]
  arr.splice(i, 1)
  draft.value[field] = arr
}

async function send() {
  sending.value = true
  emit('send', { ...draft.value })
  sending.value = false
}

function handleFileInput(e: Event) {
  const files = (e.target as HTMLInputElement).files
  if (files) draft.value.attachments = [...(draft.value.attachments ?? []), ...Array.from(files)]
}
</script>

<template>
  <div class="trx-email">
    <!-- To -->
    <div class="trx-email__field">
      <label class="trx-email__label">Para</label>
      <div class="trx-email__chips">
        <span v-for="(em, i) in draft.to" :key="i" class="trx-email__chip">
          {{ em }}
          <button class="trx-email__chip-remove" @click="removeEmail('to', i)"><i class="pi pi-times"></i></button>
        </span>
        <input
          v-model="toInput"
          class="trx-email__chip-input"
          placeholder="email@exemplo.com"
          @keydown.enter.prevent="addEmail('to', { value: toInput })"
          @keydown.tab.prevent="addEmail('to', { value: toInput })"
          @blur="addEmail('to', { value: toInput })"
        />
      </div>
      <button v-if="!showCc" class="trx-email__cc-toggle" @click="showCc = true">CC</button>
    </div>
    <!-- CC -->
    <div v-if="showCc" class="trx-email__field">
      <label class="trx-email__label">CC</label>
      <div class="trx-email__chips">
        <span v-for="(em, i) in draft.cc" :key="i" class="trx-email__chip">
          {{ em }}
          <button class="trx-email__chip-remove" @click="removeEmail('cc', i)"><i class="pi pi-times"></i></button>
        </span>
        <input
          v-model="ccInput"
          class="trx-email__chip-input"
          placeholder="cc@exemplo.com"
          @keydown.enter.prevent="addEmail('cc', { value: ccInput })"
          @keydown.tab.prevent="addEmail('cc', { value: ccInput })"
        />
      </div>
    </div>
    <!-- Subject -->
    <div class="trx-email__field">
      <label class="trx-email__label">Assunto</label>
      <input v-model="draft.subject" class="trx-email__subject" placeholder="Assunto..." />
    </div>
    <!-- Body -->
    <textarea v-model="draft.body" class="trx-email__body" placeholder="Escreva sua mensagem..." rows="8"></textarea>
    <!-- Footer -->
    <div class="trx-email__footer">
      <div class="trx-email__footer-left">
        <label class="trx-email__attach-btn" title="Anexar arquivo">
          <i class="pi pi-paperclip"></i>
          <input type="file" multiple hidden @change="handleFileInput" />
        </label>
        <span v-if="draft.attachments?.length" class="trx-email__attach-count">
          {{ draft.attachments.length }} anexo(s)
        </span>
      </div>
      <div class="trx-email__footer-right">
        <button class="trx-email__btn trx-email__btn--discard" @click="emit('discard')">Descartar</button>
        <button
          class="trx-email__btn trx-email__btn--send"
          :disabled="!draft.to.length || !draft.subject || !draft.body || sending"
          @click="send"
        >
          <i class="pi pi-send"></i>
          {{ sending ? 'Enviando...' : 'Enviar' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-email { display: flex; flex-direction: column; background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 12px; overflow: hidden; }
.trx-email__field { display: flex; align-items: flex-start; gap: 0.5rem; padding: 0.5rem 0.75rem; border-bottom: 1px solid var(--trx-border-color); }
.trx-email__label { font-size: 0.775rem; color: var(--trx-text-secondary); font-weight: 600; min-width: 40px; padding-top: 0.3rem; flex-shrink: 0; }
.trx-email__chips { flex: 1; display: flex; flex-wrap: wrap; gap: 0.25rem; align-items: center; min-height: 28px; }
.trx-email__chip { display: flex; align-items: center; gap: 0.25rem; background: color-mix(in srgb, var(--trx-accent-color) 12%, transparent); color: var(--trx-accent-color); border-radius: 12px; padding: 0.15rem 0.4rem 0.15rem 0.6rem; font-size: 0.775rem; }
.trx-email__chip-remove { background: none; border: none; cursor: pointer; color: inherit; opacity: 0.7; padding: 0; font-size: 0.65rem; }
.trx-email__chip-input { border: none; outline: none; background: transparent; font-size: 0.875rem; color: var(--trx-text-primary); min-width: 160px; flex: 1; }
.trx-email__cc-toggle { background: none; border: 1px solid var(--trx-border-color); border-radius: 4px; padding: 0.15rem 0.5rem; font-size: 0.725rem; cursor: pointer; color: var(--trx-text-secondary); margin-left: auto; }
.trx-email__subject { flex: 1; border: none; outline: none; background: transparent; font-size: 0.875rem; color: var(--trx-text-primary); padding: 0.2rem 0; }
.trx-email__body { border: none; outline: none; resize: vertical; padding: 0.75rem; font-size: 0.875rem; color: var(--trx-text-primary); background: transparent; font-family: inherit; line-height: 1.6; }
.trx-email__footer { display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0.75rem; border-top: 1px solid var(--trx-border-color); }
.trx-email__footer-left, .trx-email__footer-right { display: flex; align-items: center; gap: 0.5rem; }
.trx-email__attach-btn { display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border: 1px solid var(--trx-border-color); border-radius: 6px; cursor: pointer; color: var(--trx-text-secondary); font-size: 0.85rem; transition: all 0.15s; }
.trx-email__attach-btn:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
.trx-email__attach-count { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-email__btn { padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.825rem; font-weight: 600; cursor: pointer; border: none; transition: all 0.15s; display: flex; align-items: center; gap: 0.4rem; }
.trx-email__btn--discard { background: transparent; color: var(--trx-text-secondary); border: 1px solid var(--trx-border-color); }
.trx-email__btn--send { background: var(--trx-accent-color); color: white; }
.trx-email__btn--send:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
