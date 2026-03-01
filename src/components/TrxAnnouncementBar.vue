<script setup lang="ts">
import { ref, computed } from 'vue'

export interface TrxAnnouncement {
  id: string
  message: string
  type?: 'info' | 'success' | 'warning' | 'danger'
  link?: { label: string; href: string }
  dismissible?: boolean
}

const props = withDefaults(defineProps<{
  announcements?: TrxAnnouncement[]
  rotateInterval?: number // ms, 0 = no rotation
}>(), {
  announcements: () => [],
  rotateInterval: 0,
})

const dismissed = ref<Set<string>>(new Set())
const currentIdx = ref(0)

const visible = computed(() => props.announcements.filter(a => !dismissed.value.has(a.id)))
const current = computed(() => visible.value[currentIdx.value % Math.max(visible.value.length, 1)] ?? null)

function dismiss(id: string) {
  dismissed.value.add(id)
  if (currentIdx.value >= visible.value.length - 1) currentIdx.value = 0
}

let timer: ReturnType<typeof setInterval> | null = null
import { onMounted, onBeforeUnmount, watch } from 'vue'

function startRotation() {
  if (props.rotateInterval > 0) {
    timer = setInterval(() => {
      if (visible.value.length > 1) currentIdx.value = (currentIdx.value + 1) % visible.value.length
    }, props.rotateInterval)
  }
}

onMounted(startRotation)
onBeforeUnmount(() => { if (timer) clearInterval(timer) })
watch(() => props.rotateInterval, () => {
  if (timer) clearInterval(timer)
  startRotation()
})

const typeIcon: Record<string, string> = {
  info: 'pi pi-info-circle',
  success: 'pi pi-check-circle',
  warning: 'pi pi-exclamation-triangle',
  danger: 'pi pi-times-circle',
}
</script>

<template>
  <Teleport to="body">
    <Transition name="trx-ann-slide">
      <div
        v-if="current"
        class="trx-ann"
        :class="`trx-ann--${current.type ?? 'info'}`"
        role="status"
        aria-live="polite"
      >
        <!-- Dots -->
        <div v-if="visible.length > 1" class="trx-ann__dots">
          <span
            v-for="(a, i) in visible"
            :key="a.id"
            class="trx-ann__dot"
            :class="{ 'trx-ann__dot--active': i === currentIdx % visible.length }"
            @click="currentIdx = i"
          ></span>
        </div>
        <i :class="typeIcon[current.type ?? 'info']" class="trx-ann__icon"></i>
        <span class="trx-ann__msg">{{ current.message }}</span>
        <a v-if="current.link" :href="current.link.href" class="trx-ann__link" target="_blank" rel="noopener">
          {{ current.link.label }} <i class="pi pi-external-link"></i>
        </a>
        <button
          v-if="current.dismissible !== false"
          class="trx-ann__close"
          @click="dismiss(current!.id)"
          title="Fechar"
        >
          <i class="pi pi-times"></i>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.trx-ann {
  position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.4rem 1rem; font-size: 0.82rem; font-weight: 500;
}
.trx-ann--info { background: #3b82f6; color: white; }
.trx-ann--success { background: var(--trx-success-color); color: white; }
.trx-ann--warning { background: #f59e0b; color: #1a1a1a; }
.trx-ann--danger { background: var(--trx-danger-color); color: white; }
.trx-ann__dots { display: flex; gap: 0.25rem; align-items: center; }
.trx-ann__dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.4); cursor: pointer; transition: background 0.15s; }
.trx-ann__dot--active { background: white; }
.trx-ann__icon { font-size: 0.85rem; flex-shrink: 0; }
.trx-ann__msg { flex: 1; text-align: center; }
.trx-ann__link {
  color: inherit; font-weight: 600; text-decoration: underline; white-space: nowrap;
  display: flex; align-items: center; gap: 0.2rem; font-size: 0.78rem;
}
.trx-ann__close {
  background: none; border: none; cursor: pointer; color: inherit;
  opacity: 0.75; padding: 0.15rem 0.3rem; border-radius: 4px;
  font-size: 0.75rem; transition: opacity 0.15s;
}
.trx-ann__close:hover { opacity: 1; }
.trx-ann-slide-enter-active, .trx-ann-slide-leave-active { transition: all 0.25s; }
.trx-ann-slide-enter-from, .trx-ann-slide-leave-to { transform: translateY(-100%); opacity: 0; }
</style>
