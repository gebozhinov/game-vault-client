import { Link } from "react-router";

export default function HeroBanner() {
  return (
    <header className="hero">
      <div className="hero-art" />
      <div className="hero-scrim" />
      <div className="hero-content">
        <div className="hero-eyebrow">Featured This Month</div>
        <h1>Ashen Dominion</h1>
        <div className="hero-tags">
          <span className="tag tag-accent">Action RPG</span>
          <span className="tag">Open World</span>
          <span className="tag">Souls-like</span>
          <span className="tag">Co-op</span>
        </div>
        <div className="hero-meta">
          <span className="stars lg">
            <span className="s on">★</span>
            <span className="s on">★</span>
            <span className="s on">★</span>
            <span className="s on">★</span>
            <span className="s on">★</span>
            <span className="rating-num">4.8 / 5 · 12,480 ratings</span>
          </span>
          <span className="platforms">
            <span className="plat">PC</span>
            <span className="plat">PS5</span>
            <span className="plat">XBX</span>
          </span>
        </div>
        <div className="hero-cta">
          <Link to="/game/1" className="btn btn-accent btn-lg">
            View Game →
          </Link>
          <Link to="/game/1" className="btn btn-outline btn-lg">
            + Add to Collection
          </Link>
        </div>
      </div>
    </header>
  );
}
