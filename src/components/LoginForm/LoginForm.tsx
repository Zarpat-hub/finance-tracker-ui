import { FieldValues, useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { Form } from '../Form'
import { loginFormFields } from '../../data/fields'
import { Snackbar } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AxiosInstance from '../../app/services/AxiosInstance'
import { useUser } from '../../app/context/UserContext'

const LoginForm = () => {
  const methods = useForm()
  const navigate = useNavigate()
  const { reset } = methods
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleClose = () => {
    setIsOpen(false)
  }

  const { update } = useUser()

  const handleFormSubmit = async (data: FieldValues) => {
    const { username, password } = data
    try {
      const res = await AxiosInstance.post('/token', {
        // ++ handle res.status, redirect && error
        username, // change to email if backend changes
        password,
      })

      reset()
      console.log(res.data)
      localStorage.setItem('jwtToken', res.data)
      setMessage('Successfully signed in. Redirecting ...')
      setIsOpen(true)
      update()
      navigate('/user/goals')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
        setMessage('Provided wrong credentials')
        setIsOpen(true)
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <Form
        onSubmitHandler={handleFormSubmit}
        title={'Welcome back to'}
        submitText={'Sign in'}
        formFields={loginFormFields}
        showLogo
      />
      <Snackbar
        open={isOpen}
        autoHideDuration={2500}
        message={message}
        onClose={handleClose}
      />
    </FormProvider>
  )
}

export default LoginForm
