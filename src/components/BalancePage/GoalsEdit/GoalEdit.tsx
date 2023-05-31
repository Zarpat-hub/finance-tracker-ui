import { NavLink } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const GoalEdit = () => {
  return (
    <>
      <NavLink to={'/user/balance'}>
        <ArrowBackIcon />
      </NavLink>
      <h2>Edit your goal</h2>
    </>
  )
}

export default GoalEdit
