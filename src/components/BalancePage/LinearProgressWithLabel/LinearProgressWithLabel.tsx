import { Box, LinearProgress, Typography } from '@mui/material'

const LinearProgressWithLabel = (props: any) => {
  return (
    <Box display="flex" alignItems="center" p={3}>
      <Box width="100%" mr={3}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  )
}
export default LinearProgressWithLabel
