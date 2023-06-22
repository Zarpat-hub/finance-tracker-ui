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

  // mock -  take from userState
  const [img, setImg] = useState(
    'https://localhost:7083/UserFiles/string-test01.png'
  )

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
        setImg(res.data)

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
            <LabelImg src={img} />
          </Label>
        </ButtonUpload>

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
