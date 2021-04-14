import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background: #f7e9e0;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.668);
  display: flex;
  flex-direction: column;

  height: 100vh;
  justify-content: center;
  position: relative;
  width: 19vw;

  z-index: 1;

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
    left: 2.2vw;
    padding: 0.7vw 0.7vw;

    position: absolute;
    right: 2.2vw;
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
        height: 0.2vw;

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

  @media (max-width: 650px) {
    height: auto;
    width: 100%;
  }
  @media (max-width: 450px) {
    align-items: center;
    flex-direction: row;
    grid-row: 1;
    height: 50px;

    justify-content: space-between;
    position: sticky;
    top: 0;
    width: 100%;

    picture {
      margin: 0;
      min-height: 8vh;
      position: static;
      width: 30%;

      img {
        width: 65%;
      }
    }

    div {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0;

      width: 30%;
    }

    a {
      height: 40%;
      margin-right: 3%;
      padding: 0 1% 1% 1%;
      position: static;

      width: 20%;

      span {
        font-size: 1.9vw;
      }
    }
  }
`
