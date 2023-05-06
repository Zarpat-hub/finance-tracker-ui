import { FieldValues, useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { Form } from '../Form'
import { registerFormFields } from '../../data/fields'

const RegisterForm = () => {
  const methods = useForm()
  const { reset } = methods

  const handleFormSubmit = async (data: FieldValues) => {
    try {
      const res = await axios.post('https://localhost:7083/Auth/attempt', {
        // ++ handle res.status, redirect && error
        Username: data.username,
        Email: data.email,
        Password: data.password,
      })
      reset()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <Form
        onSubmitHandler={handleFormSubmit}
        title={'Create an account'}
        submitText={'Sign up'}
        formFields={registerFormFields}
      />
    </FormProvider>
  )
}

export default RegisterForm
