import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TrxCard from '@/components/TrxCard.vue'

describe('TrxCard', () => {
  it('renders without errors', () => {
    const wrapper = mount(TrxCard)
    expect(wrapper.find('.trx-card').exists()).toBe(true)
  })

  it('renders title', () => {
    const wrapper = mount(TrxCard, { props: { title: 'My Card' } })
    expect(wrapper.find('.card-title').text()).toBe('My Card')
  })

  it('renders subtitle when provided', () => {
    const wrapper = mount(TrxCard, { props: { title: 'Card', subtitle: 'Subtitulo' } })
    expect(wrapper.find('.card-subtitle').text()).toBe('Subtitulo')
  })

  it('does not render header section when no title, subtitle or icon', () => {
    const wrapper = mount(TrxCard)
    expect(wrapper.find('.trx-card-header').exists()).toBe(false)
  })

  it('renders header when title is provided', () => {
    const wrapper = mount(TrxCard, { props: { title: 'Title' } })
    expect(wrapper.find('.trx-card-header').exists()).toBe(true)
  })

  it('renders icon when provided', () => {
    const wrapper = mount(TrxCard, { props: { title: 'Card', icon: 'pi pi-phone' } })
    const icon = wrapper.find('.card-icon i')
    expect(icon.exists()).toBe(true)
    expect(icon.classes()).toContain('pi-phone')
  })

  it('applies hoverable class', () => {
    const wrapper = mount(TrxCard, { props: { hoverable: true } })
    expect(wrapper.find('.trx-card').classes()).toContain('hoverable')
  })

  it('applies loading class and shows overlay', () => {
    const wrapper = mount(TrxCard, { props: { loading: true } })
    expect(wrapper.find('.trx-card').classes()).toContain('loading')
    expect(wrapper.find('.loading-overlay').exists()).toBe(true)
  })

  it('does not show loading overlay when loading is false', () => {
    const wrapper = mount(TrxCard, { props: { loading: false } })
    expect(wrapper.find('.loading-overlay').exists()).toBe(false)
  })

  it('renders default slot content', () => {
    const wrapper = mount(TrxCard, { slots: { default: '<p class="content">Conteudo</p>' } })
    expect(wrapper.find('.content').text()).toBe('Conteudo')
  })

  it('renders footer slot when provided', () => {
    const wrapper = mount(TrxCard, { slots: { footer: '<span>Footer</span>' } })
    expect(wrapper.find('.trx-card-footer').exists()).toBe(true)
    expect(wrapper.find('.trx-card-footer span').text()).toBe('Footer')
  })

  it('does not render footer section when footer slot is empty', () => {
    const wrapper = mount(TrxCard)
    expect(wrapper.find('.trx-card-footer').exists()).toBe(false)
  })

  it('renders header-actions slot', () => {
    const wrapper = mount(TrxCard, {
      props: { title: 'Card' },
      slots: { 'header-actions': '<button>Acao</button>' },
    })
    expect(wrapper.find('.trx-card-header button').text()).toBe('Acao')
  })
})
