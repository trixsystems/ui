import { useConfirm as usePvConfirm } from 'primevue/useconfirm'
import type { ConfirmationOptions } from 'primevue/confirmationoptions'

export function useConfirm() {
  const confirm = usePvConfirm()

  function require(options: ConfirmationOptions) {
    confirm.require({
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      ...options,
    })
  }

  function close() {
    confirm.close()
  }

  return { require, close }
}
