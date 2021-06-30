import { useEffect, useState } from 'react'
import { LoadingStyled } from './styles'
export const Loading = () => {
  const [loadingToken, setLoadingToken] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setLoadingToken(false)
    }, 4000)
  }, [])

  return (
    <LoadingStyled lt={loadingToken}>
      <img src='/img/logo.jpg' alt='Logo de bienvenida' />
      <br />
      <div className='container-circles'>
        <div className='first-circle' />
        <div className='second-circle' />
        <div className='third-circle' />
        <div className='four-circle' />
      </div>
    </LoadingStyled>
  )
}
