import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  MenuItem,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {
  Config,
  Goal,
  createActionDeleteGoal,
  createActionGoalAdd,
} from '../../../state/accountConfig'
import AxiosInstance from '../../../app/services/AxiosInstance'

interface GoalDialogProps {
  isOpen: boolean
  update: any
  goal: Goal
  updateGoal: any
}

const GoalEditDialog = (editDialog: GoalDialogProps) => {
  const dispatch = useDispatch()
  const configState = useSelector((state: any) => state.accountConfig)
  const { goals }: Config = configState

  const { register, handleSubmit, reset } = useForm<Goal>({
    defaultValues: {
      name: editDialog.goal.name,
      priority: editDialog.goal.priority,
      value: editDialog.goal.value,
      deadline: editDialog.goal.deadline,
    },
  })

  const onSubmit: SubmitHandler<any> = async (data) => {
    dispatch(createActionDeleteGoal(editDialog.goal))
    dispatch(createActionGoalAdd(data))
    handleClose()
  }

  const handleClose = () => {
    editDialog.update(false)
    editDialog.updateGoal(null)
  }

  return (
    <Dialog open={editDialog.isOpen} onClose={handleClose}>
      <DialogTitle>Edit goal</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            margin="dense"
            id="goalName"
            label="Goal name"
            type="text"
            fullWidth
            variant="standard"
            {...register('name')}
          />
          <TextField
            margin="dense"
            id="Priority"
            label="Priority"
            select
            defaultValue={editDialog.goal.priority}
            fullWidth
            variant="standard"
            {...register('priority')}
          >
            <MenuItem key={'LOW'} value={'LOW'}>
              LOW
            </MenuItem>
            <MenuItem key={'MEDIUM'} value={'MEDIUM'}>
              MEDIUM
            </MenuItem>
            <MenuItem key={'HIGH'} value={'HIGH'}>
              HIGH
            </MenuItem>
          </TextField>

          <TextField
            autoFocus
            margin="dense"
            id="value"
            label="Value"
            type="number"
            fullWidth
            variant="standard"
            {...register('value')}
          />
          <TextField
            autoFocus
            margin="dense"
            id="deadline"
            label="Deadline"
            type="date"
            fullWidth
            variant="standard"
            {...register('deadline')}
          />
          <DialogActions>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default GoalEditDialog
