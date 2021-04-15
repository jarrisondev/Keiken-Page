import './styles/normalize.css'
import './styles/globals.css'
import { useEffect, useState, useRef } from 'react'
import { Loading } from './components/Loading/Loading.jsx'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { Aside } from './components/Aside/Aside'
import { GlobalContext } from './context/GlobalContext'
import { CARTAS_URI } from './data/cartas.json'

function App() {
  const [data, setData] = useState(CARTAS_URI)
  const [optionToken, setOptionToken] = useState(true)
  const [loadingToken, setLoadingToken] = useState(true)
  const sliderContainer = useRef(null)

  useEffect(() => {
    setInterval(() => {
      setLoadingToken(false)
    }, 4000)
  }, [])

  return (
    <>
      <GlobalContext.Provider
        value={{ optionToken, setOptionToken, data, setData, sliderContainer }}
      >
        {loadingToken && <Loading />}
        <div className='container'>
          <Header />
          <Card />
          <Aside />
        </div>
      </GlobalContext.Provider>
    </>
  )
}

export default App
