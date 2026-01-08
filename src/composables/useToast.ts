// @trx/ui-common - Toast Composable
import { useToast as usePrimeToast } from 'primevue/usetoast'

export interface ToastOptions {
  life?: number
  closable?: boolean
  group?: string
}

/**
 * Composable for showing toast notifications
 */
export function useToast() {
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
