import { styled } from '@mui/material'

export const Section = styled('section')({
  display: 'flex',
  justifyContent: 'center',
  padding: '50px 20px',
  backgroundColor: '#1565c0',
  color: 'whitesmoke',
})

export const SectionValue = styled('section')({
  width: '1200px',
  '& p': {
    textAlign: 'center',
    fontSize: '1.5rem',
  },
})
