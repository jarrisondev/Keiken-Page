import Head from 'next/head'
import { Header } from '../components/Header/Header'
import { Card } from '../components/Card/Card'
import { Aside } from '../components/Aside/Aside'

const index = () => {
  return (
    <>
      <Head>
        <title>Keiken | Heladería </title>
        <link rel='shortcut icon' href='/img/favicon.jpg' type='image/x-icon' />
      </Head>
      <div className='container'>
        <Header />
        <Card url='/img/cartas/4.jfif' />
        <Aside />
      </div>
    </>
  )
}
export default index
