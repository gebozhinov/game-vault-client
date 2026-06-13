export default function DroppedSection() {
  return (
    <section className="collection-section">
      <div className="sec-label">
        <h3>Dropped</h3>
        <span className="pill">0 GAMES</span>
      </div>
      <div className="empty-state">
        <div className="ico">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <rect x={3} y={8} width={18} height={11} rx={5} />
            <line x1={8} y1={13} x2={12} y2={13} />
            <line x1={10} y1={11} x2={10} y2={15} />
            <circle cx={16} cy={12} r={1} />
            <circle cx={18} cy="14.5" r={1} />
          </svg>
        </div>
        <h3>Nothing dropped yet</h3>
        <p>
          Games you start but decide aren't for you will land here. No shame —
          not every title makes the cut.
        </p>
        <a href="catalog.html" className="btn btn-outline">
          Browse the catalog →
        </a>
      </div>
    </section>
  );
}
