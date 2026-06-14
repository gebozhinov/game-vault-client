export default function ReviewCard() {
  return (
    <article className="review-card">
      <div className="review-head">
        <div className="avatar">RK</div>
        <div>
          <div className="uname">@RiftKnight</div>
          <div className="rdate">MAY 28, 2026</div>
        </div>
        <span className="stars">
          <span className="s on">★</span>
          <span className="s on">★</span>
          <span className="s on">★</span>
          <span className="s on">★</span>
          <span className="s on">★</span>
        </span>
      </div>
      <p>
        Easily my game of the year. The world design is breathtaking and every
        boss feels like a genuine event. I sank 90 hours in and immediately
        started a second build — that's how good the affinity system is.
      </p>
      <div className="review-foot">
        <button className="helpful">▲ Helpful · 1,204</button>
      </div>
    </article>
  );
}
