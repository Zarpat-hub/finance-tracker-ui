import { Outlet } from 'react-router-dom'
import { Nav } from '../../../components/Nav'
import { Container } from '@mui/material'

const UserPage = () => {
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
