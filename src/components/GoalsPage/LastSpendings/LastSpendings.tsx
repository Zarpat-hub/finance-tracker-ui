import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material'
import { SpendingNav, StyledTableCell, StyledTableRow } from './styled'
import { NavLink } from 'react-router-dom'

const LastSpendings = () => {
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
      <SpendingNav>
        <NavLink to="/user/add-spending" className="link">
          <div>+ New Spending</div>
        </NavLink>
        <h3>Last Spendings</h3>
        <div>View More</div>
      </SpendingNav>
      <section>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Date</StyledTableCell>
                <StyledTableCell align="left">Category</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
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
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </>
  )
}

export default LastSpendings
