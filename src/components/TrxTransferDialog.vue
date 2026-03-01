<script setup lang="ts">
import { ref } from 'vue'

export type TrxTransferType = 'blind' | 'attended' | 'conference'

export interface TrxTransferTarget {
  id: string
  name: string
  extension: string
  available?: boolean
}

withDefaults(defineProps<{
  targets?: TrxTransferTarget[]
  modelValue?: boolean
  loading?: boolean
}>(), {
  targets: () => [],
  modelValue: false,
})

const emit = defineEmits<{
  'update:modelValue': [v: boolean]
  transfer: [target: TrxTransferTarget, type: TrxTransferType]
}>()

const type = ref<TrxTransferType>('blind')
const search = ref('')
const selected = ref<TrxTransferTarget | null>(null)
</script>

<template>
  <Teleport to="body">
    <Transition name="trx-tf-fade">
      <div v-if="modelValue" class="trx-tf-backdrop" @click.self="emit('update:modelValue', false)">
        <div class="trx-tf-dialog">
          <div class="trx-tf-dialog__header">
            <h3 class="trx-tf-dialog__title">Transferir Chamada</h3>
            <button class="trx-tf-dialog__close" @click="emit('update:modelValue', false)">
              <i class="pi pi-times"></i>
            </button>
          </div>

          <div class="trx-tf-dialog__type-tabs">
            <button
              v-for="t in (['blind', 'attended', 'conference'] as TrxTransferType[])"
              :key="t"
              class="trx-tf-dialog__type-btn"
              :class="{ active: type === t }"
              @click="type = t"
            >
              {{ t === 'blind' ? 'Cega' : t === 'attended' ? 'Assistida' : 'Conferência' }}
            </button>
          </div>

          <div class="trx-tf-dialog__search">
            <i class="pi pi-search trx-tf-dialog__search-icon"></i>
            <input
              v-model="search"
              class="trx-tf-dialog__search-input"
              placeholder="Buscar ramal ou agente..."
              autofocus
            />
          </div>

          <div class="trx-tf-dialog__list">
            <div v-if="loading" class="trx-tf-dialog__loading">
              <i class="pi pi-spin pi-spinner"></i>
            </div>
            <div
              v-for="t in targets.filter(t => !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.extension.includes(search))"
              :key="t.id"
              class="trx-tf-dialog__item"
              :class="{ 'trx-tf-dialog__item--selected': selected?.id === t.id, 'trx-tf-dialog__item--unavailable': !t.available }"
              @click="selected = t"
            >
              <div class="trx-tf-dialog__item-dot" :class="t.available ? 'available' : 'busy'"></div>
              <div class="trx-tf-dialog__item-info">
                <span class="trx-tf-dialog__item-name">{{ t.name }}</span>
                <span class="trx-tf-dialog__item-ext">{{ t.extension }}</span>
              </div>
              <span class="trx-tf-dialog__item-status">{{ t.available ? 'Disponível' : 'Ocupado' }}</span>
            </div>
            <div v-if="!targets.length && !loading" class="trx-tf-dialog__empty">
              Nenhum ramal encontrado
            </div>
          </div>

          <div class="trx-tf-dialog__footer">
            <button class="trx-tf-dialog__btn trx-tf-dialog__btn--cancel" @click="emit('update:modelValue', false)">
              Cancelar
            </button>
            <button
              class="trx-tf-dialog__btn trx-tf-dialog__btn--confirm"
              :disabled="!selected"
              @click="selected && emit('transfer', selected, type)"
            >
              <i class="pi pi-phone"></i>
              {{ type === 'blind' ? 'Transferir' : type === 'attended' ? 'Consultar' : 'Conferência' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.trx-tf-backdrop { position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; }
.trx-tf-dialog { background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 14px; width: 100%; max-width: 440px; display: flex; flex-direction: column; box-shadow: var(--trx-shadow-xl, 0 20px 60px rgba(0,0,0,0.3)); }
.trx-tf-dialog__header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; border-bottom: 1px solid var(--trx-border-color); }
.trx-tf-dialog__title { margin: 0; font-size: 0.95rem; font-weight: 700; color: var(--trx-text-primary); }
.trx-tf-dialog__close { background: none; border: none; cursor: pointer; color: var(--trx-text-secondary); font-size: 1rem; padding: 0.25rem; }
.trx-tf-dialog__type-tabs { display: flex; gap: 0; padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--trx-border-color); }
.trx-tf-dialog__type-btn { flex: 1; padding: 0.4rem; border: 1px solid var(--trx-border-color); background: transparent; font-size: 0.8rem; cursor: pointer; color: var(--trx-text-secondary); transition: all 0.15s; }
.trx-tf-dialog__type-btn:first-child { border-radius: 6px 0 0 6px; }
.trx-tf-dialog__type-btn:last-child { border-radius: 0 6px 6px 0; }
.trx-tf-dialog__type-btn.active { background: var(--trx-accent-color); color: white; border-color: var(--trx-accent-color); }
.trx-tf-dialog__search { position: relative; padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--trx-border-color); }
.trx-tf-dialog__search-icon { position: absolute; left: 1.75rem; top: 50%; transform: translateY(-50%); color: var(--trx-text-secondary); font-size: 0.85rem; }
.trx-tf-dialog__search-input { width: 100%; padding: 0.5rem 0.75rem 0.5rem 2rem; border: 1px solid var(--trx-border-color); border-radius: 8px; background: var(--trx-bg-secondary); color: var(--trx-text-primary); font-size: 0.875rem; outline: none; box-sizing: border-box; }
.trx-tf-dialog__list { max-height: 260px; overflow-y: auto; }
.trx-tf-dialog__loading { display: flex; justify-content: center; padding: 1.5rem; color: var(--trx-text-secondary); }
.trx-tf-dialog__item { display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1.25rem; cursor: pointer; transition: background 0.15s; }
.trx-tf-dialog__item:hover { background: var(--trx-bg-secondary); }
.trx-tf-dialog__item--selected { background: color-mix(in srgb, var(--trx-accent-color) 8%, transparent); }
.trx-tf-dialog__item--unavailable { opacity: 0.6; }
.trx-tf-dialog__item-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.trx-tf-dialog__item-dot.available { background: var(--trx-success-color); }
.trx-tf-dialog__item-dot.busy { background: var(--trx-danger-color); }
.trx-tf-dialog__item-info { flex: 1; display: flex; flex-direction: column; }
.trx-tf-dialog__item-name { font-size: 0.875rem; font-weight: 600; color: var(--trx-text-primary); }
.trx-tf-dialog__item-ext { font-size: 0.75rem; color: var(--trx-text-secondary); font-family: monospace; }
.trx-tf-dialog__item-status { font-size: 0.725rem; color: var(--trx-text-secondary); }
.trx-tf-dialog__empty { text-align: center; padding: 1.5rem; color: var(--trx-text-secondary); font-size: 0.875rem; }
.trx-tf-dialog__footer { display: flex; gap: 0.5rem; padding: 0.75rem 1.25rem; border-top: 1px solid var(--trx-border-color); }
.trx-tf-dialog__btn { flex: 1; padding: 0.6rem; border-radius: 8px; font-size: 0.875rem; font-weight: 600; cursor: pointer; border: none; transition: all 0.15s; display: flex; align-items: center; justify-content: center; gap: 0.4rem; }
.trx-tf-dialog__btn--cancel { background: var(--trx-bg-secondary); color: var(--trx-text-secondary); border: 1px solid var(--trx-border-color); }
.trx-tf-dialog__btn--confirm { background: var(--trx-accent-color); color: white; }
.trx-tf-dialog__btn--confirm:disabled { opacity: 0.5; cursor: not-allowed; }
.trx-tf-fade-enter-active, .trx-tf-fade-leave-active { transition: all 0.2s ease; }
.trx-tf-fade-enter-from, .trx-tf-fade-leave-to { opacity: 0; }
</style>
