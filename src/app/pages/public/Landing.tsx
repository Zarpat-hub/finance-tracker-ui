import WealthWiseLogo from '../../../assets/logos/wealthWiseMain.svg'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <section>
        <p>Slajder</p>
      </section>
      <section>
        <h2>Welcome to</h2>
        <img src={WealthWiseLogo} />
        <p>Your personal Finance Tracker</p>
        <NavLink to="/login" className="link">
          <Button variant="contained">Sign In</Button>
        </NavLink>
        <p>
          If you do not have anny account yet,{' '}
          <NavLink to="/register" className="link">
            Sign Up
          </NavLink>
        </p>
      </section>
    </>
  )
}

export default Landing
