import WealthWiseLogo from '../../assets/logos/wealthWiseMain.svg'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import ContentCenterWrapper from '../ContentCenterWrapper'
import { Container } from './styled'

const WelcomeComponent = () => {
  return (
    <Container>
      <h2>Hello, welcome to</h2>
      <img src={WealthWiseLogo} />
      <h3>{"Let's get started"}</h3>
      <Button variant="contained" type="submit">
        <NavLink to="/setup" className="link whitesmoke">
          Configure your account
        </NavLink>
      </Button>
    </Container>
  )
}

export default WelcomeComponent
