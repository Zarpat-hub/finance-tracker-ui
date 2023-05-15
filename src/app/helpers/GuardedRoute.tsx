import { BrowserRouter as Router, Navigate } from 'react-router-dom'

type GuardedRouteProps = {
  element: React.ElementType
}

const GuardedRoute = ({ element: Element, ...rest }: GuardedRouteProps) => {
  if (!localStorage.getItem('jwtToken')) return <Navigate to="/login" replace />
  return <Element {...rest} />
}
export default GuardedRoute
