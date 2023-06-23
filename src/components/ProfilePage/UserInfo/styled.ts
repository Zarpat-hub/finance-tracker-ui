import { Button, styled } from '@mui/material'

export const MainContainer = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ControlsSection = styled('div')({
  display: 'flex',
  width: '600px',
  justifyContent: 'space-between',
  '@media screen and (max-width: 600px)': {
    width: '100%',
    flexDirection: 'column',
    gap: '10px ',
  },
})

export const ButtonsSection = styled('div')({
  display: 'flex',
  width: '600px',
  justifyContent: 'space-between',
  padding: '20px 0',
  '@media screen and (max-width: 600px)': {
    width: '100%',
    flexDirection: 'column',
    gap: '10px',
  },
})

export const UserImg = styled('div')({
  margin: '20px 0',
  width: '100px',
  height: '100px',
  backgroundColor: 'whitesmoke',
  borderRadius: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Header = styled('h2')({
  margin: '20px',
})

export const ButtonUpload = styled(Button)({
  margin: '20px 0',
  width: '100px',
  height: '100px',
  backgroundColor: 'whitesmoke',
  borderRadius: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Label = styled('label')({
  width: '100%',
  height: '100%',

  '&: hover': {
    cursor: 'pointer',
  },
})

export const LabelImg = styled('img')({
  width: '100%',
  height: '100%',
  backgroundColor: 'whitesmoke',
  border: 'none',
  borderRadius: '50px',
})
