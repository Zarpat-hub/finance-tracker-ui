import { NavLink } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const GoalDetails = () => {
  return (
    <>
      <NavLink to={'/user/balance'}>
        <ArrowBackIcon />
      </NavLink>
      <h2>Goal details</h2>
    </>
  )
}

export default GoalDetails
