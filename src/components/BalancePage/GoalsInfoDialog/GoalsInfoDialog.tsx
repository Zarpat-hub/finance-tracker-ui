import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  DialogActions,
  Button,
} from '@mui/material'
import { Goal } from '../../../state/accountConfig'

interface GoalDialogProps {
  isOpen: boolean
  update: any
  goal: Goal
  updateGoal: any
}

const GoalsInfoDialog = (infoDialog: GoalDialogProps) => {
  const handleClose = () => {
    infoDialog.update(false)
    infoDialog.updateGoal(null)
  }

  return (
    <Dialog open={infoDialog.isOpen} onClose={handleClose}>
      <DialogTitle>Edit goal</DialogTitle>
      <DialogContent>Test</DialogContent>
    </Dialog>
  )
}

export default GoalsInfoDialog
