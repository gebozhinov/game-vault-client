import CollectionCard from "./CollectionCard";

export default function CompletedSection() {
  return (
    <section className="collection-section">
      <div className="sec-label">
        <h3>Completed</h3>
        <span className="pill">4 GAMES</span>
      </div>
      <div className="grid-3">
        <CollectionCard status="completed" />
        <CollectionCard status="completed" />
        <CollectionCard status="completed" />
        <CollectionCard status="completed" />
      </div>
    </section>
  );
}
