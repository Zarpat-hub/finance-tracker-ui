import { CardContent, Typography } from '@mui/material'
import { CardCenterContent, CardComponent, Container } from './styled'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BaseConfig, Config } from '../../../state/accountConfig'

const BasicInfo = ({ dataInfo }: any) => {
  const configState = useSelector((state: any) => state.accountConfig)
  const { currency, spendingLimit, payDay, balance, savings }: BaseConfig =
    configState

  const { goals, earnings, constantSpendings }: Config = configState

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

  const calculateMonthlyIncomes = () => {
    const constantEarnings = earnings?.reduce((acc: number, curr: any) => {
      return acc + Number(curr.value)
    }, 0)

    const singeIncomes = dataInfo?.incomes.reduce((acc: number, curr: any) => {
      const currentDate = new Date()
      const infoDate = new Date(curr.date)
      if (
        currentDate.getFullYear() === infoDate.getFullYear() &&
        currentDate.getMonth() === infoDate.getMonth()
      ) {
        return acc + Number(curr.value)
      }
      return acc + 0
    }, 0)

    return Number(singeIncomes) + Number(constantEarnings)
  }

  const calculateAnnualIncomes = () => {
    const constantEarnings = earnings?.reduce((acc: number, curr: any) => {
      return acc + Number(curr.value)
    }, 0)

    const singeIncomes = dataInfo?.incomes.reduce((acc: number, curr: any) => {
      const currentDate = new Date()
      const infoDate = new Date(curr.date)
      if (currentDate.getFullYear() === infoDate.getFullYear()) {
        return acc + Number(curr.value)
      }
      return acc + 0
    }, 0)

    return Number(singeIncomes) + Number(constantEarnings)
  }

  const calculateMonthlySpendings = () => {
    const constantSpendingsValue = constantSpendings?.reduce(
      (acc: number, curr: any) => {
        return acc + Number(curr.value)
      },
      0
    )

    const singeSpendings = dataInfo?.spendings?.reduce(
      (acc: number, curr: any) => {
        const currentDate = new Date()
        const infoDate = new Date(curr.date)
        if (
          currentDate.getFullYear() === infoDate.getFullYear() &&
          currentDate.getMonth() === infoDate.getMonth()
        ) {
          return acc + Number(curr.value)
        }
        return acc + 0
      },
      0
    )
    return Number(singeSpendings) + Number(constantSpendingsValue)
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
              {calculateMonthlyIncomes()}
              {` ${currency}`}
            </Typography>
          </CardContent>
        </CardComponent>
        <CardComponent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Annual incomes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {calculateAnnualIncomes()}
              {` ${currency}`}
            </Typography>
          </CardContent>
        </CardComponent>
        <CardComponent>
          <NavLink to="/user/add-earning" className="link">
            <CardContent>
              <CardCenterContent>
                <p>Add new earning</p>
              </CardCenterContent>
            </CardContent>
          </NavLink>
        </CardComponent>
        <CardComponent>
          <NavLink to="/user/analysis" className="link">
            <CardCenterContent>
              <p>See Financial Analysis</p>
            </CardCenterContent>
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
              Your Savings
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${savings} ${currency}`}
            </Typography>
          </CardContent>
        </CardComponent>
        <CardComponent>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Account Balance
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
              {calculateMonthlySpendings()}
              {` ${currency} / ${spendingLimit} ${currency}`}
            </Typography>
          </CardContent>
        </CardComponent>
      </Container>
    </>
  )
}

export default BasicInfo
