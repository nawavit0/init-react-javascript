import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Add a response interceptor
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      console.log('try refreshing token')

      try {
        const refreshToken = localStorage.getItem('refresh_token')
        var bodyFormData = new FormData()
        bodyFormData.append('refresh_token', refreshToken)
        const response = await axios.post(
          `urlEndpoint/auth/token`,
          bodyFormData,
        )

        localStorage.setItem('refresh_token', response?.data?.refresh_token)
        localStorage.setItem('access_token', response?.data?.access_token)

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${response?.data?.access_token}`
        return axios(originalRequest)
      } catch (error) {
        // Handle refresh token error or redirect to login
      }
    }

    return Promise.reject(error)
  },
)

export default axios
