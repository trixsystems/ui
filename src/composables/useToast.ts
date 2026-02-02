// @trx/ui-common - Toast Composable
// IMPORTANT: Named useTrxToast to avoid conflicts with PrimeVue's useToast
import { useToast as usePrimeToast } from 'primevue/usetoast'

export interface ToastOptions {
  life?: number
  closable?: boolean
  group?: string
}

/**
 * Composable for showing toast notifications with convenience methods
 * MUST be called inside a component setup that has <Toast /> mounted
 */
export function useTrxToast() {
  const toast = usePrimeToast()

  const success = (message: string, title = 'Sucesso', options: ToastOptions = {}) => {
    toast.add({
      severity: 'success',
      summary: title,
      detail: message,
      life: options.life ?? 3000,
      closable: options.closable ?? true,
      group: options.group
    })
  }

  const error = (message: string, title = 'Erro', options: ToastOptions = {}) => {
    toast.add({
      severity: 'error',
      summary: title,
      detail: message,
      life: options.life ?? 5000,
      closable: options.closable ?? true,
      group: options.group
    })
  }

  const warn = (message: string, title = 'Atenção', options: ToastOptions = {}) => {
    toast.add({
      severity: 'warn',
      summary: title,
      detail: message,
      life: options.life ?? 4000,
      closable: options.closable ?? true,
      group: options.group
    })
  }

  const info = (message: string, title = 'Informação', options: ToastOptions = {}) => {
    toast.add({
      severity: 'info',
      summary: title,
      detail: message,
      life: options.life ?? 3000,
      closable: options.closable ?? true,
      group: options.group
    })
  }

  const clear = (group?: string) => {
    toast.removeGroup(group ?? 'default')
  }

  const clearAll = () => {
    toast.removeAllGroups()
  }

  return {
    success,
    error,
    warn,
    info,
    clear,
    clearAll,
    toast
  }
}

/**
 * Alias for backwards compatibility
 * @deprecated Use useTrxToast instead
 */
export const useToastNotify = useTrxToast

/**
 * Re-export PrimeVue's useToast for direct access via @trx/ui-common
 */
export { useToast } from 'primevue/usetoast'
