import Homepage from '../src/containers/Homepage'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tibas Pad : Home</title>
      </Head>

      <main>
        <Homepage />
      </main>
    </div>
  )
}

export default Home
