import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import useAuthentication from '../src/logic/useAuthentication'

function MyApp({ Component, pageProps }: AppProps) {
  const { isAuthenticated, setAuthenticationLocalStorage } = useAuthentication()

  useEffect(() => {
    if (!isAuthenticated) {
      const promptValue = prompt('??')
      if (promptValue === '1906') setAuthenticationLocalStorage('ok')
    }
  }, [isAuthenticated, setAuthenticationLocalStorage])

  // useEffect(() => {
  //   if (!isAuthenticated) return
  // }, [isAuthenticated])

  if (!isAuthenticated) return null

  return <Component {...pageProps} />
}

export default MyApp
