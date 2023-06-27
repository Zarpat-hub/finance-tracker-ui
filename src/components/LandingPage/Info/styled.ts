import { Card, styled } from '@mui/material'

export const Section = styled('section')({
  display: 'flex',
  color: '#444',
})

export const SectionValue = styled('section')({
  padding: '50px',

  '& p': {
    marginTop: '20px',
    fontSize: '2rem',
  },
})

export const SpanInfo = styled('span')({
  color: '#1976d2',
})

export const Header = styled('h2')({
  fontSize: '3rem',
})

export const LongCard = styled(Card)({
  minHeight: '150px',
  fontSize: '1.5rem',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
})
