import { NavLink, useNavigate } from 'react-router-dom'
import WealthWiseLogo from '../../assets/logos/wealthWiseMain.svg'
import { Button, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { NavBar, NavBarLogo, NavBarUser } from './styled'

const Nav = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('jwtToken')
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
    <NavBar>
      <NavBarLogo>
        <NavLink to="goals" className="link">
          <img src={WealthWiseLogo} />
        </NavLink>
        <NavLink to="goals" className="link">
          My goals
        </NavLink>
        <NavLink to="balance" className="link">
          Balance
        </NavLink>
      </NavBarLogo>
      <NavBarUser>
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
      </NavBarUser>
    </NavBar>
  )
}

export default Nav
