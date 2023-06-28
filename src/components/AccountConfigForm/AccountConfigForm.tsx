import { FieldValues, useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { Form } from '../Form'
import { configurationFields } from '../../data/fields'
import { Box, Snackbar } from '@mui/material'
import { useState } from 'react'
import AxiosInstance from '../../app/services/AxiosInstance'
import { createActionBaseUpdate, BaseConfig } from '../../state/accountConfig'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AccountConfigForm = () => {
  const methods = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const configState = useSelector((state: any) => state.accountConfig)
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleFormSubmit = async (data: FieldValues) => {
    const convertedData = {
      balance: Number(data.balance),
      currency: data.currency,
      payDay: Number(data.payDay),
      savings: Number(data.savings),
      spendingLimit: Number(data.spendingLimit),
    }
    dispatch(createActionBaseUpdate(convertedData))
    await updateDbConfig(convertedData)
    navigate('/user/goals')
  }

  const updateDbConfig = async (config: BaseConfig) => {
    try {
      const res = await AxiosInstance.post('/config', {
        ...configState,
        ...config,
      })
      setMessage('Configuration was successfully saved')
      setIsOpen(true)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
        setMessage('Wasn\t able to save configuration')
        setIsOpen(true)
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <Box sx={{ pb: 5 }}>
        <Form
          onSubmitHandler={handleFormSubmit}
          title={'Financial configuration panel'}
          submitText={'Save config'}
          formFields={configurationFields}
          defaultValues={configState}
        />
        <Snackbar
          open={isOpen}
          autoHideDuration={2500}
          message={message}
          onClose={handleClose}
        />
      </Box>
    </FormProvider>
  )
}

export default AccountConfigForm
