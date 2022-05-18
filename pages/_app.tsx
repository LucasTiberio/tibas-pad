import '../src/frontend/styles/global.css'
import 'moment/locale/pt-br'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
