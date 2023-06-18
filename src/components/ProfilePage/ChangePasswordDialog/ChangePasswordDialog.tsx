import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import AxiosInstance from '../../../app/services/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Snackbar } from '@mui/material'

interface IFormInput {
  oldPassword: string
  newPassword: string
  retypedNewPassword: string
}

const ChangePasswordDialog = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await AxiosInstance.post('/User/change-password', data)
      reset()
      setMessage('Password is changed')
      setIsSnackbarOpen(true)
      handleClose()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
      }
    }
  }

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false)
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change password</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              autoFocus
              margin="dense"
              id="name1"
              label="Current password"
              type="password"
              fullWidth
              variant="standard"
              {...register('oldPassword')}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name2"
              label="New password"
              type="password"
              fullWidth
              variant="standard"
              {...register('newPassword')}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name3"
              label="Retype new password"
              type="password"
              fullWidth
              variant="standard"
              {...register('retypedNewPassword')}
            />
            <Button type="submit">Change password</Button>
          </form>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={1000}
        message={message}
        onClose={handleSnackbarClose}
      />
    </>
  )
}

export default ChangePasswordDialog
