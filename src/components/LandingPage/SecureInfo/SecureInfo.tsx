import { Divider } from '@mui/material'
import {
  Header,
  Information,
  Section,
  SecureInfoContainer,
  SecurityIconContainer,
} from './styled'
import SecurityIcon from '@mui/icons-material/Security'
const SecureInfo = () => {
  return (
    <Section>
      <SecureInfoContainer>
        <SecurityIconContainer>
          <SecurityIcon fontSize="inherit" />
        </SecurityIconContainer>
        <Header>Your finances, safe and secure</Header>
        <Information>
          <p>
            At WealtWise, we prioritize the security and privacy of your data.
            We understand the importance of protecting your personal and
            financial information, and we have implemented robust measures to
            ensure its confidentiality and integrity.
          </p>
        </Information>
      </SecureInfoContainer>
    </Section>
  )
}

export default SecureInfo
