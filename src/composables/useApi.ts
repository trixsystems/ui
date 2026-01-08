// @trx/ui-common - API Composable
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosError } from 'axios'
import { ref } from 'vue'

export interface ApiResponse<T = any> {
  data?: T
  error?: string
  status?: number
}

export interface UseApiOptions {
  baseURL?: string
  tokenKey?: string
  onUnauthorized?: () => void
}

/**
 * Create an API client instance
 */
export function createApiClient(options: UseApiOptions = {}): AxiosInstance {
  const {
    baseURL = '/api/v1',
    tokenKey = 'access_token',
    onUnauthorized
  } = options

  const client = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // Request interceptor - add auth token
  client.interceptors.request.use((config) => {
    const token = localStorage.getItem(tokenKey)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  // Response interceptor - handle errors
  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        localStorage.removeItem(tokenKey)
        if (onUnauthorized) {
          onUnauthorized()
        }
      }
      return Promise.reject(error)
    }
  )

  return client
}

/**
 * Composable for API requests with loading state
 */
export function useApi<T = any>(client?: AxiosInstance) {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const data = ref<T | null>(null)

  const api = client || createApiClient()

  const request = async <R = T>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<R>> => {
    loading.value = true
    error.value = null

    try {
      const response = await api.request<R>(config)
      data.value = response.data as any
      return { data: response.data, status: response.status }
    } catch (err: any) {
      const message = err.response?.data?.error || err.message || 'Erro na requisição'
      error.value = message
      return { error: message, status: err.response?.status }
    } finally {
      loading.value = false
    }
  }

  const get = <R = T>(url: string, config?: AxiosRequestConfig) =>
    request<R>({ ...config, method: 'GET', url })

  const post = <R = T>(url: string, body?: any, config?: AxiosRequestConfig) =>
    request<R>({ ...config, method: 'POST', url, data: body })

  const put = <R = T>(url: string, body?: any, config?: AxiosRequestConfig) =>
    request<R>({ ...config, method: 'PUT', url, data: body })

  const patch = <R = T>(url: string, body?: any, config?: AxiosRequestConfig) =>
    request<R>({ ...config, method: 'PATCH', url, data: body })

  const del = <R = T>(url: string, config?: AxiosRequestConfig) =>
    request<R>({ ...config, method: 'DELETE', url })

  return {
    loading,
    error,
    data,
    request,
    get,
    post,
    put,
    patch,
    del,
    client: api
  }
}
