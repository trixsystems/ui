// @trx/ui-common - PrimeVue Configuration
import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import Tooltip from 'primevue/tooltip'

// Custom TRX preset based on Aura
const TrxPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{emerald.50}',
      100: '{emerald.100}',
      200: '{emerald.200}',
      300: '{emerald.300}',
      400: '{emerald.400}',
      500: '{emerald.500}',
      600: '{emerald.600}',
      700: '{emerald.700}',
      800: '{emerald.800}',
      900: '{emerald.900}',
      950: '{emerald.950}'
    }
  },
  components: {
    button: {
      colorScheme: {
        light: {
          secondary: {
            background: '#f1f5f9',
            hoverBackground: '#e2e8f0',
            activeBackground: '#cbd5e1',
            borderColor: '#cbd5e1',
            hoverBorderColor: '#6ee7b7',
            activeBorderColor: '#6ee7b7',
            color: '#334155',
            hoverColor: '#1e293b',
            activeColor: '#1e293b'
          },
          text: {
            primary: {
              hoverBackground: '#f1f5f9',
              activeBackground: '#e2e8f0',
              color: '#64748b',
              hoverColor: '#6ee7b7',
              activeColor: '#5ddba8'
            }
          }
        },
        dark: {
          secondary: {
            background: '#44475a',
            hoverBackground: '#44475a',
            activeBackground: '#6272a4',
            borderColor: '#6272a4',
            hoverBorderColor: '#bd93f9',
            activeBorderColor: '#bd93f9',
            color: '#f8f8f2',
            hoverColor: '#f8f8f2',
            activeColor: '#f8f8f2'
          },
          text: {
            primary: {
              hoverBackground: '#44475a',
              activeBackground: '#6272a4',
              color: '#f8f8f2',
              hoverColor: '#bd93f9',
              activeColor: '#caa9fc'
            }
          }
        }
      }
    }
  }
})

export interface TrxPrimeVueOptions {
  ripple?: boolean
  prefix?: string
}

/**
 * Apply saved theme and font size from localStorage to <html>.
 * Called automatically by configurePrimeVue — no need to call manually.
 */
export function initTheme(): void {
  if (typeof window === 'undefined') return

  const saved = localStorage.getItem('trx-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = saved ?? (prefersDark ? 'dark' : 'light')

  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const fontSizeClass = localStorage.getItem('trx-font-size') ?? 'font-normal'
  const fontSizeNum = localStorage.getItem('trx-font-size-num')
  document.documentElement.classList.remove('font-small', 'font-normal', 'font-large', 'font-xlarge')
  document.documentElement.classList.add(fontSizeClass)
  if (fontSizeNum) document.documentElement.style.fontSize = `${fontSizeNum}px`
}

/**
 * Configure PrimeVue with TRX defaults
 */
export function configurePrimeVue(app: App, options: TrxPrimeVueOptions = {}) {
  const { ripple = true, prefix = 'p' } = options

  // Apply saved theme immediately — consumers don't need to call useTheme() manually
  initTheme()

  // PrimeVue with TRX custom preset
  app.use(PrimeVue, {
    theme: {
      preset: TrxPreset,
      options: {
        prefix,
        darkModeSelector: '.dark',
        cssLayer: false
      }
    },
    ripple
  })

  // Services
  app.use(ToastService)
  app.use(ConfirmationService)
  app.use(DialogService)

  // Directives
  app.directive('tooltip', Tooltip)
}

/**
 * PrimeVue theme configuration object
 */
export const primeVueConfig = {
  theme: {
    preset: TrxPreset,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark',
      cssLayer: false
    }
  },
  ripple: true
}

export { Aura, TrxPreset }
