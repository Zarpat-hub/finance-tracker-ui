import { BrowserRouter as Router, Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

type GuardedRouteProps = {
  element: React.ElementType
}

const GuardedRoute = ({ element: Element, ...rest }: GuardedRouteProps) => {
  const { state } = useUser()

  if (state) {
    return <Element {...rest} />
  } else {
    if (!localStorage.getItem('jwtToken')) {
      return <Navigate to="/login" replace />
    } else {
      return <Element {...rest} />
    }
  }
}
export default GuardedRoute
