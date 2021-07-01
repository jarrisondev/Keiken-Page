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

      img {
        width: 100%;
        height: 32rem;
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
    top: 0;
    display: flex;
    position: absolute;

    user-select: none;
    width: 100vw;
    height: inherit;
    z-index: 2;

    span {
      background-color: #64c4d6cc;
      border: 0.1rem solid #64c4d6;
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
    }
  }
`
