import { useEffect, useRef, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onComplete }) {
	const btnRef = useRef(null);
	const rippleRef = useRef(null);
	const flashRef = useRef(null);
	const [typed, setTyped] = useState('');
	const word = 'Lighting Up..';

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			i++;
			setTyped(word.slice(0, i));
			if (i === word.length) clearInterval(interval);
		}, 80);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const btn = btnRef.current;
		const ripple = rippleRef.current;
		const flash = flashRef.current;

		const pressTimer = setTimeout(() => {
			btn.classList.add('pressing');
		}, 800);

		const burstTimer = setTimeout(() => {
			const btnRect = btn.getBoundingClientRect();
			const maxScale = Math.ceil(Math.max(window.innerWidth, window.innerHeight) * 2.5 / 72);

			ripple.style.left = btnRect.left + btnRect.width / 2 - 36 + 'px';
			ripple.style.top = btnRect.top + btnRect.height / 2 - 36 + 'px';

			ripple.animate([
				{ opacity: 0.95, transform: 'scale(1)' },
				{ opacity: 1, transform: `scale(${maxScale})` }
			], { duration: 1500, fill: 'forwards', easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });

			setTimeout(() => {
				flash.animate([
					{ opacity: 1 }, { opacity: 0.6 }, { opacity: 0 }
				], { duration: 600, fill: 'forwards' });

				ripple.animate([
					{ opacity: 1 }, { opacity: 0 }
				], { duration: 400, fill: 'forwards', delay: 100 });

				setTimeout(() => onComplete(), 400);
			}, 900);

		}, 1200);

		return () => {
			clearTimeout(pressTimer);
			clearTimeout(burstTimer);
		};
	}, [onComplete]);

	return (
		<div className="splash">
			<div className="splash-flash" ref={flashRef} />
			<div className="splash-ripple" ref={rippleRef} />
			<div className="splash-center">
				<button className="burst-btn" ref={btnRef}>
					<div className="inner-dot" />
				</button>
				<span className="splash-label">{typed}<span className="cursor">|</span></span>
			</div>
		</div>
	);
}