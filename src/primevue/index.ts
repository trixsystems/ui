// @trx/ui-common - PrimeVue Configuration
import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import Tooltip from 'primevue/tooltip'

export interface TrxPrimeVueOptions {
  ripple?: boolean
  prefix?: string
}

/**
 * Configure PrimeVue with TRX defaults
 */
export function configurePrimeVue(app: App, options: TrxPrimeVueOptions = {}) {
  const { ripple = true, prefix = 'p' } = options

  // PrimeVue with Aura theme
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
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
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark',
      cssLayer: false
    }
  },
  ripple: true
}

export { Aura }
