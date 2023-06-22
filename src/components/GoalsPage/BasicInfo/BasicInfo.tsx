import { CardContent, Typography } from '@mui/material'
import { CardComponent, Container } from './styled'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BaseConfig } from '../../../state/accountConfig'

const BasicInfo = () => {
  const configState = useSelector((state: any) => state.accountConfig)
  const { currency, spendingLimit, payDay, balance }: BaseConfig = configState

  const calculateDaysLeftToPayDay = () => {
    const currentDate = new Date()
    const currentDay = currentDate.getDate()
    const currentMonth = currentDate.getMonth()
    const targetMonth = currentDay > payDay ? currentMonth + 1 : currentMonth
    const targetYear = currentDate.getFullYear()
    const targetDate = new Date(targetYear, targetMonth, payDay)
    const timeDiff = targetDate.getTime() - currentDate.getTime()
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

    return daysLeft
  }

  return (
    <>
      <Container>
        <CardComponent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Monthly incomes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              5237,63{` ${currency}`}
            </Typography>
          </CardContent>
        </CardComponent>
        <CardComponent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Annual incomes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              62851,56{` ${currency}`}
            </Typography>
          </CardContent>
        </CardComponent>
        <CardComponent>
          <NavLink to="/user/profile" className="link">
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Configure your incomes
              </Typography>
            </CardContent>
          </NavLink>
        </CardComponent>
        <CardComponent>
          <NavLink to="/user/analysis" className="link">
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                See Financial Analysis
              </Typography>
            </CardContent>
          </NavLink>
        </CardComponent>

        <CardComponent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Payday is in
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {calculateDaysLeftToPayDay()}
            </Typography>
          </CardContent>
        </CardComponent>
      </Container>
      <Container>
        <CardComponent>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Accout Balance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${balance} ${currency}`}
            </Typography>
          </CardContent>
        </CardComponent>
        <CardComponent>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Monthly spending limit
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2000,04{` ${currency} / ${spendingLimit} ${currency}`}
            </Typography>
          </CardContent>
        </CardComponent>
      </Container>
    </>
  )
}

export default BasicInfo
