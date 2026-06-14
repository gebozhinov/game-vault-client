export default function DetailInfo() {
  return (
    <div className="detail-info">
      <h1>Ashen Dominion</h1>
      <p className="pub-line">
        Developed by <b>Greymoor Interactive</b> · Published by{" "}
        <b>Aether House</b> · Released <b>2025</b>
      </p>
      <div className="detail-tags">
        <span className="tag tag-accent">Action RPG</span>
        <span className="tag">Open World</span>
        <span className="tag">Souls-like</span>
        <span className="tag">Co-op</span>
        <span className="platforms">
          <span className="plat">PC</span>
          <span className="plat">PS5</span>
          <span className="plat">XBX</span>
        </span>
      </div>
      <div className="detail-rating">
        <span className="big-num">4.8</span>
        <div>
          <span className="stars lg">
            <span className="s on">★</span>
            <span className="s on">★</span>
            <span className="s on">★</span>
            <span className="s on">★</span>
            <span className="s on">★</span>
          </span>
          <div className="rating-num mono">
            Based on 12,480 community ratings
          </div>
        </div>
      </div>
      <div className="detail-cta">
        <button className="btn btn-accent btn-lg">
          + Add to My Collection
        </button>
        <button className="btn btn-outline btn-lg">♡ Add to Wishlist</button>
      </div>
    </div>
  );
}
