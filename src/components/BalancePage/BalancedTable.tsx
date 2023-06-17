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
const BalancedTable = () => {
  const rows = [
    {
      prority: 'High',
      name: 'New Car',
      price: '2000',
      timeToAchieve: '2000-04-15',
    },
    {
      prority: 'Minor',
      name: 'New PC',
      price: '3010',
      timeToAchieve: '2020-05-14',
    },
  ]

  return (
    <>
      <ActionSection>
        <h2>My Goals</h2>
        <AddBoxSharpIcon />
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
              {rows.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row" align="left">
                    {row.prority}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.name}</StyledTableCell>
                  <StyledTableCell align="left">{row.price}</StyledTableCell>
                  <StyledTableCell align="left">
                    <ActionSection>
                      <section>{row.timeToAchieve}</section>
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
