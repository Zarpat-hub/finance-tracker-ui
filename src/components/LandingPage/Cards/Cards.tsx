import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material'
import { CardIcon, CardItem, CardsSection, Header, SmallHeader } from './styled'
import PaymentsIcon from '@mui/icons-material/Payments'
import SavingsIcon from '@mui/icons-material/Savings'
import Divider from '@mui/material/Divider'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { SpanInfo } from '../Info/styled'
const Cards = () => {
  return (
    <>
      <Divider />
      <CardsSection>
        <CardItem sx={{ maxWidth: 345 }}>
          <CardIcon>
            <SavingsIcon fontSize="inherit" />
          </CardIcon>
          <CardContent>
            <Header>
              Streamline your finances and achieve financial success.
            </Header>
            <Typography variant="body2" color="text.secondary">
              Our comprehensive finance management tools allow you to streamline
              your finances effortlessly, providing you with the foundation to
              achieve your financial goals and unlock your path to success.
            </Typography>
          </CardContent>
        </CardItem>
        <CardItem sx={{ maxWidth: 345 }}>
          <CardIcon>
            <PaymentsIcon fontSize="inherit" />
          </CardIcon>

          <CardContent>
            <Header>
              Track, manage, and optimize your finances effortlessly.
            </Header>
            <Typography variant="body2" color="text.secondary">
              Effortlessly track, manage, and optimize your finances with our
              intuitive platform. From expense tracking to budgeting and beyond,
              our tools simplify your financial journey, so you can focus on
              what matters most.
            </Typography>
          </CardContent>
        </CardItem>
        <CardItem sx={{ maxWidth: 345 }}>
          <CardIcon>
            <AccountBalanceWalletIcon fontSize="inherit" />
          </CardIcon>
          <CardContent>
            <Header>Stay in control of your finances</Header>
            <Typography variant="body2" color="text.secondary">
              Stay in control of your finances with ease and confidence using
              our robust financial management tools. From tracking your income
              and expenses to monitoring investments, our platform puts you in
              the
              {"driver's"} seat.
            </Typography>
          </CardContent>
        </CardItem>
      </CardsSection>
    </>
  )
}

export default Cards
