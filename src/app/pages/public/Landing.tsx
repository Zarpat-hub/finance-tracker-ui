import Cards from '../../../components/LandingPage/Cards/Cards'
import Footer from '../../../components/LandingPage/Footer/Footer'
import Header from '../../../components/LandingPage/Header/Header'
import Info from '../../../components/LandingPage/Info/Info'
import Invitation from '../../../components/LandingPage/Invitation/Invitation'
import SecureInfo from '../../../components/LandingPage/SecureInfo/SecureInfo'

const Landing = () => {
  return (
    <>
      <Header />
      <Info />
      <Cards />
      <SecureInfo />
      <Invitation />
      <Footer />
    </>
  )
}

export default Landing
