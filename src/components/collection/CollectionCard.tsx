export default function CollectionCard({ status }: { status: string }) {
  return (
    <article className="card">
      <div className="ph cover">
        <span className="ph-label">Cover Art</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">Ashen Dominion</h3>
        <div className="card-meta-row">
          <span className="tag tag-accent">Action RPG</span>
          <span className="platforms">
            <span className="plat">PS5</span>
          </span>
        </div>
        {status === "playing" && (
          <div className="progress">
            <div className="bar">
              <i style={{ width: "68%" }} />
            </div>
            <div className="lbl">
              <span>68% complete</span>
              <span>54 / 80 hrs</span>
            </div>
          </div>
        )}

        {status === "completed" && (
          <div className="card-foot">
            <span className="status-badge done">Completed · MAR 2026</span>
          </div>
        )}

        {status === "wishlist" && (
          <div className="card-foot card-actions">
            <button className="btn btn-accent btn-sm">Mark Playing</button>
            <button className="btn btn-danger btn-sm">Remove</button>
          </div>
        )}
      </div>
    </article>
  );
}
