import { useNavigate, NavLink } from 'react-router-dom'
import WelcomeComponent from '../../../components/WelcomePage/WelcomeComponent'
import ContentCenterWrapper from '../../../components/ContentCenterWrapper'

const Welcome = () => {
  return (
    <>
      <ContentCenterWrapper>
        <WelcomeComponent />
      </ContentCenterWrapper>
    </>
  )
}

export default Welcome
