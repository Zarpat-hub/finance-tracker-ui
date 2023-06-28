import {
  Dialog,
  DialogTitle,
  DialogContent,
  LinearProgress,
  Box,
  Typography,
  Divider,
} from '@mui/material'
import { Goal } from '../../../state/accountConfig'
import { useSelector } from 'react-redux'
import LinearProgressWithLabel from '../LinearProgressWithLabel/LinearProgressWithLabel'

interface GoalDialogProps {
  isOpen: boolean
  update: any
  goal: Goal
  updateGoal: any
}

const GoalsInfoDialog = (infoDialog: GoalDialogProps) => {
  const configState = useSelector((state: any) => state.accountConfig)

  const calculateRemainTime = () => {
    const currentDate = new Date()
    const deadlineDay = new Date(infoDialog.goal.deadline)

    const timeDifferenceInMilliseconds =
      Number(deadlineDay) - Number(currentDate)
    const timeDifferenceInDays = Math.floor(
      timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
    )

    const timeDifferenceInMonths = Math.floor(timeDifferenceInDays / 30)

    return {
      remainDays: timeDifferenceInDays + 1,
      remainMonths: timeDifferenceInMonths === 0 ? 1 : timeDifferenceInMonths,
    }
  }

  const calculation = () => {
    const remainAmount = infoDialog.goal.value - configState.savings
    const percent = (configState.savings / infoDialog.goal.value) * 100

    return {
      percent: percent > 100 ? 100 : percent,
      dailySavings: Math.round(remainAmount / calculateRemainTime().remainDays),
      monthlySavings: Math.round(
        remainAmount / calculateRemainTime().remainMonths
      ),
    }
  }

  const handleClose = () => {
    infoDialog.update(false)
    infoDialog.updateGoal(null)
  }

  return (
    <Dialog
      open={infoDialog.isOpen}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle>{infoDialog.goal.name} statistics</DialogTitle>
      <DialogContent>
        <h3>
          {calculateRemainTime().remainDays > -1
            ? 'Days left: ' + calculateRemainTime().remainDays.toString()
            : 'After deadline'}
        </h3>
        <h3>
          {calculateRemainTime().remainMonths > 0
            ? 'Months left: ' + calculateRemainTime().remainMonths.toString()
            : null}
        </h3>
        <LinearProgressWithLabel value={calculation().percent} />
        {calculateRemainTime().remainDays > -1 &&
        calculation().percent !== 100 ? (
          <div>
            <div>
              <p>
                Save {calculation().dailySavings} {configState.currency} daily
                to reach your goal
              </p>
              <p>
                Save {calculation().monthlySavings}
                {configState.currency} monthly to reach your goal
              </p>
            </div>
            <Divider />
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}

export default GoalsInfoDialog
