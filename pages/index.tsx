import type { NextPage } from 'next'
import Head from 'next/head'
import VirtualNotePad from '../src/containers/VirtualNotePad'
import ContextsProvider from '../src/contexts/ContextsProvider'

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
