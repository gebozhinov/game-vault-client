export default function GameCard() {
  return (
    <article className="card">
      <div className="ph cover">
        <span className="ph-label">Cover Art</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">Neon Drift 2087</h3>
        <p className="card-dev">Velocity Studios</p>
        <div className="card-meta-row">
          <span className="tag tag-accent">Racing</span>
          <span className="platforms">
            <span className="plat">PC</span>
            <span className="plat">PS5</span>
          </span>
        </div>
        <div className="card-foot">
          <span className="stars">
            <span className="s on">★</span>
            <span className="s on">★</span>
            <span className="s on">★</span>
            <span className="s on">★</span>
            <span className="s">★</span>
            <span className="rating-num">4.2</span>
          </span>
        </div>
      </div>
    </article>
  );
}
