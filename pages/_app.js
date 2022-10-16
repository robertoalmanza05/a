import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return <>
   <Head>
        <title>Create Next App</title>
        <meta name="description" content="news apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <header>aaaaaaaaaaaa</header>
  <Component {...pageProps} />
  </>
}

export default MyApp
