import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TrxEmptyState from '@/components/TrxEmptyState.vue'

describe('TrxEmptyState', () => {
  it('renders without errors', () => {
    const wrapper = mount(TrxEmptyState, { props: { title: 'Sem dados' } })
    expect(wrapper.find('.trx-empty-state').exists()).toBe(true)
  })

  it('renders title', () => {
    const wrapper = mount(TrxEmptyState, { props: { title: 'Nenhum resultado encontrado' } })
    expect(wrapper.find('.trx-empty-state__title').text()).toBe('Nenhum resultado encontrado')
  })

  it('renders description when provided', () => {
    const wrapper = mount(TrxEmptyState, {
      props: { title: 'Vazio', description: 'Nenhum item foi encontrado.' },
    })
    expect(wrapper.find('.trx-empty-state__description').text()).toBe('Nenhum item foi encontrado.')
  })

  it('does not render description when not provided', () => {
    const wrapper = mount(TrxEmptyState, { props: { title: 'Vazio' } })
    expect(wrapper.find('.trx-empty-state__description').exists()).toBe(false)
  })

  it('uses default pi-inbox icon when not provided', () => {
    const wrapper = mount(TrxEmptyState, { props: { title: 'Vazio' } })
    const icon = wrapper.find('.trx-empty-state__icon')
    expect(icon.classes()).toContain('pi-inbox')
  })

  it('uses custom icon when provided', () => {
    const wrapper = mount(TrxEmptyState, { props: { title: 'Vazio', icon: 'pi pi-search' } })
    const icon = wrapper.find('.trx-empty-state__icon')
    expect(icon.classes()).toContain('pi-search')
  })

  it('renders actions slot', () => {
    const wrapper = mount(TrxEmptyState, {
      props: { title: 'Vazio' },
      slots: { actions: '<button class="add-btn">Adicionar</button>' },
    })
    expect(wrapper.find('.add-btn').text()).toBe('Adicionar')
  })
})
