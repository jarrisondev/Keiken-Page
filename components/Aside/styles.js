import styled from 'styled-components'

export const AsideStyled = styled.aside`
  background-color: #38606e;
  box-shadow: 0 -2px 30px rgba(0, 0, 0, 0.668);
  color: #f7e9e0;
  display: flex;

  flex-direction: column;
  justify-content: center;
  padding: 3vw 2vw 2vw 2vw;
  position: relative;

  text-transform: uppercase;
  width: 40vw;

  p {
    font-size: 1.4vw;
    font-weight: 100;
  }

  .aside-section1 {
    position: absolute;
    top: 4vw;

    span {
      color: #64c4d6;
      font-weight: 700;
    }
  }

  .aside-section2 {
    margin-top: 9vw;

    h3 {
      font-size: 1.5vw;
    }

    ul {
      li {
        color: #64c4d6;
        font-size: 2vw;
        font-weight: 100;
        list-style-position: inside;

        margin-top: 0.8vw;

        span {
          color: #f7e9e0;
          font-size: 1.4vw;
          font-weight: 700;
          margin: -0.4vw 0 0 -1vw;
        }

        p {
          color: #f7e9e0;
          display: inline;
        }

        &::before {
          height: 30px;
          width: 20px;
        }
      }
    }
  }

  .aside-section3 {
    margin-top: 2vw;

    p {
      margin-top: 0.5vw;

      svg {
        height: 13px;
        fill: none;
        margin-left: 0.5vw;
        width: 17px;

        path {
          stroke: #04dc00;
          stroke-width: 1.5;
        }
      }
    }
  }

  footer {
    align-items: center;
    bottom: 1vw;
    position: absolute;
    display: flex;

    justify-content: space-between;
    right: 2vw;
    width: 80%;

    p {
      font-size: 1.1vw;
      font-weight: 400;
      a {
        text-decoration: none;
        color: #f7e9e0;
      }
    }

    div {
      align-items: center;
      display: flex;

      a {
        img {
          width: 1.5vw;
          transition: 0.3s;
          transform: scale(0.9);

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      a:nth-of-type(1) {
        margin-right: 1.5vw;
        img {
          width: 1.6vw;
        }
      }
    }
  }

  @media (max-width: 950px) {
    width: 35vw;
  }

  @media (max-width: 750px) {
    width: 30vw;

    footer {
      align-items: center;
      width: 75%;

      div {
        a:nth-of-type(1) {
          margin-bottom: 0.2vw;
        }
      }
    }
  }

  @media (max-width: 650px) {
    display: grid;
    grid-column: 1 / 3;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40% 40% 20%;

    width: auto;

    p {
      font-size: 1.8vw;
    }

    .aside-section2 {
      margin-top: 2vw;
      grid-row: 2;

      h3 {
        font-size: 1.9vw;
      }
      ul {
        li {
          font-size: 2.2vw;

          span {
            font-size: 1.8vw;
          }
        }
      }
    }

    .aside-section3 {
      grid-column: 2;
      grid-row: 2;
    }

    footer {
      bottom: 0;
      grid-column: 1 / 3;
      right: 0;
      width: 100%;

      p {
        font-size: 1.8vw;
      }

      div {
        a {
          img {
            width: 2.5vw;
          }
        }

        a:nth-of-type(1) {
          margin-right: 2vw;
          img {
            width: 2.5vw;
          }
        }
      }
    }
  }

  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40% 20% 20% 20%;

    p {
      font-size: 3.5vw;
    }

    .aside-section1 {
      margin-left: 2vw;
    }

    .aside-section2 {
      margin-top: 6vw;
      grid-row: 2;
      width: 100%;

      h3 {
        font-size: 3.5vw;
      }
      ul {
        li {
          font-size: 3.5vw;

          span {
            font-size: 3.5vw;
          }
        }
      }
    }

    .aside-section3 {
      grid-row: 3;
      grid-column: 1;
      margin-top: 7vw;
    }

    footer {
      bottom: 0;
      right: 0;
      width: 100%;

      p {
        font-size: 3vw;
      }

      div {
        margin-right: 2vw;
        a {
          img {
            width: 3vw;
          }
        }

        a:nth-of-type(1) {
          margin-right: 2vw;
          img {
            width: 3vw;
          }
        }
      }
    }
  }
`
