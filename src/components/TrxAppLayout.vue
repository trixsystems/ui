<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'

export interface MenuItem {
  label: string
  icon: string
  path: string
  roles?: string[]
}

export interface MenuSection {
  key: string
  label: string
  items: MenuItem[]
}

const props = withDefaults(defineProps<{
  appName: string
  brandPrefix?: string
  appIcon?: string
  menuItems?: MenuItem[]
  menuSections?: MenuSection[]
  userName?: string
  userRole?: string
  statusLabel?: string
  statusType?: 'online' | 'offline' | 'busy' | 'paused'
  showStatus?: boolean
  onLogout?: () => void | Promise<void>
  footerText?: string
  footerUrl?: string
}>(), {
  brandPrefix: 'TRX',
  appIcon: 'pi pi-box',
  showStatus: false,
  statusType: 'offline',
  footerText: 'TRIX Systems',
  footerUrl: 'https://trixsystems.io'
})

const emit = defineEmits<{
  logout: []
  navigate: [path: string]
}>()

const router = useRouter()
const route = useRoute()

const sidebarCollapsed = ref(false)
const isDark = ref(false)

const userInitials = computed(() => {
  if (!props.userName) return 'U'
  return props.userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

const statusClass = computed(() => {
  const classes: Record<string, string> = {
    online: 'trx-layout__status--online',
    offline: 'trx-layout__status--offline',
    busy: 'trx-layout__status--busy',
    paused: 'trx-layout__status--paused'
  }
  return classes[props.statusType || 'offline']
})

function isActive(path: string) {
  if (path === '/') return route.path === '/' || route.path === ''
  return route.path.startsWith(path)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const savedSidebar = localStorage.getItem('sidebarCollapsed')

  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  if (savedSidebar === 'true') {
    sidebarCollapsed.value = true
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
  localStorage.setItem('sidebarCollapsed', sidebarCollapsed.value.toString())
}

const navigateTo = (path: string) => {
  emit('navigate', path)
  router.push(path)
}

async function handleLogout() {
  if (props.onLogout) {
    await props.onLogout()
  }
  emit('logout')
}
</script>

<template>
  <div class="trx-layout" :class="{ dark: isDark }">
    <!-- Skip to content (A11Y) -->
    <a href="#trx-main-content" class="trx-layout__skip-link">Pular para o conteúdo</a>

    <!-- Sidebar -->
    <aside class="trx-layout__sidebar" :class="{ 'trx-layout__sidebar--collapsed': sidebarCollapsed }">
      <div class="trx-layout__sidebar-header">
        <div class="trx-layout__logo" v-if="!sidebarCollapsed" @click="navigateTo('/')" style="cursor: pointer;">
          <i :class="appIcon"></i>
          <span class="trx-layout__logo-text">
            <span v-if="brandPrefix" class="trx-layout__logo-trx">{{ brandPrefix }}</span>{{ brandPrefix ? ' ' : '' }}{{ appName }}
          </span>
        </div>
        <div class="trx-layout__logo-mini" v-else @click="navigateTo('/')" style="cursor: pointer;">
          <i :class="appIcon"></i>
        </div>
      </div>

      <nav class="trx-layout__nav">
        <!-- Simple menu items -->
        <ul v-if="menuItems && menuItems.length">
          <li
            v-for="item in menuItems"
            :key="item.path"
            :class="{ active: isActive(item.path) }"
            @click="navigateTo(item.path)"
            :title="sidebarCollapsed ? item.label : ''"
          >
            <i :class="item.icon"></i>
            <span v-if="!sidebarCollapsed">{{ item.label }}</span>
          </li>
        </ul>

        <!-- Sectioned menu -->
        <template v-if="menuSections && menuSections.length">
          <div v-for="section in menuSections" :key="section.key" class="trx-layout__nav-section">
            <div class="trx-layout__section-header" v-if="!sidebarCollapsed && section.items.length > 0">
              {{ section.label }}
            </div>
            <ul>
              <li
                v-for="item in section.items"
                :key="item.path"
                :class="{ active: isActive(item.path) }"
                @click="navigateTo(item.path)"
                :title="sidebarCollapsed ? item.label : ''"
              >
                <i :class="item.icon"></i>
                <span v-if="!sidebarCollapsed">{{ item.label }}</span>
              </li>
            </ul>
          </div>
        </template>
      </nav>

      <div class="trx-layout__sidebar-footer">
        <button class="trx-layout__toggle-btn" @click="toggleSidebar">
          <i :class="['pi', sidebarCollapsed ? 'pi-angle-right' : 'pi-angle-left']"></i>
        </button>
        <a
          :href="footerUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="trx-layout__footer-link"
          v-if="!sidebarCollapsed && footerText"
        >
          {{ footerText }}
        </a>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="trx-layout__main" :class="{ 'trx-layout__main--collapsed': sidebarCollapsed }">
      <!-- Top Bar -->
      <header class="trx-layout__topbar">
        <div class="trx-layout__topbar-left">
          <Button
            icon="pi pi-bars"
            text
            rounded
            @click="toggleSidebar"
            class="trx-layout__mobile-menu"
          />
          <slot name="topbar-left" />
        </div>
        <div class="trx-layout__topbar-right">
          <div class="trx-layout__controls">
            <!-- Status Badge -->
            <div v-if="showStatus" :class="['trx-layout__status', statusClass]">
              <span class="trx-layout__status-dot"></span>
              {{ statusLabel }}
            </div>
            <span v-if="showStatus" class="trx-layout__divider"></span>

            <!-- Theme Toggle -->
            <Button
              :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
              @click="toggleTheme"
              rounded
              text
              size="small"
              :title="isDark ? 'Modo Claro' : 'Modo Escuro'"
            />
            <span class="trx-layout__divider"></span>

            <!-- User Info -->
            <div class="trx-layout__user">
              <Avatar
                :label="userInitials"
                size="small"
                shape="circle"
              />
              <span class="trx-layout__user-name">{{ userName || 'Usuario' }}</span>
            </div>

            <!-- Logout -->
            <Button
              icon="pi pi-sign-out"
              rounded
              text
              size="small"
              @click="handleLogout"
              title="Sair"
            />
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main id="trx-main-content" class="trx-layout__content" tabindex="-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Skip-to-content (A11Y) */
.trx-layout__skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  padding: 0.5rem 1rem;
  background: var(--trx-accent-color);
  color: var(--trx-bg-primary);
  font-weight: 600;
  border-radius: 0 0 8px 8px;
  text-decoration: none;
  transition: top 0.2s;
}
.trx-layout__skip-link:focus {
  top: 0;
}

.trx-layout {
  display: flex;
  min-height: 100vh;
  background: var(--trx-bg-secondary);
}

/* Sidebar */
.trx-layout__sidebar {
  width: 260px;
  background: linear-gradient(180deg, #059669 0%, #047857 100%);
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15);
}

.dark .trx-layout__sidebar {
  background: linear-gradient(180deg, #282a36 0%, #1a1b26 100%);
  border-right: 1px solid #2f3241;
}

.trx-layout__sidebar--collapsed {
  width: 70px;
}

.trx-layout__sidebar-header {
  padding: 1.25rem;
  min-height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.trx-layout__logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

.trx-layout__logo i {
  font-size: 1.5rem;
  color: white;
}

.trx-layout__logo-text {
  white-space: nowrap;
  color: white;
}

.trx-layout__logo-trx {
  color: white;
  font-weight: 700;
}

.trx-layout__logo-mini {
  width: 100%;
  display: flex;
  justify-content: center;
}

.trx-layout__logo-mini i {
  font-size: 1.5rem;
  color: white;
}

/* Navigation */
.trx-layout__nav {
  flex: 1;
  padding: 0.5rem 0;
  overflow-y: auto;
}

.trx-layout__nav-section {
  margin-bottom: 0.5rem;
}

.trx-layout__section-header {
  padding: 0.5rem 1.25rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
}

.dark .trx-layout__section-header {
  color: rgba(189, 147, 249, 0.7);
}

.trx-layout__nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.trx-layout__nav li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  margin: 0.125rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
  white-space: nowrap;
  font-size: 0.9rem;
}

.trx-layout__sidebar--collapsed .trx-layout__nav li {
  justify-content: center;
  padding: 0.875rem;
  margin: 0.25rem 0.5rem;
}

.trx-layout__nav li:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.trx-layout__nav li.active {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 500;
}

.dark .trx-layout__nav li.active {
  background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
}

.dark .trx-layout__nav li:hover:not(.active) {
  background: rgba(16, 185, 129, 0.15);
}

.trx-layout__nav li i {
  font-size: 1.125rem;
  width: 1.25rem;
  text-align: center;
}

/* Sidebar Footer */
.trx-layout__sidebar-footer {
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.trx-layout__toggle-btn {
  width: 100%;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;
}

.trx-layout__toggle-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.trx-layout__footer-link {
  display: block;
  text-align: center;
  padding: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s ease;
}

.trx-layout__footer-link:hover {
  color: rgba(255, 255, 255, 0.9);
}

/* Main Wrapper */
.trx-layout__main {
  flex: 1;
  margin-left: 260px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: margin-left 0.3s ease;
}

.trx-layout__main--collapsed {
  margin-left: 70px;
}

/* Top Bar */
.trx-layout__topbar {
  height: 64px;
  background: var(--trx-bg-card);
  border-bottom: 1px solid var(--trx-border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  z-index: 50;
}

.trx-layout__topbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.trx-layout__mobile-menu {
  display: none;
}

.trx-layout__topbar-right {
  display: flex;
  align-items: center;
}

.trx-layout__controls {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.trx-layout__divider {
  width: 1px;
  height: 24px;
  background: var(--trx-border-color);
  margin: 0 0.5rem;
}

.trx-layout__user {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 0.5rem;
}

.trx-layout__user-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--trx-text-primary);
}

/* Status Badge */
.trx-layout__status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
}

.trx-layout__status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.trx-layout__status--online {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}

.trx-layout__status--online .trx-layout__status-dot {
  background: #10b981;
}

.trx-layout__status--busy {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

.trx-layout__status--busy .trx-layout__status-dot {
  background: #ef4444;
}

.trx-layout__status--paused {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
}

.trx-layout__status--paused .trx-layout__status-dot {
  background: #f59e0b;
}

.trx-layout__status--offline {
  background: rgba(100, 116, 139, 0.15);
  color: #64748b;
}

.trx-layout__status--offline .trx-layout__status-dot {
  background: #64748b;
}

/* Content */
.trx-layout__content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .trx-layout__sidebar {
    transform: translateX(-100%);
  }

  .trx-layout__sidebar:not(.trx-layout__sidebar--collapsed) {
    transform: translateX(0);
  }

  .trx-layout__main {
    margin-left: 0 !important;
  }

  .trx-layout__mobile-menu {
    display: flex;
  }

  .trx-layout__user-name {
    display: none;
  }
}
</style>
