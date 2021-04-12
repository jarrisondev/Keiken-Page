import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background: #f7e9e0;
  z-index: 20;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.668);
  display: flex;
  flex-direction: column;

  height: 100vh;
  justify-content: center;
  position: relative;
  width: 19vw;

  picture {
    align-items: center;
    display: flex;
    height: 15%;
    justify-content: center;

    margin-top: 1vw;
    position: absolute;
    top: 0;
    width: 100%;

    img {
      width: 90%;
    }
  }

  div {
    margin-left: 1.7vw;
  }

  a {
    background: #64c4d6;
    bottom: 1.3vw;
    color: #38606e;
    left: 1.7vw;
    padding: 0.7vw 0.7vw;

    position: absolute;
    right: 1.7vw;
    text-decoration: none;
    text-align: center;

    width: 13vw;

    span {
      font-size: 1.7vw;
      font-weight: 600;
      position: relative;

      &::before {
        background-color: #38606e;
        bottom: 0;
        content: '';
        height: 0.2rem;

        position: absolute;
        transition: all 0.6s;
        width: 100%;
      }
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
`
