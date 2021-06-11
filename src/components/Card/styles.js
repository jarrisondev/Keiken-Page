import styled from 'styled-components'

export const CardStyled = styled.picture`
	max-height: 100vh;
	user-select: none;
	width: 37vw;

	.slider-container {
		height: 100%;
		position: relative;
		overflow: hidden;
		width: 100%;

		span {
			display: flex;
			flex-direction: column;
			height: 100%;
			position: absolute;

			img {
				min-height: 100%;
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
		bottom: 0;
		display: flex;
		left: 50.999vw;
		position: absolute;

		right: 50.999vw;
		user-select: none;
		width: 10vw;
		z-index: 2;

		span {
			background-color: #64c4d650;
			cursor: pointer;
			display: flex;
			height: 4.5vw;

			justify-content: center;
			width: 5vw;

			svg {
				width: 2vw;

				path {
					fill: #f7e9e080;
				}
			}

			&:hover {
				background-color: #64c4d6;

				svg {
					transform: rotateY(0.5turn);

					path {
						fill: #f7e9e0;
					}
				}
			}
		}
	}

	@media (max-width: 950px) {
		width: 42vw;

		div {
			left: 56vw;
			right: 56vw;
		}
	}

	@media (max-width: 750px) {
		width: 47vw;

		div {
			left: 61vw;
			right: 61vw;
		}
	}

	@media (max-width: 650px) {
		width: 100%;
		position: relative;

		div {
			align-items: flex-end;
			bottom: initial;
			display: flex;
			height: 100%;

			justify-content: space-between;
			left: initial;
			right: initial;
			top: 0;

			width: 100%;
			z-index: 0;

			span {
				background-color: #64c4d690;

				height: 100%;
				width: 50%;

				svg {
					width: 10vw;
				}

				&:hover {
					background-color: #64c4d690;
				}
			}
		}
	}

	@media (max-width: 450px) {
		grid-row: 2;
		height: 100%;
		width: 100%;
	}
`
