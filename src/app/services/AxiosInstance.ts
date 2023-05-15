import axios from 'axios'

const AxiosInstance = axios.create({
  baseURL: 'https://localhost:7083',
})

AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default AxiosInstance
