import { Outlet } from 'react-router-dom'
import { Nav } from '../../../components/Nav'
import { useEffect } from 'react'
import AxiosInstance from '../../services/AxiosInstance'
import { PageContainer } from './styled'
import { Container } from '@mui/material'

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
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default UserPage
