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
import FastfoodIcon from '@mui/icons-material/Fastfood'
import HomeIcon from '@mui/icons-material/Home'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'
import SoapIcon from '@mui/icons-material/Soap'
import AttractionsIcon from '@mui/icons-material/Attractions'
import MoneyOffIcon from '@mui/icons-material/MoneyOff'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BookmarkIcon from '@mui/icons-material/Bookmark'
const LastSpendings = ({ dataInfo }: any) => {
  const [transactions, setTransactions] = useState<any>([])

  useEffect(() => {
    setTransactions([...dataInfo.spendings, ...dataInfo.incomes])
  }, [dataInfo])

  const categoryToIcon = (category: string) => {
    switch (category) {
      case 'FOOD':
        return <FastfoodIcon />
      case 'HOME':
        return <HomeIcon />
      case 'TRANSPORT':
        return <DirectionsCarIcon />
      case 'HEALTHCARE':
        return <LocalHospitalIcon />
      case 'CLOTHES':
        return <CheckroomIcon />
      case 'HYGIENE':
        return <SoapIcon />
      case 'KIDS':
        return <ChildFriendlyIcon />
      case 'ENTERTAINMENT':
        return <AttractionsIcon />
      case 'DEBT':
        return <MoneyOffIcon />
      default:
        return <BookmarkIcon />
    }
  }

  return (
    <>
      <SpendingNav>
        <NavLink to="/user/add-spending" className="link">
          <div>
            <AddBoxSharpIcon />
          </div>
        </NavLink>
        <h3>Last Transactions</h3>
        <div> </div>
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
              {transactions
                // @ts-expect-error
                .sort((a: any, b: any) => new Date(b.date) - new Date(a.date))
                ?.map((row: any, i: number) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row" align="left">
                      {row.date}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.category ? (
                        categoryToIcon(row.category)
                      ) : (
                        <AttachMoneyIcon />
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.description ? row.description : row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.category ? row.value * -1 : row.value}
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

export default LastSpendings
