import type { NextPage } from 'next'
import Head from 'next/head'
import AuthenticationContainer from '../src/frontend/containers/AuthenticationContainer'
import VirtualNotePad from '../src/frontend/containers/VirtualNotePad'
import ContextsProvider from '../src/frontend/contexts/ContextsProvider'

const DynamicNotepad: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tibas Pad : Note</title>
      </Head>

      <main>
        <ContextsProvider>
          <AuthenticationContainer>
            <VirtualNotePad />
          </AuthenticationContainer>
        </ContextsProvider>
      </main>
    </div>
  )
}

export default DynamicNotepad
