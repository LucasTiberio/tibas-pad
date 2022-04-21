import moment from 'moment'
import { COOKIE_KEYS } from '../../interfaces/next/cookieKeys'
import cookie from 'js-cookie'
import { useMemo } from 'react'
import { iAuthentication } from '../../interfaces/logics'

const useAuthentication = (notepadName?: string) => {
  const setAuthenticationCookie = (notepadName: string, keyValue: 'ok' | 'error') => {
    const valueInBase64 = btoa(keyValue)
    const notepadNameInBase64 = btoa(notepadName);

    const expiresAtIso = moment().add(15, 'm').toISOString()

    const valueToCookie: iAuthentication = {
      expiresAtIso,
      notepadName: notepadNameInBase64,
      value: valueInBase64,
    }
    const valueToCookieStringified = JSON.stringify(valueToCookie)
    cookie.set(COOKIE_KEYS.AUTHENTICATION, valueToCookieStringified)
    window.location.reload()
  }

  const resetAuthenticationCookie = () => {
    cookie.remove(COOKIE_KEYS.AUTHENTICATION)
  }

  const isAuthenticated = useMemo(() => {
    const cookieValue = cookie.get(COOKIE_KEYS.AUTHENTICATION) || undefined
    if (!cookieValue) return false

    const valueParsed: iAuthentication = JSON.parse(
      `${cookieValue}`
    )

    if (notepadName && notepadName !== valueParsed.notepadName) return false;

    const storageExpiresAtMoment = moment(valueParsed.expiresAtIso)

    if (moment().isBefore(storageExpiresAtMoment)) return true

    resetAuthenticationCookie()
    return false
  }, [notepadName])

  return {
    setAuthenticationCookie,
    resetAuthenticationCookie,
    isAuthenticated,
  }
}

export default useAuthentication
