import { NavLink } from 'react-router-dom'
import {
  Button1,
  ButtonSection,
  HeaderSection,
  LandingPageInfoPanel,
  LandingPageSlajderInfo,
} from './styled'

import WealthWiseLogo from '../../../assets/logos/wealthWiseMain.svg'

const Header = () => {
  return (
    <HeaderSection>
      <LandingPageInfoPanel>
        <h2>Welcome to</h2>
        <p>Your personal Finance Tracker</p>
        <ButtonSection>
          <NavLink to="/login" className="link">
            <Button1 variant="contained">Sign In</Button1>
          </NavLink>
          <NavLink to="/register" className="link">
            <Button1 variant="contained">Register</Button1>
          </NavLink>
        </ButtonSection>
      </LandingPageInfoPanel>
      <LandingPageSlajderInfo>
        <img src={WealthWiseLogo} />
      </LandingPageSlajderInfo>
    </HeaderSection>
  )
}

export default Header
