<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  url?: string
  name?: string
  mimeType?: string
  size?: number // bytes
  maxHeight?: string
}>(), {
  maxHeight: '480px',
})

const emit = defineEmits<{
  download: []
  close: []
}>()

type FileCategory = 'image' | 'pdf' | 'video' | 'audio' | 'text' | 'unknown'

function detect(): FileCategory {
  const mime = props.mimeType ?? ''
  const ext = (props.name ?? '').split('.').pop()?.toLowerCase() ?? ''
  if (mime.startsWith('image/') || ['png','jpg','jpeg','gif','webp','svg','bmp'].includes(ext)) return 'image'
  if (mime === 'application/pdf' || ext === 'pdf') return 'pdf'
  if (mime.startsWith('video/') || ['mp4','webm','ogg','mov'].includes(ext)) return 'video'
  if (mime.startsWith('audio/') || ['mp3','wav','ogg','aac','flac'].includes(ext)) return 'audio'
  if (mime.startsWith('text/') || ['txt','csv','json','xml','md','log','yaml','yml'].includes(ext)) return 'text'
  return 'unknown'
}

const category = computed(detect)

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

const fileIcon: Record<FileCategory, string> = {
  image: 'pi pi-image',
  pdf: 'pi pi-file-pdf',
  video: 'pi pi-video',
  audio: 'pi pi-volume-up',
  text: 'pi pi-file',
  unknown: 'pi pi-file',
}

const ext = computed(() => (props.name ?? '').split('.').pop()?.toUpperCase() ?? 'FILE')
</script>

<template>
  <div class="trx-fp">
    <!-- Header -->
    <div class="trx-fp__header">
      <i :class="fileIcon[category]" class="trx-fp__header-icon"></i>
      <div class="trx-fp__meta">
        <span class="trx-fp__name">{{ name ?? 'Arquivo' }}</span>
        <span v-if="size" class="trx-fp__size">{{ formatSize(size) }}</span>
      </div>
      <div class="trx-fp__actions">
        <a v-if="url" :href="url" download :aria-label="`Baixar ${name}`" class="trx-fp__action" @click="emit('download')">
          <i class="pi pi-download"></i>
        </a>
        <button class="trx-fp__action" @click="emit('close')">
          <i class="pi pi-times"></i>
        </button>
      </div>
    </div>
    <!-- Preview -->
    <div class="trx-fp__body" :style="{ maxHeight }">
      <img v-if="category === 'image'" :src="url" :alt="name" class="trx-fp__img" />

      <iframe
        v-else-if="category === 'pdf'"
        :src="url"
        class="trx-fp__iframe"
        title="PDF Preview"
      ></iframe>

      <video v-else-if="category === 'video'" :src="url" controls class="trx-fp__video">
        Seu browser não suporta vídeo.
      </video>

      <audio v-else-if="category === 'audio'" :src="url" controls class="trx-fp__audio">
        Seu browser não suporta áudio.
      </audio>

      <div v-else-if="category === 'text'" class="trx-fp__text-wrap">
        <slot name="text-content">
          <iframe :src="url" class="trx-fp__iframe" title="Text Preview" sandbox="allow-same-origin"></iframe>
        </slot>
      </div>

      <div v-else class="trx-fp__unknown">
        <span class="trx-fp__ext">{{ ext }}</span>
        <p class="trx-fp__unknown-msg">Pré-visualização não disponível para este tipo de arquivo.</p>
        <a v-if="url" :href="url" download class="trx-fp__dl-btn">
          <i class="pi pi-download"></i> Baixar arquivo
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-fp { border: 1px solid var(--trx-border-color); border-radius: 12px; overflow: hidden; background: var(--trx-bg-card); }
.trx-fp__header { display: flex; align-items: center; gap: 0.6rem; padding: 0.6rem 0.8rem; border-bottom: 1px solid var(--trx-border-color); background: var(--trx-bg-secondary); }
.trx-fp__header-icon { color: var(--trx-accent-color); font-size: 1.1rem; flex-shrink: 0; }
.trx-fp__meta { flex: 1; min-width: 0; }
.trx-fp__name { display: block; font-size: 0.85rem; font-weight: 600; color: var(--trx-text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.trx-fp__size { font-size: 0.75rem; color: var(--trx-text-secondary); }
.trx-fp__actions { display: flex; gap: 0.25rem; }
.trx-fp__action { display: flex; align-items: center; padding: 0.25rem 0.4rem; border-radius: 6px; border: none; background: transparent; color: var(--trx-text-secondary); cursor: pointer; font-size: 0.85rem; text-decoration: none; transition: background 0.15s, color 0.15s; }
.trx-fp__action:hover { background: var(--trx-bg-card); color: var(--trx-accent-color); }
.trx-fp__body { overflow: auto; background: var(--trx-bg-secondary); display: flex; align-items: center; justify-content: center; }
.trx-fp__img { max-width: 100%; max-height: 100%; object-fit: contain; display: block; }
.trx-fp__iframe { width: 100%; height: 100%; min-height: 360px; border: none; }
.trx-fp__video { max-width: 100%; max-height: 100%; }
.trx-fp__audio { width: 100%; padding: 1rem; }
.trx-fp__text-wrap { width: 100%; height: 100%; }
.trx-fp__unknown { display: flex; flex-direction: column; align-items: center; padding: 3rem 1rem; gap: 1rem; }
.trx-fp__ext { font-size: 2rem; font-weight: 700; color: var(--trx-text-secondary); border: 2px solid var(--trx-border-color); padding: 0.5rem 1rem; border-radius: 8px; }
.trx-fp__unknown-msg { color: var(--trx-text-secondary); font-size: 0.85rem; text-align: center; margin: 0; }
.trx-fp__dl-btn { display: flex; align-items: center; gap: 0.35rem; padding: 0.5rem 1rem; background: var(--trx-accent-color); color: white; border-radius: 8px; font-size: 0.85rem; text-decoration: none; font-weight: 600; transition: opacity 0.15s; }
.trx-fp__dl-btn:hover { opacity: 0.88; }
</style>
