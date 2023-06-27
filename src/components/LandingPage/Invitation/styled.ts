import { styled } from '@mui/material'

export const InvitationSection = styled('section')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '25px',
  padding: '20px 100px',
  color: '#444',
  margin: '50px 0',
})

export const InvitationInnerSection = styled('section')({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: '120px',
  padding: '25px 0px ',
  fontSize: '1.4rem',
  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
})
