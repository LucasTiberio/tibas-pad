import { iAuthenticationToggleLoginForm } from './interface'
import { Toggler } from './style'

const AuthenticationToggleLoginForm = ({
  toggleLoginForm,
}: iAuthenticationToggleLoginForm): JSX.Element => {
  return <Toggler onClick={toggleLoginForm} />
}

export default AuthenticationToggleLoginForm
