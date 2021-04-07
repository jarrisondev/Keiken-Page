import { ButtonStyled } from './styles'

export const Button = ({ event, children }) => {
  return (
    <>
      <ButtonStyled onClick={event}>{children}</ButtonStyled>
    </>
  )
}
