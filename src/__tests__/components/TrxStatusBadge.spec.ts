import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TrxStatusBadge from '@/components/TrxStatusBadge.vue'

// Stub PrimeVue Tag so tests don't need the full PrimeVue install
const TagStub = {
  template: '<span :data-severity="severity" :data-value="value">{{ value }}</span>',
  props: ['value', 'severity'],
}

function mountBadge(props: { status: string; type?: string }) {
  return mount(TrxStatusBadge, {
    props,
    global: { stubs: { Tag: TagStub } },
  })
}

describe('TrxStatusBadge', () => {
  it('renders the status text', () => {
    const wrapper = mountBadge({ status: 'Ativo' })
    expect(wrapper.text()).toBe('Ativo')
  })

  describe('severity mapping from status', () => {
    const cases: Array<[string, string]> = [
      ['ativo', 'success'],
      ['active', 'success'],
      ['online', 'success'],
      ['completed', 'success'],
      ['inactive', 'secondary'],
      ['inativo', 'secondary'],
      ['offline', 'secondary'],
      ['pending', 'warning'],
      ['pendente', 'warning'],
      ['busy', 'warning'],
      ['error', 'danger'],
      ['erro', 'danger'],
      ['failed', 'danger'],
      ['cancelado', 'danger'],
      ['processing', 'info'],
    ]

    cases.forEach(([status, expected]) => {
      it(`maps "${status}" to severity "${expected}"`, () => {
        const wrapper = mountBadge({ status })
        expect(wrapper.find('[data-severity]').attributes('data-severity')).toBe(expected)
      })
    })

    it('uses "secondary" for unknown status', () => {
      const wrapper = mountBadge({ status: 'unknown-status-xyz' })
      expect(wrapper.find('[data-severity]').attributes('data-severity')).toBe('secondary')
    })
  })

  describe('explicit type prop', () => {
    it('uses type prop over status mapping', () => {
      // "ativo" would normally map to "success", but we override with "danger"
      const wrapper = mountBadge({ status: 'ativo', type: 'danger' })
      expect(wrapper.find('[data-severity]').attributes('data-severity')).toBe('danger')
    })

    it('applies info type', () => {
      const wrapper = mountBadge({ status: 'qualquer', type: 'info' })
      expect(wrapper.find('[data-severity]').attributes('data-severity')).toBe('info')
    })
  })
})
