import { styled } from '@mui/material'

export const ChartSection = styled('section')({
  display: 'flex',
  gap: '50px',
  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const ChartCanvas = styled('div')({
  width: '70%',
})

export const ChartOption = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  '@media screen and (max-width: 800px)': {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export const Option = styled('div')({
  border: '1px solid black',
  width: '200px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&: hover': {
    cursor: 'pointer',
  },
})
