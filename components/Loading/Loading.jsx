import { LoadingStyled } from './styles'

export const Loading = () => {
  return (
    <LoadingStyled>
      <img src='/img/logo.png' alt='' />
      <br />
      <div className='container-circles'>
        <div className='first-circle'></div>
        <div className='second-circle'></div>
        <div className='third-circle'></div>
        <div className='four-circle'></div>
      </div>
    </LoadingStyled>
  )
}
