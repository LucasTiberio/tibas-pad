import moment from 'moment'
import { COOKIE_KEYS } from '../interfaces/api/next/cookieKeys'
import cookie from 'js-cookie'
import { useMemo } from 'react'

interface iLocalStorageAuthentication {
  expiresAtIso: string
  value: string
}

const useAuthentication = () => {
  const setAuthenticationLocalStorage = (value: string) => {
    const valueInBase64 = btoa(value)

    const expiresAtIso = moment().add(15, 'm').toISOString()

    const valueToLocalStorage: iLocalStorageAuthentication = {
      expiresAtIso,
      value: valueInBase64,
    }

    const valueToLocalStorageStringified = JSON.stringify(valueToLocalStorage)
    cookie.set(COOKIE_KEYS.AUTHENTICATION, valueToLocalStorageStringified)
    window.location.reload()
  }

  const resetAuthenticationLocalStorage = () => {
    cookie.remove(COOKIE_KEYS.AUTHENTICATION)
  }

  const isAuthenticated = useMemo(() => {
    const cookieValue = cookie.get(COOKIE_KEYS.AUTHENTICATION) || undefined
    if (!cookieValue) return false

    const valueParsed: iLocalStorageAuthentication = JSON.parse(
      `${cookieValue}`
    )

    const storageExpiresAtMoment = moment(valueParsed.expiresAtIso)

    if (moment().isBefore(storageExpiresAtMoment)) return true

    resetAuthenticationLocalStorage()
    return false
  }, [])

  return {
    setAuthenticationLocalStorage,
    resetAuthenticationLocalStorage,
    isAuthenticated,
  }
}

export default useAuthentication
