import { useState, useContext } from 'react'
import { Button } from '../Globals/Button/Button'
import { HeaderStyled } from './styles'
import { GlobalContext } from '../../context/GlobalContext'
import { CARTAS_URI } from '../../data/cartas.json'
import { GALLERY_URL } from '../../data/gallery.json'

export const Header = () => {
  const [optionToken, setOptionToken] = useState(true)
  const { setData, sliderContainer } = useContext(GlobalContext)

  let button1 = false,
    button2 = true

  //add or remove the class to buttons
  if (optionToken) {
    button1 = false
    button2 = true
  } else {
    button1 = true
    button2 = false
  }
  //set the optionToken
  const HandleButtons = (e) => {
    let img = sliderContainer.current.children[0]

    // transition image function
    img.style.transition = 'all .1s'
    img.style.transform = 'scale(0)'

    const transition = () => {
      img.style.transform = 'scale(1)'
      img.removeEventListener('transitionend', transition)
    }
    img.addEventListener('transitionend', transition)

    setTimeout(() => {
      if (e.target.firstChild.textContent === 'GALERÍA') {
        setData(GALLERY_URL)
        setOptionToken(false)
      } else {
        setData(CARTAS_URI)
        setOptionToken(true)
      }
    }, 50)
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
