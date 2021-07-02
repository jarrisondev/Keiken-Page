import styled from 'styled-components'

export const CardStyled = styled.picture`
  height: 32rem;
  user-select: none;
  position: relative;

  width: 100%;

  .slider-container {
    height: inherit;
    overflow: hidden;
    position: relative;
    width: 100%;

    span {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;

      width: 100%;

      img {
        height: 32rem;
        width: 100%;
      }
    }

    span:nth-of-type(1) {
      opacity: ${(props) => (props.sliderActive ? '1' : '0')};
    }

    span:nth-of-type(2) {
      opacity: ${(props) => (props.sliderActive ? '0' : '1')};
    }
  }

  .arrows-container {
    display: flex;
    position: absolute;
    height: inherit;
    top: 0;

    user-select: none;
    width: 100vw;
    z-index: 1;

    span {
      background-color: #64c4d6cc;
      cursor: pointer;
      display: flex;
      height: inherit;

      justify-content: center;
      width: 100%;

      svg {
        width: 4rem;

        path {
          fill: #f7e9e0;
        }
      }

      &:hover {
        background-color: #64c4d6;

        svg {
          transform: rotateY(0.5turn);
          transition: 400ms;

          path {
            fill: #f7e9e0;
          }
        }
      }
    }
  }

  @media (min-width: 550px) {
    .arrows-container {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    .arrows-container {
      bottom: 0;
      height: 2.8rem;
      opacity: 1 !important;
      right: -3rem;

      top: initial;
      width: 6rem;

      span {
        svg {
          width: 1rem;
        }
      }
    }
  }
`
