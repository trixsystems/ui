// @trx/ui-common - Theme Composable
import { ref, computed, onMounted } from 'vue'

export type TrxTheme = 'light' | 'dark'
export type TrxFontSize = 'font-small' | 'font-normal' | 'font-large' | 'font-xlarge'
export type TrxLocale = 'pt-BR' | 'en'

const theme = ref<TrxTheme>('light')
const fontSizeClass = ref<TrxFontSize>('font-normal')
const fontSizeValue = ref(14) // Numeric font size (12-20)
const locale = ref<TrxLocale>('pt-BR')

// Font size mapping
const fontSizeMap: Record<TrxFontSize, number> = {
  'font-small': 12,
  'font-normal': 14,
  'font-large': 16,
  'font-xlarge': 18
}

const fontSizeClassMap: Record<number, TrxFontSize> = {
  12: 'font-small',
  14: 'font-normal',
  16: 'font-large',
  18: 'font-xlarge',
  20: 'font-xlarge'
}

/**
 * Composable for managing theme, font size and locale
 */
export function useTheme() {
  const isDark = ref(false)

  // Computed for backwards compatibility
  const fontSize = computed({
    get: () => fontSizeValue.value,
    set: (val: number | TrxFontSize) => {
      if (typeof val === 'number') {
        fontSizeValue.value = val
        fontSizeClass.value = fontSizeClassMap[val] || 'font-normal'
      } else {
        fontSizeClass.value = val
        fontSizeValue.value = fontSizeMap[val]
      }
    }
  })

  // Initialize theme from localStorage
  const initTheme = () => {
    const savedTheme = localStorage.getItem('trx-theme') as TrxTheme | null
    const savedFontSize = localStorage.getItem('trx-font-size') as TrxFontSize | null
    const savedFontSizeNum = localStorage.getItem('trx-font-size-num')
    const savedLocale = localStorage.getItem('trx-locale') as TrxLocale | null

    if (savedTheme) {
      theme.value = savedTheme
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? 'dark' : 'light'
    }

    if (savedFontSizeNum) {
      fontSizeValue.value = parseInt(savedFontSizeNum) || 14
      fontSizeClass.value = fontSizeClassMap[fontSizeValue.value] || 'font-normal'
    } else if (savedFontSize) {
      fontSizeClass.value = savedFontSize
      fontSizeValue.value = fontSizeMap[savedFontSize]
    }

    if (savedLocale) {
      locale.value = savedLocale
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
    document.documentElement.classList.add(fontSizeClass.value)
    document.documentElement.style.fontSize = `${fontSizeValue.value}px`
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

  // Set font size (class-based)
  const setFontSize = (newSize: TrxFontSize) => {
    fontSizeClass.value = newSize
    fontSizeValue.value = fontSizeMap[newSize]
    localStorage.setItem('trx-font-size', fontSizeClass.value)
    localStorage.setItem('trx-font-size-num', String(fontSizeValue.value))
    applyFontSize()
  }

  // Increase font size (numeric)
  const increaseFontSize = () => {
    if (fontSizeValue.value < 20) {
      fontSizeValue.value += 2
      fontSizeClass.value = fontSizeClassMap[fontSizeValue.value] || fontSizeClass.value
      localStorage.setItem('trx-font-size-num', String(fontSizeValue.value))
      applyFontSize()
    }
  }

  // Decrease font size (numeric)
  const decreaseFontSize = () => {
    if (fontSizeValue.value > 12) {
      fontSizeValue.value -= 2
      fontSizeClass.value = fontSizeClassMap[fontSizeValue.value] || fontSizeClass.value
      localStorage.setItem('trx-font-size-num', String(fontSizeValue.value))
      applyFontSize()
    }
  }

  // Toggle locale
  const toggleLocale = () => {
    locale.value = locale.value === 'pt-BR' ? 'en' : 'pt-BR'
    localStorage.setItem('trx-locale', locale.value)
  }

  // Set locale
  const setLocale = (newLocale: TrxLocale) => {
    locale.value = newLocale
    localStorage.setItem('trx-locale', locale.value)
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
    fontSizeClass,
    isDark,
    locale,
    toggleTheme,
    setTheme,
    setFontSize,
    increaseFontSize,
    decreaseFontSize,
    toggleLocale,
    setLocale,
    initTheme
  }
}
