import './styles/normalize.css'
import './styles/globals.css'
import { useState, useRef } from 'react'
import { Loading } from './components/Loading/Loading.jsx'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { Aside } from './components/Aside/Aside'
import { CARTAS_URI } from './data/cartas.json'
import { GALLERY_URL } from './data/gallery.json'

function App() {
  const [data, setData] = useState([true, CARTAS_URI, GALLERY_URL])
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  return (
    <>
      <Loading />
      <div className='container'>
        <Header
          data={data}
          setData={setData}
          slider1={slider1}
          slider2={slider2}
        />
        <Card data={data} slider1={slider1} slider2={slider2} />
        <Aside />
      </div>
    </>
  )
}

export default App
