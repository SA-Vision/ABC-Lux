import { useState, useEffect } from "react";
import './styles/Header.css';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMenuOpen(false);
	};

	return (
		<header className={scrolled ? "scrolled" : ""}>
			<nav>
				<div className="title"
					onClick={() => { window.location.href = "/"; }}>
					<span className="l1">ABC</span>
					<span className="l2"> Lights</span>
				</div>
				<div className="hamburger" onClick={() => { 
					setMenuOpen(!menuOpen);
					document.querySelector(".hamburger")?.classList.toggle("open", !menuOpen);
				 }}>
					<span className="hs1" /><span className="hs2" /><span className="hs3" />
				</div>
			</nav>
			{menuOpen && (
				<div style={{ background: "#111", padding: "16px 24px", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
					{[["home", "Home"], ["about", "About Us"], ["products", "Products"], ["store", "Store"], ["blog", "Blog"]].map(([id, label]) => (
						<div key={id} style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
							<a href={`#${id}`} style={{ color: "#F0EAD6", textDecoration: "none", fontSize: 14, letterSpacing: 2, textTransform: "uppercase" }}
								onClick={e => { e.preventDefault(); scrollTo(id); }}>{label}</a>
						</div>
					))}
				</div>
			)}
		</header>
	);
}