<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

export interface TrxAction<T = unknown> {
  label: string
  icon?: string
  action: (row: T) => void
  visible?: (row: T) => boolean
  disabled?: (row: T) => boolean
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  /** Separador visual antes desta ação */
  separator?: boolean
}

const props = withDefaults(
  defineProps<{
    row: unknown
    actions: TrxAction[]
    /** inline = botões visíveis; menu = dropdown (padrão: menu quando >2 ações) */
    variant?: 'inline' | 'menu'
  }>(),
  {},
)

const showMenu = ref(false)
const triggerRef = ref<HTMLElement | null>(null)

const visibleActions = computed(() =>
  props.actions.filter((a) => !a.visible || a.visible(props.row)),
)

const resolvedVariant = computed(() =>
  props.variant ?? (visibleActions.value.length > 2 ? 'menu' : 'inline'),
)

const execute = (action: TrxAction) => {
  if (!action.disabled?.(props.row)) {
    action.action(props.row)
    showMenu.value = false
  }
}

const menuWrapRef = ref<HTMLElement | null>(null)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const closeMenu = () => {
  showMenu.value = false
}

const onDocClick = (e: MouseEvent) => {
  if (menuWrapRef.value && !menuWrapRef.value.contains(e.target as Node)) {
    closeMenu()
  }
}

onMounted(() => document.addEventListener('click', onDocClick, true))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick, true))
</script>

<template>
  <div class="trx-dta" @keydown.escape="closeMenu">
    <!-- Inline: botões visíveis -->
    <template v-if="resolvedVariant === 'inline'">
      <div class="trx-dta__inline">
        <button
          v-for="action in visibleActions"
          :key="action.label"
          type="button"
          :class="['trx-dta__btn', `trx-dta__btn--${action.severity ?? 'secondary'}`]"
          :disabled="action.disabled?.(row)"
          :aria-label="action.label"
          :title="action.label"
          @click="execute(action)"
        >
          <i v-if="action.icon" :class="action.icon" aria-hidden="true" />
          <span>{{ action.label }}</span>
        </button>
      </div>
    </template>

    <!-- Menu: dropdown -->
    <template v-else>
      <div ref="menuWrapRef" class="trx-dta__menu-wrap">
        <button
          ref="triggerRef"
          type="button"
          class="trx-dta__trigger"
          :aria-expanded="showMenu"
          aria-haspopup="menu"
          aria-label="Ações"
          @click="toggleMenu"
        >
          <i class="pi pi-ellipsis-v" aria-hidden="true" />
        </button>

        <Transition name="trx-dta">
          <div v-if="showMenu" class="trx-dta__dropdown" role="menu">
            <template v-for="action in visibleActions" :key="action.label">
              <hr v-if="action.separator" class="trx-dta__separator" />
              <button
                type="button"
                :class="[
                  'trx-dta__item',
                  `trx-dta__item--${action.severity ?? 'secondary'}`,
                  { 'trx-dta__item--disabled': action.disabled?.(row) },
                ]"
                :disabled="action.disabled?.(row)"
                role="menuitem"
                @click="execute(action)"
              >
                <i v-if="action.icon" :class="action.icon" aria-hidden="true" />
                {{ action.label }}
              </button>
            </template>
          </div>
        </Transition>
      </div>
    </template>
  </div>
</template>

<style scoped>
.trx-dta { display: inline-flex; align-items: center; }

/* Inline */
.trx-dta__inline { display: flex; gap: 0.375rem; }
.trx-dta__btn {
  display: inline-flex; align-items: center; gap: 0.25rem;
  padding: 0.25rem 0.625rem; border-radius: 6px; border: 1px solid transparent;
  font-size: 0.8rem; cursor: pointer; transition: all 0.15s; white-space: nowrap;
}
.trx-dta__btn--secondary { background: var(--trx-bg-tertiary); border-color: var(--trx-border-color); color: var(--trx-text-secondary); }
.trx-dta__btn--secondary:hover { background: var(--trx-border-color); color: var(--trx-text-primary); }
.trx-dta__btn--danger { background: var(--trx-danger-soft); color: var(--trx-danger-color); }
.trx-dta__btn--danger:hover { background: var(--trx-danger-color); color: #fff; }
.trx-dta__btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* Menu */
.trx-dta__menu-wrap { position: relative; }

.trx-dta__trigger {
  width: 28px; height: 28px;
  background: none; border: 1px solid transparent; border-radius: 6px;
  cursor: pointer; color: var(--trx-text-muted);
  display: flex; align-items: center; justify-content: center;
  transition: all 0.15s;
}
.trx-dta__trigger:hover { background: var(--trx-bg-tertiary); color: var(--trx-text-primary); border-color: var(--trx-border-color); }

.trx-dta__dropdown {
  position: absolute; right: 0; top: calc(100% + 4px); z-index: 1000;
  background: var(--trx-bg-card); border: 1px solid var(--trx-border-color);
  border-radius: 10px; box-shadow: var(--trx-shadow-lg);
  min-width: 160px; overflow: hidden;
}

.trx-dta__item {
  display: flex; align-items: center; gap: 0.5rem;
  width: 100%; padding: 0.5rem 0.875rem;
  background: none; border: none; cursor: pointer;
  font-size: 0.875rem; color: var(--trx-text-primary); text-align: left;
  transition: background 0.15s; white-space: nowrap;
}
.trx-dta__item:hover { background: var(--trx-bg-secondary); }
.trx-dta__item--danger { color: var(--trx-danger-color); }
.trx-dta__item--danger:hover { background: var(--trx-danger-soft); }
.trx-dta__item--disabled { opacity: 0.4; cursor: not-allowed; }

.trx-dta__separator { margin: 0.25rem 0; border: none; border-top: 1px solid var(--trx-border-color); }

/* Transition */
.trx-dta-enter-active, .trx-dta-leave-active { transition: opacity 0.15s, transform 0.15s; }
.trx-dta-enter-from, .trx-dta-leave-to { opacity: 0; transform: scale(0.95) translateY(-4px); }
</style>
