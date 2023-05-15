import { Outlet } from 'react-router-dom'
import { Nav } from '../../../components/Nav'
import { useEffect } from 'react'
import AxiosInstance from '../../services/AxiosInstance'

const UserPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get(`/User/me`)
    }
    fetchData()
  }, [])

  return (
    <>
      <Nav />

      <Outlet />
    </>
  )
}

export default UserPage
