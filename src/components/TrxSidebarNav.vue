<script setup lang="ts">
import { ref } from 'vue'

export interface TrxSidebarNavItem {
  key: string
  label: string
  icon?: string
  badge?: number | string
  children?: TrxSidebarNavItem[]
  separator?: boolean
}

const props = withDefaults(defineProps<{
  items?: TrxSidebarNavItem[]
  modelValue?: string
  collapsed?: boolean
  width?: string
  collapsedWidth?: string
}>(), {
  items: () => [],
  width: '240px',
  collapsedWidth: '56px',
})

const emit = defineEmits<{
  'update:modelValue': [key: string]
  'update:collapsed': [collapsed: boolean]
  select: [item: TrxSidebarNavItem]
}>()

const openGroups = ref<Set<string>>(new Set())

function toggleGroup(key: string) {
  if (openGroups.value.has(key)) openGroups.value.delete(key)
  else openGroups.value.add(key)
}

function select(item: TrxSidebarNavItem) {
  if (item.children?.length) { toggleGroup(item.key); return }
  emit('update:modelValue', item.key)
  emit('select', item)
}

function isActive(item: TrxSidebarNavItem): boolean {
  if (props.modelValue === item.key) return true
  return item.children?.some(c => c.key === props.modelValue) ?? false
}
</script>

<template>
  <nav
    class="trx-sidebar-nav"
    :style="{ width: collapsed ? collapsedWidth : width }"
    :class="{ 'trx-sidebar-nav--collapsed': collapsed }"
  >
    <button
      class="trx-sidebar-nav__toggle"
      @click="emit('update:collapsed', !collapsed)"
      :title="collapsed ? 'Expandir' : 'Recolher'"
    >
      <i :class="collapsed ? 'pi pi-angle-right' : 'pi pi-angle-left'"></i>
    </button>

    <div class="trx-sidebar-nav__items">
      <template v-for="item in items" :key="item.key">
        <hr v-if="item.separator" class="trx-sidebar-nav__sep" />
        <div v-else>
          <button
            class="trx-sidebar-nav__item"
            :class="{
              'trx-sidebar-nav__item--active': isActive(item),
              'trx-sidebar-nav__item--open': openGroups.has(item.key),
            }"
            :title="collapsed ? item.label : undefined"
            @click="select(item)"
          >
            <i v-if="item.icon" :class="item.icon" class="trx-sidebar-nav__icon"></i>
            <span v-if="!collapsed" class="trx-sidebar-nav__label">{{ item.label }}</span>
            <span v-if="!collapsed && item.badge" class="trx-sidebar-nav__badge">{{ item.badge }}</span>
            <i
              v-if="!collapsed && item.children?.length"
              class="pi pi-chevron-down trx-sidebar-nav__arrow"
              :class="{ 'trx-sidebar-nav__arrow--open': openGroups.has(item.key) }"
            ></i>
          </button>

          <div
            v-if="!collapsed && item.children?.length && openGroups.has(item.key)"
            class="trx-sidebar-nav__children"
          >
            <button
              v-for="child in item.children"
              :key="child.key"
              class="trx-sidebar-nav__child"
              :class="{ 'trx-sidebar-nav__child--active': modelValue === child.key }"
              @click="select(child)"
            >
              <i v-if="child.icon" :class="child.icon"></i>
              <span>{{ child.label }}</span>
              <span v-if="child.badge" class="trx-sidebar-nav__badge">{{ child.badge }}</span>
            </button>
          </div>
        </div>
      </template>
    </div>
  </nav>
</template>

<style scoped>
.trx-sidebar-nav {
  display: flex; flex-direction: column;
  background: var(--trx-bg-card);
  border-right: 1px solid var(--trx-border-color);
  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden; height: 100%;
}
.trx-sidebar-nav__toggle {
  display: flex; align-items: center; justify-content: flex-end;
  padding: 0.6rem 0.75rem;
  background: none; border: none; border-bottom: 1px solid var(--trx-border-color);
  cursor: pointer; color: var(--trx-text-secondary); transition: background 0.15s;
}
.trx-sidebar-nav__toggle:hover { background: var(--trx-bg-secondary); }
.trx-sidebar-nav__items { flex: 1; overflow-y: auto; padding: 0.5rem 0; }
.trx-sidebar-nav__sep { border: none; border-top: 1px solid var(--trx-border-color); margin: 0.5rem 0.75rem; }
.trx-sidebar-nav__item {
  display: flex; align-items: center; gap: 0.6rem;
  width: 100%; padding: 0.55rem 0.875rem;
  background: none; border: none; cursor: pointer;
  color: var(--trx-text-secondary); font-size: 0.875rem; font-weight: 500;
  text-align: left; transition: all 0.15s; border-radius: 0;
}
.trx-sidebar-nav--collapsed .trx-sidebar-nav__item { justify-content: center; padding: 0.7rem; }
.trx-sidebar-nav__item:hover { background: var(--trx-bg-secondary); color: var(--trx-text-primary); }
.trx-sidebar-nav__item--active { color: var(--trx-accent-color); background: color-mix(in srgb, var(--trx-accent-color) 8%, transparent); }
.trx-sidebar-nav__icon { font-size: 1rem; width: 18px; text-align: center; flex-shrink: 0; }
.trx-sidebar-nav__label { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.trx-sidebar-nav__badge {
  background: var(--trx-accent-color); color: white;
  font-size: 0.65rem; font-weight: 700; padding: 0.1rem 0.35rem;
  border-radius: 10px; min-width: 18px; text-align: center; flex-shrink: 0;
}
.trx-sidebar-nav__arrow { font-size: 0.65rem; transition: transform 0.2s; flex-shrink: 0; }
.trx-sidebar-nav__arrow--open { transform: rotate(180deg); }
.trx-sidebar-nav__children { padding-left: 0.5rem; }
.trx-sidebar-nav__child {
  display: flex; align-items: center; gap: 0.5rem;
  width: 100%; padding: 0.45rem 0.875rem 0.45rem 1.75rem;
  background: none; border: none; cursor: pointer;
  color: var(--trx-text-secondary); font-size: 0.825rem;
  text-align: left; transition: all 0.15s;
}
.trx-sidebar-nav__child:hover { background: var(--trx-bg-secondary); color: var(--trx-text-primary); }
.trx-sidebar-nav__child--active { color: var(--trx-accent-color); font-weight: 600; }
</style>
