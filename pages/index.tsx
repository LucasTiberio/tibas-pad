import type { NextPage } from 'next'
import Head from 'next/head'
import VirtualNotePad from '../containers/VirtualNotePad'
import ContextsProvider from '../contexts/ContextsProvider'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tibas Pad</title>
      </Head>

      <main>
        <ContextsProvider>
          <VirtualNotePad />
        </ContextsProvider>
      </main>
    </div>
  )
}

export default Home
