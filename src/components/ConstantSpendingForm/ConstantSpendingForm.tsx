import { FieldValues, useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { Form } from '../Form'
import { spendingFields } from '../../data/fields'
import { Box, Snackbar } from '@mui/material'
import { useState } from 'react'
import AxiosInstance from '../../app/services/AxiosInstance'
import {
  createActionConstantSpendingAdd,
  Spending,
} from '../../state/accountConfig'
import { useDispatch, useSelector } from 'react-redux'

const ConstantSpendingForm = () => {
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
    const convertedData: Spending = {
      category: data.category,
      type: data.type,
      frequence: data.frequence,
      description: data.description,
      value: Number(data.value),
      date: data.date,
    }

    if (data.type === 'Constant') {
      dispatch(createActionConstantSpendingAdd(convertedData))
      await updateDbConfig(convertedData)
    } else {
      await addSingleSpending(convertedData)
    }
  }

  const updateDbConfig = async (spending: Spending) => {
    try {
      await AxiosInstance.post('/config', {
        ...configState,
        constantSpendings: [...configState.constantSpendings, spending],
      })
      reset()
      setMessage('New spending was added')
      setIsOpen(true)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
        setMessage('Wasn\t able to add spending')
        setIsOpen(true)
      }
    }
  }

  const addSingleSpending = async (spendingData: Spending) => {
    try {
      await AxiosInstance.post('/spending', spendingData)
      setMessage('New spending was added')
      setIsOpen(true)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
        setMessage('Wasn\t able to add spending')
        setIsOpen(true)
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <Box sx={{ pb: 5 }}>
        <Form
          onSubmitHandler={handleFormSubmit}
          title={'Add new spending'}
          submitText={'Add spending'}
          formFields={spendingFields}
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

export default ConstantSpendingForm
