import styled from 'styled-components'

export const AsideStyled = styled.aside`
  background-color: #38606e;
  color: #f7e9e0;
  display: flex;

  flex-direction: column;
  justify-content: center;
  padding: 0.8rem;
  position: relative;

  text-transform: uppercase;

  p {
    font-size: 0.75rem;
    font-weight: 100;
    text-align: justify;
  }

  .aside-section1 {
    span {
      color: #64c4d6;
      font-weight: 700;
    }
    a {
      color: #64c4d6;
      font-weight: 700;
      text-decoration: none;
    }
  }

  .aside-section2 {
    font-size: 0.8rem;

    h3 {
      font-size: inherit;
    }

    ul {
      li {
        color: #64c4d6;
        font-size: inherit;
        font-weight: 100;
        list-style-position: inside;

        margin-top: 0.2rem;

        span {
          color: #f7e9e0;
          font-weight: 700;
          margin: -0.4vw 0 0 -1vw;
        }

        p {
          color: #f7e9e0;
          display: inline;
          font-size: inherit;
        }

        &::before {
          height: 30px;
          width: 20px;
        }
      }
    }
  }

  .aside-section3 {
    p {
      text-align: left;

      svg {
        fill: none;
        height: 0.8rem;
        margin-left: 0.3rem;
        width: 1rem;

        path {
          stroke: #04dc00;
          stroke-width: 0.1rem;
        }
      }
    }
  }

  footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 0.7rem;

    width: 100%;

    p {
      font-size: 0.65rem;
      font-weight: 400;

      a {
        color: #f7e9e0;
        text-decoration: none;
      }
    }

    div {
      align-items: center;
      display: flex;

      a {
        img {
          transform: scale(0.9);
          transition: 0.3s;
          width: 1rem;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      a:nth-of-type(1) {
        margin-right: 1.5vw;
      }
    }
  }

  @media (min-width: 550px) {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`
