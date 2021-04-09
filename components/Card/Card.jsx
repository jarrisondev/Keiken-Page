import { CardStyled } from './styles'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export const Card = () => {
  const { id, setId, data } = useContext(GlobalContext)

  const handleArrow = (type) => {
    if (type === 'up') {
      if (id < 8) {
        setId(id + 1)
      } else {
        setId(1)
      }
    }

    if (type === 'down') {
      if (id > 1) {
        setId(id - 1)
      } else {
        setId(8)
      }
    }
  }

  return (
    <CardStyled>
      <img src={`/img${data[id - 1].url}`} alt='Carta' />
      <div className='arrows-container'>
        <span className='arrow 1' onClick={() => handleArrow('up')}>
          <svg viewBox='0 0 448 512'>
            <path d='M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z'></path>
          </svg>
        </span>
        <span className='arrow 2' onClick={() => handleArrow('down')}>
          <svg viewBox='0 0 448 512'>
            <path d='M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z'></path>
          </svg>
        </span>
      </div>
    </CardStyled>
  )
}
