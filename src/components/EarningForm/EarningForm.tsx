import { FieldValues, useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { Form } from '../Form'
import { earningFields } from '../../data/fields'
import { Box, Snackbar } from '@mui/material'
import { useState } from 'react'
import AxiosInstance from '../../app/services/AxiosInstance'
import { createActionEarningAdd, Earning } from '../../state/accountConfig'
import { useDispatch, useSelector } from 'react-redux'

const EarningForm = () => {
  const methods = useForm()
  const { reset } = methods
  const dispatch = useDispatch()
  const configState = useSelector((state: any) => state.accountConfig)
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleFormSubmit = async (data: FieldValues) => {
    const convertedData: Earning = {
      name: data.name,
      value: Number(data.value),
    }

    dispatch(createActionEarningAdd(convertedData))
    await updateDbConfig(convertedData)
  }

  const updateDbConfig = async (spending: Earning) => {
    try {
      const res = await AxiosInstance.post('/config', {
        ...configState,
        earnings: [...configState.earnings, spending],
      })
      reset()
      setMessage('New earning was added')
      setIsOpen(true)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
        setMessage('Wasn\t able to add earning')
        setIsOpen(true)
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <Box sx={{ pb: 5 }}>
        <Form
          onSubmitHandler={handleFormSubmit}
          title={'Add new earning'}
          submitText={'Add earning'}
          formFields={earningFields}
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

export default EarningForm
