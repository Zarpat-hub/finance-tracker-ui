import { useNavigate, useParams } from 'react-router-dom'
import { SubmitButton } from '../../../components/Form/styled'
import AxiosInstance from '../../services/AxiosInstance'

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
    <>
      <SubmitButton
        variant={'contained'}
        size={'large'}
        type={'submit'}
        onClick={handleActivateAccount}
      >
        Activate account
      </SubmitButton>
    </>
  )
}

export default ActivateAccount
