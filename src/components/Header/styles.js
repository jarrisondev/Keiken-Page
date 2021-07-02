import styled from 'styled-components'

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: #f7e9e0;
  display: flex;
  height: 3rem;

  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;

  z-index: 2;

  picture {
    margin: 0;
    min-height: inherit;
    position: static;
    text-align: center;

    width: 6rem;

    img {
      width: 80%;
    }
  }

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0;

    margin-right: 0.5rem;
    width: 7.5rem;
  }

  a {
    align-items: center;
    background: #64c4d6;
    color: #38606e;
    display: flex;

    height: 1.5rem;
    justify-content: space-between;
    margin-right: 0.5rem;
    padding: 0 0.3rem;

    padding-right: 1%;
    width: 4.5rem;

    span {
      font-size: 0.5rem;
    }

    svg {
      width: 0.8rem;
    }

    &:hover {
      background: #509aa7;
      color: #f7e9e0;

      span {
        &::before {
          background: #f7e9e0;
        }
      }
    }
  }

  @media (min-width: 550px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    width: auto;

    picture {
      width: 100%;
    }

    div {
      flex-direction: column;
    }

    a {
      font-weight: 600;
      height: 1.8rem;
      justify-content: space-around;
      width: 100%;

      span {
        font-size: 0.8rem;
        position: relative;
        text-decoration: none;

        &::before {
          background-color: #38606e;
          bottom: 0;
          content: '';
          height: 0.1rem;

          position: absolute;
          transition: all 0.6s;
          width: 100%;
        }
      }

      svg {
        width: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    a {
      border-radius: 0 0 0 1rem;
      height: 2rem;

      span {
        font-size: 0.92rem;
      }

      svg {
        width: 1.2rem;
      }
    }
  }
`
