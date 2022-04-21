import { COOKIE_KEYS } from '../../interfaces/next/cookieKeys'
import cookie from 'js-cookie'
import { iUserNoteTabs } from '../../interfaces/logics'

const useUserTabs = () => {
  const getTabs = (): iUserNoteTabs => {
    const _cookie = cookie.get(COOKIE_KEYS.NOTE_TABS);
    if (_cookie) return JSON.parse(atob(_cookie)) as iUserNoteTabs
    return []
  }
  const addTab = (notepadName: string) => {
    const tabs = [...getTabs()];
    tabs.push(notepadName);

    const tabsSstringifiedAndEncoded = btoa(JSON.stringify(tabs));
    cookie.set(COOKIE_KEYS.NOTE_TABS, tabsSstringifiedAndEncoded)
    window.location.reload()
  }

  const removeTab = (notepadName: string) => {
    let tabs = [...getTabs()];
    tabs = tabs.filter(tab => tab !== notepadName);

    const tabsSstringifiedAndEncoded = btoa(JSON.stringify(tabs));
    cookie.set(COOKIE_KEYS.NOTE_TABS, tabsSstringifiedAndEncoded)
    window.location.reload()
  }

  return {
    addTab,
    removeTab,
  }
}

export default useUserTabs
