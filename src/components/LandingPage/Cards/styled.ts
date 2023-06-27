import styled from '@emotion/styled'
import { Card } from '@mui/material'

export const CardsSection = styled('section')({
  display: 'flex',
  justifyContent: 'center',
  padding: '150px 20px',
  gap: '50px',
  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const Header = styled('h5')({
  fontWeight: '400',
  fontSize: '1.5rem',
  minHeight: '80px',
})

export const CardIcon = styled('section')({
  minHeight: '140px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '5rem',
})

export const CardItem = styled(Card)({
  transition: '0.3s',
  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.1)',
  },
})
