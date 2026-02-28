import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useApi, createApiClient } from '@/composables/useApi'
import type { AxiosInstance } from 'axios'

function makeMockClient(requestFn: ReturnType<typeof vi.fn>): AxiosInstance {
  return { request: requestFn } as unknown as AxiosInstance
}

describe('useApi', () => {
  let mockRequest: ReturnType<typeof vi.fn>

  beforeEach(() => {
    mockRequest = vi.fn()
  })

  describe('loading state', () => {
    it('starts as false', () => {
      const { loading } = useApi(makeMockClient(mockRequest))
      expect(loading.value).toBe(false)
    })

    it('is true during request and false after', async () => {
      let resolve!: (v: any) => void
      mockRequest.mockReturnValueOnce(new Promise(r => { resolve = r }))

      const { get, loading } = useApi(makeMockClient(mockRequest))
      const pending = get('/test')
      expect(loading.value).toBe(true)

      resolve({ data: {}, status: 200 })
      await pending
      expect(loading.value).toBe(false)
    })

    it('is false after a failed request', async () => {
      mockRequest.mockRejectedValueOnce({ message: 'Error' })
      const { get, loading } = useApi(makeMockClient(mockRequest))
      await get('/test')
      expect(loading.value).toBe(false)
    })
  })

  describe('get()', () => {
    it('calls request with GET method and url', async () => {
      mockRequest.mockResolvedValueOnce({ data: [], status: 200 })
      const { get } = useApi(makeMockClient(mockRequest))
      await get('/users')
      expect(mockRequest).toHaveBeenCalledWith(expect.objectContaining({ method: 'GET', url: '/users' }))
    })

    it('returns data and status on success', async () => {
      mockRequest.mockResolvedValueOnce({ data: { id: 1 }, status: 200 })
      const { get } = useApi(makeMockClient(mockRequest))
      const result = await get('/users/1')
      expect(result.data).toEqual({ id: 1 })
      expect(result.status).toBe(200)
    })

    it('sets data ref on success', async () => {
      mockRequest.mockResolvedValueOnce({ data: { id: 1 }, status: 200 })
      const { get, data } = useApi(makeMockClient(mockRequest))
      await get('/users/1')
      expect(data.value).toEqual({ id: 1 })
    })
  })

  describe('post()', () => {
    it('calls request with POST method and body', async () => {
      mockRequest.mockResolvedValueOnce({ data: { id: 2 }, status: 201 })
      const { post } = useApi(makeMockClient(mockRequest))
      await post('/users', { name: 'Joao' })
      expect(mockRequest).toHaveBeenCalledWith(expect.objectContaining({
        method: 'POST',
        url: '/users',
        data: { name: 'Joao' },
      }))
    })
  })

  describe('put()', () => {
    it('calls request with PUT method', async () => {
      mockRequest.mockResolvedValueOnce({ data: {}, status: 200 })
      const { put } = useApi(makeMockClient(mockRequest))
      await put('/users/1', { name: 'Updated' })
      expect(mockRequest).toHaveBeenCalledWith(expect.objectContaining({ method: 'PUT', url: '/users/1' }))
    })
  })

  describe('del()', () => {
    it('calls request with DELETE method', async () => {
      mockRequest.mockResolvedValueOnce({ data: {}, status: 204 })
      const { del } = useApi(makeMockClient(mockRequest))
      await del('/users/1')
      expect(mockRequest).toHaveBeenCalledWith(expect.objectContaining({ method: 'DELETE', url: '/users/1' }))
    })
  })

  describe('error handling', () => {
    it('returns error from response body', async () => {
      mockRequest.mockRejectedValueOnce({ response: { data: { error: 'Not found' }, status: 404 } })
      const { get, error } = useApi(makeMockClient(mockRequest))
      const result = await get('/missing')
      expect(error.value).toBe('Not found')
      expect(result.error).toBe('Not found')
      expect(result.status).toBe(404)
    })

    it('falls back to error.message', async () => {
      mockRequest.mockRejectedValueOnce({ message: 'Network Error' })
      const { get, error } = useApi(makeMockClient(mockRequest))
      await get('/test')
      expect(error.value).toBe('Network Error')
    })

    it('uses default message when no details', async () => {
      mockRequest.mockRejectedValueOnce({})
      const { get, error } = useApi(makeMockClient(mockRequest))
      await get('/test')
      expect(error.value).toBe('Erro na requisição')
    })

    it('clears previous error before new request', async () => {
      mockRequest.mockRejectedValueOnce({ message: 'First error' })
      const { get, error } = useApi(makeMockClient(mockRequest))
      await get('/test')
      expect(error.value).toBe('First error')

      mockRequest.mockResolvedValueOnce({ data: {}, status: 200 })
      await get('/test')
      expect(error.value).toBeNull()
    })
  })
})

describe('createApiClient', () => {
  it('creates an axios instance', () => {
    const client = createApiClient({ baseURL: '/api/test' })
    expect(client).toBeDefined()
    expect(typeof client.request).toBe('function')
  })
})
