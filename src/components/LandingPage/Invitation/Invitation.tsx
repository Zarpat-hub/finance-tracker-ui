import { Divider } from '@mui/material'
import { InvitationInnerSection, InvitationSection } from './styled'
import { NavLink } from 'react-router-dom'
import { ButtonStyle } from '../Header/styled'
import { Header, SpanInfo } from '../Info/styled'

const Invitation = () => {
  return (
    <>
      <Divider />

      <InvitationSection>
        <Header>
          <SpanInfo>Join</SpanInfo> and start manage your finances
        </Header>
        <InvitationInnerSection>
          <div>
            <p>
              Start reaching your financial goals with powerful tools,
              personalized insights, and much more.
            </p>
            <p> Experience a fresh way to manage money now</p>
          </div>

          <div>
            <NavLink to="/register" className="link">
              <ButtonStyle variant="contained">Register</ButtonStyle>
            </NavLink>
          </div>
        </InvitationInnerSection>
      </InvitationSection>
    </>
  )
}

export default Invitation
