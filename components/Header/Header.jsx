import { useContext, useEffect } from 'react'
import { Button } from '../Globals/Button/Button'
import { HeaderStyled } from './styles'
import { GlobalContext } from '../../context/GlobalContext'

export const Header = () => {
  const { optionToken, setOptionToken } = useContext(GlobalContext)

  let button1 = ''
  let button2 = 'activeClass'

  //add or remove the class to buttons
  if (optionToken) {
    button1 = ''
    button2 = 'activeClass'
  } else {
    button1 = 'activeClass'
    button2 = ''
  }
  //set the optionToken
  const HandleButtons = (e) => {
    if (e.target.firstChild.textContent === 'GALERÍA') {
      setOptionToken(false)
    } else {
      setOptionToken(true)
    }
  }

  return (
    <HeaderStyled>
      <picture>
        <img src='/img/logo.png' alt='' />
      </picture>
      <div>
        <Button activeClass={button1} event={HandleButtons}>
          GALERÍA
          <svg viewBox='0 0 72.72 72.719'>
            <path d='M72.72,65.686H0L36.36,7.034L72.72,65.686z M5.388,62.686h61.943L36.36,12.727L5.388,62.686z' />
          </svg>
        </Button>
        <br />
        <Button activeClass={button2} event={HandleButtons}>
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
    </HeaderStyled>
  )
}
