// @trx/ui-common - Auth Composable (Unified Auth)
import { ref, computed } from 'vue'
import axios from 'axios'

export interface User {
  id: string
  email: string
  name: string
  role: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  refresh_token: string
  user: {
    id: string
    email: string
    full_name: string
  }
  app_access?: {
    app_name: string
    role: string
    permissions: string[]
  }
}

export interface UseAuthOptions {
  authUrl?: string
  appName: string
  tokenKey?: string
  refreshTokenKey?: string
  userKey?: string
  onLogout?: () => void
}

/**
 * Composable for unified authentication
 */
export function useAuth(options: UseAuthOptions) {
  const {
    authUrl = '/api/v1',
    appName,
    tokenKey = 'access_token',
    refreshTokenKey = 'refresh_token',
    userKey = 'user',
    onLogout
  } = options

  const user = ref<User | null>(null)
  const accessToken = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)
  const loading = ref(false)

  const isAuthenticated = computed(() => !!accessToken.value && !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  const isSupervisor = computed(() => ['admin', 'supervisor'].includes(user.value?.role || ''))

  // Initialize from localStorage
  const initialize = async () => {
    const storedToken = localStorage.getItem(tokenKey)
    const storedRefresh = localStorage.getItem(refreshTokenKey)
    const storedUser = localStorage.getItem(userKey)

    if (storedToken && storedUser) {
      accessToken.value = storedToken
      refreshToken.value = storedRefresh
      user.value = JSON.parse(storedUser)

      // Validate token
      try {
        await fetchCurrentUser()
      } catch {
        logout()
      }
    }
  }

  // Login
  const login = async (credentials: LoginCredentials) => {
    loading.value = true
    try {
      const response = await axios.post<LoginResponse>(`${authUrl}/unified-auth/login`, {
        email: credentials.email,
        password: credentials.password,
        app_name: appName
      })

      const data = response.data

      accessToken.value = data.access_token
      refreshToken.value = data.refresh_token
      user.value = {
        id: data.user.id,
        email: data.user.email,
        name: data.user.full_name,
        role: data.app_access?.role || 'user'
      }

      // Store in localStorage
      localStorage.setItem(tokenKey, data.access_token)
      localStorage.setItem(refreshTokenKey, data.refresh_token)
      localStorage.setItem(userKey, JSON.stringify(user.value))

      return { success: true }
    } catch (error: any) {
      const message = error.response?.data?.error || error.message || 'Falha no login'
      return { success: false, error: message }
    } finally {
      loading.value = false
    }
  }

  // Logout
  const logout = async () => {
    if (accessToken.value) {
      try {
        await axios.post(`${authUrl}/unified-auth/logout`, null, {
          headers: { Authorization: `Bearer ${accessToken.value}` }
        })
      } catch {
        // Ignore logout errors
      }
    }

    accessToken.value = null
    refreshToken.value = null
    user.value = null

    localStorage.removeItem(tokenKey)
    localStorage.removeItem(refreshTokenKey)
    localStorage.removeItem(userKey)

    if (onLogout) {
      onLogout()
    }
  }

  // Refresh token
  const refreshAccessToken = async () => {
    if (!refreshToken.value) {
      throw new Error('No refresh token')
    }

    try {
      const response = await axios.post<LoginResponse>(`${authUrl}/unified-auth/refresh`, {
        refresh_token: refreshToken.value
      })

      accessToken.value = response.data.access_token
      refreshToken.value = response.data.refresh_token

      localStorage.setItem(tokenKey, response.data.access_token)
      localStorage.setItem(refreshTokenKey, response.data.refresh_token)

      return response.data.access_token
    } catch {
      logout()
      throw new Error('Token refresh failed')
    }
  }

  // Fetch current user
  const fetchCurrentUser = async () => {
    const response = await axios.get(`${authUrl}/unified-auth/me`, {
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })

    user.value = {
      id: response.data.id,
      email: response.data.email,
      name: response.data.full_name,
      role: response.data.app_access?.role || 'user'
    }
    localStorage.setItem(userKey, JSON.stringify(user.value))
  }

  // Change password
  const changePassword = async (currentPassword: string, newPassword: string) => {
    loading.value = true
    try {
      await axios.post(
        `${authUrl}/unified-auth/change-password`,
        {
          current_password: currentPassword,
          new_password: newPassword
        },
        {
          headers: { Authorization: `Bearer ${accessToken.value}` }
        }
      )
      return { success: true }
    } catch (error: any) {
      const message = error.response?.data?.error || 'Falha ao alterar senha'
      return { success: false, error: message }
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    accessToken,
    refreshToken,
    loading,
    isAuthenticated,
    isAdmin,
    isSupervisor,
    initialize,
    login,
    logout,
    refreshAccessToken,
    fetchCurrentUser,
    changePassword
  }
}
