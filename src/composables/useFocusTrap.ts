/**
 * @trx/ui-common — useFocusTrap
 *
 * Prende o foco dentro de um elemento (modal, drawer, dialog).
 * Libera automaticamente quando o componente é desmontado.
 *
 * @example
 * const dialogRef = ref<HTMLElement | null>(null)
 * const { activate, deactivate } = useFocusTrap(dialogRef)
 *
 * // Ou usar o modo automático (ativa/desativa com uma ref booleana)
 * const { isActive } = useFocusTrap(dialogRef, { immediate: true })
 */

import { ref, watch, onUnmounted, type Ref } from 'vue'

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  'details > summary',
].join(', ')

export interface UseFocusTrapOptions {
  /** Ativa imediatamente ao montar */
  immediate?: boolean
  /** Elemento para retornar o foco ao desativar */
  returnFocusTo?: Ref<HTMLElement | null> | HTMLElement | null
}

export function useFocusTrap(
  target: Ref<HTMLElement | null>,
  options: UseFocusTrapOptions = {},
) {
  const { immediate = false, returnFocusTo } = options
  const isActive = ref(false)
  let previouslyFocused: HTMLElement | null = null

  const getFocusableElements = (): HTMLElement[] => {
    if (!target.value) return []
    return Array.from(
      target.value.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS),
    ).filter((el) => !el.closest('[hidden]'))
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (!isActive.value || e.key !== 'Tab') return

    const focusable = getFocusableElements()
    if (focusable.length === 0) {
      e.preventDefault()
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const active = document.activeElement as HTMLElement

    if (e.shiftKey) {
      // Shift+Tab: se no primeiro, vai para o último
      if (active === first || !target.value?.contains(active)) {
        e.preventDefault()
        last.focus()
      }
    } else {
      // Tab: se no último, volta para o primeiro
      if (active === last || !target.value?.contains(active)) {
        e.preventDefault()
        first.focus()
      }
    }
  }

  const activate = () => {
    if (isActive.value || !target.value) return
    previouslyFocused = document.activeElement as HTMLElement
    isActive.value = true
    document.addEventListener('keydown', handleKeydown)

    // Foca no primeiro elemento focável
    const focusable = getFocusableElements()
    if (focusable.length > 0) {
      focusable[0].focus()
    } else {
      target.value?.focus()
    }
  }

  const deactivate = () => {
    if (!isActive.value) return
    isActive.value = false
    document.removeEventListener('keydown', handleKeydown)

    // Retorna foco
    const returnEl =
      returnFocusTo
        ? (returnFocusTo instanceof Element
            ? returnFocusTo
            : (returnFocusTo as Ref<HTMLElement | null>).value)
        : previouslyFocused

    returnEl?.focus()
    previouslyFocused = null
  }

  if (immediate) {
    watch(
      target,
      (el) => {
        if (el) activate()
        else deactivate()
      },
      { immediate: true },
    )
  }

  onUnmounted(deactivate)

  return { isActive, activate, deactivate }
}
