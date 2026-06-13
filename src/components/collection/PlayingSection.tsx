import CollectionCard from "./CollectionCard";

export default function PlayingSection() {
  return (
    <section className="collection-section">
      <div className="sec-label">
        <h3>Playing</h3>
        <span className="pill">3 GAMES</span>
      </div>
      <div className="grid-3">
        <CollectionCard status="playing" />
        <CollectionCard status="playing" />
        <CollectionCard status="playing" />
      </div>
    </section>
  );
}
