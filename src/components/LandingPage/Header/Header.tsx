import { NavLink } from 'react-router-dom'
import {
  ButtonSection,
  ButtonStyle,
  HeaderSection,
  LandingPageInfoPanel,
  LandingPageSlajderInfo,
} from './styled'
import CarouselPanel from '../Carousel/Carousel'

const Header = () => {
  return (
    <HeaderSection>
      <LandingPageInfoPanel>
        <h2>Welcome to WealthWise</h2>
        <p>Your personal Finance Tracker</p>
        <ButtonSection>
          <NavLink to="/login" className="link">
            <ButtonStyle variant="contained">Sign In</ButtonStyle>
          </NavLink>
          <NavLink to="/register" className="link">
            <ButtonStyle variant="contained">Register</ButtonStyle>
          </NavLink>
        </ButtonSection>
      </LandingPageInfoPanel>
      <LandingPageSlajderInfo>
        <CarouselPanel />
      </LandingPageSlajderInfo>
    </HeaderSection>
  )
}

export default Header
