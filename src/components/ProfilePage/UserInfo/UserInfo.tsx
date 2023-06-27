import { TextField, Button, Snackbar } from '@mui/material'
import ChangePasswordDialog from '../ChangePasswordDialog/ChangePasswordDialog'
import { useForm } from 'react-hook-form'
import AxiosInstance from '../../../app/services/AxiosInstance'
import { ChangeEvent, useState } from 'react'
import {
  ButtonUpload,
  ButtonsSection,
  ControlsSection,
  Header,
  Label,
  LabelImg,
  MainContainer,
  Panel,
} from './styled'
import { useDispatch, useSelector } from 'react-redux'
import {
  UserData,
  updateUserImg,
  updateUserInfo,
} from '../../../state/userData'

interface IFormInput {
  username: string
  email: string
  firstName: string
  lastName: string
}

const UserInfo = () => {
  const userState = useSelector((state: any) => state.userData)

  const { userImg, username, email, firstName, lastName }: UserData = userState
  const dispatch = useDispatch()

  const { register, getValues } = useForm<IFormInput>({
    defaultValues: {
      username,
      email,
      firstName,
      lastName,
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
      dispatch(updateUserInfo(getValues()))
      setIsSnackbarOpen(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData()
      formData.append('formFile', e.target.files[0])
      try {
        const res = await AxiosInstance.post('/User/img', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'x-rapidapi-host': 'file-upload8.p.rapidapi.com',
            'x-rapidapi-key': 'your-rapidapi-key-here',
          },
        })

        // change user state
        dispatch(updateUserImg(res.data))
        setMessage('Img changed')
        setIsSnackbarOpen(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <MainContainer>
        <Header>Edit your profile</Header>
        <ButtonUpload>
          <Label htmlFor="upload-input">
            <input
              id="upload-input"
              type="file"
              hidden
              accept="image/png, image/gif, image/jpeg"
              onChange={handleFileChange}
            />
            {userImg ? <LabelImg src={userImg} /> : <LabelImg />}
          </Label>
        </ButtonUpload>

        <form>
          <ControlsSection>
            <Panel>
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
            </Panel>
            <Panel>
              <TextField
                autoFocus
                margin="dense"
                id="name3"
                label="firstName"
                type="text"
                variant="standard"
                {...register('firstName')}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name4"
                label="lastname"
                type="text"
                variant="standard"
                {...register('lastName')}
              />
            </Panel>
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
