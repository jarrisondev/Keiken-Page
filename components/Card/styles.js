import styled from 'styled-components'

export const CardStyled = styled.picture`
  max-height: 100vh;
  user-select: none;
  width: 37vw;
  overflow: hidden;

  .slider-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 37vw;

    img {
      max-height: 100%;
      width: 100%;
    }
  }

  div {
    bottom: 0;
    display: flex;
    left: 50.999vw;
    position: fixed;

    right: 50.999vw;
    width: 10vw;
    z-index: 2;

    span {
      background-color: #64c4d650;
      cursor: pointer;
      display: flex;
      height: 4.5vw;

      justify-content: center;
      width: 5vw;

      &:hover {
        background-color: #64c4d6;
      }

      svg {
        width: 2vw;

        path {
          fill: #f7e9e080;
        }
      }

      &:hover {
        svg {
          transform: rotateY(0.5turn);

          path {
            fill: #f7e9e0;
          }
        }
      }
    }
  }
`
