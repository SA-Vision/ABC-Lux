import './styles/Hero.css'
import { useEffect, useRef } from 'react';
import chandelier from '/chandelier.png';
// import light from '/light.png';

export default function Hero() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current!
		const ctx = canvas.getContext('2d')!

		canvas.width = canvas.offsetWidth
		canvas.height = canvas.offsetHeight

		const img = new Image()
		img.src = chandelier

		const offscreen = document.createElement('canvas')
		offscreen.width = canvas.width
		offscreen.height = canvas.height
		const off = offscreen.getContext('2d')!

		let lastScroll = 0
		let ticking = false
		let onScroll: () => void

		function redraw(scrollY: number) {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			off.clearRect(0, 0, canvas.width, canvas.height)

			const textY = 200 - scrollY * 0.3
			const scale = Math.max(0.3, 1 - scrollY * 0.001)
			const imgW = canvas.width * 0.9 * scale
			const imgH = imgW / 15 * 9
			const imgX = (canvas.width - imgW) / 2
			const imgY = canvas.height - imgH - 50

			ctx.fillStyle = '#f4ddbd'
			ctx.font = 'bold 6.5rem Runalto'
			ctx.fillText('Modern &', canvas.width / 4 - 50, textY - 40 / scale)

			ctx.fillText('Elegant', canvas.width / 2 - 40, textY + 65 / scale)

			ctx.fillText('Lighting', canvas.width / 3, textY + 170 / scale)

			off.fillStyle = '#ba1e5f'
			off.font = 'bold 6.5rem Runalto'
			off.fillText('Lighting', canvas.width / 3, textY + 170 / scale)
			off.globalCompositeOperation = 'destination-in'
			off.drawImage(img, imgX, imgY, imgW, imgH)
			off.globalCompositeOperation = 'source-over'

			ctx.globalAlpha = scale
			ctx.drawImage(img, imgX, imgY, imgW, imgH)
			ctx.globalAlpha = 1
			ctx.drawImage(offscreen, 0, 0)
		}

		img.onload = () => {
			redraw(window.scrollY) // initial draw

			onScroll = () => {
				lastScroll = window.scrollY
				if (!ticking) {
					requestAnimationFrame(() => {
						redraw(lastScroll)
						ticking = false
					})
					ticking = true
				}
			}

			window.addEventListener('scroll', onScroll)
		}

		img.onerror = () => {
			console.error('Image failed to load. Check /public/chandelier.png exists.')
		}

		let scale = (0.5 - window.scrollY * 0.001) * 2
		const heroLeft = document.querySelector('.hero-left') as HTMLElement | null
		if (heroLeft) {
			heroLeft.style.setProperty('--angle', `${-15 * scale}deg`)
		}

		return () => {
			if (onScroll) window.removeEventListener('scroll', onScroll)
		}
	}, [])

	document.addEventListener('scroll', () => {
		const heroLeft = document.querySelector('.hero-left') as HTMLElement | null
		if (heroLeft) {
			let scale = (0.5 - window.scrollY * 0.001) * 2
			heroLeft.style.setProperty('--angle', `${-15 * scale}deg`)
		}
	})

	return (
		<section id="home">
			<div className="hero">
				<canvas ref={canvasRef} className='canvas'></canvas>
				<div className="hero-content">
					<div className='hero-left'>
						<div className='highlight-image'>
							{/* <img src={light} alt="Light" /> */}
						</div>
						<div></div>
					</div>
					<div className='hero-right'>
						<div></div><div></div>
					</div>
				</div>
			</div>
		</section>
	);
}