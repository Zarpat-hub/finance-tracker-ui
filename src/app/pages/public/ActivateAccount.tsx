import { useNavigate, useParams } from 'react-router-dom'
import { SubmitButton } from '../../../components/Form/styled'
import AxiosInstance from '../../services/AxiosInstance'
import ContentCenterWrapper from '../../../components/ContentCenterWrapper'

const ActivateAccount = () => {
  const { token } = useParams()
  const navigate = useNavigate()

  const handleActivateAccount = async () => {
    if (token) {
      try {
        await AxiosInstance.post(`/Auth/confirm/${token}`)
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <ContentCenterWrapper>
      <h2>Click button to activate your account</h2>
      <SubmitButton
        variant={'contained'}
        size={'large'}
        type={'submit'}
        onClick={handleActivateAccount}
      >
        Activate account
      </SubmitButton>
    </ContentCenterWrapper>
  )
}

export default ActivateAccount
