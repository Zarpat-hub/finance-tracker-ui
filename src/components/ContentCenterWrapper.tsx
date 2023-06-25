import { Box } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

// adjust for mobile later -> height 100% instead of viewport

const ContentCenterWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  )
}

export default ContentCenterWrapper
