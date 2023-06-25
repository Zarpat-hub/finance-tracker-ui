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
import { useSelector } from 'react-redux'
import { Config } from '../../state/accountConfig'

const BalancedTable = () => {
  const configState = useSelector((state: any) => state.accountConfig)
  const { goals }: Config = configState

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
              {goals?.map((goal, i) => (
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
                        <NavLink to={'/user/balance/edit/' + i.toString()}>
                          <EditIcon />
                        </NavLink>
                        <div>
                          <DeleteIcon />
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
    </>
  )
}

export default BalancedTable
