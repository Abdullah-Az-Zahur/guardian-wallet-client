
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import useRole from '../hooks/useRole'

const AgentRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <div>Loading...</div>;
  if (role === 'agent') return children
  return <Navigate to='/dashboard' />
}

export default AgentRoute

AgentRoute.propTypes = {
  children: PropTypes.element,
}