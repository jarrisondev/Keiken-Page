import { Button } from '../Globals/Button/Button'
import { HeaderStyled } from './styles'

export const Header = () => {
  return (
    <HeaderStyled>
      <picture>
        <img src='/img/icon/logo.png' alt='' />
      </picture>
      <div>
        <Button>
          GALERÍA
          <svg viewBox='0 0 72.72 72.719'>
            <path d='M72.72,65.686H0L36.36,7.034L72.72,65.686z M5.388,62.686h61.943L36.36,12.727L5.388,62.686z' />
          </svg>
        </Button>
        <br />
        <Button>
          CARTAS
          <svg viewBox='0 0 72.72 72.719'>
            <g>
              <path d='M72.72,65.686H0L36.36,7.034L72.72,65.686z M5.388,62.686h61.943L36.36,12.727L5.388,62.686z' />
            </g>
          </svg>
        </Button>
      </div>

      <a
        href='https://www.whatsapp.com/catalog/573207454040/?app_absent=0'
        target='_blank'
      >
        <span>PEDIR AHORA</span>
      </a>
      {/* <picture>
          <img src='' alt='' />
        </picture> */}
    </HeaderStyled>
  )
}
