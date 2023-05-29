import { Button, Card, styled } from '@mui/material'

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
  '@media screen and (max-width: 800px)': {
    width: '100%',
  },
})
