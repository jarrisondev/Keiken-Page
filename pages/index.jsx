import Head from 'next/head'
import { Header } from '../components/Header/Header'

const index = () => {
  return (
    <>
      <Head>
        <title>Keiken | Heladería </title>
        <link
          rel='shortcut icon'
          href='/img/icon/logo.jpg'
          type='image/x-icon'
        />
      </Head>
      <div className='container'>
        <Header />
      </div>
    </>
  )
}
export default index
