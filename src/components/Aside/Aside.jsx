import { AsideStyled } from './styles'

export const Aside = () => {
  return (
    <AsideStyled>
      <section className='aside-section1'>
        <p>
          "Hola!! te damos la bienvenida a
          <a href='https://www.instagram.com/keiken_medellin/' target='_blank'>
            @keiken_heladeria
          </a>
          , Esperamos que estés muy bien, somos una heladería que quiere brindar
          experiencias y productos llenos de <span>amor</span>. Tenemos toda una
          barra de frutas y toppings dulces para que crees el mejor helado del
          mundo, tenemos helado suave de yogurt, café y unos espectaculares
          jugos naturales. Deseamos que <span>disfruten</span> de su estancia."
        </p>
      </section>
      <br />
      <section className='aside-section2'>
        <h3>Horario:</h3>
        <ul>
          <li>
            <span> Lunes a viernes:</span>
            <p> 04:00pm - 11:00pm</p>
          </li>
          <li>
            <span> Sábado y Domingo:</span>
            <p> 04:00pm - 12:00am</p>
          </li>
        </ul>
      </section>
      <br />
      <section className='aside-section3'>
        <p>
          consumo en el lugar
          <svg viewBox='0 0 17 12' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 5.32L4.64865 10L16 1' />
          </svg>
        </p>
        <p>
          entrega a domicilio
          <svg viewBox='0 0 17 12' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 5.32L4.64865 10L16 1' />
          </svg>
        </p>
        <p>
          para llevar
          <svg viewBox='0 0 17 12' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 5.32L4.64865 10L16 1' />
          </svg>
        </p>
      </section>
      <footer>
        <p>
          <a
            href='https://github.com/jarrisoncano/Keiken-Page'
            target='_blank'
            rel='noreferrer'>
            2021 - Todos los derechos reservados
          </a>
        </p>
        <div>
          <a
            href='https://www.google.es/maps/dir//Helader%C3%ADa+Keiken/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e4429a5fe791331:0xbd2fdb3985ac3e50?sa=X&ved=2ahUKEwiw_ZvrwO3vAhVQFlkFHdN2CRAQ9RcwFHoECCwQBA'
            target='_blank'
            rel='noreferrer'>
            <img src='/img/icon/map.svg' alt='Icon Map' />
          </a>
          <a
            href='https://www.instagram.com/keiken_medellin/'
            target='_blank'
            rel='noreferrer'>
            <img src='/img/icon/instagram.svg' alt='Instagram Icon' />
          </a>
        </div>
      </footer>
    </AsideStyled>
  )
}
