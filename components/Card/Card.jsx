import { CardStyled } from './styles'

export const Card = ({ url }) => {
  return (
    <CardStyled>
      <img src={url} alt='Carta' />
    </CardStyled>
  )
}
