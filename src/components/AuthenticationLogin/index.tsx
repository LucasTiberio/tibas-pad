import React, { useState } from 'react'
import AuthenticationLoginForm from '../AuthenticationLoginForm'
import AuthenticationToggleLoginForm from '../AuthenticationToggleLoginForm'

const AuthenticationLogin = () => {
  const [showLoginForm, setShowLoginForm] = useState(false)

  const toggleLoginForm = () => setShowLoginForm((prev) => !prev)

  return (
    <React.Fragment>
      <AuthenticationToggleLoginForm toggleLoginForm={toggleLoginForm} />
      {showLoginForm && <AuthenticationLoginForm />}
    </React.Fragment>
  )
}

export default AuthenticationLogin
