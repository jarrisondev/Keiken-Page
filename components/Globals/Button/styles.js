import styled from 'styled-components'

export const ButtonStyled = styled.p`
  color: #38606e;
  cursor: pointer;
  font-size: 1.7vw;
  font-weight: 300;

  position: relative;
  width: 8.8vw;

  svg {
    position: absolute;
    right: 0;
    transform: rotate(0.088turn);
    transition: all 0.7s;

    width: 1.6vw;

    path {
      stroke: #38606e;
      stroke-opacity: 1;
      stroke-width: 0.1vw;
    }
  }

  &:hover {
    color: #64c4d6;

    svg {
      transform: rotate(1.25turn);

      path {
        stroke: #64c4d6;
        stroke-width: 0.1vw;
        stroke-opacity: 1;
      }
    }
  }

  &::before {
    background-color: #64c4d6;
    bottom: 0;
    content: '';
    height: 0.2vw;

    margin: 0.5vw 0 0 0.3vw;
    position: absolute;
    transform: scaleX(0);
    transition: all 0.5s;

    width: 71%;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`
