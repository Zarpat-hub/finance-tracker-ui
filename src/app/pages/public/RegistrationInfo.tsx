import WealthWiseLogo from '../../../assets/logos/wealthWiseMain.svg'
import ContentCenterWrapper from '../../../components/ContentCenterWrapper'
const RegistrationInfo = () => {
  return (
    <ContentCenterWrapper>
      <section style={{ textAlign: 'center' }}>
        <section>
          <h2>Thank you for signing up to</h2>
          <img src={WealthWiseLogo} />
        </section>
        <section>
          <h3>We have sent you an email confirmation!</h3>
          <p>Check your inbox and confirm</p>
        </section>
      </section>
    </ContentCenterWrapper>
  )
}

export default RegistrationInfo
