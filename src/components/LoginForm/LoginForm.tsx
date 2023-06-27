import { FieldValues, useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { Form } from '../Form'
import { loginFormFields } from '../../data/fields'
import { Box, Snackbar, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AxiosInstance from '../../app/services/AxiosInstance'
import { StyledLink } from './styled'
import { useDispatch } from 'react-redux'
import { createActionLoad } from '../../state/accountConfig'
import { createUserActionLoad } from '../../state/userData'

const LoginForm = () => {
  const methods = useForm()
  const navigate = useNavigate()
  const { reset } = methods
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleFormSubmit = async (data: FieldValues) => {
    const { username, password } = data
    try {
      const res = await AxiosInstance.post('/token', {
        // ++ handle res.status, redirect && error
        username, // change to email if backend changes
        password,
      })

      reset()
      localStorage.setItem('jwtToken', res.data)
      const resConfig = await AxiosInstance.get('/config')
      if (!resConfig.data) {
        const userData = await AxiosInstance.get('/User/me')
        dispatch(createUserActionLoad(userData.data))
        navigate('/welcome')
      } else {
        dispatch(createActionLoad(resConfig.data))
        const userData = await AxiosInstance.get('/User/me')
        dispatch(createUserActionLoad(userData.data))
        setMessage('Successfully signed in. Redirecting ...')
        setIsOpen(true)
        navigate('/user/goals')
      }
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
      <Box sx={{ pb: 5 }}>
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
        <Typography sx={{ maxWidth: '360px', textAlign: 'center' }}>
          {'Don\t have any account?'}
          <StyledLink to={'/register'}>Sign Up</StyledLink>
        </Typography>
      </Box>
    </FormProvider>
  )
}

export default LoginForm
