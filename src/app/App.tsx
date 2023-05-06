import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'

const App = () => (
  <Routes>
    <Route path={'/register'} element={<Register />} />
  </Routes>
)

export default App
