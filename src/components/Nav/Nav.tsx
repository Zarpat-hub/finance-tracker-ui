import { NavLink, useNavigate } from 'react-router-dom'
import WealthWiseLogo from '../../assets/logos/wealthWiseMain.svg'
import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import {
  NavBar,
  NavBarButton,
  NavBarLogo,
  NavBarMenuItem,
  NavBarUser,
} from './styled'
import { LabelImg } from '../ProfilePage/UserInfo/styled'

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

  // mock - take from userState
  const [img, setImg] = useState(
    'https://localhost:7083/UserFiles/string-test01.png'
  )

  return (
    <NavBar>
      <NavBarLogo>
        <NavLink to="goals">
          <img src={WealthWiseLogo} />
        </NavLink>
        <NavBarMenuItem to="goals">My goals</NavBarMenuItem>
        <NavBarMenuItem to="balance">Balance</NavBarMenuItem>
      </NavBarLogo>
      <NavBarUser>
        <NavBarButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <LabelImg src={img} />
        </NavBarButton>
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
