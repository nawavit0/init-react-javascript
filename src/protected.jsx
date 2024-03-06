import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({ children, requireRoles = [] }) => {
  const userRole = sessionStorage.getItem('userRole')
  const isAuthen = !!sessionStorage.getItem('isAuth')

  if (!isAuthen) {
    return <Navigate to="/?preferlogin=true" replace />
  }

  const matchRoles = !requireRoles.length || requireRoles.includes(userRole)
  if (!matchRoles) {
    return <Navigate to="/?noPermissionRole=true" replace />
  }

  return children
}

ProtectRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requireRoles: PropTypes.arrayOf(PropTypes.string),
}

export default ProtectRoute
