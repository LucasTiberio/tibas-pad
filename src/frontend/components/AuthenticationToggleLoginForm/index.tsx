import { iAuthenticationToggleLoginForm } from './interface'
import { Toggler } from './style'

const AuthenticationToggleLoginForm = ({
  toggleLoginForm,
}: iAuthenticationToggleLoginForm): JSX.Element => {
  return <Toggler src='/images/padlock.png' alt="Padlock" onClick={toggleLoginForm} />
}

export default AuthenticationToggleLoginForm
