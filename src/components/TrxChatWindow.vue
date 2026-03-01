<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import TrxChatBubble from './TrxChatBubble.vue'
import type { TrxChatDirection, TrxChatMessageStatus, TrxChatMessageType } from './TrxChatBubble.vue'

export interface TrxChatMessage {
  id: string
  message?: string
  author?: string
  time?: string
  direction: TrxChatDirection
  status?: TrxChatMessageStatus
  type?: TrxChatMessageType
  fileUrl?: string
  fileName?: string
}

export interface TrxChatContact {
  name: string
  avatar?: string
  status?: string
  subtitle?: string
}

const props = withDefaults(defineProps<{
  messages?: TrxChatMessage[]
  contact?: TrxChatContact
  loading?: boolean
  placeholder?: string
  disabled?: boolean
}>(), {
  messages: () => [],
  placeholder: 'Digite uma mensagem...',
})

const emit = defineEmits<{
  send: [text: string]
  attach: []
}>()

const input = ref('')
const messagesEl = ref<HTMLDivElement>()

function send() {
  const text = input.value.trim()
  if (!text || props.disabled) return
  emit('send', text)
  input.value = ''
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    send()
  }
}

function scrollBottom() {
  nextTick(() => {
    if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight
  })
}

watch(() => props.messages?.length, scrollBottom)

function initials(name: string) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
}
</script>

<template>
  <div class="trx-chat-window">
    <div v-if="contact" class="trx-chat-window__header">
      <div class="trx-chat-window__avatar">
        <img v-if="contact.avatar" :src="contact.avatar" :alt="contact.name" />
        <span v-else>{{ initials(contact.name) }}</span>
      </div>
      <div class="trx-chat-window__contact-info">
        <span class="trx-chat-window__contact-name">{{ contact.name }}</span>
        <span v-if="contact.status ?? contact.subtitle" class="trx-chat-window__contact-status">
          {{ contact.status ?? contact.subtitle }}
        </span>
      </div>
      <slot name="header-actions" />
    </div>

    <div ref="messagesEl" class="trx-chat-window__messages">
      <div v-if="loading" class="trx-chat-window__loading">
        <i class="pi pi-spin pi-spinner"></i>
      </div>
      <div v-else-if="!messages.length" class="trx-chat-window__empty">
        <i class="pi pi-comments"></i>
        <span>Nenhuma mensagem ainda</span>
      </div>
      <TrxChatBubble
        v-for="msg in messages"
        :key="msg.id"
        v-bind="msg"
      />
    </div>

    <div class="trx-chat-window__composer">
      <button class="trx-chat-window__attach" @click="emit('attach')" title="Anexar arquivo" :disabled="disabled">
        <i class="pi pi-paperclip"></i>
      </button>
      <textarea
        class="trx-chat-window__input"
        :placeholder="placeholder"
        v-model="input"
        rows="1"
        :disabled="disabled"
        @keydown="onKeydown"
      ></textarea>
      <button
        class="trx-chat-window__send"
        :disabled="!input.trim() || disabled"
        @click="send"
        title="Enviar"
      >
        <i class="pi pi-send"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.trx-chat-window {
  display: flex;
  flex-direction: column;
  background: var(--trx-bg-secondary);
  border: 1px solid var(--trx-border-color);
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  min-height: 400px;
}

.trx-chat-window__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--trx-bg-card);
  border-bottom: 1px solid var(--trx-border-color);
}

.trx-chat-window__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--trx-accent-color);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}

.trx-chat-window__avatar img { width: 100%; height: 100%; object-fit: cover; }

.trx-chat-window__contact-info { display: flex; flex-direction: column; flex: 1; }
.trx-chat-window__contact-name { font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-chat-window__contact-status { font-size: 0.75rem; color: var(--trx-text-secondary); }

.trx-chat-window__messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.trx-chat-window__loading,
.trx-chat-window__empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--trx-text-secondary);
  font-size: 0.875rem;
}

.trx-chat-window__empty i { font-size: 2rem; }

.trx-chat-window__composer {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 0.75rem;
  background: var(--trx-bg-card);
  border-top: 1px solid var(--trx-border-color);
}

.trx-chat-window__attach,
.trx-chat-window__send {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--trx-border-color);
  background: var(--trx-bg-secondary);
  color: var(--trx-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
  transition: all 0.15s;
}

.trx-chat-window__attach:hover:not(:disabled) { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }

.trx-chat-window__send {
  background: var(--trx-accent-color);
  border-color: var(--trx-accent-color);
  color: white;
}

.trx-chat-window__send:disabled { opacity: 0.4; cursor: not-allowed; }

.trx-chat-window__input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--trx-border-color);
  border-radius: 8px;
  background: var(--trx-bg-secondary);
  color: var(--trx-text-primary);
  font-size: 0.875rem;
  font-family: inherit;
  resize: none;
  outline: none;
  max-height: 120px;
  overflow-y: auto;
  line-height: 1.5;
  transition: border-color 0.2s;
}

.trx-chat-window__input:focus { border-color: var(--trx-accent-color); }
.trx-chat-window__input:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
