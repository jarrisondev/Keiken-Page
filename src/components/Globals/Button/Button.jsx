import { useContext } from 'react'
import { ButtonStyled } from './styles'

export const Button = ({ event, children, activeClass }) => {
  return (
    <>
      <ButtonStyled className={activeClass} onClick={event}>
        {children}
      </ButtonStyled>
    </>
  )
}
