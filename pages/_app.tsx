import '../styles/globals.css'
import type { AppProps } from 'next/app'
import useAuthentication from '../logic/useAuthentication'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const { isAuthenticated, setAuthenticationLocalStorage } = useAuthentication()

  useEffect(() => {
    if (!isAuthenticated) {
      const promptValue = prompt('??')
      if (promptValue === '1906') setAuthenticationLocalStorage('ok')
    }
  }, [isAuthenticated, setAuthenticationLocalStorage])

  if (!isAuthenticated) return null
  else return <Component {...pageProps} />
}

export default MyApp
