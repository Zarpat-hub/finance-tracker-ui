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
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp'
import { useEffect, useState } from 'react'
import AxiosInstance from '../../../app/services/AxiosInstance'

const LastSpendings = () => {
  const [dataInfo, setDataInfo] = useState<any>({
    spendings: [],
    incomes: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      await AxiosInstance.get(`/balance`).then((res) => {
        setDataInfo(res.data)
      })
    }
    fetchData()
  }, [])
  return (
    <>
      <SpendingNav>
        <NavLink to="/user/add-spending" className="link">
          <div>
            <AddBoxSharpIcon />
          </div>
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
              {dataInfo.spendings?.map((row: any, i: number) => (
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row" align="left">
                    {row.date}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.category}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.value}</StyledTableCell>
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
