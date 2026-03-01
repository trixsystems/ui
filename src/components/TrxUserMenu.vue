<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

export interface TrxUserMenuItem {
  key: string
  label: string
  icon?: string
  separator?: boolean
  danger?: boolean
}

withDefaults(defineProps<{
  name: string
  email?: string
  avatar?: string
  role?: string
  items?: TrxUserMenuItem[]
}>(), {
  items: () => [],
})

const emit = defineEmits<{
  select: [key: string]
  logout: []
}>()

const open = ref(false)

function select(item: TrxUserMenuItem) {
  open.value = false
  if (item.key === 'logout') emit('logout')
  else emit('select', item.key)
}

const initials = (name: string) => name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()

function onDocClick(e: MouseEvent) {
  const el = document.querySelector('.trx-user-menu')
  if (el && !el.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onDocClick, true))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick, true))
</script>

<template>
  <div class="trx-user-menu">
    <button class="trx-user-menu__trigger" @click="open = !open">
      <img v-if="avatar" :src="avatar" :alt="name" class="trx-user-menu__avatar" />
      <span v-else class="trx-user-menu__initials">{{ initials(name) }}</span>
      <div class="trx-user-menu__info">
        <span class="trx-user-menu__name">{{ name }}</span>
        <span v-if="role" class="trx-user-menu__role">{{ role }}</span>
      </div>
      <i class="pi pi-chevron-down trx-user-menu__arrow" :class="{ 'trx-user-menu__arrow--open': open }"></i>
    </button>

    <Transition name="trx-dropdown">
      <div v-if="open" class="trx-user-menu__panel">
        <div v-if="email" class="trx-user-menu__email">{{ email }}</div>
        <template v-for="item in items" :key="item.key">
          <hr v-if="item.separator" class="trx-user-menu__sep" />
          <button
            v-else
            class="trx-user-menu__item"
            :class="{ 'trx-user-menu__item--danger': item.danger }"
            @click="select(item)"
          >
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </button>
        </template>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trx-user-menu { position: relative; }

.trx-user-menu__trigger {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.35rem 0.5rem;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: all 0.15s;
}

.trx-user-menu__trigger:hover { background: var(--trx-bg-secondary); border-color: var(--trx-border-color); }

.trx-user-menu__avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }

.trx-user-menu__initials {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--trx-accent-color);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.trx-user-menu__info { display: flex; flex-direction: column; align-items: flex-start; min-width: 0; }
.trx-user-menu__name { font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-user-menu__role { font-size: 0.75rem; color: var(--trx-text-secondary); }

.trx-user-menu__arrow { font-size: 0.65rem; color: var(--trx-text-secondary); transition: transform 0.2s; }
.trx-user-menu__arrow--open { transform: rotate(180deg); }

.trx-user-menu__panel {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: var(--trx-bg-card);
  border: 1px solid var(--trx-border-color);
  border-radius: 10px;
  box-shadow: var(--trx-shadow-md);
  min-width: 200px;
  overflow: hidden;
  z-index: 100;
}

.trx-user-menu__email {
  font-size: 0.75rem;
  color: var(--trx-text-secondary);
  padding: 0.6rem 1rem;
  border-bottom: 1px solid var(--trx-border-color);
}

.trx-user-menu__sep { border: none; border-top: 1px solid var(--trx-border-color); margin: 0.25rem 0; }

.trx-user-menu__item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.55rem 1rem;
  border: none;
  background: transparent;
  color: var(--trx-text-primary);
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s;
}

.trx-user-menu__item:hover { background: var(--trx-bg-secondary); }
.trx-user-menu__item--danger { color: var(--trx-danger-color); }
.trx-user-menu__item--danger:hover { background: rgba(239,68,68,0.08); }
.trx-user-menu__item i { font-size: 0.9rem; width: 16px; text-align: center; }

.trx-dropdown-enter-active, .trx-dropdown-leave-active { transition: all 0.15s ease; }
.trx-dropdown-enter-from, .trx-dropdown-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
