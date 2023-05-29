import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CardComponent, Container } from './styled'
import { Link, NavLink } from 'react-router-dom'

const BasicInfo = () => {
  return (
    <>
      <Container>
        <CardComponent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Monthly incomes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              5237,63 PLN
            </Typography>
          </CardContent>
        </CardComponent>
        <CardComponent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Annual incomes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              62851,56
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
              20
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
              2000,04PLN
            </Typography>
          </CardContent>
        </CardComponent>
        <CardComponent>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Monthly spending limit
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2000,04PLN / 14324232 PLN
            </Typography>
          </CardContent>
        </CardComponent>
      </Container>
    </>
  )
}

export default BasicInfo
