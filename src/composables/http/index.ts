import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

instance.interceptors.request.use(
  config => {
    const { accessToken } = useAuthStore()

    if (accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${accessToken}`,
        apikey: import.meta.env.VITE_API_KEY
      }
    }
    return config
  }
)

instance.interceptors.response.use(
  (res) => res.data,
  async (error) => {
    console.log(error)

    const { logout, setToken, setRefreshToken, refreshToken } = useAuthStore()

    if (error.response.status === 401 && !error.config._isRetried && refreshToken) {
      try {
        error.config._isRetried = true
        const res = await authService.refreshToken(refreshToken)
        setToken(res.accessToken)
        setRefreshToken(res.refresh_token)
        error.config.headers = {
          ...error.config.headers,
          authorization: `Bearer ${res.access_token}`
        }

        return instance(error.config)
      } catch (e) {
        logout()
      }
    }

    return Promise.reject(error)
  }
)

export const useHttp = instance
