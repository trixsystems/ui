import { describe, it, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import axe from 'axe-core'
import TrxCard from '@/components/TrxCard.vue'
import TrxPageHeader from '@/components/TrxPageHeader.vue'
import TrxEmptyState from '@/components/TrxEmptyState.vue'

// Append element to body for axe (needs document context), clean up after each test
let container: HTMLElement

afterEach(() => {
  if (container && document.body.contains(container)) {
    document.body.removeChild(container)
  }
})

async function checkA11y(element: Element) {
  container = document.createElement('div')
  container.appendChild(element)
  document.body.appendChild(container)
  const results = await axe.run(container)
  return results.violations.filter(v => v.impact === 'critical' || v.impact === 'serious')
}

describe('Accessibility (a11y)', () => {
  describe('TrxCard', () => {
    it('has no critical a11y violations', async () => {
      const wrapper = mount(TrxCard, { props: { title: 'Card de Teste' } })
      const violations = await checkA11y(wrapper.element)
      expect(violations).toHaveLength(0)
    })

    it('has no violations with loading state', async () => {
      const wrapper = mount(TrxCard, { props: { title: 'Card', loading: true } })
      const violations = await checkA11y(wrapper.element)
      expect(violations).toHaveLength(0)
    })
  })

  describe('TrxPageHeader', () => {
    it('has no critical a11y violations', async () => {
      const wrapper = mount(TrxPageHeader, {
        props: { title: 'Titulo da Pagina', subtitle: 'Descricao' },
      })
      const violations = await checkA11y(wrapper.element)
      expect(violations).toHaveLength(0)
    })

    it('has no violations when rendering with actions slot', async () => {
      const wrapper = mount(TrxPageHeader, {
        props: { title: 'Pagina' },
        slots: { actions: '<button type="button">Acao</button>' },
      })
      const violations = await checkA11y(wrapper.element)
      expect(violations).toHaveLength(0)
    })
  })

  describe('TrxEmptyState', () => {
    it('has no critical a11y violations', async () => {
      const wrapper = mount(TrxEmptyState, {
        props: { title: 'Nenhum resultado', description: 'Tente outra busca.' },
      })
      const violations = await checkA11y(wrapper.element)
      expect(violations).toHaveLength(0)
    })
  })
})
