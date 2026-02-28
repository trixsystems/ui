import { describe, it, expect, beforeEach } from 'vitest'
import { useTheme } from '@/composables/useTheme'

// Reset module-level state before each test
beforeEach(() => {
  const th = useTheme()
  th.setTheme('light')
  th.setFontSize('font-normal')
  th.setLocale('pt-BR')
})

describe('useTheme', () => {
  describe('setTheme', () => {
    it('sets theme to dark', () => {
      const { setTheme, theme, isDark } = useTheme()
      setTheme('dark')
      expect(theme.value).toBe('dark')
      expect(isDark.value).toBe(true)
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('sets theme to light', () => {
      const { setTheme, theme, isDark } = useTheme()
      setTheme('dark')
      setTheme('light')
      expect(theme.value).toBe('light')
      expect(isDark.value).toBe(false)
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    it('persists to localStorage', () => {
      const { setTheme } = useTheme()
      setTheme('dark')
      expect(localStorage.getItem('trx-theme')).toBe('dark')
    })
  })

  describe('toggleTheme', () => {
    it('toggles from light to dark', () => {
      const { setTheme, toggleTheme, theme } = useTheme()
      setTheme('light')
      toggleTheme()
      expect(theme.value).toBe('dark')
    })

    it('toggles from dark to light', () => {
      const { setTheme, toggleTheme, theme } = useTheme()
      setTheme('dark')
      toggleTheme()
      expect(theme.value).toBe('light')
    })

    it('persists toggled theme to localStorage', () => {
      const { setTheme, toggleTheme } = useTheme()
      setTheme('light')
      toggleTheme()
      expect(localStorage.getItem('trx-theme')).toBe('dark')
    })
  })

  describe('setFontSize', () => {
    it('sets font-small (12px)', () => {
      const { setFontSize, fontSizeClass, fontSize } = useTheme()
      setFontSize('font-small')
      expect(fontSizeClass.value).toBe('font-small')
      expect(fontSize.value).toBe(12)
    })

    it('sets font-large (16px)', () => {
      const { setFontSize, fontSizeClass, fontSize } = useTheme()
      setFontSize('font-large')
      expect(fontSizeClass.value).toBe('font-large')
      expect(fontSize.value).toBe(16)
    })

    it('applies font size to document element', () => {
      const { setFontSize } = useTheme()
      setFontSize('font-large')
      expect(document.documentElement.style.fontSize).toBe('16px')
    })

    it('persists to localStorage', () => {
      const { setFontSize } = useTheme()
      setFontSize('font-small')
      expect(localStorage.getItem('trx-font-size')).toBe('font-small')
      expect(localStorage.getItem('trx-font-size-num')).toBe('12')
    })
  })

  describe('increaseFontSize', () => {
    it('increases by 2px', () => {
      const { setFontSize, increaseFontSize, fontSize } = useTheme()
      setFontSize('font-normal') // 14px
      increaseFontSize()
      expect(fontSize.value).toBe(16)
    })

    it('does not exceed 20px', () => {
      const { setFontSize, increaseFontSize, fontSize } = useTheme()
      setFontSize('font-xlarge') // 18px
      increaseFontSize() // 20px
      increaseFontSize() // should stay 20px
      expect(fontSize.value).toBe(20)
    })
  })

  describe('decreaseFontSize', () => {
    it('decreases by 2px', () => {
      const { setFontSize, decreaseFontSize, fontSize } = useTheme()
      setFontSize('font-large') // 16px
      decreaseFontSize()
      expect(fontSize.value).toBe(14)
    })

    it('does not go below 12px', () => {
      const { setFontSize, decreaseFontSize, fontSize } = useTheme()
      setFontSize('font-small') // 12px
      decreaseFontSize()
      expect(fontSize.value).toBe(12)
    })
  })

  describe('locale', () => {
    it('toggles from pt-BR to en', () => {
      const { setLocale, toggleLocale, locale } = useTheme()
      setLocale('pt-BR')
      toggleLocale()
      expect(locale.value).toBe('en')
      expect(localStorage.getItem('trx-locale')).toBe('en')
    })

    it('toggles from en to pt-BR', () => {
      const { setLocale, toggleLocale, locale } = useTheme()
      setLocale('en')
      toggleLocale()
      expect(locale.value).toBe('pt-BR')
    })

    it('setLocale persists to localStorage', () => {
      const { setLocale } = useTheme()
      setLocale('en')
      expect(localStorage.getItem('trx-locale')).toBe('en')
    })
  })

  describe('initTheme', () => {
    it('loads theme from localStorage', () => {
      localStorage.setItem('trx-theme', 'dark')
      const { initTheme, theme } = useTheme()
      initTheme()
      expect(theme.value).toBe('dark')
    })

    it('loads font size number from localStorage', () => {
      localStorage.setItem('trx-font-size-num', '16')
      const { initTheme, fontSize } = useTheme()
      initTheme()
      expect(fontSize.value).toBe(16)
    })

    it('loads locale from localStorage', () => {
      localStorage.setItem('trx-locale', 'en')
      const { initTheme, locale } = useTheme()
      initTheme()
      expect(locale.value).toBe('en')
    })

    it('falls back to system preference when no localStorage', () => {
      // matchMedia is mocked to return false (light preference)
      const { initTheme, theme } = useTheme()
      initTheme()
      expect(theme.value).toBe('light')
    })
  })
})
