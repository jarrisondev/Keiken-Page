import styled from 'styled-components'

export const ButtonStyled = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: #38606e;

  cursor: pointer;
  display: flex;
  outline: none;
  position: relative;

  p {
    font-size: 0.7rem;
    font-weight: 300;
    margin-right: 0.3rem;
    width: max-content;
  }

  svg {
    margin-bottom: 0.12rem;
    transform: rotate(0.088turn);
    transition: all 0.7s;
    width: 0.58rem;

    path {
      stroke: #38606e;
      stroke-opacity: 1;
      stroke-width: 0.1rem;
    }
  }

  &:hover {
    color: #64c4d6;

    svg {
      margin-top: 0.3vw;
      transform: rotate(1.25turn);

      path {
        stroke: #64c4d6;
        fill: #64c4d6;
      }
    }
  }

  &::before {
    background-color: #64c4d6;
    bottom: 0;
    content: '';
    height: 0.03rem;

    margin: 0.1rem 0 0 0.1rem;
    position: absolute;
    transform: scaleX(0);
    transition: all 0.5s;

    width: 71%;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media (min-width: 550px) {
    p {
      font-size: 1rem;
    }
  }
`
