import CollectionCard from "./CollectionCard";

export default function WishlistSection() {
  return (
    <section className="collection-section">
      <div className="sec-label">
        <h3>Wishlist</h3>
        <span className="pill">3 GAMES</span>
      </div>
      <div className="grid-3">
        <CollectionCard status="wishlist"/>
        <CollectionCard status="wishlist"/>
        <CollectionCard status="wishlist"/>
      </div>
    </section>
  );
}
