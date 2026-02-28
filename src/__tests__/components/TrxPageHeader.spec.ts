import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TrxPageHeader from '@/components/TrxPageHeader.vue'

describe('TrxPageHeader', () => {
  it('renders without errors', () => {
    const wrapper = mount(TrxPageHeader, { props: { title: 'Test' } })
    expect(wrapper.find('.trx-page-header').exists()).toBe(true)
  })

  it('renders title', () => {
    const wrapper = mount(TrxPageHeader, { props: { title: 'Dashboard' } })
    expect(wrapper.find('.trx-page-header__title').text()).toBe('Dashboard')
  })

  it('renders subtitle when provided', () => {
    const wrapper = mount(TrxPageHeader, { props: { title: 'T', subtitle: 'Visao geral' } })
    expect(wrapper.find('.trx-page-header__subtitle').text()).toBe('Visao geral')
  })

  it('does not render subtitle when not provided', () => {
    const wrapper = mount(TrxPageHeader, { props: { title: 'T' } })
    expect(wrapper.find('.trx-page-header__subtitle').exists()).toBe(false)
  })

  it('renders icon when provided', () => {
    const wrapper = mount(TrxPageHeader, { props: { title: 'T', icon: 'pi pi-home' } })
    const icon = wrapper.find('.trx-page-header__icon')
    expect(icon.exists()).toBe(true)
    expect(icon.classes()).toContain('pi-home')
  })

  it('does not render icon when not provided', () => {
    const wrapper = mount(TrxPageHeader, { props: { title: 'T' } })
    expect(wrapper.find('.trx-page-header__icon').exists()).toBe(false)
  })

  it('renders actions slot', () => {
    const wrapper = mount(TrxPageHeader, {
      props: { title: 'T' },
      slots: { actions: '<button class="add-btn">Adicionar</button>' },
    })
    expect(wrapper.find('.add-btn').text()).toBe('Adicionar')
  })

  it('renders actions container even without slot content', () => {
    const wrapper = mount(TrxPageHeader, { props: { title: 'T' } })
    expect(wrapper.find('.trx-page-header__actions').exists()).toBe(true)
  })
})
