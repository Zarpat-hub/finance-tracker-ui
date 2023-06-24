import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material'
import {
  StyledTableCell,
  StyledTableRow,
} from '../GoalsPage/LastSpendings/styled'
import { Action, ActionSection } from './styled'
import { NavLink } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import InfoIcon from '@mui/icons-material/Info'
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp'
import { useDispatch, useSelector } from 'react-redux'
import { Config, Goal, createActionDeleteGoal } from '../../state/accountConfig'
import GoalEditDialog from './GoalsEditDialog/GoalsEditDialog'
import { useState } from 'react'
import AxiosInstance from '../../app/services/AxiosInstance'

const BalancedTable = () => {
  const configState = useSelector((state: any) => state.accountConfig)
  const { goals }: Config = configState

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [goalChecked, setGoalChecked] = useState<any>(null)
  const dispatch = useDispatch()

  const handleEditGoal = (goal: Goal) => {
    const index = goals.indexOf(goal)
    setGoalChecked(goals[index])
    setIsEditDialogOpen(true)
  }

  const updateDbConfig = async () => {
    try {
      const res = await AxiosInstance.post('/config', {
        ...configState,
      })
      console.log('OK')
    } catch (error) {
      console.log('error')
    }
  }

  const handleDeleteGoal = (goal: Goal) => {
    const index = goals.indexOf(goal)
    dispatch(createActionDeleteGoal(goals[index]))
    // TODO:updateDbConfig()
  }

  return (
    <>
      <ActionSection>
        <h2>My Goals</h2>
        <NavLink to={'/user/add-goal'}>
          <AddBoxSharpIcon />
        </NavLink>
      </ActionSection>

      <section>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Prority</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Price</StyledTableCell>
                <StyledTableCell align="left">Time to achieve</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {goals.map((goal, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row" align="left">
                    {goal.priority}
                  </StyledTableCell>
                  <StyledTableCell align="left">{goal.name}</StyledTableCell>
                  <StyledTableCell align="left">{goal.value}</StyledTableCell>
                  <StyledTableCell align="left">
                    <ActionSection>
                      <section>{goal.deadline}</section>
                      <Action>
                        <NavLink to={'/user/balance/details/' + i.toString()}>
                          <InfoIcon />
                        </NavLink>
                        <EditIcon onClick={() => handleEditGoal(goal)} />
                        <div>
                          <DeleteIcon onClick={() => handleDeleteGoal(goal)} />
                        </div>
                      </Action>
                    </ActionSection>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      {goalChecked ? (
        <GoalEditDialog
          isOpen={isEditDialogOpen}
          update={setIsEditDialogOpen}
          goal={goalChecked}
          updateGoal={setGoalChecked}
        />
      ) : null}
    </>
  )
}

export default BalancedTable
