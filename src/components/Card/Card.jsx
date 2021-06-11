import { CardStyled } from './styles'
import { useEffect, useRef, useState } from 'react'

export const Card = ({ data, slider1, slider2 }) => {
	const [screenHeight, setScreenHeight] = useState('100vh')
	const arrowsRef = useRef(null)
	let backArrowDelay = true

	const back = () => {
		backArrowDelay = false
		const slider = data[0] ? slider1.current : slider2.current
		const index = slider.children.length - 1
		const lastImg = slider.children[index]

		slider.insertBefore(lastImg, slider.children[0])
		slider.style.transition = 'none'
		slider.style.transform = `translateY(-${screenHeight})`

		setTimeout(() => {
			slider.style.transition = '300ms ease-out all'
			slider.style.transform = 'translateY(0)'

			setTimeout(() => {
				backArrowDelay = true
			}, 360)
		}, 15)
	}

	const next = () => {
		const slider = data[0] ? slider1.current : slider2.current
		const firstImg = slider.children[0]

		slider.style.transition = 'all .3s'
		slider.style.transform = `translateY(-${screenHeight})`

		const transition = () => {
			slider.style.transition = 'none'
			slider.style.transform = 'translateY(0)'
			slider.appendChild(firstImg)
			slider.removeEventListener('transitionend', transition)
		}

		slider.addEventListener('transitionend', transition)
	}

	// check width of screen
	useEffect(() => {
		if (window.screen.width <= 650) {
			if (window.screen.width > 450) {
				setScreenHeight('85vh')
			} else {
				setScreenHeight('70vh')
			}

			setTimeout(() => {
				arrowsRef.current.style.opacity = '0'
			}, 6000)
		}
	}, [])

	return (
		<CardStyled className='card-container' sliderActive={data[0]}>
			<div className='slider-container'>
				<span ref={slider1}>
					{data[1].map((e) => {
						return (
							<img key={e.id} src={`/img${e.url}`} alt={`Imagen ${e.id}`} />
						)
					})}
				</span>
				<span ref={slider2}>
					{data[2].map((e) => {
						return (
							<img key={e.id} src={`/img${e.url}`} alt={`Imagen ${e.id}`} />
						)
					})}
				</span>
			</div>
			<div ref={arrowsRef} className='arrows-container'>
				<span
					className='arrow 1'
					onClick={() => {
						backArrowDelay && back()
					}}
				>
					<svg viewBox='0 0 448 512'>
						<path d='M34.9 289.5 l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z' />
					</svg>
				</span>
				<span className='arrow 2' onClick={() => next()}>
					<svg viewBox='0 0 448 512'>
						<path d='M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z' />
					</svg>
				</span>
			</div>
		</CardStyled>
	)
}
