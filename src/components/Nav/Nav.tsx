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
import { useSelector } from 'react-redux'
import { UserData } from '../../state/userData'

const Nav = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('WealthWise')
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

  const handleConfiguration = () => {
    navigate('/user/config')
    handleClose()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const userState = useSelector((state: any) => state.userData)
  const { userImg }: UserData = userState

  return (
    <NavBar>
      <NavBarLogo>
        <NavLink to="goals">
          <img src={WealthWiseLogo} />
        </NavLink>
        <NavBarMenuItem to="goals">Dashboard</NavBarMenuItem>
        <NavBarMenuItem to="balance">Goals</NavBarMenuItem>
      </NavBarLogo>
      <NavBarUser>
        <NavBarButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {userImg ? <LabelImg src={userImg} /> : <LabelImg />}
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
          <MenuItem onClick={handleConfiguration}>Configuration</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </NavBarUser>
    </NavBar>
  )
}

export default Nav
