// @trx/ui-common - Theme Composable
import { ref, onMounted } from 'vue'

export type TrxTheme = 'light' | 'dark'
export type TrxFontSize = 'font-small' | 'font-normal' | 'font-large' | 'font-xlarge'

const theme = ref<TrxTheme>('light')
const fontSize = ref<TrxFontSize>('font-normal')

/**
 * Composable for managing theme and font size
 */
export function useTheme() {
  const isDark = ref(false)

  // Initialize theme from localStorage
  const initTheme = () => {
    const savedTheme = localStorage.getItem('trx-theme') as TrxTheme | null
    const savedFontSize = localStorage.getItem('trx-font-size') as TrxFontSize | null

    if (savedTheme) {
      theme.value = savedTheme
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? 'dark' : 'light'
    }

    if (savedFontSize) {
      fontSize.value = savedFontSize
    }

    applyTheme()
    applyFontSize()
  }

  // Apply theme to document
  const applyTheme = () => {
    isDark.value = theme.value === 'dark'
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Apply font size to document
  const applyFontSize = () => {
    document.documentElement.classList.remove('font-small', 'font-normal', 'font-large', 'font-xlarge')
    document.documentElement.classList.add(fontSize.value)
  }

  // Toggle theme
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('trx-theme', theme.value)
    applyTheme()
  }

  // Set theme
  const setTheme = (newTheme: TrxTheme) => {
    theme.value = newTheme
    localStorage.setItem('trx-theme', theme.value)
    applyTheme()
  }

  // Set font size
  const setFontSize = (newSize: TrxFontSize) => {
    fontSize.value = newSize
    localStorage.setItem('trx-font-size', fontSize.value)
    applyFontSize()
  }

  // Watch for system theme changes
  onMounted(() => {
    initTheme()

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('trx-theme')) {
        theme.value = e.matches ? 'dark' : 'light'
        applyTheme()
      }
    })
  })

  return {
    theme,
    fontSize,
    isDark,
    toggleTheme,
    setTheme,
    setFontSize,
    initTheme
  }
}
