import { FooterSection } from './styled'

import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <FooterSection>
      <p>WealthWise</p>
      <section>
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </section>
    </FooterSection>
  )
}

export default Footer
