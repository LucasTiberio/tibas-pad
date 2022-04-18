import Homepage from '../src/containers/Homepage'
import type { NextPage } from 'next'
import Head from 'next/head'
import GoogleAd from '../src/components/GoogleAd'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tibas Pad : Home</title>
      </Head>

      <main>
        <Homepage />
        <GoogleAd
          slot='6299240882'
        />
      </main>
    </div>
  )
}

export default Home
