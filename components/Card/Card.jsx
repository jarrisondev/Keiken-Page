import { CardStyled } from './styles'
import { useContext, useRef } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export const Card = () => {
  const { data } = useContext(GlobalContext)
  const sliderContainer = useRef(null)

  const back = () => {
    let slider = sliderContainer.current
    let index = sliderContainer.current.childNodes.length - 1
    let lastImg = sliderContainer.current.childNodes[index]

    slider.insertBefore(lastImg, slider.firstChild)
    slider.style.transition = 'none'
    slider.style.transform = 'translateY(-100vh)'

    setTimeout(() => {
      slider.style.transition = 'all .6s'
      slider.style.transform = 'translateY(0)'
    }, 3)
  }

  const next = () => {
    let slider = sliderContainer.current
    let firstImg = sliderContainer.current.childNodes[0]

    slider.style.transition = 'all .6s'
    slider.style.transform = 'translateY(-100vh)'

    const transition = () => {
      slider.style.transition = 'none'
      slider.style.transform = 'translateY(0)'
      slider.appendChild(firstImg)
      slider.removeEventListener('transitionend', transition)
    }

    slider.addEventListener('transitionend', transition)
  }

  return (
    <CardStyled>
      <span className='slider-container' ref={sliderContainer}>
        {data.map((e) => {
          return <img key={e.id} src={`/img${e.url}`} alt='' />
        })}
      </span>
      <div className='arrows-container'>
        <span className='arrow 1' onClick={() => next()}>
          <svg viewBox='0 0 448 512'>
            <path d='M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z'></path>
          </svg>
        </span>
        <span className='arrow 2' onClick={() => back()}>
          <svg viewBox='0 0 448 512'>
            <path d='M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z'></path>
          </svg>
        </span>
      </div>
    </CardStyled>
  )
}
