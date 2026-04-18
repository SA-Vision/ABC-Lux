import { useState } from "react";
import './App.css'
import SplashScreen from './components/SplashScreen';
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  const [showSplash, setShowSplash] = useState(false);

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      <div style={{ opacity: showSplash ? 0 : 1, transition: 'opacity 0.5s' }}>
        <ABCLights />
      </div>
    </>
  );
}



// ── Styles ──────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');

  :root {
    --gold: #C9A84C;
    --gold-light: #E2C97E;
    --gold-dark: #8A6A1E;
    --bg: #0A0A0A;
    --bg2: #111111;
    --bg3: #181818;
    --text: #F0EAD6;
    --text-muted: #8A8070;
    --white: #FFFFFF;
    --radius: 4px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-weight: 300;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-weight: 500;
  }

  .gold { color: var(--gold); }

  /* ── MARQUEE ── */
  .marquee-wrap {
    overflow: hidden;
    background: var(--gold);
    padding: 12px 0;
    position: relative;
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 20s linear infinite;
  }
  .marquee-item {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0 40px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #0A0A0A;
    white-space: nowrap;
  }
  .marquee-dot { width: 4px; height: 4px; background: #0A0A0A; border-radius: 50%; }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* ── ABOUT ── */
  #about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    min-height: 80vh;
  }
  .about-img {
    position: relative;
    overflow: hidden;
    min-height: 500px;
  }
  .about-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 6s ease;
  }
  .about-img:hover img { transform: scale(1.04); }
  .about-img-overlay {
    position: absolute;
    bottom: 40px; right: -1px;
    background: var(--gold);
    padding: 24px 32px;
    color: #0A0A0A;
    max-width: 200px;
  }
  .about-img-overlay strong {
    font-size: 22px;
    display: block;
    font-weight: 600;
    line-height: 1;
  }
  .about-img-overlay span { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }

  .about-content {
    padding: 80px 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--bg2);
  }
  .about-content h2 {
    font-size: clamp(36px, 3vw, 52px);
    line-height: 1.15;
    margin-bottom: 24px;
  }
  .about-content p {
    font-size: 15px;
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 32px;
  }
  .about-pillars {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
  }
  .pillar {
    border-left: 2px solid var(--gold);
    padding-left: 16px;
  }
  .pillar h4 {
    font-size: 15px;
    color: var(--gold-light);
    margin-bottom: 6px;
    font-weight: 500;
  }
  .pillar p {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 0;
  }
  .about-phone {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    color: var(--gold);
    margin-top: 8px;
  }
  .about-phone::before {
    content: '📞';
    font-size: 14px;
  }

  /* ── STATS ── */
  .stats {
    background: var(--gold);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
  }
  .stat {
    padding: 40px 32px;
    border-right: 1px solid rgba(0,0,0,0.12);
    text-align: center;
    color: #0A0A0A;
  }
  .stat:last-child { border-right: none; }
  .stat-num {
    font-size: 52px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 6px;
  }
  .stat-label {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.7;
  }

  /* ── PRODUCTS / CATEGORIES ── */
  #products {
    padding: 100px 60px;
    background: var(--bg);
  }
  .section-head {
    text-align: center;
    margin-bottom: 60px;
  }
  .section-head h2 {
    font-size: clamp(36px, 3vw, 54px);
    margin-bottom: 16px;
  }
  .section-head p {
    color: var(--text-muted);
    font-size: 15px;
    max-width: 480px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    margin-bottom: 80px;
  }
  .cat-card {
    position: relative;
    overflow: hidden;
    aspect-ratio: 3/4;
    cursor: pointer;
    background: var(--bg3);
  }
  .cat-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease, filter 0.4s;
    filter: brightness(0.5) saturate(0.7);
  }
  .cat-card:hover img {
    transform: scale(1.08);
    filter: brightness(0.6) saturate(1);
  }
  .cat-card-body {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 24px;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
    transition: background 0.4s;
  }
  .cat-card:hover .cat-card-body {
    background: linear-gradient(to top, rgba(10,8,4,0.9) 0%, rgba(201,168,76,0.1) 100%);
  }
  .cat-card h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 6px;
  }
  .cat-card-arrow {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s, transform 0.3s;
  }
  .cat-card:hover .cat-card-arrow {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── COLLECTION ── */
  #collection {
    padding: 100px 60px;
    background: var(--bg2);
  }
  .collection-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .product-card {
    background: var(--bg3);
    border: 1px solid rgba(201,168,76,0.08);
    overflow: hidden;
    transition: border-color 0.3s, transform 0.3s;
    cursor: pointer;
  }
  .product-card:hover {
    border-color: rgba(201,168,76,0.35);
    transform: translateY(-4px);
  }
  .product-img {
    aspect-ratio: 1;
    overflow: hidden;
    background: #0f0f0f;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  .product-card:hover .product-img img { transform: scale(1.06); }
  .product-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    opacity: 0.15;
  }
  .product-info { padding: 20px 24px 24px; }
  .product-info h4 {
    font-size: 18px;
    margin-bottom: 6px;
    font-weight: 500;
  }
  .product-info p {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.5;
    margin-bottom: 16px;
  }
  .product-tag {
    display: inline-block;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid rgba(201,168,76,0.3);
    padding: 3px 10px;
  }

  /* ── STORE ── */
  #store {
    padding: 100px 60px;
    background: var(--bg);
    position: relative;
    overflow: hidden;
  }
  #store::before {
    content: '';
    position: absolute;
    top: -200px; right: -200px;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
  .store-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  .store-content h2 {
    font-size: clamp(36px, 3vw, 52px);
    line-height: 1.15;
    margin-bottom: 20px;
  }
  .store-content p {
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 32px;
    font-size: 15px;
  }
  .store-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 36px;
  }
  .store-detail {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }
  .store-icon {
    width: 40px; height: 40px;
    border: 1px solid rgba(201,168,76,0.3);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
    color: var(--gold);
  }
  .store-detail strong {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: var(--gold-light);
    margin-bottom: 4px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .store-detail span {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.5;
  }
  .store-map {
    background: var(--bg3);
    border: 1px solid rgba(201,168,76,0.12);
    aspect-ratio: 4/3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .store-map-inner {
    text-align: center;
    color: var(--text-muted);
  }
  .store-map-inner .pin { font-size: 40px; display: block; margin-bottom: 12px; }
  .store-map-inner p { font-size: 14px; line-height: 1.6; }
  .store-map-inner strong { color: var(--gold); display: block; margin-bottom: 4px; font-size: 16px; }
  .map-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  /* ── BLOG ── */
  #blog {
    padding: 100px 60px;
    background: var(--bg2);
  }
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .blog-card {
    background: var(--bg3);
    border: 1px solid rgba(201,168,76,0.06);
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.3s;
  }
  .blog-card:hover { border-color: rgba(201,168,76,0.3); }
  .blog-img {
    aspect-ratio: 4/3;
    overflow: hidden;
    background: #0d0d0d;
  }
  .blog-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
    filter: brightness(0.8);
  }
  .blog-card:hover .blog-img img { transform: scale(1.05); }
  .blog-body { padding: 24px; }
  .blog-date {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 12px;
  }
  .blog-body h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 12px;
  }
  .blog-body p {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 20px;
  }
  .blog-link {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: gap 0.2s;
  }
  .blog-link:hover { gap: 14px; }
  .blog-link::after { content: '→'; }

  /* ── FOOTER ── */
  footer {
    background: #050505;
    border-top: 1px solid rgba(201,168,76,0.12);
    padding: 70px 60px 30px;
  }
  .footer-grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 60px;
  }
  .footer-brand .logo { display: block; margin-bottom: 16px; font-size: 26px; }
  .footer-brand p {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 24px;
  }
  .footer-socials { display: flex; gap: 12px; }
  .footer-social {
    width: 36px; height: 36px;
    border: 1px solid rgba(201,168,76,0.25);
    display: flex; align-items: center; justify-content: center;
    font-size: 14px;
    text-decoration: none;
    color: var(--text-muted);
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .footer-social:hover {
    background: var(--gold);
    color: #0A0A0A;
    border-color: var(--gold);
  }
  .footer-col h5 {
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 20px;
    font-weight: 500;
  }
  .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .footer-col ul a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;
  }
  .footer-col ul a:hover { color: var(--gold-light); }
  .footer-col address {
    font-style: normal;
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.7;
  }
  .footer-col address a {
    color: var(--gold-light);
    text-decoration: none;
  }
  .footer-bottom {
    padding-top: 28px;
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--text-muted);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    nav { padding: 18px 32px; }
    .hero { padding: 140px 32px 80px; }
    #about { grid-template-columns: 1fr; }
    .about-img { min-height: 360px; }
    .about-content { padding: 60px 32px; }
    .categories-grid { grid-template-columns: repeat(2, 1fr); }
    .collection-grid { grid-template-columns: repeat(2, 1fr); }
    .stats { grid-template-columns: repeat(2, 1fr); }
    .store-inner { grid-template-columns: 1fr; gap: 40px; }
    .blog-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    #products, #collection, #store, #blog { padding: 80px 32px; }
    footer { padding: 60px 32px 24px; }
  }

  @media (max-width: 640px) {
    nav { padding: 18px 24px; }
    .hero { padding: 120px 24px 60px; }
    .categories-grid { grid-template-columns: 1fr 1fr; gap: 1px; }
    .collection-grid { grid-template-columns: 1fr; }
    .blog-grid { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr; }
    .stats { grid-template-columns: repeat(2, 1fr); }
    .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
    #products, #collection, #store, #blog { padding: 60px 24px; }
    footer { padding: 48px 24px 20px; }
    .about-pillars { grid-template-columns: 1fr; }
  }
`;

// ── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { name: "Ceiling Lights", emoji: "💡", color: "#1a1208" },
  { name: "Designer Chandeliers", emoji: "✨", color: "#12100a" },
  { name: "Outdoor Lights", emoji: "🌟", color: "#0a0f12" },
  { name: "Wall Lights", emoji: "🔆", color: "#0f0a12" },
  { name: "LED Strip Lights", emoji: "〰️", color: "#0a120f" },
  { name: "Pole Lights", emoji: "🏮", color: "#12080a" },
  { name: "Pendant Lights", emoji: "🪔", color: "#0a0a14" },
  { name: "Industrial Lights", emoji: "⚡", color: "#0d0a08" },
];

const PRODUCTS = [
  { name: "Minimalist Pendant", tag: "Pendant", desc: "Sleek geometric pendant for modern interiors." },
  { name: "Neo Classic Chandelier", tag: "Chandelier", desc: "Timeless elegance meets contemporary design." },
  { name: "Magnetic Profile Light", tag: "LED", desc: "Seamless magnetic track for precision lighting." },
  { name: "Outdoor Bollard", tag: "Outdoor", desc: "Weather-resistant architectural bollard." },
  { name: "LED Panel 60×60", tag: "LED Panel", desc: "Uniform diffused light, ideal for offices." },
  { name: "Crystal Floor Lamp", tag: "Floor Lamp", desc: "Statement piece with warm ambient glow." },
];

const BLOGS = [
  {
    date: "July 2025",
    title: "A Complete Guide to LED Lighting: Benefits, Types & Applications",
    excerpt: "Explore the world of LED technology — from energy savings to color temperatures — and learn how to choose the right LED for every space.",
    img: "https://abclights.qa/wp-content/uploads/2025/07/Abc-Lights-Qatar-6-1024x737.webp",
  },
  {
    date: "July 2025",
    title: "Outdoor Lighting Essentials: Types, Features & Installation Tips",
    excerpt: "From bollards to floodlights, discover how to plan outdoor lighting that balances aesthetics, safety, and energy efficiency.",
    img: "https://abclights.qa/wp-content/uploads/2025/07/Outdoor-Lights-in-Qatar-1-1024x737.webp",
  },
  {
    date: "July 2025",
    title: "Lighting for Modern Homes: Trends and Smart Solutions",
    excerpt: "Uncover the latest trends in residential lighting — layered schemes, smart controls, and statement fixtures that define modern living.",
    img: "https://abclights.qa/wp-content/uploads/2025/07/modern-lights-in-qatar-1024x737.webp",
  },
];


function ABCLights() {

  return (
    <>
      <style>{css}</style>

      <Header />

      <Hero />

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) =>
            ["Latest Designs", "Premium Quality", "Free Shipping", "Affordable Prices", "24/7 Support", "Qatar Since 2018"].map((t, j) => (
              <div className="marquee-item" key={`${i}-${j}`}>
                {t}<span className="marquee-dot" />
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="about-img">
          <img
            src="https://abclights.qa/wp-content/uploads/2025/04/4-copy-643x1024.png"
            alt="ABC Lights showroom"
          />
          <div className="about-img-overlay">
            <strong>7+</strong>
            <span>Years of Excellence</span>
          </div>
        </div>
        <div className="about-content">
          <div className="label"><span className="gold-line" />About ABC Lights</div>
          <h2>Lighting Your Way to a <span className="gold">Brighter Tomorrow</span></h2>
          <p>ABC Lights, part of ABC Group Qatar, has been serving customers in Qatar since 2018. We offer high-quality, modern lighting solutions at competitive prices. Our products are innovative, stylish, and designed to meet various needs.</p>
          <p>With a focus on customer satisfaction, we provide full support and assistance, ensuring the best lighting experience for homes and businesses across Qatar.</p>
          <div className="about-pillars">
            <div className="pillar">
              <h4>Our Mission</h4>
              <p>To provide high-quality, innovative, and affordable lighting solutions that enhance homes and businesses while ensuring customer satisfaction.</p>
            </div>
            <div className="pillar">
              <h4>Our Vision</h4>
              <p>To be Qatar's leading lighting provider, known for innovation, reliability, and excellence, offering cutting-edge solutions for every space.</p>
            </div>
          </div>
          <div className="about-phone">+974 5532 7287</div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats">
        {[["7+", "Years Experience"], ["10K+", "Products"], ["5K+", "Projects Done"], ["8K+", "Happy Customers"]].map(([num, label]) => (
          <div className="stat" key={label}>
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      {/* ── PRODUCTS / CATEGORIES ── */}
      <section id="products">
        <div className="section-head">
          <div className="label" style={{ justifyContent: "center" }}><span className="gold-line" />Our Products</div>
          <h2>Light Styles to Match <span className="gold">Every Space</span></h2>
          <p>From elegant chandeliers to modern LED strips — discover our full range of lighting categories designed for every interior and exterior need.</p>
        </div>
        <div className="categories-grid">
          {CATEGORIES.map(cat => (
            <div className="cat-card" key={cat.name} style={{ background: cat.color }}>
              <div className="cat-card-body">
                <div style={{ fontSize: 36, marginBottom: 8 }}>{cat.emoji}</div>
                <h3>{cat.name}</h3>
                <div className="cat-card-arrow">Shop Now →</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLLECTION ── */}
      <section id="collection">
        <div className="section-head">
          <div className="label" style={{ justifyContent: "center" }}><span className="gold-line" />Featured Collection</div>
          <h2>Handpicked <span className="gold">Bestsellers</span></h2>
          <p>A curated selection of our most loved lighting products — upload your product images to bring these cards to life.</p>
        </div>
        <div className="collection-grid">
          {PRODUCTS.map(p => (
            <div className="product-card" key={p.name}>
              <div className="product-img">
                <div className="product-placeholder">💡</div>
              </div>
              <div className="product-info">
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <span className="product-tag">{p.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORE ── */}
      <section id="store">
        <div className="store-inner">
          <div className="store-content">
            <div className="label"><span className="gold-line" />Visit Our Store</div>
            <h2>The Perfect Place For <span className="gold">Trendy, Trusted</span> Lighting</h2>
            <p>Step into our showroom and experience our entire collection in person. Our expert team is on hand to guide you to the perfect lighting solution for your home or business.</p>
            <div className="store-details">
              <div className="store-detail">
                <div className="store-icon">📍</div>
                <div>
                  <strong>Address</strong>
                  <span>Shop No. 5, Zone 43, Street 340, Salwa Road, Doha, Qatar</span>
                </div>
              </div>
              <div className="store-detail">
                <div className="store-icon">📞</div>
                <div>
                  <strong>Phone</strong>
                  <span>(974) 4468 3471 / 5013 7888</span>
                </div>
              </div>
              <div className="store-detail">
                <div className="store-icon">📧</div>
                <div>
                  <strong>Email</strong>
                  <span>info@abclights.qa</span>
                </div>
              </div>
              <div className="store-detail">
                <div className="store-icon">🕐</div>
                <div>
                  <strong>Hours</strong>
                  <span>Sat – Thu: 9:00 AM – 9:00 PM &nbsp;|&nbsp; Fri: 4:00 PM – 9:00 PM</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="http://wa.me/+97450137888" className="btn-primary" target="_blank" rel="noreferrer">WhatsApp Us</a>
              <a href="https://abclights.qa/contact-us/" className="btn-outline" target="_blank" rel="noreferrer">Get Directions</a>
            </div>
          </div>
          <div className="store-map">
            <div className="map-grid" />
            <div className="store-map-inner">
              <span className="pin">📍</span>
              <strong>ABC Lights Qatar</strong>
              <p>Shop No. 5, Zone 43<br />Street 340, Salwa Road<br />Doha, Qatar</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog">
        <div className="section-head">
          <div className="label" style={{ justifyContent: "center" }}><span className="gold-line" />Blog & News</div>
          <h2>Articles About <span className="gold">Lighting & Design</span></h2>
          <p>Stay informed with expert tips, lighting guides, and the latest trends in interior and exterior illumination.</p>
        </div>
        <div className="blog-grid">
          {BLOGS.map(b => (
            <div className="blog-card" key={b.title}>
              <div className="blog-img">
                <img src={b.img} alt={b.title} loading="lazy" />
              </div>
              <div className="blog-body">
                <div className="blog-date">{b.date}</div>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
                <a href="https://abclights.qa" className="blog-link" target="_blank" rel="noreferrer">Read Article</a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="https://abclights.qa" className="btn-outline" target="_blank" rel="noreferrer">View All Articles</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">ABC<span> Lights</span></a>
            <p>We provide energy-efficient LED lighting solutions designed for durability, performance, and sustainability — enhancing spaces while reducing energy costs and environmental impact.</p>
            <div className="footer-socials">
              <a className="footer-social" href="https://www.facebook.com/abclightsqa" target="_blank" rel="noreferrer">f</a>
              <a className="footer-social" href="https://www.instagram.com/abclightsqa/" target="_blank" rel="noreferrer">in</a>
              <a className="footer-social" href="https://www.snapchat.com/add/abclightsqa" target="_blank" rel="noreferrer">👻</a>
              <a className="footer-social" href="https://www.tiktok.com/@abclightsqa" target="_blank" rel="noreferrer">tt</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              {[["home", "Home"], ["about", "About Us"], ["products", "Products"], ["store", "Store"], ["blog", "Blog"]].map(([id, label]) => (
                <li key={id}><a href={`#${id}`} >{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              {["Ceiling Lights", "Chandeliers", "Outdoor Lights", "Wall Lights", "LED Strips", "Pendant Lights", "Table Lamps", "Pole Lights"].map(p => (
                <li key={p}><a href="https://abclights.qa" target="_blank" rel="noreferrer">{p}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <address>
              Shop No. 5, Zone 43<br />
              Street 340, Salwa Road<br />
              Doha, Qatar<br /><br />
              <a href="tel:+97444683471">(974) 4468 3471</a><br />
              <a href="tel:+97450137888">(974) 5013 7888</a><br />
              <a href="mailto:info@abclights.qa">info@abclights.qa</a>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 ABC Lights. All rights reserved.</span>
          <span>Part of ABC Group Qatar</span>
        </div>
      </footer>
    </>
  );
}