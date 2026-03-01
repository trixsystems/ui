/**
 * @trx/ui-common — useAriaLive
 *
 * Cria uma região aria-live para anúncios dinâmicos acessíveis.
 * Screen readers leem os anúncios para o usuário sem mover o foco.
 *
 * @example
 * const { announce } = useAriaLive()
 * announce('3 resultados encontrados')
 *
 * // Anúncio urgente (interrompe o que o SR está lendo)
 * const { announce } = useAriaLive('assertive')
 * announce('Erro ao salvar o formulário')
 */

import { onMounted, onUnmounted } from 'vue'

export type AriaLivePoliteness = 'polite' | 'assertive'

let politeEl: HTMLElement | null = null
let assertiveEl: HTMLElement | null = null
let instanceCount = 0

function getOrCreateLiveRegion(politeness: AriaLivePoliteness): HTMLElement {
  const existing = politeness === 'polite' ? politeEl : assertiveEl
  if (existing && document.body.contains(existing)) return existing

  const el = document.createElement('div')
  el.setAttribute('aria-live', politeness)
  el.setAttribute('aria-atomic', 'true')
  el.setAttribute('aria-relevant', 'additions text')

  // Visualmente oculto mas acessível a screen readers
  Object.assign(el.style, {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  })

  document.body.appendChild(el)

  if (politeness === 'polite') politeEl = el
  else assertiveEl = el

  return el
}

function removeIfUnused(el: HTMLElement | null) {
  if (el && instanceCount === 0 && document.body.contains(el)) {
    document.body.removeChild(el)
    if (el === politeEl) politeEl = null
    if (el === assertiveEl) assertiveEl = null
  }
}

export function useAriaLive(politeness: AriaLivePoliteness = 'polite') {
  let liveEl: HTMLElement | null = null

  onMounted(() => {
    instanceCount++
    liveEl = getOrCreateLiveRegion(politeness)
  })

  onUnmounted(() => {
    instanceCount--
    removeIfUnused(liveEl)
    liveEl = null
  })

  /**
   * Anuncia uma mensagem para screen readers.
   * @param message Texto a ser anunciado
   * @param clearAfter Limpar a mensagem após N ms (padrão: 3000ms, 0 = não limpar)
   */
  const announce = (message: string, clearAfter = 3000) => {
    if (!liveEl) liveEl = getOrCreateLiveRegion(politeness)

    // Limpa primeiro para garantir que o SR anuncie mesmo mensagens repetidas
    liveEl.textContent = ''
    requestAnimationFrame(() => {
      if (liveEl) liveEl.textContent = message
    })

    if (clearAfter > 0) {
      setTimeout(() => {
        if (liveEl) liveEl.textContent = ''
      }, clearAfter)
    }
  }

  return { announce }
}
