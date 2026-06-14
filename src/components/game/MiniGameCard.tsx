export default function MiniGameCard() {
  return (
    <a href="game.html" className="mini-game">
      <div className="ph cover">
        <span className="ph-label" />
      </div>
      <div className="mg-body">
        <div className="mg-title">Hollow Reverie</div>
        <div className="mg-genre">Metroidvania</div>
        <span className="stars">
          <span className="s on">★</span>
          <span className="s on">★</span>
          <span className="s on">★</span>
          <span className="s on">★</span>
          <span className="s on">★</span>
        </span>
      </div>
    </a>
  );
}
