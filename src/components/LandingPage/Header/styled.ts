import { Button, styled } from '@mui/material'

export const HeaderSection = styled('header')({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',

  '@media screen and (max-width: 600px)': {
    flexDirection: 'column',
  },
})

export const LandingPageInfoPanel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  gap: '30px',
  '@media screen and (max-width: 600px)': {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
})

export const ButtonSection = styled('div')({
  display: 'flex',
  gap: '30px',
})

export const LandingPageSlajderInfo = styled('section')({
  height: '200px',
  display: 'flex',
  justifyContent: 'center',

  '@media screen and (max-width: 600px)': {
    display: 'none',
  },
})

export const Button1 = styled(Button)({
  padding: '10px 30px',
})

export const FinanceTrackerInfo = styled('section')({
  display: 'flex',
  justifyContent: 'center',
})

export const Test = styled('div')({
  width: '1200px',
})
