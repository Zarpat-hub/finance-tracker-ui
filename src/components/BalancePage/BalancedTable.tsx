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

const BalancedTable = () => {
  const rows = [
    {
      date: '2022-04-04',
      category: 'AGD',
      description: 'New TV',
      amount: '2000',
    },
    {
      date: '2022-04-04',
      category: 'AGD',
      description: 'New TV',
      amount: '2000',
    },
  ]

  return (
    <>
      <section>
        <h2>My Goals</h2>
      </section>

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
                    {row.date}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.category}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.description}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <ActionSection>
                      <section>{row.amount}</section>
                      <Action>
                        <NavLink to={'/user/balance/details/' + i.toString()}>
                          De
                        </NavLink>
                        <NavLink to={'/user/balance/edit/' + i.toString()}>
                          E
                        </NavLink>

                        <div>D</div>
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
