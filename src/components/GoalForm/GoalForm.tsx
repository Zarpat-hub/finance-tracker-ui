import { FieldValues, useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { Form } from '../Form'
import { goalFields } from '../../data/fields'
import { Box, Snackbar } from '@mui/material'
import { useState } from 'react'
import AxiosInstance from '../../app/services/AxiosInstance'
import { createActionGoalAdd, Goal } from '../../state/accountConfig'
import { useDispatch, useSelector } from 'react-redux'

const GoalForm = () => {
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
    const convertedData: Goal = {
      name: data.name,
      value: Number(data.value),
      priority: data.priority,
      deadline: data.deadline,
    }

    dispatch(createActionGoalAdd(convertedData))
    await updateDbConfig(convertedData)
  }

  const updateDbConfig = async (goal: Goal) => {
    try {
      const res = await AxiosInstance.post('/config', {
        ...configState,
        goals: [...configState.goals, goal],
      })
      reset()
      setMessage('New goal was added')
      setIsOpen(true)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
        setMessage('Wasn\t able to add goal')
        setIsOpen(true)
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <Box sx={{ pb: 5 }}>
        <Form
          onSubmitHandler={handleFormSubmit}
          title={'Add new goal'}
          submitText={'Add goal'}
          formFields={goalFields}
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

export default GoalForm
