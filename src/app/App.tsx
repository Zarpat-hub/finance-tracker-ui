import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/public/Register'
import Login from './pages/public/Login'
import ActivateAccount from './pages/public/ActivateAccount'
import Landing from './pages/public/Landing'
import UserPage from './pages/private/UserPage'
import NotFound from './pages/public/NotFound'
import Balance from './pages/private/Balance'
import Goals from './pages/private/Goals'
import GuardedRoute from './helpers/GuardedRoute'
import RegistrationInfo from './pages/public/RegistrationInfo'
import Profile from './pages/private/Profile'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Landing />} />
      <Route path={'/activate-account/:token'} element={<ActivateAccount />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/register-info'} element={<RegistrationInfo />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/user'} element={<GuardedRoute element={UserPage} />}>
        <Route index path={'goals'} element={<Goals />} />
        <Route path={'balance'} element={<Balance />} />
        <Route path={'profile'} element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
