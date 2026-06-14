export default function StatsCard() {
  return (
    <div className="stat-grid">
      <div className="stat-card">
        <div className="st-spark">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x={3} y={4} width={18} height={16} rx={2} />
            <line x1={3} y1={10} x2={21} y2={10} />
          </svg>
        </div>
        <div className="st-label">Total Games</div>
        <div className="st-num">2,418</div>
        <div className="st-trend up">▲ 3.2% this month</div>
      </div>
      <div className="stat-card">
        <div className="st-spark">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx={9} cy={8} r="3.2" />
            <path d="M3 20a6 6 0 0 1 12 0" />
          </svg>
        </div>
        <div className="st-label">Total Users</div>
        <div className="st-num">2.41M</div>
        <div className="st-trend up">▲ 8.7% this month</div>
      </div>
      <div className="stat-card">
        <div className="st-spark">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="st-label">Reviews Today</div>
        <div className="st-num">1,094</div>
        <div className="st-trend up">▲ 12.4% vs yesterday</div>
      </div>
      <div className="stat-card">
        <div className="st-spark">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx={12} cy={8} r="3.4" />
            <path d="M5 20a7 7 0 0 1 14 0" />
          </svg>
        </div>
        <div className="st-label">New Signups</div>
        <div className="st-num">3,820</div>
        <div className="st-trend down">▼ 1.9% this week</div>
      </div>
    </div>
  );
}
