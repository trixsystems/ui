<script setup lang="ts">
export type TrxChatDirection = 'in' | 'out'
export type TrxChatMessageType = 'text' | 'audio' | 'image' | 'file'
export type TrxChatMessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | 'error'

withDefaults(defineProps<{
  message?: string
  author?: string
  time?: string
  direction?: TrxChatDirection
  status?: TrxChatMessageStatus
  type?: TrxChatMessageType
  fileUrl?: string
  fileName?: string
}>(), {
  direction: 'in',
  type: 'text',
})

const statusIcon: Record<TrxChatMessageStatus, string> = {
  sending:   'pi pi-clock',
  sent:      'pi pi-check',
  delivered: 'pi pi-check',
  read:      'pi pi-check-square',
  error:     'pi pi-exclamation-triangle',
}

const statusColor: Record<TrxChatMessageStatus, string> = {
  sending:   'var(--trx-text-secondary)',
  sent:      'var(--trx-text-secondary)',
  delivered: 'var(--trx-text-secondary)',
  read:      'var(--trx-accent-color)',
  error:     'var(--trx-danger-color)',
}
</script>

<template>
  <div class="trx-chat-bubble" :class="`trx-chat-bubble--${direction}`">
    <div class="trx-chat-bubble__content">
      <span v-if="author && direction === 'in'" class="trx-chat-bubble__author">{{ author }}</span>

      <div class="trx-chat-bubble__body">
        <slot>
          <template v-if="type === 'text'">
            <p class="trx-chat-bubble__text">{{ message }}</p>
          </template>
          <template v-else-if="type === 'image' && fileUrl">
            <img class="trx-chat-bubble__image" :src="fileUrl" :alt="fileName" />
          </template>
          <template v-else-if="type === 'audio' && fileUrl">
            <audio class="trx-chat-bubble__audio" :src="fileUrl" controls></audio>
          </template>
          <template v-else-if="type === 'file'">
            <a class="trx-chat-bubble__file" :href="fileUrl" target="_blank" rel="noopener">
              <i class="pi pi-file"></i>
              <span>{{ fileName ?? 'Arquivo' }}</span>
            </a>
          </template>
        </slot>
      </div>

      <div class="trx-chat-bubble__meta">
        <span v-if="time" class="trx-chat-bubble__time">{{ time }}</span>
        <i
          v-if="status && direction === 'out'"
          :class="statusIcon[status]"
          class="trx-chat-bubble__status"
          :style="{ color: statusColor[status] }"
        ></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-chat-bubble {
  display: flex;
  margin-bottom: 0.5rem;
}

.trx-chat-bubble--in { justify-content: flex-start; }
.trx-chat-bubble--out { justify-content: flex-end; }

.trx-chat-bubble__content {
  max-width: 70%;
  min-width: 60px;
}

.trx-chat-bubble--in .trx-chat-bubble__content {
  align-items: flex-start;
}

.trx-chat-bubble--out .trx-chat-bubble__content {
  align-items: flex-end;
}

.trx-chat-bubble__author {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--trx-accent-color);
  display: block;
  margin-bottom: 0.2rem;
  padding: 0 0.5rem;
}

.trx-chat-bubble__body {
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  display: inline-block;
  max-width: 100%;
}

.trx-chat-bubble--in .trx-chat-bubble__body {
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-bottom-left-radius: 4px;
}

.trx-chat-bubble--out .trx-chat-bubble__body {
  background: var(--trx-accent-color);
  color: white;
  border-bottom-right-radius: 4px;
}

.trx-chat-bubble__text {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  word-break: break-word;
  white-space: pre-wrap;
}

.trx-chat-bubble--in .trx-chat-bubble__text { color: var(--trx-text-primary); }
.trx-chat-bubble--out .trx-chat-bubble__text { color: white; }

.trx-chat-bubble__image {
  max-width: 200px;
  max-height: 200px;
  border-radius: 8px;
  display: block;
  cursor: pointer;
}

.trx-chat-bubble__audio { max-width: 240px; }

.trx-chat-bubble__file {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  text-decoration: none;
  color: inherit;
}

.trx-chat-bubble__meta {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.2rem;
  padding: 0 0.25rem;
  justify-content: flex-end;
}

.trx-chat-bubble__time { font-size: 0.65rem; color: var(--trx-text-secondary); }
.trx-chat-bubble__status { font-size: 0.65rem; }
</style>
