import { Link, NavLink, useNavigate } from 'react-router-dom'
import WealthWiseLogo from '../../assets/logos/wealthWiseMain.svg'
import { useUser } from '../../app/context/UserContext'
import './Nav.scss'
import { Button, Menu, MenuItem } from '@mui/material'
import React from 'react'

const Nav = () => {
  const navigate = useNavigate()
  const { logout } = useUser()

  const handleLogout = () => {
    localStorage.removeItem('jwtToken')
    logout()
    navigate('/')
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleProfile = () => {
    navigate('/user/profile')
    handleClose()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <nav className="nav">
      <section className="nav__logo">
        <img src={WealthWiseLogo} className="nav__logo--img" />
        <NavLink to="goals" className="link">
          My goals
        </NavLink>
        <NavLink to="balance" className="link">
          Balance
        </NavLink>
      </section>
      <section className="nav__user">
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          User
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </section>
    </nav>
  )
}

export default Nav
