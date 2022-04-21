import React from 'react'
import AuthenticationLogin from '../../components/AuthenticationLogin'
import { useNotepadContext } from '../../contexts/notepad-context'
import useAuthentication from '../../logic/useAuthentication'

const AuthenticationContainer: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuthentication()
  const { notepadProtection } = useNotepadContext();

  if (!isAuthenticated && !!notepadProtection) return <AuthenticationLogin />
  if ((!notepadProtection || isAuthenticated) && children) return <React.Fragment>{children}</React.Fragment>
  return null
}

export default AuthenticationContainer
