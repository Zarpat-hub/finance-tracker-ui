import { TextField, Button } from '@mui/material'
import ChangePasswordDialog from '../ChangePasswordDialog/ChangePasswordDialog'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
  username: string
  email: string
}

const UserInfo = () => {
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      username: 'test',
      email: 'test2',
    },
  })
  const methods = useForm()
  const { reset } = methods

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data)
  }

  return (
    <>
      <h2>Edit your profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          autoFocus
          margin="dense"
          id="name1"
          label="Current password"
          type="text"
          fullWidth
          variant="standard"
          {...register('username')}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name2"
          type="text"
          fullWidth
          variant="standard"
          {...register('email')}
        />
        <Button type="submit">Save</Button>
      </form>
      <ChangePasswordDialog />
    </>
  )
}

export default UserInfo
