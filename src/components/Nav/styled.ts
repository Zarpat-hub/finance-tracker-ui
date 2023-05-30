import { Button } from '@mui/material'
import { styled } from '@mui/system'
import { NavLink } from 'react-router-dom'

export const NavBar = styled('nav')({
  display: 'flex',
  width: '100%',
  height: '100px',
  justifyContent: 'space-between',
  padding: '0 10px',
  backgroundColor: '#4682B4',
})

export const NavBarLogo = styled('section')({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  '& img': {
    width: '100px',
  },
})

export const NavBarUser = styled('section')({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
})

export const NavBarButton = styled(Button)({
  backgroundColor: 'whitesmoke',
  width: '60px',
  height: '60px',
  borderRadius: '50%',

  '&:hover': {
    color: 'whitesmoke',
  },
})

export const NavBarMenuItem = styled(NavLink)({
  color: 'whitesmoke',
  textDecoration: 'none',
})
