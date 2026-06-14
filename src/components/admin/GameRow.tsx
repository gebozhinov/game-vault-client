export default function GameRow() {
  return (
    <tr>
      <td>
        <div className="ph thumb" />
      </td>
      <td>
        <div className="t-title">Ashen Dominion</div>
        <div className="t-sub">Greymoor Interactive</div>
      </td>
      <td>
        <span className="tag tag-accent">Action RPG</span>
      </td>
      <td>
        <span className="platforms">
          <span className="plat">PC</span>
          <span className="plat">PS5</span>
          <span className="plat">XBX</span>
        </span>
      </td>
      <td className="date-cell">2025-11-04</td>
      <td>
        <span className="stars">
          <span className="s on">★</span>
          <span className="rating-num">4.8</span>
        </span>
      </td>
      <td>
        <div className="actions">
          <button className="icon-btn" aria-label="Edit">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
            </svg>
          </button>
          <button className="icon-btn del" aria-label="Delete">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M6 6l1 14h10l1-14" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
