import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => (
  <Routes>
    <Route path={'/register'} element={<Register />} />
    <Route path={'/login'} element={<Login />} />
  </Routes>
)

export default App
