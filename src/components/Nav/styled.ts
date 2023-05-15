import { styled } from '@mui/system'

export const NavBar = styled('nav')({
  display: 'flex',
  width: '100%',
  height: '100px',
  justifyContent: 'space-between',
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
