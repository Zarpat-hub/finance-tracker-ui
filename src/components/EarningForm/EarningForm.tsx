import { FieldValues, useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { Form } from '../Form'
import { constantIncomeFields, earningFields } from '../../data/fields'
import { Box, Snackbar, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import AxiosInstance from '../../app/services/AxiosInstance'
import {
  createActionEarningAdd,
  createAddSingleEarning,
  Earning,
  SingleEarning,
} from '../../state/accountConfig'
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

  const handleSingleIncomeFormSubmit = async (data: FieldValues) => {
    console.log(data)
    const convertedData: SingleEarning = {
      name: data.name,
      value: Number(data.value),
      date: data.date,
    }
    dispatch(createAddSingleEarning(convertedData))
    try {
      await AxiosInstance.post('/income', convertedData)
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
  interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'} variant={'body2'}>
              {children}
            </Typography>
          </Box>
        )}
      </div>
    )
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <FormProvider {...methods}>
      <Box sx={{ pb: 5 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Constant income" {...a11yProps(0)} />
            <Tab label="Single income" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Form
            onSubmitHandler={handleFormSubmit}
            title={'Add new income'}
            submitText={'Add income'}
            formFields={earningFields}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Form
            onSubmitHandler={handleSingleIncomeFormSubmit}
            title={'Add new  income'}
            submitText={'Add income'}
            formFields={constantIncomeFields}
          />
        </TabPanel>

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
