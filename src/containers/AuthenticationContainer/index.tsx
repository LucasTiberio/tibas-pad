import React from 'react'
import AuthenticationLogin from '../../components/AuthenticationLogin'
import useAuthentication from '../../logic/useAuthentication'

const AuthenticationContainer: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuthentication()

  if (!isAuthenticated) return <AuthenticationLogin />
  if (children) return <React.Fragment>{children}</React.Fragment>
  return null
}

export default AuthenticationContainer
