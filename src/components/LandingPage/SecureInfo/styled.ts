import { styled } from '@mui/material'

export const Section = styled('section')({
  display: 'flex',
  justifyContent: 'center',
})

export const SecureInfoContainer = styled('div')({
  color: '#444',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  minHeight: '400px',
})

export const Header = styled('h5')({
  fontWeight: '400',
  fontSize: '2.4rem',
})

export const Information = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  '& p': {
    fontWeight: '400',
    fontSize: '1.4rem',
    lineHeight: '1.5',
    width: '50%',
  },
})

export const SecurityIconContainer = styled('div')({
  minHeight: '140px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '10rem',
})
