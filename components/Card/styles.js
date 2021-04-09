import styled from 'styled-components'

export const CardStyled = styled.picture`
  width: 37vw;
  height: 100vh;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 50.999vw;
    right: 50.999vw;
    z-index: 2;
    width: 10vw;

    span {
      background-color: #64c4d6;
      display: flex;
      justify-content: center;
      width: 5vw;
      height: 4.5vw;
      cursor: pointer;

      &:hover {
        background-color: #509aa7;
      }

      svg {
        width: 2vw;

        path {
          fill: #f7e9e0;
        }
      }
    }
  }
`
