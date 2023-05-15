import { createContext, useContext, useEffect, useState } from 'react'
import AxiosInstance from '../services/AxiosInstance'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext<any>(null)

export function UserProvider({ children }: any) {
  const [state, setState] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get(`/User/me`)
    }
    const token = localStorage.getItem('jwtToken')
    if (token) {
      fetchData()
        .then(() => {
          setUser()
          navigate('/user/goals')
        })
        .catch(() => {
          navigate('/')
        })
    } else {
      navigate('/')
    }
  }, [])

  const setUser = () => {
    setState(true)
  }

  const logout = () => {
    setState(false)
  }

  const value = {
    state,
    update: setUser,
    logout,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  return useContext(UserContext)
}
