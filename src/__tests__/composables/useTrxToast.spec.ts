import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useTrxToast } from '@/composables/useToast'

const mockAdd = vi.fn()
const mockRemoveGroup = vi.fn()
const mockRemoveAllGroups = vi.fn()

vi.mock('primevue/usetoast', () => ({
  useToast: () => ({
    add: mockAdd,
    remove: vi.fn(),
    removeGroup: mockRemoveGroup,
    removeAllGroups: mockRemoveAllGroups,
  }),
}))

beforeEach(() => {
  vi.clearAllMocks()
})

describe('useTrxToast', () => {
  describe('success()', () => {
    it('calls toast.add with severity success and default title', () => {
      const { success } = useTrxToast()
      success('Salvo com sucesso')
      expect(mockAdd).toHaveBeenCalledWith({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Salvo com sucesso',
        life: 3000,
        closable: true,
        group: undefined,
      })
    })

    it('accepts custom title', () => {
      const { success } = useTrxToast()
      success('Operacao realizada', 'Ok!')
      expect(mockAdd).toHaveBeenCalledWith(expect.objectContaining({ summary: 'Ok!' }))
    })

    it('accepts custom life option', () => {
      const { success } = useTrxToast()
      success('msg', 'Titulo', { life: 1000 })
      expect(mockAdd).toHaveBeenCalledWith(expect.objectContaining({ life: 1000 }))
    })
  })

  describe('error()', () => {
    it('calls toast.add with severity error and life 5000', () => {
      const { error } = useTrxToast()
      error('Falha na requisicao')
      expect(mockAdd).toHaveBeenCalledWith({
        severity: 'error',
        summary: 'Erro',
        detail: 'Falha na requisicao',
        life: 5000,
        closable: true,
        group: undefined,
      })
    })

    it('accepts custom title', () => {
      const { error } = useTrxToast()
      error('msg', 'Titulo Customizado')
      expect(mockAdd).toHaveBeenCalledWith(expect.objectContaining({ summary: 'Titulo Customizado' }))
    })
  })

  describe('warn()', () => {
    it('calls toast.add with severity warn and life 4000', () => {
      const { warn } = useTrxToast()
      warn('Sessao expirando')
      expect(mockAdd).toHaveBeenCalledWith({
        severity: 'warn',
        summary: 'Atenção',
        detail: 'Sessao expirando',
        life: 4000,
        closable: true,
        group: undefined,
      })
    })
  })

  describe('info()', () => {
    it('calls toast.add with severity info and life 3000', () => {
      const { info } = useTrxToast()
      info('Nova versao disponivel')
      expect(mockAdd).toHaveBeenCalledWith({
        severity: 'info',
        summary: 'Informação',
        detail: 'Nova versao disponivel',
        life: 3000,
        closable: true,
        group: undefined,
      })
    })
  })

  describe('clear()', () => {
    it('calls removeGroup with provided group', () => {
      const { clear } = useTrxToast()
      clear('my-group')
      expect(mockRemoveGroup).toHaveBeenCalledWith('my-group')
    })

    it('uses default group when none provided', () => {
      const { clear } = useTrxToast()
      clear()
      expect(mockRemoveGroup).toHaveBeenCalledWith('default')
    })
  })

  describe('clearAll()', () => {
    it('calls removeAllGroups', () => {
      const { clearAll } = useTrxToast()
      clearAll()
      expect(mockRemoveAllGroups).toHaveBeenCalled()
    })
  })
})
