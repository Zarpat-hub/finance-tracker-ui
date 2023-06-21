import { TextField, Button, Snackbar } from '@mui/material'
import ChangePasswordDialog from '../ChangePasswordDialog/ChangePasswordDialog'
import { useForm } from 'react-hook-form'
import AxiosInstance from '../../../app/services/AxiosInstance'
import { useState } from 'react'
import {
  ButtonsSection,
  ControlsSection,
  Header,
  MainContainer,
  UserImg,
} from './styled'

interface IFormInput {
  username: string
  email: string
}

const UserInfo = () => {
  const { register, getValues } = useForm<IFormInput>({
    // use value from state
    defaultValues: {
      username: 'string',
      email: 'test2@2.pl',
    },
  })

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false)
  }

  const handleClick = async () => {
    try {
      await AxiosInstance.post('/User/edit', getValues())
      setMessage('Profile edited')
      setIsSnackbarOpen(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <MainContainer>
        <Header>Edit your profile</Header>
        <UserImg>Test</UserImg>
        <form>
          <ControlsSection>
            <TextField
              autoFocus
              margin="dense"
              id="name1"
              label="username"
              type="text"
              variant="standard"
              disabled={true}
              {...register('username')}
            />
            <TextField
              autoFocus
              margin="dense"
              required={true}
              id="name2"
              label="E-mail"
              type="email"
              variant="standard"
              {...register('email')}
            />
          </ControlsSection>
        </form>
        <ButtonsSection>
          <ChangePasswordDialog />
          <Button variant="contained" onClick={handleClick}>
            Save
          </Button>
        </ButtonsSection>
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={2000}
          message={message}
          onClose={handleSnackbarClose}
        />
      </MainContainer>
    </>
  )
}

export default UserInfo
