<script setup lang="ts">
withDefaults(defineProps<{
  message?: string
  botName?: string
  botAvatar?: string
  time?: string
  loading?: boolean
  options?: string[]
}>(), {
  botName: 'Bot',
  loading: false,
  options: () => [],
})

const emit = defineEmits<{ optionSelect: [value: string] }>()
</script>

<template>
  <div class="trx-bot-bubble">
    <div class="trx-bot-bubble__avatar">
      <img v-if="botAvatar" :src="botAvatar" :alt="botName" class="trx-bot-bubble__avatar-img" />
      <div v-else class="trx-bot-bubble__avatar-init">
        <i class="pi pi-android"></i>
      </div>
    </div>
    <div class="trx-bot-bubble__content">
      <div class="trx-bot-bubble__name">{{ botName }}</div>
      <div class="trx-bot-bubble__message">
        <template v-if="loading">
          <div class="trx-bot-bubble__typing">
            <span></span><span></span><span></span>
          </div>
        </template>
        <template v-else>
          <p class="trx-bot-bubble__text">{{ message }}</p>
          <div v-if="options.length" class="trx-bot-bubble__options">
            <button
              v-for="opt in options"
              :key="opt"
              class="trx-bot-bubble__option"
              @click="emit('optionSelect', opt)"
            >
              {{ opt }}
            </button>
          </div>
        </template>
      </div>
      <span v-if="time" class="trx-bot-bubble__time">{{ time }}</span>
    </div>
  </div>
</template>

<style scoped>
.trx-bot-bubble { display: flex; gap: 0.6rem; align-items: flex-start; max-width: 70%; }
.trx-bot-bubble__avatar { flex-shrink: 0; }
.trx-bot-bubble__avatar-img { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }
.trx-bot-bubble__avatar-init {
  width: 32px; height: 32px; border-radius: 50%;
  background: linear-gradient(135deg, var(--trx-accent-color), #8b5cf6);
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 0.85rem;
}
.trx-bot-bubble__content { display: flex; flex-direction: column; gap: 0.2rem; }
.trx-bot-bubble__name { font-size: 0.7rem; font-weight: 700; color: var(--trx-accent-color); display: flex; align-items: center; gap: 0.3rem; }
.trx-bot-bubble__name::after { content: '🤖'; font-size: 0.75rem; }
.trx-bot-bubble__message { background: var(--trx-bg-secondary); border: 1px solid var(--trx-border-color); border-radius: 4px 14px 14px 14px; padding: 0.6rem 0.85rem; }
.trx-bot-bubble__text { margin: 0; font-size: 0.875rem; color: var(--trx-text-primary); line-height: 1.5; }
.trx-bot-bubble__typing { display: flex; gap: 4px; align-items: center; padding: 0.2rem 0; }
.trx-bot-bubble__typing span { width: 6px; height: 6px; border-radius: 50%; background: var(--trx-text-secondary); animation: bounce 1.2s infinite; }
.trx-bot-bubble__typing span:nth-child(2) { animation-delay: 0.2s; }
.trx-bot-bubble__typing span:nth-child(3) { animation-delay: 0.4s; }
@keyframes bounce { 0%,80%,100%{transform:scale(0.7);opacity:0.5} 40%{transform:scale(1);opacity:1} }
.trx-bot-bubble__options { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.5rem; }
.trx-bot-bubble__option { padding: 0.3rem 0.7rem; border: 1px solid var(--trx-accent-color); border-radius: 14px; background: transparent; color: var(--trx-accent-color); font-size: 0.8rem; cursor: pointer; transition: all 0.15s; }
.trx-bot-bubble__option:hover { background: var(--trx-accent-color); color: white; }
.trx-bot-bubble__time { font-size: 0.65rem; color: var(--trx-text-secondary); align-self: flex-start; }
</style>
