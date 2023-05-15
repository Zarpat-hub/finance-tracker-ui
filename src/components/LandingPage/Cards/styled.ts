import styled from '@emotion/styled'

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
