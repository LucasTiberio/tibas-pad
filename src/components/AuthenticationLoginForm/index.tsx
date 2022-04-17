import React, { useMemo, useState } from 'react'
import { TPAD_PASSWORD } from '../../commons/consts'
import useAuthentication from '../../logic/useAuthentication'
import { arrayPermutation } from './helper'
import { Container, GridWrapper, LoginOption, PasswordContainer } from './style'

const AuthenticationLoginForm = () => {
  const { setAuthenticationLocalStorage } = useAuthentication()
  const [password, setPassword] = useState<string[]>([])

  const generatedLoginOptions = useMemo(() => {
    const uniques: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(
      () => Math.random() - 0.5
    )

    const pairs = arrayPermutation(uniques)
    return pairs
  }, [])

  const handleClickPasswordOption = (option?: string) => {
    if (option) setPassword((prev) => [...prev, option])
  }

  const handleSubmitLogin = () => {
    if (password.length !== TPAD_PASSWORD.length) return setPassword([])

    const passwordOptionsAreCorrect = password.reduce((prev, curr, index) => {
      if (prev === 'false') return prev

      const passwordChar = TPAD_PASSWORD.charAt(index)
      console.log({ passwordChar, curr })
      if (curr.includes(passwordChar)) return 'true'
      return 'false'
    }, 'true')

    setPassword([])
    if (passwordOptionsAreCorrect === 'false') return

    setAuthenticationLocalStorage('ok')
  }

  return (
    <Container>
      <PasswordContainer>{password.map(() => '*')}</PasswordContainer>
      <GridWrapper>
        {generatedLoginOptions.map((loginOption) => (
          <LoginOption
            key={`option-item-${loginOption}`}
            onClick={() => handleClickPasswordOption(loginOption)}
          >
            {loginOption}
          </LoginOption>
        ))}
        <LoginOption onClick={handleSubmitLogin}>Enviar</LoginOption>
      </GridWrapper>
    </Container>
  )
}

export default AuthenticationLoginForm
