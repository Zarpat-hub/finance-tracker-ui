import { Button, Card, CardContent, styled } from '@mui/material'

export const Container = styled('section')({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '20px',
  padding: '15px 0',
  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const CardComponent = styled(Card)({
  textAlign: 'center',

  '@media screen and (max-width: 800px)': {
    width: '100%',
  },
})

export const CardCenterContent = styled(CardContent)({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  color: '#444444',
  fontSize: '1.25rem',
})
