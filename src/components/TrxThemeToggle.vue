<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import Button from 'primevue/button'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <Button
    :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
    severity="secondary"
    text
    rounded
    @click="toggleTheme"
    v-tooltip.bottom="isDark ? 'Tema Claro' : 'Tema Escuro'"
    class="trx-theme-toggle"
  />
</template>

<style scoped>
.trx-theme-toggle {
  transition: transform 0.2s ease;
}

.trx-theme-toggle:hover {
  transform: rotate(15deg);
}
</style>
